# Agentic Environment Design

Date: 2026-09-26  
Status: Draft for user review  
Repository branch: `development`

## 1. Purpose

Give future coding agents and human collaborators a small, dependable context system for maintaining the Snyder Tree Removal website. A new chat or agent should be able to find the active product facts, understand the current code structure and deployment path, see what is in progress, and follow the same change and review process without relying on old chat history.

The system should reduce avoidable regressions while staying proportional to this small, static marketing site. The supplied Agentic Development `llms.txt` is a source of workflow ideas: context indexing, task-specific specifications, explicit evaluation, and human review at meaningful gates. It is reference material, not a source of Snyder Tree Removal facts.

## 2. Constraints and agreed direction

- Work is on the branch named exactly `development`; do not work on `main` for this setup.
- Do not push or merge to `main` as part of this documentation setup.
- Do not author commits as Codex, add Codex co-author attribution, or use a `codex/*` branch name. Verify the user's Git identity before any commit; stop if it is unavailable or ambiguous.
- Keep this effort documentation-only. Do not change application code, dependencies, build configuration, GitHub settings, or Vercel settings.
- Record business claims as unverified until the user confirms them. Code content is evidence of what the current site says, not proof that the claim is true.
- Do not treat the existence of an undocumented behavior as approval to change it.
- Keep instructions concise and link to focused context documents instead of copying the same rules into multiple files.

## 3. Proposed repository structure

```text
AGENTS.md
docs/
  agentic/
    INDEX.md
    PROJECT_CONTEXT.md
    ARCHITECTURE.md
    WORKFLOW.md
    STATUS.md
    DECISIONS.md
  specs/
    README.md
    template.md
  plans/
    README.md
    active/
```

### Responsibilities

- **`AGENTS.md`** — repository-wide agent rules: scope control, factual accuracy, branch and identity policy, when to stop for human input, documentation lookup, and links to the context index. It is an instruction file, not a long product handbook.
- **`docs/agentic/INDEX.md`** — the context index. It tells an agent which document to read for which kind of task and identifies the authoritative source for each topic.
- **`docs/agentic/PROJECT_CONTEXT.md`** — purpose and audience of the website, confirmed product facts, claims still awaiting owner confirmation, and business boundaries relevant to changes.
- **`docs/agentic/ARCHITECTURE.md`** — observed stack, active route and component composition, static assets, rendering/client-interaction boundaries, current build configuration, and known codebase hazards.
- **`docs/agentic/WORKFLOW.md`** — the repeatable specify, plan, implement, evaluate, review, and deployment flow, including local branch and Vercel preview expectations.
- **`docs/agentic/STATUS.md`** — a short continuity checkpoint with current branch, active work, decisions needed, and the next concrete action. Update it when project work changes state; do not use it as a transcript.
- **`docs/agentic/DECISIONS.md`** — dated decisions and their rationale. Record only decisions the user has made or explicitly approved; label proposals as proposals until accepted.
- **`docs/specs/README.md`** and **`docs/specs/template.md`** — guidance and a reusable task specification format covering user goal, behavior, scope, constraints, acceptance criteria, context links, and evaluation criteria.
- **`docs/plans/README.md`** and **`docs/plans/active/`** — implementation-plan conventions and current multi-step plans. Plans link back to the approved specification and identify dependencies, file responsibilities, and completion evidence.

This is intentionally a lightweight structure. Do not add separate role files, a large handbook, automated agent orchestration, or CI tooling until a concrete need is identified.

## 4. Context and source-of-truth rules

1. The current source code is authoritative for what the deployed implementation is configured to render. For the homepage, start at `app/page.tsx`; follow imported components for behavior and content.
2. Vercel's dashboard is authoritative for current deployment settings, production branch, domains, and environment variables. The supplied screenshot confirms the connected GitHub repository, but does not establish every deployment setting.
3. User-confirmed business information is authoritative for company history, credentials, service area, contact details, and customer/satisfaction claims. Existing copy is not independent verification.
4. The context documents describe source findings and decisions; they must not silently override the source code or user-confirmed facts.
5. A task specification defines the requested change and acceptance criteria. An implementation plan explains how to carry it out. When either is missing for non-trivial work, ask for or prepare the missing artifact before changing code.
6. Distinguish verified facts, observations, assumptions, and unresolved questions explicitly. Do not turn assumptions into published website claims.

## 5. Workflow and safety gates

