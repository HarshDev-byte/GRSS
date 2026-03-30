# IEEE GRSS SIES GST — Website (Next.js + Tailwind)

This repository contains a production-oriented Next.js + Tailwind starter for the IEEE GRSS SIES GST website.

Quick start

1. Install dependencies

```bash
cd "/Users/harshpravinmhatre/Documents/New project"
npm install
```

2. Run development server

```bash
npm run dev
```

3. Open http://localhost:3000

Notes

- Dark, glassmorphism UI with Tailwind. Replace the placeholder `public/favicon.svg` and `/public/social-preview.svg` with the official assets when available.
- The `components/` folder contains modular UI pieces (Navbar, Hero, DashboardCard, LabsSection, Footer).
- Recommended deploy: Vercel (Next.js static/SSR friendly) or Netlify.

Design & development recommendations

- Replace the placeholder logo with the official SVG for crisp favicons and social previews.
- Integrate a headless CMS (Sanity, Strapi) or Git-based CMS for content editing.
- Use image optimization (Next/Image) and a CDN for production.

MCP telemetry server (Docker)

You can run the MCP telemetry simulator in a container. This is useful for demos or when you don't want to run the local Node process directly.

Build and start the simulator with Docker Compose:

```bash
cd "/Users/harshpravinmhatre/Documents/New project"
docker compose up --build mcp
```

The simulator will expose a WebSocket at `ws://localhost:4000` which the `TelemetryWidget` connects to by default.
