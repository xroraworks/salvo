# AGENTS.md

## Project Context

This repository contains the static website for photographer Salvo Nicolosi.
The project is a client-acquisition website, not only a portfolio.

Primary goals:

- present Salvo Nicolosi clearly and professionally;
- show the quality of the photographic work;
- explain available photography services;
- support SEO and GEO visibility;
- make it easy for visitors to request information or a quote.

## Repository Structure

The repository contains two independent but related websites:

- `fotografosicilia.com/`: English version and main international website.
- `fotografosicilia.it/`: Italian version for the Italian market.
- `docs/`: project documentation, when present.

Keep the `.com` and `.it` sites structurally aligned whenever possible.
Each domain must work independently and must use its own local assets.

Do not make the Italian site depend on CSS, JavaScript, images, fonts, or icons
from the `.com` domain, and do not make the English site depend on assets from
the `.it` domain.

## Technology

Use plain HTML, CSS, and JavaScript.

Do not add frontend frameworks, heavy libraries, build systems, or external
dependencies unless there is a clear project need and the change is documented.
Prefer native HTML, CSS, and JavaScript for simple behavior.

## Page And URL Rules

Use folder-based pages with `index.html` files.

Examples:

- English services page: `fotografosicilia.com/services/index.html`
- Italian services page: `fotografosicilia.it/servizi/index.html`

Use clean URLs such as `/services/`, not `services.html`.

When adding a page, add the matching page in the other language unless the user
explicitly asks for a one-language-only change.

## Language Mapping

Current page pairs:

- `.com /` maps to `.it /`
- `.com /about/` maps to `.it /chi-sono/`
- `.com /services/` maps to `.it /servizi/`
- `.com /portfolio/` maps to `.it /portfolio/`
- `.com /contact/` maps to `.it /contatti/`

The `.com` domain is the default and should be used for `x-default` hreflang.

## SEO And Metadata

Every indexable page should include:

- a page-specific `<title>`;
- a useful meta description;
- `robots` metadata when appropriate;
- a canonical URL pointing to the final URL for that same page;
- `hreflang` links for the English page, the Italian page, and `x-default`;
- Open Graph metadata when possible.

Canonical URLs must be self-referential.
`x-default` should point to the equivalent `.com` URL.

Do not overuse keywords. Write for people first.

## HTML Standards

Use semantic HTML.

Each page should have:

- one `<main>`;
- one primary `<h1>`;
- a logical heading hierarchy;
- meaningful links and buttons;
- accessible form labels where forms exist;
- appropriate `alt` text for meaningful images.

Use `<html lang="en">` for `.com` pages and `<html lang="it">` for `.it` pages.

Use ARIA only when native HTML is not enough.

## CSS And Design

Keep CSS readable, maintainable, and responsive.
The design should support the photography and the conversion path without
getting in the way of the content.

Prioritize:

- mobile-first and responsive layouts;
- clear navigation;
- visible focus states;
- readable text;
- stable layout;
- good contrast;
- image presentation that feels professional without hurting performance.

## JavaScript

Use JavaScript only when it adds real value.
Core content and navigation must remain understandable without JavaScript.

Keep scripts small and dependency-free unless the user approves otherwise.

## Images And Assets

Only optimized web-ready assets should go in public `assets/` folders.
Original photos, source files, PSD, AI, and other working files belong outside
the public site assets.

When adding images:

- use descriptive filenames;
- choose appropriate dimensions;
- prefer modern optimized formats when suitable;
- add meaningful `alt` text for content images;
- avoid layout shifts by defining dimensions or stable layout rules.

## Documentation

Before structural changes, check the README and relevant files in `docs/`, when
they exist.

When changing URL structure, page pairs, services, content architecture, or site
organization, update the relevant documentation as part of the same change.

If documentation files are missing or empty, use `README.md` as the current
source of truth and add concise documentation where it helps future work.

## Working Rules

Before editing, inspect the existing page and the matching page in the other
language.

Keep changes scoped to the requested task.
Do not refactor unrelated pages or rewrite large sections unless necessary.

When modifying one domain, check whether the equivalent change is needed in the
other domain for consistency, SEO, or user experience.

Prefer the simplest solution that is:

- readable;
- accessible;
- fast;
- maintainable;
- consistent with the current structure;
- useful for visitors.

## Verification

This is a static site with no package manager or build step currently defined.

After changes, verify as relevant:

- HTML file paths and links are correct;
- canonical and hreflang URLs match the intended page pair;
- each edited page has one `<main>` and one primary `<h1>`;
- responsive layout still works at mobile and desktop widths;
- CSS and JavaScript are loaded from the same domain folder;
- no unnecessary external dependency was introduced.
