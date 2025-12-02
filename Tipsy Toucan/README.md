# Tipsy Toucan Website

Static website for The Tipsy Toucan mobile bar.

## Deployment

This site is configured to deploy to Vercel at `zimsaas.io/tipsy-toucan-example`.

### Quick Deploy Steps:

1. **Via Vercel Web Dashboard:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import this project (if in Git) or drag & drop the folder
   - Framework: **Other**
   - Root Directory: `.` (current directory)
   - Build Command: (leave empty)
   - Output Directory: `.`
   - Click **Deploy**

2. **Via Vercel CLI:**
   ```bash
   npx vercel
   ```

3. **Configure Domain:**
   - After deployment, go to Project Settings → Domains
   - Add `zimsaas.io` 
   - Configure path routing in your main `zimsaas.io` project to proxy to this deployment

## Project Structure

- `index.html` - Main HTML file
- `styles.css` - Stylesheet
- `Assets/` - Image assets
- `vercel.json` - Vercel configuration

All files are ready for deployment!
