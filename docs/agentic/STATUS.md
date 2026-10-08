# Project Status

## Current state

- **Objective:** safely deploy the approved qualifications update after clearing Vercel's Next.js security block.
- **State:** Next.js updated to `15.5.27`; both lockfiles synchronized; production build passes locally with pnpm `10.28.0`. Vercel preview has not yet been retried or reviewed; `main` remains unchanged.
- **Branch:** `development` (local changes not yet committed or pushed).
- **Code baseline:** `1a7dd67` (`Added Youtube ID`); agent guidance, qualifications edits, and Next.js security update follow on `development`.
- **Guidance entry point:** `AGENTS.md`, then `docs/agentic/INDEX.md`.
- **Setup design:** `docs/superpowers/specs/2026-09-26-agentic-environment-design.md`.
- **Setup plan:** `docs/superpowers/plans/2026-09-26-agentic-environment-setup.md`.
- **Next action:** commit and push the security update to `development`, inspect the resulting Vercel deployment and preview, then merge only after it succeeds and is reviewed.

## Decisions still open

- Confirm the accurate company start date and all credentials, insurance, customer-count, and satisfaction claims before changing public copy.
- Confirm the correct call number, contact details, service area, policy URLs, and official social profiles.
- Select the supported package manager and future code-quality gates.
- Verify Vercel production and preview branch settings before relying on deployment behavior.
- Confirm the primary website conversion goal and whether a contact form is desired.

Update this page when the active task, branch, key decision, or next action changes. Keep it as a short handoff.
