# Agentic Environment Setup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a lightweight, linked documentation system that lets future collaborators and coding agents understand this repository, follow the user's safety rules, and resume active work without chat history.

**Architecture:** Add a short root `AGENTS.md` that sends agents to a focused context index. Keep product facts, observed code architecture, workflow, project status, and decisions in separate `docs/agentic/` files; keep spec and plan authoring guidance and templates in `docs/specs/` and `docs/plans/`.

**Tech Stack:** Markdown documentation only; existing Next.js/React/TypeScript/Tailwind application remains unchanged.

**Spec:** `docs/superpowers/specs/2026-09-26-agentic-environment-design.md`

## Global Constraints

- Work is on the branch named exactly `development`; do not work on `main` for this setup.
- Do not push or merge to `main` as part of this documentation setup.
- Do not author commits as Codex, add Codex co-author attribution, or use a `codex/*` branch name. Verify the user's Git identity before any commit; stop if it is unavailable or ambiguous.
- Keep this effort documentation-only. Do not change application code, dependencies, build configuration, GitHub settings, or Vercel settings.
- Record business claims as unverified until the user confirms them. Code content is evidence of what the current site says, not proof that the claim is true.
- Do not treat the existence of an undocumented behavior as approval to change it.
- Keep instructions concise and link to focused context documents instead of copying the same rules into multiple files.

## Review Focus

- Conflicting business history and credentials: a reasonable reader should see these marked as unverified owner-confirmation items, not as established facts.
- Unconfirmed Vercel production-branch or preview settings: the workflow should state only what the screenshot and repository establish, and qualify conditional deployment behavior.
- Build checks suppressed in `next.config.mjs`: the workflow must not imply that a successful build validates ESLint or TypeScript while those bypasses remain enabled.
- Unconfigured Git identity: commit instructions must require verifying the user's account and must not invent an identity or add Codex attribution.
- Stale context after source changes: architecture notes must identify their inspected commit and instruct maintainers to re-check source-backed observations when relevant files change.

---

### Task 1: Establish agent rules and project context

**Files:**
- Create: `AGENTS.md`
- Create: `docs/agentic/INDEX.md`
- Create: `docs/agentic/PROJECT_CONTEXT.md`
- Create: `docs/agentic/ARCHITECTURE.md`
- Create: `docs/agentic/WORKFLOW.md`
- Create: `docs/agentic/STATUS.md`
- Create: `docs/agentic/DECISIONS.md`

**Interfaces:**
- Consumes: approved design in `docs/superpowers/specs/2026-09-26-agentic-environment-design.md` and the source state inspected at commit `1a7dd67`.
- Produces: a root instruction entry point and focused context documents linked from `AGENTS.md` and `docs/agentic/INDEX.md`.

- [x] **Step 1: Create root `AGENTS.md`** with concise rules for orientation, scope, factual accuracy, `development` branch safety, account identity, approval gates, verification reporting, and links to `docs/agentic/INDEX.md`.
- [x] **Step 2: Create `docs/agentic/INDEX.md`** as the context router, mapping code changes, content changes, planning, and continuity questions to the specific context files and source-of-truth rules.
- [x] **Step 3: Create `docs/agentic/PROJECT_CONTEXT.md`** with the site's purpose and current content. Separate facts confirmed by the user from observations of existing copy and a clearly labeled owner-confirmation list; do not resolve the 1995/2010 discrepancy or repeat credentials as fact.
- [x] **Step 4: Create `docs/agentic/ARCHITECTURE.md`** with the stack and route/component map from the approved spec, active versus alternate page files, contact/gallery behavior, current build-check configuration, lockfile ambiguity, and duplicated stylesheet observation. Identify source paths and inspected base commit `1a7dd67`.
- [x] **Step 5: Create `docs/agentic/WORKFLOW.md`** with specify → plan → implement → evaluate → review → publish steps; prohibit direct `main` edits; describe Vercel previews conditionally; require user approval before production; and require user Git identity confirmation before commits.
- [x] **Step 6: Create `docs/agentic/STATUS.md`** marking the setup as in progress, branch `development` as local and not pushed, current base/plan, decisions still open, and next action. Do not state the documentation setup is complete yet.
- [x] **Step 7: Create `docs/agentic/DECISIONS.md`** with a brief format for dated, user-approved decisions and an initial record of the approved documentation structure and `development` branch policy. Keep unresolved choices in the status/context files, not in the decision log.
- [x] **Step 8: Review Task 1 content against Review Focus.** Confirm claims are labeled; deployment assumptions are conditional; build limitations are explicit; the identity rule does not guess; and observations carry the inspected commit.
- [x] **Step 9: Stage and check formatting and scope.** Stage the seven Task 1 files, then run `git diff --cached --check`.
  - Expected: exit code 0 and no whitespace errors.
  - Manually check every relative Markdown link in the new files resolves to a file that exists or to a source path named in the repository.
  - Run `git diff --cached --name-only` and confirm only the seven files listed for Task 1 are staged.
