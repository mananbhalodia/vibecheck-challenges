/**
 * Palette and HSL helpers for particle/curve colors.
 */
export function hsl(h: number, s: number, l: number): string {
  return `hsl(${h}, ${s}%, ${l}%)`;
}

export function speedToHue(speed: number): number {
  // slow = cool blue, fast = warm orange
  return 200 + speed * 40;
}
