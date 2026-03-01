import type { AlgorithmParams } from '../types/algorithms.types';

export interface GenerativeAlgorithm {
  init(canvas: HTMLCanvasElement, params: AlgorithmParams): void;
  update(params: AlgorithmParams): void;
  destroy(): void;
}
