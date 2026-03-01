import type { Preset } from '../types/bezier.types';

export interface PresetSelectorProps {
  presets: Preset[];
  onSelect: (preset: Preset) => void;
}

export function PresetSelector({ presets, onSelect }: PresetSelectorProps) {
  return (
    <div data-testid="preset-buttons">
      {presets.map((p) => (
        <button key={p.name} type="button" data-preset={p.name} onClick={() => onSelect(p)}>
          {p.name}
        </button>
      ))}
    </div>
  );
}
