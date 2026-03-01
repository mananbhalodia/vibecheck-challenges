export type AlgorithmId = 'flow-field' | 'lissajous' | 'recursive-tree';

export interface FlowFieldParams {
  noiseScale: number;
  particleSpeed: number;
  trailLength: number;
  particleCount: number;
}

export interface LissajousParams {
  freqA: number;
  freqB: number;
  phaseDelta: number;
  drawSpeed: number;
}

export interface RecursiveTreeParams {
  branchAngle: number;
  lengthRatio: number;
  maxDepth: number;
  swaySpeed: number;
}

export type AlgorithmParams = FlowFieldParams | LissajousParams | RecursiveTreeParams;
