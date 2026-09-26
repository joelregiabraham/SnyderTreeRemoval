# Agent Instructions

Before changing anything, read [the context index](docs/agentic/INDEX.md), check the current branch and working tree, and preserve existing user changes.

## Working rules

- Work on `development` or a user-approved task branch. Do not edit `main` directly or push/merge to `main` without the user's explicit production-release approval.
- Keep work within the user's requested scope. Do not change application code, dependencies, build settings, GitHub settings, or Vercel settings as part of a documentation task.
- Treat existing website copy as evidence of what the code displays, not proof that the business claim is true. Use only user-confirmed business facts for public content; ask before changing uncertain claims.
- For non-trivial work, write a focused specification and get the user's review before implementation planning. Use a file-level plan for multi-step work. Preserve the plan's scope and acceptance criteria.
- Verify the Git author identity belongs to the user before committing. Do not guess or set a global identity. Do not commit as Codex or add Codex as a co-author. If identity is missing or unclear, stop and ask.
- Report exactly which checks were run and their results. Never say that tests, lint, type checks, builds, previews, commits, or deployments succeeded unless you have fresh evidence for that claim.
- Review the complete diff and, for user-visible changes, the Vercel preview before production release. Production changes require the user's approval.

## Context

Use [the context index](docs/agentic/INDEX.md) to find project facts, architecture notes, workflow, active status, and decisions. If source code changes invalidate a context document, update that document in the same scoped task or record the specific follow-up needed.
