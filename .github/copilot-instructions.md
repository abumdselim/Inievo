# Project Guidelines

## Build and Validate
- Use `pnpm` for package management (`pnpm-lock.yaml` is committed).
- Primary commands:
  - `pnpm dev` to run local development server
  - `pnpm build` for production build
  - `pnpm lint` for lint checks
- There is no test suite configured in `package.json`. For non-trivial changes, run `pnpm lint` and manually verify the affected route(s).

## Architecture
- This is a Next.js App Router project. Routes live under `app/**/page.tsx`.
- Prefer Server Components by default. Add `"use client"` only for interactive components that need hooks, browser APIs, or animation state.
- UI is organized into:
  - `components/ui/*`: reusable shadcn-style primitives
  - `components/*`: domain/section components (marketing, auth, demo, blog, shop)
  - `app/*`: route composition and page-level layout
- Use path aliases with `@/` for imports (configured in `tsconfig.json`).

## Conventions
- Follow existing TypeScript + React function component style used across `app/` and `components/`.
- Keep Tailwind utility classes inline in JSX. Theme tokens and shared styles are defined in `app/globals.css`.
- Use `cn()` from `lib/utils.ts` for conditional class composition instead of manual string concatenation.
- Reuse existing primitives from `components/ui/*` before creating custom base components.
- Keep visual language consistent with the established brand tokens (teal/azure/orange palette and typography set in `app/layout.tsx` and `app/globals.css`).

## Project Gotchas
- `next.config.mjs` sets `typescript.ignoreBuildErrors = true`; do not assume `pnpm build` catches all type issues.
- `next.config.mjs` also sets `images.unoptimized = true`; avoid introducing assumptions about Next image optimization.
- This repository currently has no API routes or backend handlers; treat auth/contact/demo pages as UI-first unless backend work is explicitly requested.

## Documentation
- Start with `README.md` for project overview and development bootstrap.
- If new recurring conventions are introduced, update this file with concise, actionable guidance rather than duplicating long-form docs.