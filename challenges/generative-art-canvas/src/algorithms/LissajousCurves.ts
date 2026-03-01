import type { GenerativeAlgorithm } from './BaseAlgorithm';
import type { LissajousParams } from '../types/algorithms.types';

export class LissajousAlgorithm implements GenerativeAlgorithm {
  init(canvas: HTMLCanvasElement, params: LissajousParams): void {
    // TODO: implement — x = A·sin(aω·t+δ), y = B·sin(bω·t)
  }

  update(params: LissajousParams): void {}

  destroy(): void {}
}
