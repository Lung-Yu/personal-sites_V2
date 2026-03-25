---
applyTo: "src/styles/**,src/pages/**,src/components/**"
---

# UI/UX Guidelines — Design Token Reference

These rules apply whenever you edit CSS or JSX in this project.

---

## Design Token Quick Reference (`src/styles/global.css`)

```
Light theme (:root)          Dark theme ([data-theme="dark"])
─────────────────────────    ─────────────────────────────────
--bg:       #ffffff           --bg:       #0f1117
--bg2:      #f9fafb           --bg2:      #161b22
--text:     #111827           --text:     #e6edf3
--text2:    #374151           --text2:    #c9d1d9
--muted:    #616870           --muted:    #8b949e
--accent:   #2563eb           --accent:   #58a6ff
--border:   #e5e7eb           --border:   #30363d
```

Structural: `--radius: 10px` · `--radius-sm: 6px` · `--max-width: 760px` · `--transition: 0.18s ease`

---

## WCAG 2.1 AA Contrast Requirements

Always verify contrast when changing colour values:

| Pair | Light ratio | Dark ratio | Requirement |
|---|---|---|---|
| `--text` on `--bg` | ~18:1 ✅ | ~12:1 ✅ | ≥4.5:1 |
| `--text2` on `--bg` | ~9:1 ✅ | ~7:1 ✅ | ≥4.5:1 |
| `--muted` on `--bg` | ~5.1:1 ✅ | ~4.5:1 ✅ | ≥4.5:1 (min) |
| `--accent` on `--bg` | ~5.8:1 ✅ | ~5.1:1 ✅ | ≥4.5:1 |
| `white` on `--accent` (#2563eb) | ~5.8:1 ✅ | — | ≥4.5:1 |

**CRITICAL**: If you modify `--accent`, `--muted`, or any text/background token, re-verify that all pairs above still pass ≥4.5:1.

---

## Material Design 3 Spacing Grid

All spacing must be **multiples of 4px**. Preferred values: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64px.

```css
/* Good */          /* Bad */
gap: 24px;          gap: 22px;
padding: 16px;      padding: 15px;
margin-bottom: 48px; margin-bottom: 50px;
```

---

## Interactive Element Rules

- **Minimum touch target**: 48×48px for all buttons and links
- **Focus styles**: every interactive element must have a visible `:focus-visible` ring. Use `outline: 2px solid var(--accent)` + `outline-offset: 2px`
- **Hover transitions**: use `var(--transition)` (0.18s ease) — never exceed 300ms
- **`prefers-reduced-motion`**: wrap non-essential animations:
  ```css
  @media (prefers-reduced-motion: reduce) {
    .fade-up { transition: none; animation: none; }
  }
  ```

---

## Component Consistency Checklist

When adding or modifying components/pages, verify:

- [ ] Uses design tokens (`var(--bg)`, `var(--accent)`, etc.) — no hardcoded hex colours
- [ ] Spacing is a multiple of 4px
- [ ] Border-radius uses `var(--radius)` or `var(--radius-sm)`, not a custom value
- [ ] Box shadows use `var(--shadow)`, `var(--shadow-md)`, or `var(--shadow-lg)`
- [ ] All `<img>` elements have an `alt` attribute
- [ ] All icon-only buttons have `aria-label`
- [ ] Interactive elements have `:hover` and `:focus-visible` styles
- [ ] Dark theme overrides are checked in `[data-theme="dark"]`

---

## Typography Rules

| Usage | Size | Weight | Token |
|---|---|---|---|
| Hero heading (h1) | ≥36px | 700 | — |
| Section heading (h2) | 22–28px | 700 | — |
| Subsection (h3) | 16–20px | 600 | — |
| Body copy | 16px | 400 | `font-size: 1rem` |
| Caption / label | 11–13px | 700 caps or 400 | `.section-label` |
| Code / mono | — | — | `var(--mono)` |

Line-height for body copy: ≥1.5 (`line-height: 1.65` is set globally — do not override below 1.5).

---

## Bilingual Layout Notes

- Both `zh` and `en` content must fit in the same layout without overflow
- Chinese text is typically ~20% wider per character than equivalent English
- Test layout switches by toggling `i18n.language` in browser DevTools → localStorage → `i18nextLng`
- Truncate with `overflow: hidden; text-overflow: ellipsis` only as a last resort; prefer wrapping
