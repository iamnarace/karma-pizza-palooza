# Karma Pizza

A single-page restaurant website prototype (hero, about, menu, location, contact form), generated with [Lovable](https://lovable.dev) and committed to this repository by Lovable's bot.

> **Status: prototype, not maintained.** Last updated March 2025. The menu, address and email shown in the site are placeholder content, and the contact form is simulated. Do not deploy it as-is (see [Security](#security)).

## What it contains

- Sections: navigation, hero, about, menu, location, contact form, footer (`src/components/`).
- A sample menu with invented dishes and prices (`src/components/Menu.tsx`).
- A contact form that only shows a confirmation message; it does **not** send or store anything (`src/components/ContactForm.tsx`).

## Tech stack

Vite, React, TypeScript, Tailwind CSS, shadcn/ui (Radix UI), React Router, TanStack Query.

## Run it

Requires Node.js and npm.

```sh
npm ci
npm run dev       # local development server
npm run build     # production build into dist/
npm run lint      # ESLint
```

There is no automated test suite.

## Verified state (2026-10-20)

- `npm ci` and `npm run build` succeed.
- `npm run lint` reports 3 errors and 10 warnings that predate this README.
- No CI workflow is configured.

## Security

- No secrets or backend are used.
- The dependencies have not been updated since the project was generated. `npm audit --omit=dev` reported 20 advisories on 2026-10-20 (17 high, 3 moderate), including `react-router` and `lodash`. Update the dependencies before any real use.

## Licence

No licence has been selected, so default copyright applies. Contact the repository owner before reusing the code.
