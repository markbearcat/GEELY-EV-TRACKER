# Geely EX5 EV Tracker — PWA

Track mileage, charging sessions and energy costs for your **Geely EX5 Inspire**.

## Files in this package

| File | Purpose |
|---|---|
| `index.html` | The complete single-page app |
| `manifest.json` | PWA manifest (install to home screen) |
| `sw.js` | Service worker (offline support) |
| `icon.svg` | App icon (SVG — scales to any size) |
| `_redirects` | Netlify SPA redirect rule |

---

## Deploy to Netlify

### Option A — Drag & Drop (easiest)

1. Go to [app.netlify.com](https://app.netlify.com) and log in
2. Click **"Add new site → Deploy manually"**
3. Drag the entire folder contents (all 5 files) into the deploy box
4. Done! Netlify gives you a live URL instantly

### Option B — Netlify CLI

```bash
# Install CLI (once)
npm install -g netlify-cli

# From this folder:
netlify deploy --prod --dir .
```

### Option C — GitHub + Netlify CI

1. Push this folder to a GitHub repo
2. In Netlify: **"Add new site → Import from Git"**
3. Select your repo, set **Publish directory** to `.` (root)
4. Deploy

---

## Adding PNG icons (recommended for iOS)

For best iOS home-screen support, generate PNG icons from `icon.svg`:

```bash
# With ImageMagick:
convert -size 192x192 icon.svg icon-192.png
convert -size 512x512 icon.svg icon-512.png
```

Or use an online tool like [svgtopng.com](https://svgtopng.com), then upload the PNGs alongside the other files.

---

## Features

- **Mileage tracking** vs 15,000 km/year target
- Year-by-year progress with anniversary dates
- Charging session logging (kWh, cost, duration, %)
- Efficiency metrics ($/kWh, $/100km, total spend)
- Editable history with backdating support
- Wednesday night logging reminder
- Export full history to CSV
- Dark / Light mode
- Fully offline-capable PWA (installable)

---

## Usage

1. On first launch, enter your **vehicle commencement date** and **baseline odometer**
2. Log mileage every Wednesday night (or any time — backdating is supported)
3. Check the **Dashboard** to see your progress vs the target trend line
4. The **Settings** tab lets you update dates and reset data

---

## Data Storage

All data is stored in your browser's **localStorage** — nothing leaves your device. Use **Export CSV** regularly to back up your data.
