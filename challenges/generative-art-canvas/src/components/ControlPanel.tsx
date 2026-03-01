import type { AlgorithmId, AlgorithmParams } from '../types/algorithms.types';

export interface ControlPanelProps {
  algorithm: AlgorithmId;
  onAlgorithmChange: (id: AlgorithmId) => void;
  paused: boolean;
  onPausedChange: (paused: boolean) => void;
  onRegenerate: () => void;
  onSavePng: () => void;
}

const ALGORITHMS: { id: AlgorithmId; label: string }[] = [
  { id: 'flow-field', label: 'Flow Field' },
  { id: 'lissajous', label: 'Lissajous Curves' },
  { id: 'recursive-tree', label: 'Recursive Tree' },
];

export function ControlPanel({
  algorithm,
  onAlgorithmChange,
  paused,
  onPausedChange,
  onRegenerate,
  onSavePng,
}: ControlPanelProps) {
  return (
    <div data-testid="control-panel" style={{ minWidth: 260 }}>
      <div role="tablist" aria-label="Algorithm">
        {ALGORITHMS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={algorithm === id}
            onClick={() => onAlgorithmChange(id)}
            data-algorithm-tab={id}
          >
            {label}
          </button>
        ))}
      </div>
      <button type="button" data-testid="regenerate-btn" onClick={onRegenerate}>
        Regenerate
      </button>
      <button type="button" data-testid="pause-resume-btn" onClick={() => onPausedChange(!paused)}>
        {paused ? 'Resume' : 'Pause'}
      </button>
      <button type="button" data-testid="save-png-btn" onClick={onSavePng}>
        Save PNG
      </button>
    </div>
  );
}
