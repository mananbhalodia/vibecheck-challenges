import type { OrbState } from '../types/orb.types';
import type { AnimationParams } from '../types/orb.types';

/**
 * Returns animation parameters for the current orb state.
 * State transitions should be 400ms ease-in-out.
 */
export function useOrbState(state: OrbState): AnimationParams {
  // TODO: implement — return distinct params per state (idle, listening, thinking, responding)
  const defaults: AnimationParams = {
    baseScale: 1,
    pulseAmplitude: 0.03,
    pulseFrequency: 1,
    glowIntensity: 0.5,
    primaryColor: '#6366f1',
    secondaryColor: '#8b5cf6',
    emitRipples: false,
    emitWaves: false,
  };
  return defaults;
}
