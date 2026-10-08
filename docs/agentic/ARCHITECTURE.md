# Current Architecture

## Snapshot

This is a static, single-page marketing site built with Next.js App Router, React, TypeScript, Tailwind CSS, and shadcn-style UI components. The architecture was first inspected at commit `1a7dd67` (`Added Youtube ID`); dependency details below were rechecked during the 2026-10-07 security update.

## Active route and component map

`app/layout.tsx` supplies site metadata, fonts, global styles, and the theme provider. The active root route is `app/page.tsx`:

```text
Header
HeroModern
About
Services
Gallery
Contact
Footer
```

`app/page-original.tsx` and `app/page-modern.tsx` are alternate component compositions, not routes based on their filenames alone. `HeroModern` is the active hero; `Services` is active, while `ServicesPreview` is not imported by the active root page.

## Source ownership

| Area | Primary source |
| --- | --- |
| Root route composition | `app/page.tsx` |
| Metadata, fonts, theme setup | `app/layout.tsx`, `components/theme-provider.tsx` |
| Navigation and mobile menu | `components/header.tsx` |
| Hero sections | `components/hero-modern.tsx` (active), `components/hero.tsx` (alternate) |
| About copy and credentials | `components/about.tsx` |
| Services copy | `components/services.tsx` (active), `components/services-preview.tsx` (alternate) |
| Gallery data, filtering, lightbox, YouTube embed | `components/gallery.tsx` |
| Contact details and map | `components/contact.tsx` |
| Footer links and contact text | `components/footer.tsx` |
| Active design tokens and base styles | `app/globals.css`, `tailwind.config.ts` |
| Local images and logos | `public/` |

## Rendering and interactions

- The root page is a server component that composes individual components; the header, active hero, gallery, and alternate services preview use client-side React behavior.
- There is no server-side contact form or API route in the inspected repository. Calls and email use `tel:` and `mailto:` links; the contact section embeds Google Maps.
- The gallery filters static image/video metadata, opens a dialog, and embeds the configured YouTube video when selected.
- The project includes many UI primitives under `components/ui/`; prefer existing primitives and local Tailwind tokens when implementing an approved UI change.

## Build and repository observations

- `package.json` declares Next.js `15.5.27`, React `19`, TypeScript, Tailwind, and scripts for `dev`, `build`, `start`, and `lint`. It has no test script. Next.js was upgraded from vulnerable `15.2.4` after Vercel blocked the deployment; both lockfiles were synchronized.
- Both `package-lock.json` and `pnpm-lock.yaml` exist. The supported package manager has not been formally selected. Vercel detected `pnpm-lock.yaml` and used pnpm `10.28.0` for the 2026-10-07 deployment.
- `next.config.mjs` sets `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors` to `true`. A successful Next build therefore does not establish that those checks passed.
- No test files or GitHub workflow files were found in the inspected repository listing. No automated CI behavior should be assumed from the repository alone.
- The root layout imports `app/globals.css`. `styles/globals.css` is a second, currently unreferenced global stylesheet with overlapping base styles.
- The footer has placeholder `#` policy links; social links are placeholders and commented out.
- Do not confuse current implementation observations with an approved product direction or proof that the public content is accurate.
