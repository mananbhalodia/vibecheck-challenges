import { useRef, useState } from 'react';
import type { AlgorithmId } from '../types/algorithms.types';
import { ControlPanel } from './ControlPanel';
import { exportCanvasAsPng } from '../utils/canvasExport';

export function GenerativeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [algorithm, setAlgorithm] = useState<AlgorithmId>('flow-field');
  const [paused, setPaused] = useState(false);

  return (
    <div data-testid="generative-canvas-container" style={{ display: 'flex', gap: 24 }}>
      <canvas
        ref={canvasRef}
        data-testid="generative-canvas"
        width={800}
        height={500}
        style={{ width: '65%', maxWidth: 900, background: '#0d0d12', borderRadius: 8 }}
      />
      <ControlPanel
        algorithm={algorithm}
        onAlgorithmChange={setAlgorithm}
        paused={paused}
        onPausedChange={setPaused}
        onRegenerate={() => {}}
        onSavePng={() => canvasRef.current && exportCanvasAsPng(canvasRef.current)}
      />
    </div>
  );
}
