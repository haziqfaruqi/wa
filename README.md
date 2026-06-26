# WomenAtlas — Law & Leadership Forum 2026 (vanilla)

A **pure HTML / CSS / JS** version of the event landing page — no React, no Babel, no build step, no bundling. Open `index.html` in any browser and it works.

## Files
- `index.html` — all page markup
- `styles.css` — design tokens + every component style (ported from the design system)
- `script.js` — speaker grid, programme carousel, accordions, toast, newsletter form
- `assets/` — images, logo, and the Philosopher / Intrepid fonts (Inter loads from Google Fonts)

## Edit it
- **Copy & sections:** edit `index.html` directly.
- **Colours, type, spacing:** the `:root` tokens at the top of `styles.css`.
- **Programme agenda & speakers:** the `morning` / `afternoon` / `speakerTracks` arrays in `script.js`.

## Notes
- This is a hand-portable static page — drop the whole `event-website-vanilla/` folder on any web host or open the file locally.
- It mirrors the React UI kit (`../ui_kits/event-website/`); that version composes the shared design-system components, this one is self-contained.
- Inter is a substitute body font (see the root `readme.md`); swap the `@import` and `--font-body` if you have the brand's official sans.
