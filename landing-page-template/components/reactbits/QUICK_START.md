# ReactBits Quick Start Guide

## Adding a ReactBits Component in 3 Steps

### Step 1: Get the Component Code

1. Visit [reactbits.dev](https://reactbits.dev)
2. Find the component you want
3. Open DevTools (F12) → Sources tab
4. Find the component source code and copy it

### Step 2: Create Component File

```bash
cp components/reactbits/ReactBitsWrapper.tsx components/reactbits/MyComponent.tsx
```

### Step 3: Replace Code & Use

1. Open `components/reactbits/MyComponent.tsx`
2. Replace the `initializeEffect()` function with the ReactBits code
3. Update component name and props
4. Import and use:

```tsx
import MyComponent from '@/components/reactbits/MyComponent'

export default function Home() {
  return (
    <section className="relative h-screen">
      <MyComponent className="absolute inset-0" />
    </section>
  )
}
```

## That's It! 🎉

Your ReactBits component is now ready to use.

For detailed instructions, see [README.md](./README.md)

