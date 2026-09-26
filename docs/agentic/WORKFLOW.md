# Development Workflow

## 1. Orient and scope

- Read `AGENTS.md`, this context index, [current status](STATUS.md), and relevant project context or architecture notes.
- Check `git status --short --branch`, confirm the intended branch, and preserve existing user changes.
- Identify the user-visible behavior or content affected. Distinguish confirmed facts from current copy and assumptions.

## 2. Specify and plan

- For a non-trivial change, capture the goal, current behavior, scope, non-goals, unresolved questions, and observable acceptance criteria in a task specification. Get the user's review before implementation planning.
- For multi-step or cross-file changes, make a file-level implementation plan that links to the approved specification and names verification commands and expected outcomes.
- Do not broaden a task into unrelated cleanup. Ask when a business fact, behavior, or deployment setting is uncertain and affects the requested change.

## 3. Implement on a safe branch

- Use `development` or another user-approved task branch. Do not edit `main` directly.
- Make the smallest coherent change within the approved scope. Avoid touching build configuration, dependencies, GitHub settings, and Vercel settings unless that work is explicitly requested.
- Before committing, verify Git's author identity belongs to the user. Do not use Codex as author or co-author. If the configured identity is absent or ambiguous, stop and ask rather than guessing or changing global Git configuration.

## 4. Evaluate and review

- Run only checks relevant to the change and report exact commands and outcomes. Do not claim tests, lint, type checking, or a build passed unless the corresponding command ran successfully.
- The current `next.config.mjs` skips ESLint and TypeScript checks during builds. Report this limitation when a build is used as evidence.
- Review the entire diff for scope, correctness, responsive behavior, accessibility, content accuracy, and broken links.
- For user-visible changes, inspect a Vercel preview before production when one is available. A preview is conditional on the project's current Git deployment settings.

## 5. Publish only with approval

- The owner-provided screenshot confirms the Vercel project is connected to `joelregiabraham/SnyderTreeRemoval`; it does not confirm the current production-branch or preview-branch settings. Check Vercel before relying on those settings.
- Do not push or merge to the configured production branch without the user's explicit approval after review. The live domain must not be changed as part of documentation-only work.
- Use only the user's GitHub authentication for pushes. Do not expose credentials or tokens in commands, logs, or documents.

## Current project constraints

- No application tests or test script were found at the inspected commit.
- `package-lock.json` and `pnpm-lock.yaml` are both present; package-manager choice is unresolved.
- Business dates, credentials, customer/satisfaction numbers, public contact details, social URLs, and policy destinations listed in [project context](PROJECT_CONTEXT.md) require owner confirmation before public edits.
