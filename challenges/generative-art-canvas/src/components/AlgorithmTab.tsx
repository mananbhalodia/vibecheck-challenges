import type { AlgorithmId, AlgorithmParams } from '../types/algorithms.types';

export interface AlgorithmTabProps {
  algorithmId: AlgorithmId;
  params: AlgorithmParams;
  onParamsChange: (params: AlgorithmParams) => void;
}

export function AlgorithmTab({ algorithmId, params, onParamsChange }: AlgorithmTabProps) {
  return <div data-testid={`algorithm-tab-${algorithmId}`}>Sliders for {algorithmId}</div>;
}
