'use client'

/**
 * Hyperspeed Component Example
 * 
 * This is a placeholder example component.
 * To use the actual Hyperspeed effect:
 * 
 * 1. Visit https://reactbits.dev and find the Hyperspeed component
 * 2. Extract the component code
 * 3. Replace the initializeEffect() function below with the actual code
 * 4. Update props/types as needed
 */

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { BloomEffect, EffectComposer, EffectPass, RenderPass, SMAAEffect, SMAAPreset } from 'postprocessing'

export interface HyperspeedProps {
  className?: string
  options?: {
    distortion?: string
    length?: number
    roadWidth?: number
    colors?: {
      roadColor?: number
      islandColor?: number
      background?: number
      [key: string]: any
    }
    [key: string]: any
  }
}

export default function Hyperspeed({ 
  className = '',
  options = {}
}: HyperspeedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const appRef = useRef<any>(null)

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
      // REPLACE THIS SECTION WITH ACTUAL HYPERSPEED CODE
      // Get the code from: https://reactbits.dev
      // ============================================
      
      // Placeholder initialization
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
      className={className}
      style={{ width: '100%', height: '100%' }}
    />
  )
}

