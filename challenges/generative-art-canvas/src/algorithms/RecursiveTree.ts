import type { GenerativeAlgorithm } from './BaseAlgorithm';
import type { RecursiveTreeParams } from '../types/algorithms.types';

export class RecursiveTreeAlgorithm implements GenerativeAlgorithm {
  init(canvas: HTMLCanvasElement, params: RecursiveTreeParams): void {
    // TODO: implement — fractal tree, branch angle/length/depth, sway
  }

  update(params: RecursiveTreeParams): void {}

  destroy(): void {}
}
