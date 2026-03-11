# Designer Profile Card

Look-a-like challenge starter repo for VibeCheck.

The goal is to recreate the supplied reference component: a glassmorphic designer profile card with a circular avatar, name, job title, skill tags, stats row, and action buttons — all on a light grey background.

## Challenge metadata

- Title: `Designer Profile Card`
- Suggested slug: `designer-profile-card`
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

- Light grey page background
- A rounded card with a subtle glassmorphic / frosted-glass effect and a soft cyan/teal bottom glow
- A share icon in the top-right corner of the card
- A circular profile photo/avatar near the top-left
- Name: `Chloe Harrison`
- Title: `Product designer`
- Two skill tag pills: `Figma` and `UX Design`
- A stats row with three items: `4.5` Rating (with star icon), `$15K+` Earned, `$80/hr` Rate
- A wide "Get in touch" button with a soft teal/cyan tint
- A circular bookmark button to the right of the CTA

## Files

- `src/components/ProfileCard.tsx`: starter component (placeholder text only)
- `src/styles.css`: starter styling (light grey background only)
- `tests/app.test.tsx`: structural tests for the final card

## Development

```bash
npm install
npm run dev
```

## Test

```bash
npm test
```
