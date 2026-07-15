# Think Audio Visual

Marketing site for Think Audio Visual — stage, sound, lighting and AV production for events across South Africa.

Live: https://thechmanic-sketch.github.io/Thinkaudiovisual-2/

## Stack

- [Next.js](https://nextjs.org) (App Router, static export)
- Tailwind CSS
- shadcn/ui component conventions
- [Motion](https://motion.dev) for scroll animations

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

## Structure

- `src/app/` — pages (App Router)
- `src/components/layout/` — header, footer, WhatsApp float
- `src/components/sections/` — homepage sections (hero, stats, services, etc.)
- `src/components/ui/` — shadcn-style UI primitives
- `src/lib/site-config.ts` — nav links, contact details, WhatsApp helper

## Deployment

Pushes to `main` build a static export (`next build` with `output: "export"`) and publish it to GitHub Pages via `.github/workflows/deploy-pages.yml`.
