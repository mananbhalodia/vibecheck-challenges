# Matte Theme Toggle

Look-a-like challenge starter repo for VibeCheck.

The goal is to recreate the supplied reference component: a light / dark toggle with a matte finish, recessed track, and embedded feel.

## Challenge metadata

- Title: `Matte Theme Toggle`
- Suggested slug: `matte-theme-toggle`
- Challenge type: `LOOK_A_LIKE`
- Language: `TYPESCRIPT`
- Base image: `node:20`
- Test suite: `VITEST`
- Suggested test command: `npm test`
- Suggested setup command: `npm install`
- Suggested time limit: `30`
- Suggested token budget: `100000`

## What the solver should build

Recreate the component from the provided reference image as closely as possible.

Key visible details:

- A centered horizontal toggle on a dark matte background
- A wide rounded track with a soft recessed / inset treatment
- A simple sun icon on the left side of the track
- A large dark thumb resting on the right side to indicate the dark state
- Low-contrast charcoal tones with soft shadowing instead of glossy highlights
- Overall proportions that feel chunky, tactile, and embedded into the surface

## Interaction and accessibility

- The control should be an accessible `switch` with the name `Theme toggle`
- The initial rendered state should match the reference image with the dark position selected
- Clicking the switch should toggle between dark and light states
- Include accessible labels for the decorative anchors used by the tests:
  - `Light mode icon`
  - `Dark mode thumb`

## Files

- `target-image/reference.png`: source image for the look-a-like target
- `src/components/ThemeToggle.tsx`: starter component
- `src/styles.css`: starter styling
- `tests/app.test.tsx`: visible structural tests

## Development

```bash
npm install
npm run dev
```

## Test

```bash
npm test
```
