import type { GenerativeAlgorithm } from './BaseAlgorithm';
import type { FlowFieldParams } from '../types/algorithms.types';

export class FlowFieldAlgorithm implements GenerativeAlgorithm {
  init(canvas: HTMLCanvasElement, params: FlowFieldParams): void {
    // TODO: implement — Perlin noise, 800 particles, trails
  }

  update(params: FlowFieldParams): void {}

  destroy(): void {}
}
