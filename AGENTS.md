## Agent skills

### Issue tracker

Issues and specs live as GitHub issues in `sergioavila/clock_deck`. See `docs/agents/issue-tracker.md`.

### Triage labels

Five default roles: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `CONTEXT.md` at the repo root and ADRs in `docs/adr/`. See `docs/agents/domain.md`.

### Memory

Durable facts live in `docs/memory.md`. The latest handoff is `docs/HANDOFF.md`; older snapshots live in `docs/handoffs/`. Read the handoff at the start of a session and overwrite it when the work stops.
