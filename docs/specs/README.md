# Task Specifications

Use a specification to pin down **what** the user wants before planning **how** to implement it. Start with [the task specification template](template.md).

## When to write one

Write a focused spec for non-trivial user-visible behavior or content changes, cross-file work, new integrations, or requests with important unresolved requirements. A small, clearly bounded change can use the user's request and explicit acceptance criteria directly; do not create ceremony without a decision for the spec to resolve.

## Review and handoff

1. Read `AGENTS.md` and the relevant context documents linked from `docs/agentic/INDEX.md`.
2. Record current behavior, user goal, impact, constraints, scope, non-goals, assumptions, and acceptance criteria.
3. Mark uncertain business facts or deployment behavior as open questions. Do not fill them with guesses.
4. Ask the user to review the written spec. Record its approval status and requested changes.
5. After approval, create an implementation plan in `docs/plans/` for multi-step work. The plan links to the approved spec and may not silently broaden it.

Keep one spec focused on one coherent outcome. If a request contains independent outcomes, split them into separate specs and state their dependencies.
