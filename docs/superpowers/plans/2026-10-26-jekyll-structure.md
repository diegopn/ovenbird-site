# Ovenbird Site Jekyll Structure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Migrate the six Portuguese, English, and Spanish Ovenbird site pages to a shared Jekyll layout with accurate page metadata, JSON-LD, and Google Analytics.

**Architecture:** Preserve the current public routes and page bodies. Move shared document framing, header, footer, metadata, structured data, and the supplied Google tag into `_layouts/` and `_includes/`; give each page language-specific values and schema facts through front matter.

**Tech Stack:** Jekyll, Liquid, YAML front matter, HTML, existing CSS and JavaScript.

**Spec:** User request in this task; the requested reference structure is the local `diegopn.github.io` Jekyll repository.

## Global Constraints

- Work only in `ovenbird-site`; do not alter the Ovenbird application repository.
- Preserve `/`, `/en/`, `/es/`, `/manual/`, `/en/manual/`, and `/es/manual/`.
- Use the supplied Google Analytics ID `G-3RP4FSYR3K` exactly once site-wide.
- Include only page metadata and schema facts supported by existing site content and repository history.
- Keep the existing visual design, assets, content, responsive behavior, and language differences.

## Review Focus

- GitHub Pages base path: generated assets, canonical URLs, and alternate-language links must include `/ovenbird-site` exactly once.
- Localized manual URLs: each canonical and alternate URL must point to the matching manual page.
- Manual dates: preserve only dates already supported by existing records; do not invent a publication date.
- Structured data: home pages describe the software; manual pages identify the manual author and documented app version.
- Shared shell: header, footer, theme initialization, app script, and analytics appear once per output page.

---

### Task 1: Configure Jekyll and shared document shell

**Files:** Create `_config.yml`, `_layouts/default.html`, `_includes/header.html`, `_includes/footer.html`, `_includes/google-analytics.html`; remove `.nojekyll`.

- [x] Set `url: https://diegopn.github.io`, `baseurl: /ovenbird-site`, language list, and verified app facts.
- [x] Build the document shell with page language, shared assets, theme initialization, header, content, footer, and GA include.
- [x] Preserve the localized navigation labels and route behavior.

### Task 2: Generate page metadata and JSON-LD

**Files:** Create `_includes/meta-tags.html` and `_includes/structured-data.html`; modify the six `index.html` pages.

- [x] Add front matter for each page's title, description, language, image, route, translations, and page kind.
- [x] Generate canonical, hreflang, Open Graph, and Twitter metadata from page values.
- [x] Emit a WebSite and WebPage schema on every page; describe SoftwareApplication on home pages and TechArticle plus manual author on manual pages.
- [x] Extract existing main content without changing public content or its route-relative screenshot assets.

### Task 3: Update project instructions and verify output

**Files:** Modify `README.md`.

- [x] Replace the static-only Pages instructions with Jekyll build/deployment details.
- [x] Validate YAML front matter, all six routes and translation links, one GA tag per layout, and page-specific metadata/schema inputs.
- [x] Run the available local Jekyll build; if Jekyll is unavailable, report that limitation and run static checks on the source.
