# SaaS Card UI

Look-a-like challenge starter repo for VibeCheck.

The goal is to recreate the supplied reference component: a soft gray feature card with a striped halo behind a floating project chip, plus the title `Automation` and the provided paragraph copy.

## Challenge metadata

- Title: `SaaS Card UI`
- Suggested slug: `saas-card-ui`
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

- A rounded light-gray card centered on a very light background
- A striped radial burst behind the floating project chip
- A white project chip with a purple icon tile on the left
- Title text `Name Project`
- Subtitle text `2/5 Team Members Are Working`
- Large heading `Automation`
- Supporting paragraph:

`Set Up Workflows That Handle Reputative Tasks Automatically, Freeing Up Your Time For More Critical Work.`

## Files

- `src/components/SaasCard.tsx`: starter component
- `src/styles.css`: starter styling
- `tests/app.test.tsx`: visible structural tests

## Notes

- The included implementation is only starter scaffolding. The challenge should still be judged primarily by visual similarity to the reference image.
- Use the attached reference image from your VibeCheck workspace as the challenge's `referenceImageUrl` when creating the challenge in the admin UI.

## Development

```bash
npm install
npm run dev
```

## Test

```bash
npm test
```
