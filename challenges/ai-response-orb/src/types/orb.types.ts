export type OrbState = 'idle' | 'listening' | 'thinking' | 'responding';

export interface AnimationParams {
  baseScale: number;
  pulseAmplitude: number;
  pulseFrequency: number;
  glowIntensity: number;
  primaryColor: string;
  secondaryColor: string;
  emitRipples: boolean;
  emitWaves: boolean;
}
