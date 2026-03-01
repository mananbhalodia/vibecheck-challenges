import type { ControlPoints } from '../types/bezier.types';

export interface CurveCanvasProps {
  points: ControlPoints;
  onPointsChange: (points: ControlPoints) => void;
}

export function CurveCanvas({ points, onPointsChange }: CurveCanvasProps) {
  return <svg width={400} height={400} data-testid="curve-svg" />;
}
