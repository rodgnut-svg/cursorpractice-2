# Landing Page Template

A ready-to-use Next.js template with shadcn/ui, Lucide icons, and Framer Motion pre-configured.

## What's Included

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Pre-built, customizable components
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Animation library
- **ReactBits Ready** - Pre-configured for WebGL effects from reactbits.dev
- **Three.js & Postprocessing** - Pre-installed for 3D effects

## Pre-installed Components

- Button
- Card
- Input
- Label
- Dialog
- Dropdown Menu
- Select
- Tabs

## How to Use This Template

### Option 1: Copy the Template Folder

1. Copy the entire `landing-page-template` folder
2. Rename it to your project name
3. Navigate into the folder:
   ```bash
   cd your-project-name
   ```
4. Install dependencies (if needed):
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser

### Option 2: Create a New Project from Template

```bash
# Copy the template
cp -r landing-page-template my-new-landing-page

# Navigate to the new project
cd my-new-landing-page

# Install dependencies (if needed)
npm install

# Start development server
npm run dev
```

## Quick Start Example

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Heart, Star } from "lucide-react"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <Button>
            <Heart className="mr-2 h-4 w-4" />
            Click me
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
```

## Adding More shadcn/ui Components

To add more components from shadcn/ui:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add alert
npx shadcn@latest add badge
```

## ReactBits Components

This template is pre-configured for ReactBits components (WebGL effects from [reactbits.dev](https://reactbits.dev)).

### Quick Integration

To add a ReactBits component, simply:

1. **Get the component code** from reactbits.dev
2. **Copy the template**:
   ```bash
   cp components/reactbits/ReactBitsWrapper.tsx components/reactbits/MyComponent.tsx
   ```
3. **Replace the initialization code** with the ReactBits component code
4. **Use it in your page**:
   ```tsx
   import MyComponent from '@/components/reactbits/MyComponent'
   
   <MyComponent className="absolute inset-0" />
   ```

### Detailed Guide

See `components/reactbits/README.md` for complete integration instructions, examples, and troubleshooting.

### Pre-installed Dependencies

- `three` - Three.js WebGL library
- `postprocessing` - Post-processing effects for Three.js

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
landing-page-template/
├── app/
│   ├── globals.css      # Global styles with shadcn variables
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── ui/              # shadcn/ui components
│   └── reactbits/       # ReactBits WebGL components
│       ├── ReactBitsWrapper.tsx  # Template wrapper
│       └── README.md             # Integration guide
├── lib/
│   ├── utils.ts         # Utility functions (cn helper)
│   └── reactbits.ts     # ReactBits utility functions
└── public/              # Static assets
```

## Customization

### Colors

Edit `app/globals.css` to customize the color scheme. The CSS variables are defined in the `:root` selector.

### Components

All components in `components/ui/` are fully customizable. They use Tailwind CSS classes and can be modified directly.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)
