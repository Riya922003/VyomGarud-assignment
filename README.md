
## Getting Started

# VyomGarud — Landing Page

This repository contains the landing page for VyomGarud — a mission-critical UAV systems showcase built with Next.js (App Router), TypeScript, Tailwind CSS and several custom UI components and canvas/three.js visuals.

The project is configured as a modern, progressive landing site with interactive hero visuals, a bento-style Highlights grid, product cards, and a contact section with an animated Hyperspeed background.

## Key Features

- Hero with animated text and a constrained spotlight visual.
- Product/Features cards with image media and specs.
- Highlights bento grid with an interactive Background Ripple effect.
- Contact section that includes a Hyperspeed three.js visual behind a dark-themed form card.
- Responsive Floating Dock for quick navigation/actions.

## Tech Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- three.js + postprocessing (for Hyperspeed visual)
- Framer Motion / motion (for UI micro-animations)

## Quick Start

Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd vyomgarud-landing
npm install
```

Run the dev server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Available Scripts

- `npm run dev` — Start local development server
- `npm run build` — Build for production
- `npm run start` — Start the production server (after build)
- `npx tsc --noEmit` — Run TypeScript checks

## Project Structure (high level)

- `src/app/` — Next.js app routes and page-level layout (`app/page.tsx`, `globals.css`)
- `src/components/` — Reusable UI components and visual pieces
	- `src/components/ui/HighlightsSection.tsx` — Bento grid for core capabilities
	- `src/components/Hyperspeed.jsx` — three.js animation used by ContactSection
	- `src/components/ui/background-ripple-effect.tsx` — interactive background grid used on some cards
	- `src/components/ui/floating-dock.tsx` — interactive dock used in footer
- `public/` — static assets (images, video). Example: `public/Images/drone.jpg`
- `tailwind.config.*`, `next.config.*`, `tsconfig.json` — project configuration

## Styling & Tokens

This project uses Tailwind with custom tokens (e.g. `bg-linear-to-t`, `z-60`) — keep to the project's token names for consistent styles.

## Notes & Development Tips

- Many interactive visuals are client-only. If you add components that use `window`, `document`, or three.js, ensure they run on the client (add `"use client"` at the top of the file or dynamically import them).
- Use `next/image` for public images to get automatic optimization (several components already use it).
- To tweak the Hyperspeed visual, edit `src/components/Hyperspeed.jsx` — it mounts into an element with id `lights`.

## Contributing

- Fork the repo, make branches per feature, and open pull requests against `main`.
- Keep changes focused and run `npx tsc --noEmit` before opening PRs.

## License

This repository does not include a license file. Add one if you intend to make it public.

## Contact

If you need to reach the author or project owner, email: beesoul98012@gmail.com

---

If you want me to expand any section (detailed setup, deployment steps, environment variables, or contributor guide), tell me which part and I'll add it.

This repository contains the landing page for VyomGarud — a mission-critical UAV systems showcase built with Next.js (App Router), TypeScript, Tailwind CSS and several custom UI components and canvas/three.js visuals.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact
- Email - beesoul98012@gmail.com