# Pellonium Website Clone

A modern, responsive website clone inspired by pellonium.com, built with React (via CDN), featuring 3D animations, interactive carousels, and smooth scroll animations.

## Features

- **React Components** - Built with React 18 loaded via CDN
- **Spline 3D Integration** - 3D hero section animation (with gradient fallback)
- **Swiper Carousel** - Interactive carousel for Risk Intelligence section
- **Scroll Animations** - Smooth fade-in animations triggered on scroll
- **Text Animations** - Character-by-character animation for hero heading
- **Responsive Design** - Mobile-friendly navigation and layout
- **Modern UI** - Clean, dark theme with glass-morphism effects

## File Structure

```
Newsiteclone/
├── index.html      # Main HTML file with CDN links
├── styles.css      # Complete styling system
├── script.js       # React components and logic
└── README.md       # This file
```

## How to Run

Since this uses ES modules and CDN resources, you need to run it via a local HTTP server (not file:// protocol).

### Option 1: Python HTTP Server
```bash
cd "Newsiteclone"
python3 -m http.server 8080
```
Then open: `http://localhost:8080`

### Option 2: Node.js HTTP Server
```bash
cd "Newsiteclone"
npx http-server -p 8080
```
Then open: `http://localhost:8080`

### Option 3: VS Code Live Server
If you have the Live Server extension in VS Code, right-click on `index.html` and select "Open with Live Server"

## Components

- **Navbar** - Fixed navigation with mobile menu
- **Hero** - Hero section with animated heading and Spline 3D background
- **StateOfSecurity** - Floating card section
- **SecurityOptimization** - Feature cards grid (8 cards)
- **RiskIntelligence** - Swiper carousel with 6 intelligence cards
- **Footer** - Footer with links

## Technologies Used

- React 18 (via CDN)
- Babel Standalone (for JSX transformation)
- Spline Runtime (for 3D animations)
- Swiper.js (for carousel)
- Vanilla CSS (custom styling)

## Notes

- The Spline 3D scene will attempt to load from the original URL. If it fails, a gradient fallback is shown.
- All animations are optimized for performance using Intersection Observer API.
- The site is fully responsive and works on mobile, tablet, and desktop.

## Browser Support

Modern browsers that support:
- ES6+ JavaScript
- CSS Grid and Flexbox
- Intersection Observer API

Recommended: Chrome, Firefox, Safari, Edge (latest versions)

