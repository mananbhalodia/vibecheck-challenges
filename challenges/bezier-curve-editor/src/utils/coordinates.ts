import type { Point } from '../types/bezier.types';

const CANVAS_SIZE = 400;

/** Normalized (0-1) to pixel coordinates. */
export function normToPixel(norm: Point): { x: number; y: number } {
  return {
    x: norm.x * CANVAS_SIZE,
    y: (1 - norm.y) * CANVAS_SIZE, // y flipped: norm 0 = bottom, pixel 0 = top
  };
}

/** Pixel to normalized (0-1). */
export function pixelToNorm(px: { x: number; y: number }): Point {
  return {
    x: px.x / CANVAS_SIZE,
    y: 1 - px.y / CANVAS_SIZE,
  };
}

export { CANVAS_SIZE };
