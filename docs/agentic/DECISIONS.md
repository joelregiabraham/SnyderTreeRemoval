# Decision Log

Record durable project decisions here with a date, decision, reason, and impact. Add an entry only after the user approves the decision. Keep proposals and unresolved questions in `STATUS.md` or the relevant context document.

## 2026-09-26 — Use a lightweight, indexed agent context

- **Decision:** use a concise root `AGENTS.md`, a focused `docs/agentic/` context index and references, plus reusable specification and implementation-plan guidance.
- **Reason:** the user approved this structure; it supports context-first handoffs without creating an oversized handbook or unnecessary orchestration.
- **Impact:** future agents start at `AGENTS.md` and follow `docs/agentic/INDEX.md` to the context needed for a task.

## 2026-09-26 — Develop on the exact `development` branch

- **Decision:** perform this setup on a branch named `development`; keep production on the configured production branch until changes are reviewed and the user approves release.
- **Reason:** the user wants to protect the live website while making changes.
- **Impact:** do not edit or merge into `main` as part of this setup; Vercel preview behavior remains conditional on project settings.

## 2026-10-07 — Patch Next.js before promoting the website update

- **Decision:** upgrade Next.js from `15.2.4` to `15.5.27` and synchronize `package-lock.json` and `pnpm-lock.yaml` before retrying the Vercel deployment.
- **Reason:** the Vercel build completed but deployment was blocked because `15.2.4` is vulnerable. The owner authorized the security update; Vercel had selected pnpm `10.28.0` for builds.
- **Impact:** do not bypass Vercel's vulnerable-version protection. Require a successful, reviewed development deployment before merging to production.
