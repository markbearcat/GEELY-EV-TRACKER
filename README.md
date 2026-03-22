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
