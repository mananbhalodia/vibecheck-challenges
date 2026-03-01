import type { OrbState } from '../types/orb.types';

export interface OrbControlsProps {
  currentState: OrbState;
  onStateChange: (state: OrbState) => void;
}

const LABELS: OrbState[] = ['idle', 'listening', 'thinking', 'responding'];

/**
 * Row of 4 labeled buttons to switch orb state. Style to match dark background.
 */
export function OrbControls({ currentState, onStateChange }: OrbControlsProps) {
  return (
    <div style={{ display: 'flex', gap: 12, marginTop: 24 }} role="group" aria-label="Orb state">
      {LABELS.map((label) => (
        <button
          key={label}
          type="button"
          onClick={() => onStateChange(label)}
          data-state={label}
          aria-pressed={currentState === label}
          style={{
            padding: '8px 16px',
            textTransform: 'capitalize',
            background: currentState === label ? '#333' : '#1a1a1f',
            color: '#e0e0e0',
            border: '1px solid #444',
            borderRadius: 8,
            cursor: 'pointer',
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
