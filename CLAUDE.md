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

Single-page React app (Vite + BrowserRouter with `basename`) deployed to GitHub Pages via `.github/workflows/deploy.yml` (`gh-pages` branch). `vite.config.js` sets `base: '/personal-sites_V2/'`.

### Content layer — `src/data/`
Personal content is split across domain files that are all re-exported from `profile.ts`:
- `experience.data.ts` — work history entries
- `projects.data.ts` — portfolio projects
- `skills.data.ts` — skill groups and homepage chips
- `talks.data.ts` — conference/talk entries
- `writings.data.ts` — articles, threads, courses

All shared TypeScript interfaces (`BL`, `BLArr`, `ExperienceEntry`, `Project`, `Talk`, etc.) live in `src/data/types.ts`. Fields that differ between languages use `{ en: '...', zh: '...' }` (`BL`) objects; string arrays use `{ en: [...], zh: [...] }` (`BLArr`).

### i18n — `src/i18n/`
- `index.ts` — initialises i18next with `i18next-browser-languagedetector`; default language `zh-TW`, persisted to `localStorage`
- `locales/en.json` / `locales/zh.json` — UI chrome strings only (nav labels, section titles, buttons)
- `useTheme.ts` — dark/light theme hook; reads OS preference, persists to `localStorage`, applies via `data-theme` attribute on `<html>`

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
Six routes via `BrowserRouter` with `basename="/personal-sites_V2"`:
- `/` → `Home.tsx` — hero, stats, skill chips, talks preview, achievements
- `/resume` → `Resume.tsx` — timeline experience/education, certs grid, talks, skills matrix; `window.print()` for PDF
- `/projects` → `Projects.tsx` — featured cards + secondary grid
- `/contact` → `Contact.tsx`
- `/blog` → `Blog.tsx`
- `/blog/:slug` → `BlogPost.tsx` — renders a single Markdown post

### Blog system — `src/posts/` + `src/lib/posts.ts`
Blog posts are Markdown files in `src/posts/*.md`, loaded at build time via `import.meta.glob`. Each file uses YAML frontmatter for metadata (`slug`, `title_en`, `title_zh`, `teaser_en`, `teaser_zh`, `date_en`, `date_zh`, `type`, `platform`, `tags`, `featured`) and a `<!-- zh -->` comment to split EN and ZH body content. `src/lib/posts.ts` parses these into `Post[]` and renders each section with `marked`.

### Hooks — `src/hooks/`
- `useInView.ts` — `IntersectionObserver` hook for scroll-triggered animations; fires once and disconnects

### Styles — `src/styles/`
Plain CSS with custom properties defined in `global.css`. No CSS framework. Each page/component has its own `.css` file imported directly in the JSX.

### Deployment
Push to `main` → GitHub Actions builds → publishes `dist/` to `gh-pages` branch → live at `https://lung-yu.github.io/personal-sites_V2/`.

## Key data shape notes

- `experience[]` entries support an optional `companyNote: { en, zh }` field rendered as italic muted text below the org line in Resume.
- `projects[]` — `highlight: true` entries appear in the "Featured" section; others go in the grid. Use `links?: ProjectLink[]` for demo/video/article URLs beyond the primary `url`.
- `skills[]` — `items` is `{ en: [...], zh: [...] }` (array per language, not individual bilingual objects).
- `certifications[]` — `resume: true` controls visibility in the Resume page; `credentialUrl` and `certificateUrl` are both optional.
- `talks[]` — `resume: true` controls visibility in the Resume page.
