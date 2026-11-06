# Handoff

## Latest

- **Status:** running
- **Done:** Replaced the Flutter app with HTML, CSS, and Tauri 2. The desktop window is open, maximized.
- **Run:** `npm install` then `npm run tauri dev` from the repo root. There is no extra dev-server port: Tauri loads `src/` directly.
- **UI:** Local date and time over the Bing wallpaper (`bing.biturl.top`). Same layout as the Flutter clock: date top-left, time centered, black backdrop.
- **Identity:** `dev.iori.clockDeck`, product `clock_deck`.
- **Verified:** The page paints the wallpaper, "November 5, 2026", and the clock. The native window could not be captured because Cursor Computer Use lacks Screen Recording permission.
- **Stopped:** The old Flutter server on port 18080.
- **Do not redo:** Do not bring back the Flutter tree or the Dart 2 SDK constraint. Android and iOS are not initialized; desktop only.

## History

- 2026-11-05 — tauri — HTML/CSS clock in Tauri, Flutter removed
- 2026-11-05 — local-run — Flutter web server on port 18080 (`docs/handoffs/2026-11-05-local-run.md`)
- 2026-11-05 — setup — engineering skills + docs memory (`docs/handoffs/2026-11-05-setup.md`)
