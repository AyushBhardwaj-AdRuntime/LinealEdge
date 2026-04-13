---
name: react-landing-reference-sync
description: 'Update an existing React landing page to match a visual reference section-by-section. Use when rewriting JSX structure, applying exact CSS specs, and validating final build output.'
argument-hint: 'Reference file path and list of section updates to apply'
user-invocable: true
---

# React Landing Reference Sync

## What This Skill Produces
- Updated JSX for targeted landing sections in the existing page.
- Exact CSS class rules that implement the requested visual spec.
- A validated build result confirming no compile regressions.

## When To Use
- You have a reference spec in markdown (example: implementation2.md).
- The page exists and needs section-level visual parity.
- You want deterministic, repeatable structure + style updates.

## Inputs Required
- Reference path with section requirements.
- Target React page file (example: src/pages/HomePage.jsx).
- Target stylesheet (example: src/index.css).

## Procedure
1. Read and extract requirements
- Parse each section requirement into a checklist:
  - Layout structure requirements
  - Typography requirements
  - Spacing/border/background requirements
  - Interaction/hover requirements

2. Map to current code
- Locate existing JSX blocks and CSS selectors for each section.
- Record where to do minimal structural edits vs style-only edits.

3. Apply JSX updates first
- Update semantic wrappers and class names to match the spec.
- Add new sub-structure only when needed (example: card footer wrappers).
- Preserve existing routing links and data arrays when possible.

4. Apply CSS updates second
- Add or refine section-scoped classes.
- Keep rules scoped to landing wrapper to avoid global regressions.
- Match exact values from spec (font sizes, colors, borders, paddings).

5. Run validation
- Run build command.
- Fix any compile/runtime issues introduced by updates.

6. Report output
- Summarize changed sections.
- Provide exact class names and where they are defined.
- Include any placeholders still requiring final assets/content.

## Decision Rules
- If a requirement asks for exact dimensions or colors, use literal values, not approximations.
- If class naming in reference is explicit, adopt those class names in JSX/CSS.
- If images are unspecified, use temporary project assets and mark them as swappable.
- If existing global styles conflict, prefer scoped selectors under a landing wrapper.

## Completion Checks
- Services section uses 4-column image cards with absolute bottom white label block.
- Impact section has massive serif percentages and top/bottom borders.
- Leader cards include typography and translateY hover motion.
- Worksheets cards include left-border title treatment and separated footer row.
- CTA section is dark mode with centered white text and green button.
- Project builds successfully.

## Example Prompts
- Update HomePage sections to match implementation2.md exactly.
- Apply section-by-section JSX and CSS parity with my reference screenshot notes.
- Refactor landing components to spec and run a build verification.
