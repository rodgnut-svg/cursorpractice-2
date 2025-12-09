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
    const handleScroll = () => {
      const scrollY = useWindowScroll ? window.scrollY : lenisRef.current?.scroll || 0
      const viewportHeight = window.innerHeight
      const stackPositionValue = parseFloat(stackPosition) / 100
      const scaleEndPositionValue = parseFloat(scaleEndPosition) / 100
      const stackTriggerY = scrollY + viewportHeight * stackPositionValue

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect()
        const itemTop = rect.top + scrollY
        const itemBottom = itemTop + rect.height
        const itemCenter = itemTop + rect.height / 2

        // Calculate if item has passed the stack position
        const hasPassedStack = itemCenter < stackTriggerY
        const distanceFromStack = stackTriggerY - itemCenter

        if (hasPassedStack && distanceFromStack > 0) {
          // Item is stacking - calculate stack position
          const stackIndex = Math.floor(distanceFromStack / itemDistance)
          const stackProgress = (distanceFromStack % itemDistance) / itemDistance
          
          // Calculate scale based on stack position
          const scale = baseScale + itemScale * stackIndex + (itemScale * stackProgress)
          const clampedScale = Math.max(baseScale, Math.min(1, scale))

          // Calculate translate Y for stacking effect
          const translateY = stackIndex * itemStackDistance + (stackProgress * itemStackDistance)

          // Calculate rotation
          const rotation = rotationAmount * (1 - clampedScale) / (1 - baseScale)

          // Calculate blur
          const blur = blurAmount * (1 - clampedScale) / (1 - baseScale)

          // Apply transforms
          item.style.transform = `translate3d(0, ${translateY}px, 0) scale(${clampedScale}) rotate(${rotation}deg)`
          item.style.filter = `blur(${blur}px)`
        } else {
          // Item is not yet stacking - normal position
          const distanceToStack = itemCenter - stackTriggerY
          const scaleProgress = Math.max(0, Math.min(1, 1 - (distanceToStack / (itemDistance * 2))))
          const scale = baseScale + (1 - baseScale) * scaleProgress

          item.style.transform = `translate3d(0, 0, 0) scale(${scale}) rotate(0deg)`
          item.style.filter = `blur(0px)`
        }

        item.style.willChange = 'transform, filter'
        item.style.transformOrigin = 'center top'
        item.style.backfaceVisibility = 'hidden'
        item.style.perspective = '1000px'
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

