# Implementation Plans

Use a plan when a task has multiple steps, files, dependencies, or reviewable stages. Keep it short enough to execute directly and specific enough that another agent can continue without reconstructing decisions from chat.

## Required plan contents

- Link to the approved specification. If the task is small enough not to need a spec, link to the user request or agreed acceptance criteria.
- State the goal, architecture/approach, relevant global constraints, and likely failure modes.
- Map each task to exact files, responsibilities, and interfaces between tasks.
- Order tasks by dependency. Give each step one clear action and a checkable result.
- For each verification step, name the command or review and the expected outcome. State what was not tested; never imply an unrun check passed.
- Include preview, rollback, and production-review considerations when a change can affect users or deployment.
- Track task status and completion evidence. Update `docs/agentic/STATUS.md` when the project handoff changes.

## Execution and handoff

1. Review the plan against its spec and `AGENTS.md` before implementation.
2. Work on `development` or a user-approved task branch, not directly on `main`.
3. Preserve task boundaries and record any required change in scope for user review.
4. Verify the diff and record actual command output before reporting completion.
5. Do not push or merge to the production branch until the user reviews the preview and explicitly approves the release.

For one-time or long-lived plans, keep the plan next to its task spec in `docs/plans/`. Keep this README focused on the convention rather than project status.
