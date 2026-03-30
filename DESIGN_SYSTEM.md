Design system — IEEE GRSS SIES GST

Color Palette
- Primary deep navy: #030417 (background)
- Accent cyan: #00F0FF
- Accent blue: #0EA5FF
- Support navy: #001022
- Neutral dark: #041025
- Glass border: rgba(255,255,255,0.06)

Typography
- Heading: Inter, 700–900. Suggested sizes: H1 48–64px, H2 28–36px, H3 20–28px.
- Body: Inter, 300–600. Base size 16px, line-height 1.5.

Spacing & Layout
- Use a 4px base scale. Common tokens: 8/16/24/32/48/64.
- Max width containers: 1200–1400px for large screens, 720–960px for content.

Components
- Buttons: Primary gradient from `--accent-cyan` to `--accent-blue`, subtle glow shadow.
- Cards: Glass effect (backdrop blur + semi-transparent background), soft border, hover elevation + glow.
- Navbar: Transparent by default, backdrop-blur + semi-opaque background on scroll.

Imagery
- Use consistent color grade (cool cyan/blue cast), soft vignette and subtle noise.
- Prefer high-res photography (1600–2400px) and serve WebP via `next/image`.

Accessibility
- Minimum contrast for body text: 4.5:1 where possible; headings may use stronger contrast. Provide skip-links and keyboard focus styles.

Files
- `public/logo-full.svg`, `public/logo-inverted.svg`, `public/logo-mono.svg`

Notes
- This design system is intentionally minimal — expand with tokens and CSS variables when moving to production.
