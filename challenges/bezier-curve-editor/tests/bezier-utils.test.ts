import { describe, it, expect } from 'vitest';
import { cubicBezierPoint, toCssCubicBezier } from '../src/utils/bezier';
import type { Point } from '../src/types/bezier.types';

const P0: Point = { x: 0, y: 1 };
const P3: Point = { x: 1, y: 0 };
// Standard ease-in-out: p1 = (0.42, 0), p2 = (0.58, 1)
const P1_EASE: Point = { x: 0.42, y: 0 };
const P2_EASE: Point = { x: 0.58, y: 1 };

describe('cubicBezierPoint', () => {
  it('returns P0 when t=0', () => {
    const result = cubicBezierPoint(0, P0, P1_EASE, P2_EASE, P3);
    expect(result.x).toBeCloseTo(0, 5);
    expect(result.y).toBeCloseTo(1, 5);
  });

  it('returns P3 when t=1', () => {
    const result = cubicBezierPoint(1, P0, P1_EASE, P2_EASE, P3);
    expect(result.x).toBeCloseTo(1, 5);
    expect(result.y).toBeCloseTo(0, 5);
  });

  it('returns correct midpoint for standard ease-in-out curve', () => {
    const mid = cubicBezierPoint(0.5, P0, P1_EASE, P2_EASE, P3);
    // Ease-in-out midpoint is roughly (0.5, 0.5) in normalized coords
    expect(mid.x).toBeCloseTo(0.5, 2);
    expect(mid.y).toBeCloseTo(0.5, 2);
  });
});

describe('toCssCubicBezier', () => {
  it('formats handle coordinates rounded to 3 decimals', () => {
    const p1: Point = { x: 0.42, y: 0 };
    const p2: Point = { x: 0.58, y: 1 };
    expect(toCssCubicBezier(p1, p2)).toBe('cubic-bezier(0.42, 0, 0.58, 1)');
  });
});
