# Echoes of Exploration

A small, playable browser game about the history and science of NASA exploration hardware. Explore stylized Moon, Mars, and deep-space field sites, log artifacts, and answer a short knowledge question for each discovery.

## Run locally

The game uses a JSON-free, self-contained mission data catalog in `game.js` so it works without a build step. Because browsers restrict some local-file behavior, serve the repository with a small local web server:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Play online

Visit <https://deepthisajann-maker.github.io/NASA/>. GitHub Actions publishes the game files whenever a commit reaches `main`.

## Campaign

Levels unlock in order. Find every artifact and answer its mission check to complete a field level:

1. **The Silent Moon** — Apollo hardware, the Lunar Roving Vehicle, and lunar experiments.
2. **The Red Planet's Forgotten Explorers** — Spirit, Opportunity, and Sojourner.
3. **Beyond the Solar System** — Voyager 1 and Voyager 2.
4. **The Forgotten Instruments** — the Apollo 11 retroreflector and Sojourner's APXS instrument.
5. **The Final Archive** — identify artifacts, match them to missions, and reconstruct the exploration timeline.

Progress is stored in this browser using `localStorage`.

## Controls

- **WASD** or **arrow keys** — move
- **E** — investigate a nearby artifact
- **Escape** — pause or resume
- Mouse/touch — click a nearby signal marker or the on-screen investigate button

Progress is stored in this browser using `localStorage`.

## Project files

- `index.html` — screens, navigation, field HUD, and archive
- `style.css` and `levels.css` — responsive visual design and level progression
- `game.js` — canvas exploration, mission records, quizzes, and local saves

## Accuracy notes

This prototype uses stylized scenes rather than claiming to show exact landing-site imagery or artifact coordinates. Mission records distinguish equipment deliberately left on the Moon from inactive Mars rovers and an operating deep-space spacecraft. Status information can change over time; review primary NASA mission pages before using the game as a current-status reference.

## Quick test checklist

1. Start the game and complete each level in order.
2. Move toward each glowing artifact marker and investigate it.
3. Confirm each entry shows its mission, status, historical context, and science legacy.
4. Answer each quiz; correct answers award 25 points, and each first discovery awards 100 points.
5. Complete the final artifact matches and timeline to restore the archive.
6. Refresh the browser to confirm progress persists; test pause/resume, Escape, and a narrow/mobile viewport.
