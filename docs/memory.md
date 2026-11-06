# Memory

Durable facts for clock_deck. Session narrative belongs in `docs/HANDOFF.md`, not here.

## Project

- Wall clock for old tablets and other spare screens.
- HTML, CSS, and Tauri 2. Frontend is `src/`. Shell is `src-tauri/`.
- Shows the local date and time over the current Bing wallpaper.
- Package name: `clock_deck`. Identifier: `dev.iori.clockDeck`. Remote: `github.com:sergioavila/clock_deck`.

## Decisions

- Issues live in GitHub Issues. External PRs are not a triage surface.
- Triage labels use the default role names.
- Domain docs are single-context (`CONTEXT.md`, `docs/adr/`).
- Desktop only. Android and iOS Tauri targets are not initialized.
- The window starts maximized. Tauri loads `src/` directly, so dev does not bind a frontend port.
