import { useState } from 'react';
import type { OrbState } from './types/orb.types';
import { Orb } from './components/Orb';
import { OrbControls } from './components/OrbControls';

export default function App() {
  const [state, setState] = useState<OrbState>('idle');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <Orb state={state} size={240} onStateChange={setState} />
      <OrbControls currentState={state} onStateChange={setState} />
    </div>
  );
}
