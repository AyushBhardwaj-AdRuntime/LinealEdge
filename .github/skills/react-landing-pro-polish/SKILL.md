---
name: react-landing-pro-polish
description: 'Polish an existing React landing page to a professional, production-ready standard while preserving core animations. Use for alignment audits, typography hierarchy cleanup, icon/asset hardening, CTA improvements, and responsive QA with build verification.'
argument-hint: 'Target page file, stylesheet files, and constraints (e.g., do not change storytelling animation)'
user-invocable: true
---

# React Landing Pro Polish

## What This Skill Produces
- A focused visual/UX audit with prioritized fixes.
- Safe JSX/CSS improvements that preserve existing animation systems unless explicitly approved.
- Verified output with build pass and browser checks.

## When To Use
- Landing page works but feels non-premium or inconsistent.
- Team wants conversion-focused polish without full redesign.
- There are explicit constraints (for example: keep pinned storytelling animation unchanged).

## Inputs Required
- Target React page (for example: `src/pages/HomePage.jsx`).
- Primary stylesheets (for example: `src/index.css`, `src/style.css`).
- Constraints and non-negotiables.

## Procedure
1. Capture constraints first
- List what must not change (animations, sequence, brand colors, etc.).
- Treat these as hard guards during implementation.

2. Audit current page section-by-section
- Hero/nav, services, impact, leaders, pulse cards, testimonials, blog, worksheets, CTA, footer.
- Check alignment grid consistency, spacing rhythm, text hierarchy, CTA visibility, and icon consistency.

3. Identify high-impact upgrades
- Prioritize fixes with best visual/conversion impact and lowest regression risk:
  - Broken/remote assets -> local or robust alternatives.
  - Emoji icons -> SVG iconography.
  - CTA sizing/affordance consistency.
  - Heading/body hierarchy and readable line lengths.
  - Section alignment and background rhythm consistency.

4. Apply changes in safe waves
- Prefer scoped selectors and minimal JSX changes.
- Keep animation hooks and triggers untouched unless explicitly requested.
- Use reusable utility classes when it improves maintainability.

5. Verify rigorously
- Run production build.
- Check desktop and mobile layout behavior (no overflow, clean stacking).
- Validate key assets load (no broken hero/graph/trust visuals).

6. Report outcomes
- Summarize exactly what changed.
- List constraints honored.
- Provide residual risks and optional next improvements.

## Decision Rules
- If an upgrade conflicts with protected animations, skip and propose an alternative.
- If an external asset is unreliable, replace with local SVG/image fallback.
- If style updates can be scoped under landing wrappers, prefer scoped rules to avoid regressions.
- If changes are uncertain, implement only reversible low-risk improvements first.

## Completion Checks
- Build succeeds with no new errors.
- No horizontal overflow on primary viewport checks.
- Primary CTA is clearly visible and consistently sized.
- No emoji iconography in professional sections.
- Section paddings and heading alignment are visually consistent.
- Protected animation behavior remains intact.

## Example Prompts
- Polish `src/pages/HomePage.jsx` to production quality, but keep hero storytelling animations untouched.
- Improve professionalism of landing sections with better iconography and CTA hierarchy, then validate build.
- Run a safe conversion-focused UI pass and keep existing GSAP timing logic intact.
