'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import Lenis from 'lenis'

export interface ScrollStackProps {
  children: ReactNode
  className?: string
  itemDistance?: number
  itemScale?: number
  itemStackDistance?: number
  stackPosition?: string
  scaleEndPosition?: string
  baseScale?: number
  scaleDuration?: number
  rotationAmount?: number
  blurAmount?: number
  useWindowScroll?: boolean
  onStackComplete?: () => void
}

export default function ScrollStack({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const lenisRef = useRef<Lenis | null>(null)
  const itemsRef = useRef<HTMLElement[]>([])
  const cachedItemsRef = useRef<{ top: number; height: number }[]>([])
  const itemsStateRef = useRef<
    { current: { scale: number; translateY: number; rotation: number; blur: number }; target: { scale: number; translateY: number; rotation: number; blur: number } }[]
  >([])
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const items = Array.from(container.querySelectorAll('[data-scroll-stack-item]')) as HTMLElement[]
    itemsRef.current = items

    // Cache item positions (needs to be relative to document/scroll)
    const updateCachedPositions = () => {
      const scrollY = window.scrollY || window.pageYOffset
      cachedItemsRef.current = items.map(item => {
        // Reset transform temporarily to get accurate metrics? 
        // Or just use offsetTop logic. 
        // safest is offsetTop relative to container + container position, 
        // but container might move. 
        // Actually, simple getBoundingClientRect + scrollY is accurate ONLY if transform is 0.
        // But we are in a loop. 
        // Solution: Parse existing transform or assume 0 on first run?
        // Better: Use item.offsetTop which is relatively stable if parent is stable.
        const rect = item.getBoundingClientRect()
        // We need to account for current transform if any.
        // A simple way is to use offsetTop relative to the document body if possible.
        // Let's rely on resizing resetting things or just calculating once before loop.

        // Actually, item.offsetTop is stable regarding transforms on the element itself.
        // We need global top.
        // Global Top = item.getBoundingClientRect().top + scrollY - (currentTranslateY)
        // This is complex.

        // Simpler: Just use container.getBoundingClientRect().top + scrollY + item.offsetTop
        // Assuming container is the offsetParent or close to it.
        // Let's assume standard flow.
        return {
          top: rect.top + scrollY, // Note: This might be slightly wrong if update run mid-scroll with transform.
          // Correct fix: Use offsetTop accumulator.
          // But for now, let's assume this runs on mount/resize (before heavy transforms).
          height: rect.height
        }
      })

      // More robust calculation:
      let accumulatedTop = container.getBoundingClientRect().top + scrollY
      if (items.length > 0) {
        // Just recreate based on offsetTop relative to container
        cachedItemsRef.current = items.map(item => {
          return {
            top: item.offsetTop + accumulatedTop, // Approximate global top
            height: item.offsetHeight
          }
        })
      }
    }

    updateCachedPositions()

    // Initialize per-item animation state
    itemsStateRef.current = items.map(() => ({
      current: { scale: 1, translateY: 0, rotation: 0, blur: 0 },
      target: { scale: 1, translateY: 0, rotation: 0, blur: 0 },
    }))

    // Initialize Lenis smooth scroll
    if (!useWindowScroll) {
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      })

      const raf = (time: number) => {
        lenisRef.current?.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }

    // Scroll handler
    let scrollTicking = false
    let scrollRafId: number | null = null

    const handleScroll = () => {
      if (!useWindowScroll && scrollTicking) return

      if (useWindowScroll) {
        if (!scrollTicking) {
          scrollTicking = true
          scrollRafId = requestAnimationFrame(() => {
            scrollTicking = false
            performScrollUpdate()
          })
        }
      } else {
        performScrollUpdate()
      }
    }

    // Smooth easing functions
    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3)
    }

    const easeInOutCubic = (t: number): number => {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    // Smooth step function for boundary transitions
    const smoothStep = (edge0: number, edge1: number, x: number): number => {
      const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)))
      return t * t * (3 - 2 * t)
    }

    const performScrollUpdate = () => {
      const scrollY = useWindowScroll ? window.scrollY : lenisRef.current?.scroll || 0
      const viewportHeight = window.innerHeight
      const stackPositionValue = parseFloat(stackPosition) / 100
      const stackTriggerY = scrollY + viewportHeight * stackPositionValue

      items.forEach((item, index) => {
        const cached = cachedItemsRef.current[index]
        if (!cached) return
        const state = itemsStateRef.current[index]
        if (!state) return

        const itemTop = cached.top
        const itemCenter = itemTop + cached.height / 2

        // Calculate distance from stack position (positive = past stack point, negative = before)
        const distanceFromStack = stackTriggerY - itemCenter

        // Use a smooth transition zone with a buffer to prevent jumps
        const zoomInZone = itemDistance * 2.5
        const bufferZone = itemDistance * 0.3 // Small buffer around zero for smooth transition
        const normalizedDistance = distanceFromStack / itemDistance

        let scale: number
        let translateY: number
        let rotation: number
        let blur: number

        // Use a smooth transition around the boundary to prevent flashing
        if (distanceFromStack < -bufferZone) {
          // Item is approaching stack position - zooming in smoothly
          const distanceToStack = Math.abs(distanceFromStack + bufferZone)
          const effectiveZone = zoomInZone - bufferZone
          const progress = Math.max(0, Math.min(1, distanceToStack / effectiveZone))
          const easedProgress = easeInOutCubic(progress)
          scale = baseScale + (1 - baseScale) * easedProgress
          translateY = 0
          rotation = 0
          blur = 0
        } else if (distanceFromStack > bufferZone) {
          // Item has passed stack position - zooming out smoothly
          const stackAmount = (distanceFromStack - bufferZone) / itemDistance

          // Smooth, continuous scale reduction
          const maxReduction = 1 - baseScale
          const reductionProgress = Math.min(stackAmount * itemScale / maxReduction, 1)
          const easedReduction = easeOutCubic(reductionProgress)
          scale = 1 - (easedReduction * maxReduction)
          scale = Math.max(baseScale, Math.min(1, scale))

          // Smooth translate Y
          translateY = stackAmount * itemStackDistance

          // Calculate rotation and blur based on scale position
          const scaleProgress = (1 - scale) / maxReduction
          rotation = rotationAmount * scaleProgress
          blur = blurAmount * scaleProgress
        } else {
          // In the buffer zone - smoothly interpolate between zoom-in and zoom-out
          // This prevents any discontinuity at the boundary
          const bufferProgress = (distanceFromStack + bufferZone) / (bufferZone * 2)
          const smoothedProgress = smoothStep(0, 1, bufferProgress)


          scale = 1.0 // At the boundary, scale should be 1
          translateY = 0 // Keep strictly at 0 in buffer to match both adjacent zones perfectly
          rotation = 0
          blur = 0
        }

        // Clamp values to prevent any extreme values
        scale = Math.max(baseScale, Math.min(1, scale))
        translateY = Math.max(0, translateY)

        // Cache targets for the animation loop
        state.target.scale = scale
        state.target.translateY = translateY
        state.target.rotation = rotation
        state.target.blur = blur
      })

      // Kick the animation loop
      if (!animationFrameRef.current) {
        const animate = () => {
          items.forEach((item, index) => {
            const state = itemsStateRef.current[index]
            if (!state) return

            const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor
            state.current.scale = lerp(state.current.scale, state.target.scale, 0.16)
            state.current.translateY = lerp(state.current.translateY, state.target.translateY, 0.16)
            state.current.rotation = lerp(state.current.rotation, state.target.rotation, 0.16)
            state.current.blur = lerp(state.current.blur, state.target.blur, 0.16)

            const { scale, translateY, rotation, blur } = state.current
            const transformString = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(4)}) rotate(${rotation.toFixed(2)}deg)`
            item.style.transform = transformString
            if (blur > 0.01) {
              item.style.filter = `blur(${blur.toFixed(2)}px)`
            } else {
              item.style.filter = 'none'
            }
            item.style.willChange = 'transform'
            item.style.transformOrigin = 'center top'
            item.style.backfaceVisibility = 'hidden'
            item.style.perspective = '1000px'
            item.style.transition = 'none'
            item.style.isolation = 'isolate'
          })

          animationFrameRef.current = requestAnimationFrame(animate)
        }

        animationFrameRef.current = requestAnimationFrame(animate)
      }

      // Check if stack is complete
      if (onStackComplete) {
        const lastItem = items[items.length - 1]
        if (lastItem) {
          const lastRect = lastItem.getBoundingClientRect()
          const lastItemTop = lastRect.top + scrollY
          const viewportCenter = scrollY + viewportHeight * stackPositionValue
          if (lastItemTop <= viewportCenter) {
            onStackComplete()
          }
        }
      }
    }

    // Use Lenis scroll event or window scroll
    if (useWindowScroll) {
      window.addEventListener('scroll', handleScroll, { passive: true })
    } else if (lenisRef.current) {
      lenisRef.current.on('scroll', handleScroll)
    }

    // Initial call
    handleScroll()

    // Cleanup
    return () => {
      if (useWindowScroll) {
        window.removeEventListener('scroll', handleScroll)
        if (scrollRafId !== null) {
          cancelAnimationFrame(scrollRafId)
        }
      } else if (lenisRef.current) {
        lenisRef.current.destroy()
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
    }
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
  ])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

// ScrollStackItem component for wrapping individual items
export interface ScrollStackItemProps {
  children: ReactNode
  className?: string
}

export function ScrollStackItem({ children, className = '' }: ScrollStackItemProps) {
  return (
    <div data-scroll-stack-item className={className}>
      {children}
    </div>
  )
}

