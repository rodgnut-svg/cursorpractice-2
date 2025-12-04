'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import * as THREE from 'three'
import { BloomEffect, EffectComposer, EffectPass, RenderPass, SMAAEffect, SMAAPreset } from 'postprocessing'

/**
 * ReactBits Component Wrapper
 * 
 * This is a template wrapper for ReactBits components.
 * Copy this file and modify it for each ReactBits component you add.
 * 
 * Usage:
 * 1. Copy this file: cp components/reactbits/ReactBitsWrapper.tsx components/reactbits/MyComponent.tsx
 * 2. Extract the component code from reactbits.dev
 * 3. Replace the initialization logic in initializeEffect()
 * 4. Update the component props/types as needed
 */

export interface ReactBitsWrapperProps {
  className?: string
  containerId?: string
  options?: Record<string, any>
  children?: ReactNode
}

export default function ReactBitsWrapper({
  className = '',
  containerId,
  options = {},
}: ReactBitsWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const appRef = useRef<any>(null)
  const uniqueId = useRef(`reactbits-${Math.random().toString(36).substr(2, 9)}`)

  useEffect(() => {
    if (!containerRef.current) return

    initializeEffect()

    function initializeEffect() {
      // Cleanup previous instance
      if (appRef.current?.dispose) {
        appRef.current.dispose()
      }

      const container = containerRef.current
      if (!container) return

      // Clear container
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }

      // ============================================
      // THREE.JS INITIALIZATION
      // Replace this section with your ReactBits component code
      // ============================================
      
      // Example initialization (replace with actual ReactBits code)
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        75,
        container.offsetWidth / container.offsetHeight,
        0.1,
        1000
      )
      const renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true
      })
      
      renderer.setSize(container.offsetWidth, container.offsetHeight)
      renderer.setPixelRatio(window.devicePixelRatio)
      container.appendChild(renderer.domElement)

      // Store reference for cleanup
      appRef.current = {
        renderer,
        scene,
        camera,
        dispose: () => {
          if (renderer) {
            renderer.dispose()
            const canvas = renderer.domElement
            if (canvas && canvas.parentNode) {
              canvas.parentNode.removeChild(canvas)
            }
          }
        }
      }
    }

    // Handle window resize
    const handleResize = () => {
      if (appRef.current?.renderer && containerRef.current) {
        const width = containerRef.current.offsetWidth
        const height = containerRef.current.offsetHeight
        appRef.current.renderer.setSize(width, height)
        if (appRef.current.camera) {
          appRef.current.camera.aspect = width / height
          appRef.current.camera.updateProjectionMatrix()
        }
      }
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (appRef.current?.dispose) {
        appRef.current.dispose()
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      id={containerId || uniqueId.current}
      className={className}
      style={{ width: '100%', height: '100%' }}
    />
  )
}

