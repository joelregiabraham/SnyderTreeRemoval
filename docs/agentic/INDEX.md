# Agent Context Index

Start here after reading the repository-level [agent instructions](../../AGENTS.md). Check [current status](STATUS.md) and the working tree before taking action.

## Read by task type

| Task | Read |
| --- | --- |
| Any code or site-structure change | [Architecture](ARCHITECTURE.md), [workflow](WORKFLOW.md), and the files named by the active route |
| Website copy, contact details, or business claims | [Project context](PROJECT_CONTEXT.md) and [workflow](WORKFLOW.md); confirm unresolved facts with the owner |
| Multi-step work or cross-file changes | [Workflow](WORKFLOW.md), [current status](STATUS.md), and [decisions](DECISIONS.md) |
| Picking up work in a new chat | [Current status](STATUS.md), then the linked active plan or specification |
| Questions about why the project uses a particular policy | [Decisions](DECISIONS.md) |

## Source of truth

- **What the current code renders or does:** inspect the relevant source file. The active homepage composition starts in `app/page.tsx`.
- **Business facts and public claims:** use information confirmed by the owner. Existing site copy may be inaccurate and is not independent verification.
- **Deployment settings, production branch, domains, and environment variables:** check the Vercel project settings. The screenshot confirms the GitHub repository connection, not every deployment setting.
- **User intent and acceptance criteria:** the current user request and its approved specification.
- **Previously approved project choices:** [decision log](DECISIONS.md).

## Context maintenance

The architecture notes describe the source inspected at commit `1a7dd67`. Re-check and update them when relevant source files or deployment configuration change. Keep observations, confirmed facts, assumptions, and open questions distinct. Update [status](STATUS.md) when the active task or next action changes; keep it as a short handoff, not a chat transcript.