- [x] **Step 10: Commit Task 1** as `docs: add agent instructions and project context`. Verify the intended author with `git show -s --format="%an <%ae>" 1a7dd67`; if local identity settings are empty, use that existing user-authored identity with per-command `git -c user.name=... -c user.email=...` options and do not write global Git config. If the identity does not match the user's account or is ambiguous, stop and ask; do not commit as Codex.

### Task 2: Add reusable specifications and planning guidance

**Files:**
- Create: `docs/specs/README.md`
- Create: `docs/specs/template.md`
- Create: `docs/plans/README.md`
- Modify: `docs/agentic/INDEX.md`
- Modify: `docs/agentic/STATUS.md`
- Modify: `docs/superpowers/plans/2026-09-26-agentic-environment-setup.md`

**Interfaces:**
- Consumes: Task 1's context index, workflow rules, status format, and factual-accuracy constraints.
- Produces: linked, repeatable templates for task specifications and implementation plans; a continuity status entry describing the completed documentation setup and open next decisions.

- [x] **Step 1: Create `docs/specs/README.md`** explaining when a task needs a spec and how an approved spec becomes the plan's source of truth.
- [x] **Step 2: Create `docs/specs/template.md`** with sections for user goal, user impact, current behavior/context links, scope/non-goals, constraints, assumptions/open questions, acceptance criteria, evaluation evidence, and approval status.
- [x] **Step 3: Create `docs/plans/README.md`** requiring plans for multi-step work, file-level tasks, dependencies, verification commands and expected outcomes, rollback/preview considerations, and completion status. State that plans link to approved specs.
- [x] **Step 4: Update `docs/agentic/INDEX.md`** to route feature and defect work to the spec template and multi-step work to the plan guidance.
- [x] **Step 5: Update `docs/agentic/STATUS.md`** to mark the documentation setup complete, list unresolved owner decisions from the design, and identify the next useful project action without presuming which product fix comes first.
- [x] **Step 6: Review Task 2 content against Review Focus.** Confirm templates require explicit unresolved assumptions and evaluate outcomes without claiming tests ran; confirm plans preserve the account identity and branch rules from `AGENTS.md`.
- [x] **Step 7: Stage and check formatting and scope.** Stage the six Task 2 files, including this plan so the status handoff target is versioned, then run `git diff --cached --check`.
  - Expected: exit code 0 and no whitespace errors.
  - Manually check new and updated Markdown links and verify the index points to the final locations.
  - Run `git diff --cached --name-only` and confirm only the six files listed for Task 2 are staged.
  - Confirm no application, dependency, build, GitHub, or Vercel files changed.
- [x] **Step 8: Commit Task 2** as `docs: add specification and planning templates`, using the same verified identity procedure from Task 1. If the identity does not match the user's account or is ambiguous, stop and ask; do not commit as Codex.

### Completion review

- Read the entire documentation diff from a fresh perspective; check for contradictory instructions, invented company facts, unsupported deployment guarantees, stale commit details, and accidental app/config changes.
- Confirm `git status` is clean and the current branch remains `development`.
- Report the commits under the user's identity and the unresolved business, package-manager, and quality-gate questions. Do not push or merge as part of this plan.

## Verification boundaries

This plan changes documentation only. Do not install dependencies, run an application build, add test files, or run application tests for this work. The checks are Markdown diff hygiene, link and content review, exact scope review, and Git branch/identity/status inspection. Report those checks precisely; do not claim application behavior was tested.
