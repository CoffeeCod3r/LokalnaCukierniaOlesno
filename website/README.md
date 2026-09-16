# Cukiernia Wrocławska — demo

React + TypeScript + Tailwind CSS (Next-compatible Vinext).

## Development
npm install
npm run dev

## Build and deployment
npm run build
Static export: `dist/client/`. On Netlify set base directory `website`, build command `npm run build`, publish directory `dist/client`. On Vercel choose Other, base directory `website`, build command `npm run build`, output `dist/client`.

## Content and photos
Main sections: `app/sections.tsx`; header/hero: `app/page.tsx`; styles: `app/globals.css`.
Replace files in `public/images/` to use the bakery's own photos. All current photos are demonstration images from Unsplash, not bakery work.

Photo source pages:
- https://unsplash.com/photos/_B7shfNUXEA
- https://unsplash.com/photos/tOYiQxF9-Ys
- https://unsplash.com/photos/WXpzzYM6k2M
- https://unsplash.com/photos/cSzyY2UaFSI
- https://unsplash.com/photos/cPWWnbI_nV8
- https://unsplash.com/photos/d8s13D29QiE

## Form
Default demo mode validates input but does not send or store personal data. Set NEXT_PUBLIC_ORDER_ENDPOINT at build time to an HTTPS endpoint accepting JSON POST (for example Formspree). The submit handler in app/sections.tsx is the integration boundary for a custom API or other provider. Before enabling real sending, replace the demo note, configure server-side validation, spam protection, and appropriate information about handling personal data. Do not place private API keys in NEXT_PUBLIC variables.


## GitHub Pages
The `.github/workflows/pages.yml` workflow builds and publishes the site on a push to the default branch. In repository Settings → Pages, choose GitHub Actions. The source is in website/; the workflow is in the repository root at .github/workflows/pages.yml. The workflow automatically uses the Pages base path, including project URLs like `username.github.io/repository/`; images and scripts work under that path. The form stays in demo mode.

GitHub Pages uses a separate lightweight Vite build (`npm run build:pages`), sharing the exact same React components and styles. Output: `dist/github-pages`. The regular `npm run build` remains available for the original hosting setup.

