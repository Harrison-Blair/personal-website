# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Harrison Blair's personal website / developer portfolio. Next.js App Router, React 19, Tailwind, TypeScript.

## Commands

- `npm run dev` — dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`)

No test suite exists.

## Architecture

- **Routing**: Next.js App Router under `src/app/`. Each route is a folder with `page.tsx` (`/`, `about`, `work`, `projects`, `contact`).
- **Layout**: `src/app/layout.tsx` wraps every page with `<Navigation>` and loads the local 0xProto fonts (Latin-subset — see memory) exposed as `--font-proto` / `--font-proto-mono`.
- **Components**: `src/app/components/ui/` (reusable tiles, buttons, carousel, typewriter) and `components/layout/` (Navigation).
- **Content as data**: page content lives in `src/data/projects.ts` and `src/data/experiences.ts` as typed arrays — edit these to change displayed projects/experience, not the page JSX.
- **Contact form**: `src/app/api/send-email/route.ts` is the only backend. POST handler validates/escapes input, applies in-memory per-IP rate limiting (5/hour, single-instance only), and sends via Resend. `resend` is in `serverExternalPackages` (next.config.mjs).

## Config & env

- `.env.local` (copy from `.env.example`): `RESEND_API_KEY`, `RESEND_DESTINATION_EMAIL` (server), `NEXT_PUBLIC_RESEND_DESTINATION_EMAIL` (mailto link).
- Security headers (X-Frame-Options, etc.) are set globally in `next.config.mjs`.

## Deploy

Vercel via GitHub Actions (`.github/workflows/main.yml`), triggered on GitHub **release published** (not on push). `build-and-lint.yml` runs build + lint on push.
