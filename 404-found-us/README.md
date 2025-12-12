# 404 Found Us - Landing Page

A modern landing page template built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/page.tsx` - Main landing page component
- `app/layout.tsx` - Root layout with metadata and fonts
- `app/globals.css` - Global styles and CSS variables
- `components/ui/` - UI components (shadcn/ui)
- `lib/utils.ts` - Utility functions

## Build

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# GoHighLevel Webhook Configuration
# The webhook URL for GoHighLevel form submissions
GOHIGHLEVEL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/d31VoHRqFQkp8xwPkN21/webhook-trigger/CEqtpm0LlNYQwGZjowiN

# Optional: API key for GoHighLevel authentication (if required)
# GOHIGHLEVEL_API_KEY=your_api_key_here
```

The webhook URL is set to the default provided, but you can override it with the environment variable if needed.


