# Ibnu Hamdam - Premium Portfolio

This repository contains the source code for the premium portfolio website of Ibnu Hamdam.

## Architecture

Built with modern production standards suitable for deployment on Vercel:
- **Framework:** Next.js 15 (App Router, Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Variables
- **Components:** Shadcn UI base
- **Animations:** Framer Motion
- **Design Philosophy:** Dark Mode First, minimalist, high contrast, clean typography (Inter + JetBrains Mono)

## File Structure

- `src/app`: Next.js 15 App Router pages and layouts.
- `src/components/animations`: Reusable Framer Motion micro-interactions (FadeIn, SpotlightCard).
- `src/components/shared`: Global layout components (Nav, Footer, CmdK palette).
- `src/components/sections`: Page-wide semantic sections mapped to the UX architecture.
- `src/content`: Local JSON data acting as a headless CMS for projects and timeline.
- `src/config`: SEO and Site-wide configurations.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run mt
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

Deploy effortlessly to Vercel with zero-configuration required. The architecture ensures static optimization where possible and dynamic SEO metadata.
