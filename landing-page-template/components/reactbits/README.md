# ReactBits Component Integration Guide

This folder contains ReactBits components ready to use in your landing pages.

## Quick Start

### Step 1: Get Component Code from ReactBits.dev

1. Visit [reactbits.dev](https://reactbits.dev)
2. Find the component you want
3. Open browser DevTools → Sources tab
4. Find and copy the component source code

### Step 2: Create New Component File

```bash
# Copy the template
cp components/reactbits/ReactBitsWrapper.tsx components/reactbits/MyComponent.tsx
```

### Step 3: Replace Template Code

1. Open your new component file
2. Replace the `initializeEffect()` function with the ReactBits component code
3. Update props/types as needed
4. Update component name

### Step 4: Use in Your Page

```tsx
import MyComponent from '@/components/reactbits/MyComponent'

export default function Home() {
  return (
    <section className="relative h-screen">
      <MyComponent 
        className="absolute inset-0"
        options={{
          // Component-specific options
        }}
      />
    </section>
  )
}
```

## Component Structure

All ReactBits components follow this pattern:

```tsx
'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
// Other imports as needed

export default function MyComponent({ options = {} }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const appRef = useRef<any>(null)

  useEffect(() => {
    initializeEffect()
    
    function initializeEffect() {
      // ReactBits initialization code here
    }
    
    return () => {
      // Cleanup
    }
  }, [])

  return <div ref={containerRef} />
}
```

## Common Patterns

### Responsive Handling
Components automatically handle resize. Make sure your container has explicit dimensions.

### Cleanup
Always dispose Three.js resources in the cleanup function to prevent memory leaks.

### Unique IDs
Use `generateReactBitsId()` from `@/lib/reactbits` for unique container IDs if needed.

## Troubleshooting

- **Component not rendering**: Check container has width/height
- **WebGL errors**: Verify browser supports WebGL
- **Memory leaks**: Ensure proper cleanup in useEffect return
- **Type errors**: Update TypeScript types for component props

## Example: Adding Hyperspeed Component

1. Copy the wrapper:
   ```bash
   cp components/reactbits/ReactBitsWrapper.tsx components/reactbits/Hyperspeed.tsx
   ```

2. Get the code from reactbits.dev and replace the `initializeEffect()` function

3. Use it:
   ```tsx
   import Hyperspeed from '@/components/reactbits/Hyperspeed'
   
   <Hyperspeed className="absolute inset-0" />
   ```

