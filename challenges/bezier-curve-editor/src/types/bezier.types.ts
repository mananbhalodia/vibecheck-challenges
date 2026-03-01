export interface Point {
  x: number; // 0–1 normalized
  y: number; // 0–1 normalized
}

export interface ControlPoints {
  p0: Point; // fixed: { x: 0, y: 1 }
  p1: Point; // draggable handle
  p2: Point; // draggable handle
  p3: Point; // fixed: { x: 1, y: 0 }
}

export interface Preset {
  name: string;
  p1: Point;
  p2: Point;
  cssString: string;
}
