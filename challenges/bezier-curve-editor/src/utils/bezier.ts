import type { Point } from '../types/bezier.types';

/**
 * B(t) = (1-t)³P0 + 3(1-t)²tP1 + 3(1-t)t²P2 + t³P3
 */
export function cubicBezierPoint(t: number, p0: Point, p1: Point, p2: Point, p3: Point): Point {
  // TODO: implement
  return { x: 0, y: 0 };
}

/**
 * Format handle coordinates as cubic-bezier(x1, y1, x2, y2), rounded to 3 decimals.
 */
export function toCssCubicBezier(p1: Point, p2: Point): string {
  const x1 = Math.round(p1.x * 1000) / 1000;
  const y1 = Math.round(p1.y * 1000) / 1000;
  const x2 = Math.round(p2.x * 1000) / 1000;
  const y2 = Math.round(p2.y * 1000) / 1000;
  return `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`;
}
