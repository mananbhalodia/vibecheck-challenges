# vibecheck-challenges

Monorepo of challenge starters. Each challenge lives in a subfolder under `challenges/`. The app loads a challenge by cloning this repo and copying the chosen path into the workspace (set `CHALLENGES_REPO_URL` and use **Starter path (shared repo)** in admin).

| Starter path | Challenge |
|--------------|-----------|
| `challenges/ai-response-orb` | AI Assistant Response Orb (React, canvas, state animations) |
| `challenges/bezier-curve-editor` | Interactive Bézier Curve Editor (SVG, easing, CSS export) |
| `challenges/generative-art-canvas` | Generative Art Canvas (Flow Field, Lissajous, Recursive Tree) |
| `challenges/designer-profile-card` | Designer Profile Card (Glassmorphic card, look-a-like) |
| `challenges/matte-theme-toggle` | Matte Theme Toggle (look-a-like light/dark switch) |

- **Run a challenge locally:** `cd challenges/<slug>` then `npm install && npm run dev` and `npm test`.
