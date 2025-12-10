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

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const items = Array.from(container.querySelectorAll('[data-scroll-stack-item]')) as HTMLElement[]
    itemsRef.current = items

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
        const rect = item.getBoundingClientRect()
        const itemTop = rect.top + scrollY
        const itemCenter = itemTop + rect.height / 2

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
          translateY = smoothedProgress * bufferZone * (itemStackDistance / itemDistance)
          rotation = 0
          blur = 0
        }

        // Clamp values to prevent any extreme values
        scale = Math.max(baseScale, Math.min(1, scale))
        translateY = Math.max(0, translateY)

        // Apply transforms - use translate3d for GPU acceleration
        const transformString = `translate3d(0, ${translateY.toFixed(2)}px, 0) scale(${scale.toFixed(4)}) rotate(${rotation.toFixed(2)}deg)`
        item.style.transform = transformString
        item.style.filter = `blur(${blur.toFixed(2)}px)`
        item.style.willChange = 'transform, filter'
        item.style.transformOrigin = 'center top'
        item.style.backfaceVisibility = 'hidden'
        item.style.perspective = '1000px'
        item.style.transition = 'none'
        item.style.isolation = 'isolate'
      })

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

