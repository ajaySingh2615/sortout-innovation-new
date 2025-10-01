## Sortout Innovation - Vite + React + Tailwind Starter

### Scripts

- `npm run dev`: start the dev server
- `npm run build`: type-check and build for production
- `npm run preview`: preview the production build

### Structure

- `src/main.tsx`: React entry with Router
- `src/App.tsx`: Routes and shared layout
- `src/components/*`: `Navbar`, `Footer`
- `src/pages/*`: `Home`, `Contact`
- `src/style.css`: Tailwind v4 import and base styles

### Tailwind v4

Tailwind is configured via `@import "tailwindcss";` in `src/style.css`. No config file is required by default.

### Run locally

```bash
npm install
npm run dev
```
