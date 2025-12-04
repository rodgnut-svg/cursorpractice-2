# Pellonium Website Clone

A modern, responsive website clone inspired by pellonium.com, built with React and Vite, featuring 3D animations, interactive carousels, and smooth scroll animations.

## Quick Start

### Prerequisites
- Node.js 18+ and npm installed

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start the development server
```bash
npm run dev
```

### Step 3: Open in browser
The development server will automatically open at [http://localhost:8080](http://localhost:8080)

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

## Features

- **React Components** - Built with React 18 using Vite
- **Hyperspeed Background** - Three.js-based hyperspeed effect in hero section
- **Swiper Carousel** - Interactive carousel for Risk Intelligence section
- **Scroll Animations** - Smooth fade-in animations triggered on scroll
- **Text Animations** - Character-by-character animation for hero heading
- **Responsive Design** - Mobile-friendly navigation and layout
- **Modern UI** - Clean, dark theme with glass-morphism effects
- **SEO Optimized** - Complete meta tags, Open Graph, and Twitter Card support
- **Accessibility** - ARIA labels, semantic HTML, skip-to-content link, and keyboard navigation
- **Performance** - Optimized builds with Vite, tree-shaking, and code splitting
- **Well Organized** - Clean code structure with comprehensive comments and documentation
- **Hot Module Replacement** - Instant updates during development

## File Structure

```
Newsiteclone/
├── index.html          # Main HTML file (Vite entry point)
├── main.jsx            # React app entry point
├── script.js           # React components and logic
├── styles.css          # Complete styling system
├── Hyperspeed.css      # Hyperspeed effect styles
├── vite.config.js      # Vite configuration
├── package.json        # NPM dependencies and scripts
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Available Scripts

- `npm run dev` - Start Vite development server (with HMR)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm start` - Alias for `npm run dev`

## Components

- **Navbar** - Fixed navigation with mobile menu
- **Hero** - Hero section with animated heading and Hyperspeed background
- **SecurityOptimization** - Feature cards grid (8 cards)
- **RiskIntelligence** - Swiper carousel with 6 intelligence cards
- **Footer** - Footer with links

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Three.js** - 3D graphics library
- **Postprocessing** - Post-processing effects for Three.js
- **Swiper.js** - Touch slider/carousel
- **Vanilla CSS** - Custom styling

## Code Organization

The project follows best practices from modern landing page templates:

- **HTML**: Complete metadata including Open Graph and Twitter Cards for social sharing
- **JavaScript**: Well-organized components with JSDoc comments and clear section divisions
- **CSS**: Organized with clear sections, utility classes, and accessibility features
- **Accessibility**: ARIA labels, semantic HTML, focus management, and skip-to-content link

## Customization

### Editing Content
- Edit `script.js` to modify React components and functionality
- Edit `styles.css` to customize styling and design tokens
- Edit `index.html` to update metadata, title, and description

### Adding Assets
- Add images, fonts, or other static assets to a `public/` or `assets/` folder
- Update paths in HTML/CSS/JS files accordingly

## Notes

- The Hyperspeed background uses Three.js for WebGL rendering
- All animations are optimized for performance using Intersection Observer API
- The site is fully responsive and works on mobile, tablet, and desktop
- Vite provides fast HMR (Hot Module Replacement) during development
- Production builds are optimized with tree-shaking and code splitting
- All interactive elements include proper ARIA labels for screen readers
- The project uses ES modules and modern JavaScript features

## Browser Support

Modern browsers that support:
- ES6+ JavaScript
- CSS Grid and Flexbox
- Intersection Observer API

Recommended: Chrome, Firefox, Safari, Edge (latest versions)