1. **Orient:** read `AGENTS.md`, the context index, project status, and the documents relevant to the task; inspect current branch and working-tree status.
2. **Specify:** clarify user intent and impact. For a non-trivial change, write a focused specification with observable acceptance criteria and obtain user review before planning implementation.
3. **Plan:** make a file-level implementation plan for multi-step work. Keep independent work separate and note interfaces, rollback considerations, and evaluation requirements.
4. **Implement:** work on `development` or a user-approved task branch. Do not change `main` directly. Keep changes within the approved scope and preserve existing user changes.
5. **Evaluate:** use checks that are relevant to the changed behavior and report exactly what was and was not run. The current repository has no test script or test files, and its Next config skips TypeScript and ESLint build checks; do not describe a successful build as covering those checks while that configuration remains in place.
6. **Review:** inspect the complete diff for scope, content accuracy, accessibility, broken links, and regressions. For user-visible changes, use a Vercel preview when available and request human review before production.
7. **Publish:** pushing to `development` may create a preview deployment if Vercel's Git integration is enabled for the branch. Production release belongs on the configured production branch and requires explicit user approval. Do not push or merge to `main` during this setup.
8. **Git identity:** before committing, verify that the configured author identity is the user's intended account identity. Never guess or substitute an agent identity. Do not include Codex as author or co-author. If identity or GitHub authentication is unclear, stop and ask.
9. **Continuity:** update `STATUS.md` when the active objective, branch, decisions, or next action changes. Keep completed task specifications and plans as project history rather than relying on chat memory.

The Agentic Development ideas are applied selectively: a lightweight context index, task-specific specs and plans, explicit evaluation, and human review before production. Enterprise team roles, metrics, ceremonies, and automated orchestration are outside this project's current needs.

## 6. Current repository observations to carry into the context files

These observations are based on a read-only inspection at commit `1a7dd67` (`Added Youtube ID`). Re-check them if the source changes before the context files are finalized.

- Next.js App Router, React, TypeScript, Tailwind CSS, and shadcn-style UI components are present.
- The active homepage is `app/page.tsx`. It composes `Header`, `HeroModern`, `About`, `Services`, `Gallery`, `Contact`, and `Footer`.
- `app/page-original.tsx` and `app/page-modern.tsx` are alternate page compositions, not active routes by their filenames alone.
- Most site content is hard-coded in React components. The contact section uses phone/email links and a Google Maps iframe; no server-side contact form or API route was found.
- `next.config.mjs` sets `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors` to `true`.
- `package.json` contains build/dev/start/lint scripts, but no test script. No test files or GitHub workflow files were found in the repository listing.
- Both `package-lock.json` and `pnpm-lock.yaml` are present; the authoritative package manager has not been confirmed.
- A second `styles/globals.css` exists alongside the active `app/globals.css`; the root layout imports the latter.
- The contact display number and its small contact link use `519-570-5900`, while the larger “Call Now” CTA uses `+15551234567`.
- Site copy has inconsistent business-start dates: metadata says 1995; the hero/footer say 2010; the About section says “15+ Years.”
- The About section also asserts certifications, insurance, customer counts, and satisfaction claims that have not been verified with the owner.
- Footer policy links point to `#`; social links are placeholders and currently commented out.
- The confirmed GitHub repository is `joelregiabraham/SnyderTreeRemoval`, connected to the Vercel project per the user's screenshot. The local `development` branch currently starts at `1a7dd67` and has not been pushed.

## 7. Out of scope for this setup

- Correcting the phone CTA, business dates, marketing claims, footer links, or any other product content.
- Changing ESLint/TypeScript build handling, adding tests, selecting a package manager, installing dependencies, or configuring CI.
- Editing Vercel settings, deploying, pushing branches, merging, or changing production traffic.
- Creating company policy, legal language, certification claims, or business facts not confirmed by the user.

## 8. Acceptance criteria for the documentation implementation

- The root `AGENTS.md` is short, actionable, and points agents to the context index.
- The context index is the clear starting point and maps task types to focused documents.
- Architecture notes describe the actual active route and current implementation without suggesting dormant files are live routes.
- Product-context documentation separates source-observed copy from owner-confirmed facts and visibly lists unresolved claims.
- Workflow documentation states the branch, identity, preview, and production-release rules in plain language.
- Specs and plans have simple reusable templates that require goal, scope, acceptance/evaluation criteria, relevant context, and current status.
- The status file clearly marks the docs setup as in progress and identifies the next step without pretending any files have already been implemented.
- No application code, dependencies, build settings, Vercel settings, or GitHub settings are changed by the documentation implementation.
- A future chat can determine the project state and next step from the repository documents without needing this conversation.

## 9. Decisions still requiring user input

The documentation can record these as open questions without blocking its initial structure:

- Which business-start date is correct: 1995 or 2010?
- Which credentials, insurance statements, customer counts, and satisfaction claims may be stated publicly?
- Should npm or pnpm be the sole supported package manager?
- What verification commands and quality gates should be required for future code changes, given the current build-check bypasses and lack of tests?
- What are the intended privacy/terms pages and official social-media URLs, if any?

Until answered, agents should preserve these as unresolved facts and must not invent replacements.
