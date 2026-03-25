# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Vite dev server → http://localhost:5173/personal-sites_V2/
npm run build      # Production build to dist/
npm run preview    # Preview production build locally

docker-compose up  # Local dev via Docker (port 5173, hot reload)
```

Git: every meaningful change gets its own commit. See existing history for message style.

## Architecture

Single-page React app (Vite + HashRouter) deployed to GitHub Pages via `.github/workflows/deploy.yml` (`gh-pages` branch). `vite.config.js` sets `base: '/personal-sites_V2/'`.

### Content layer — `src/data/profile.ts`
**All personal content lives here.** Every string that appears on the site is either in this file or in the i18n locale files. Fields that differ between languages use `{ en: '...', zh: '...' }` objects. Edit this file to update bio, experience, education, certifications, talks, projects, and skills.

### i18n — `src/i18n/`
- `index.ts` — initialises i18next with `i18next-browser-languagedetector`; default language `zh-TW`, persisted to `localStorage`
- `locales/en.json` / `locales/zh.json` — UI chrome strings only (nav labels, section titles, buttons)
- `useTheme.ts` — dark/light theme hook; reads OS preference, persists to `localStorage`, applies via `data-theme` attribute on `<html>`
- Dynamic content (experience bullets, project descriptions, etc.) stays in `profile.ts` as `{ en, zh }` objects

In every page/component, bilingual profile data is resolved with a `useL()` hook:
```ts
function useL() {
  const { i18n } = useTranslation()
  return (obj) => {
    if (!obj || typeof obj === 'string') return obj
    const lang = i18n.language.startsWith('zh') ? 'zh' : 'en'
    return obj[lang] ?? obj.en
  }
}
```

### Pages & routing — `src/pages/`
Five routes via `HashRouter` (avoids GitHub Pages 404s):
- `/` → `Home.tsx` — hero, stats, skill chips, talks preview, achievements
- `/resume` → `Resume.tsx` — timeline experience/education, certs grid, talks, skills matrix; `window.print()` for PDF
- `/projects` → `Projects.tsx` — featured cards + secondary grid from `profile.ts`
- `/contact` → `Contact.tsx`
- `/blog` → `Blog.tsx`

### Hooks — `src/hooks/`
- `useInView.ts` — `IntersectionObserver` hook for scroll-triggered animations; fires once and disconnects

### Styles — `src/styles/`
Plain CSS with custom properties defined in `global.css`. No CSS framework. Each page/component has its own `.css` file imported directly in the JSX.

### Deployment
Push to `main` → GitHub Actions builds → publishes `dist/` to `gh-pages` branch → live at `https://lung-yu.github.io/personal-sites_V2/`.

## Key data shape notes

- `experience[]` entries support an optional `companyNote: { en, zh }` field rendered as italic muted text below the org line in Resume.
- `projects[]` — `highlight: true` entries appear in the "Featured" section; others go in the grid.
- `skills[]` — `items` is `{ en: [...], zh: [...] }` (array per language, not individual bilingual objects).
