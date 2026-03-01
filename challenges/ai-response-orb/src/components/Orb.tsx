import type { OrbState } from '../types/orb.types';

export interface OrbProps {
  state: OrbState;
  size?: number;
  onStateChange?: (state: OrbState) => void;
}

/**
 * Pulsing animated orb that reacts to: idle | listening | thinking | responding.
 * Render the orb on a <canvas> using 2D API; use useOrbState for animation params.
 */
export function Orb({ state, size = 240, onStateChange }: OrbProps) {
  // TODO: implement — canvas element, requestAnimationFrame loop, useOrbState
  return <canvas data-testid="orb-canvas" width={size} height={size} />;
}
