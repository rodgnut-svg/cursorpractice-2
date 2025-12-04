/**
 * ReactBits Utility Functions
 * Helper functions for integrating ReactBits components
 */

/**
 * Generate a unique container ID for ReactBits components
 */
export function generateReactBitsId(prefix: string = 'reactbits'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Check if WebGL is supported
 */
export function isWebGLSupported(): boolean {
  if (typeof window === 'undefined') return false
  
  try {
    const canvas = document.createElement('canvas')
    return !!(
      canvas.getContext('webgl') || 
      canvas.getContext('experimental-webgl')
    )
  } catch {
    return false
  }
}

/**
 * Cleanup Three.js resources
 */
export function disposeThreeResources(resources: {
  renderer?: any
  scene?: any
  composer?: any
  [key: string]: any
}) {
  if (resources.renderer) {
    resources.renderer.dispose()
    const canvas = resources.renderer.domElement
    if (canvas && canvas.parentNode) {
      canvas.parentNode.removeChild(canvas)
    }
  }
  
  if (resources.scene) {
    while (resources.scene.children.length > 0) {
      resources.scene.remove(resources.scene.children[0])
    }
  }
  
  if (resources.composer) {
    resources.composer.dispose()
  }
}

