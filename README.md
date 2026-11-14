# Echoes of Exploration

A small, playable browser game about the history and science of NASA exploration hardware. Explore stylized Moon, Mars, and deep-space field sites, log artifacts, and answer a short knowledge question for each discovery.

## Run locally

The game uses a JSON-free, self-contained mission data catalog in `game.js` so it works without a build step. Because browsers restrict some local-file behavior, serve the repository with a small local web server:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Controls

- **WASD** or **arrow keys** — move
- **E** — investigate a nearby artifact
- **Escape** — pause or resume
- Mouse/touch — click a nearby signal marker or the on-screen investigate button

Progress is stored in this browser using `localStorage`.

## Project files

- `index.html` — screens, navigation, field HUD, and archive
- `style.css` — responsive visual design
- `game.js` — canvas exploration, mission records, quizzes, and local saves

## Accuracy notes

This prototype uses stylized scenes rather than claiming to show exact landing-site imagery or artifact coordinates. Mission records distinguish equipment deliberately left on the Moon from inactive Mars rovers and an operating deep-space spacecraft. Status information can change over time; review primary NASA mission pages before using the game as a current-status reference.

## Quick test checklist

1. Start the game and open each destination.
2. Move toward each glowing artifact marker and investigate it.
3. Confirm each entry shows its mission, status, historical context, and science legacy.
4. Answer each quiz; correct answers award 25 points, and each first discovery awards 100 points.
5. Open the archive, revisit an unlocked entry, and refresh the browser to confirm progress persists.
6. Test pause/resume, Escape, keyboard controls, and a narrow/mobile viewport.
