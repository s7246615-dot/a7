# Design Registry & Style Architecture &bull; SportFiberDawn

## 1. Brand Identity & Aesthetic
- **Brand Name:** SportFiberDawn
- **Category / Niche:** Technical Sport Socks &bull; Biomechanical Athletic Hosiery &bull; Socks
- **Design Philosophy:** Dark aerodynamic carbon midnight, vibrant dawn solar orange highlights, kinetic cyan moisture accents, and modern high-density athletic typography.

## 2. Color Palette & Design Tokens
- `--color-bg`: `#0B0F19` (Obsidian Track Midnight)
- `--color-surface`: `#111827` (Charcoal Athletic Chamber)
- `--color-surface-subtle`: `#1F2937` (Dark Carbon Mesh)
- `--color-border`: `#374151` (Technical Steel Seam)
- `--color-text`: `#F3F4F6` (Athletic Titanium White)
- `--color-text-muted`: `#9CA3AF` (Aerodynamic Slate Grey)
- `--color-accent`: `#F97316` (Dawn Solar Orange)
- `--color-cyan`: `#06B6D4` (Kinetic Cyan Moisture Stream)
- `--color-volt`: `#84CC16` (High-Vis Volt Green)

## 3. Typography Hierarchy
- **Primary Display:** `'Plus Jakarta Sans', sans-serif` (Bold 800) &mdash; Aggressive athletic branding, high readability, kinetic energy.
- **Modern Sans:** `'Plus Jakarta Sans', sans-serif` &mdash; Clean, technical narrative prose and physiological specifications.
- **Monospace Telemetry:** `'JetBrains Mono', monospace` &mdash; Needle counts (200N), pressure levels (mmHg), friction coefficients, and gait metrics.

## 4. Navigation & Layout
- Exactly 1 `<header class="site-header">` per page with sticky backdrop-filter blur.
- Exactly 1 `<div class="mobile-drawer" id="mobile-drawer">` per page synchronized in `assets/js/main.js`.
- Fully responsive across desktop, tablet, and mobile breakpoints.
