# Setup Instructions

Follow these steps to get the Pellonium landing page running locally.

## Prerequisites

- Node.js (optional, for npm scripts) OR Python 3 (for direct server)
- A modern web browser

## Setup Steps

### Step 1: Navigate to Project Directory
```bash
cd Newsiteclone
```

### Step 2: Start Development Server

**Using NPM (Recommended):**
```bash
npm run dev
```

**Using Python (if npm not available):**
```bash
python3 -m http.server 8080
```

**Using Node.js http-server:**
```bash
npm run dev:node
```

### Step 3: Open in Browser
Visit: [http://localhost:8080](http://localhost:8080)

## What You Get

✅ React 18 (via CDN)  
✅ Spline 3D animations  
✅ Swiper carousel  
✅ Smooth scroll animations  
✅ Fully responsive design  
✅ SEO optimized  
✅ Accessibility features  

## Troubleshooting

**Port 8080 already in use?**
- Change the port in `package.json` scripts
- Or use: `python3 -m http.server 8081` and visit `http://localhost:8081`

**CDN resources not loading?**
- Check your internet connection
- Ensure you're running via HTTP server (not file://)
- Check browser console for errors

**Spline 3D not loading?**
- This is normal - a gradient fallback will display automatically
- The Spline scene loads from an external URL

## Next Steps

1. Edit `script.js` to customize components
2. Edit `styles.css` to change styling
3. Edit `index.html` to update metadata
4. Add your own assets and content

That's it! You're ready to customize.

