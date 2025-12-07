# Portfolio Image Guide

## How to Add Images to Portfolio Items

### Step 1: Add Your Images

Place your portfolio images in the `public` folder. For example:

```
public/
  portfolio/
    cyber-security-1.jpg
    cyber-security-2.jpg
    loft-golf-1.jpg
    loft-golf-2.jpg
    urban-collective-1.jpg
```

### Step 2: Update the Portfolio Section

Open `components/PortfolioSection.tsx` and add image paths to the `images` array for each project:

```typescript
const projects = [
  {
    title: "Cyber Security",
    category: "Security Solutions",
    description: "...",
    year: "2024",
    images: [
      "/portfolio/cyber-security-1.jpg",
      "/portfolio/cyber-security-2.jpg",
      "/portfolio/cyber-security-3.jpg",
    ],
  },
  // ... other projects
];
```

### Image Recommendations

- **Format**: JPG, PNG, or WebP
- **Size**: Recommended width 1920px (will scale automatically)
- **Aspect Ratio**: 16:9 works best for the modal display
- **File Size**: Optimize images to under 500KB each for fast loading

### How It Works

1. Click any "Preview design" button next to a portfolio item
2. Modal opens showing all images for that project
3. Images stack vertically in the modal for easy scrolling
4. Click the X button or click outside to close

### Example Structure

```
public/
  portfolio/
    cyber-security/
      hero.jpg
      features.jpg
      dashboard.jpg
    loft-golf/
      home.jpg
      booking.jpg
    urban-collective/
      gallery.jpg
      contact.jpg
```

Then reference them:

```typescript
images: [
  "/portfolio/cyber-security/hero.jpg",
  "/portfolio/cyber-security/features.jpg",
  "/portfolio/cyber-security/dashboard.jpg",
]
```

