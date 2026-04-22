# Copilot Instructions for `portfolio`

## Build, lint, and local run commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```

There is currently **no automated test script** in `package.json`, so there is no full-suite or single-test command to run.

## High-level architecture

- This is a **Next.js 15 App Router** site (React 19). Route entrypoints live under `src/app`:
  - `/` -> `src/app/page.jsx`
  - `/about` -> `src/app/about/page.jsx`
  - `/skills` -> `src/app/skills/page.jsx`
  - `/projects` -> `src/app/projects/page.jsx`
- `src/app/layout.jsx` is the shared shell for every route. It applies:
  - global styles from `src/app/globals.scss`
  - shared navigation from `src/components/Nav`
  - shared footer from `src/components/Footer`
  - Vercel Analytics and Speed Insights
- The home page is assembled from route-local sections in `src/app/Home_components`. These are not global shared components; they are homepage-specific building blocks.
- Project content is centralized in `projects-data.json`. Both the homepage example-projects section and the `/projects` page read from that file, so project copy, links, tech stacks, and image paths should stay in sync there.
- The `/projects` page renders project entries through two presentation components:
  - `src/app/projects/components/projectFromLeft`
  - `src/app/projects/components/projectFromRight`
  These expect the same project object shape from `projects-data.json`.
- Typography is centralized in `src/components/Fonts/Fonts.jsx`, which exports configured `next/font/google` font objects used across routes and shared components.

## Key conventions

- Use the `@/*` import alias from `jsconfig.json` for imports under `src`.
- Keep **route-local UI** near the route under `src/app/...`; keep truly shared UI in `src/components`.
- Styling is done with **SCSS modules** colocated with each component or page (`*.module.scss`), plus `src/app/globals.scss` for app-wide resets/layout.
- Responsive SCSS helpers are usually declared **inside each module file** instead of in a shared stylesheet. Match the existing local mixin-and-breakpoint style when editing styles.
- Many component folders expose an `index.jsx` barrel that re-exports the main component. Preserve that pattern when adding files to existing component folders.
- Prefer `next/image` with assets from `public/` for images and icons; many components import static assets directly from `public/...`.
- The mobile nav behavior is controlled by toggling `aria-expanded` attributes in `src/components/Nav/Nav.jsx`, and the open/closed styling is driven by matching selectors in `Nav.module.scss`. Keep those in sync if you change the nav interaction.
- If you add or edit project cards, update both the data in `projects-data.json` and any consuming UI assumptions about fields like `title`, `shortDescription`, `githubUrl`, `liveUrl`, `image`, and `tech`.
