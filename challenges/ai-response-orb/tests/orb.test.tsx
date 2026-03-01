import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Orb } from '../src/components/Orb';
import { OrbControls } from '../src/components/OrbControls';
import { useOrbState } from '../src/hooks/useOrbState';

describe('Orb', () => {
  it('Orb renders a <canvas> element on mount', () => {
    render(<Orb state="idle" size={240} />);
    const canvas = document.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
  });

  it('Orb applies correct size when size prop is passed', () => {
    render(<Orb state="idle" size={320} />);
    const canvas = screen.getByTestId('orb-canvas');
    expect(canvas).toHaveAttribute('width', '320');
    expect(canvas).toHaveAttribute('height', '320');
  });

  it('State buttons for all 4 states are present and labeled correctly', () => {
    const onStateChange = vi.fn();
    render(<OrbControls currentState="idle" onStateChange={onStateChange} />);
    expect(screen.getByRole('button', { name: /idle/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /listening/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /thinking/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /responding/i })).toBeInTheDocument();
  });

  it('Clicking "Listening" button triggers onStateChange with "listening"', async () => {
    const onStateChange = vi.fn();
    render(<OrbControls currentState="idle" onStateChange={onStateChange} />);
    await userEvent.click(screen.getByRole('button', { name: /listening/i }));
    expect(onStateChange).toHaveBeenCalledWith('listening');
  });

  it('Clicking "Thinking" button triggers onStateChange with "thinking"', async () => {
    const onStateChange = vi.fn();
    render(<OrbControls currentState="idle" onStateChange={onStateChange} />);
    await userEvent.click(screen.getByRole('button', { name: /thinking/i }));
    expect(onStateChange).toHaveBeenCalledWith('thinking');
  });

  it('Clicking "Responding" button triggers onStateChange with "responding"', async () => {
    const onStateChange = vi.fn();
    render(<OrbControls currentState="idle" onStateChange={onStateChange} />);
    await userEvent.click(screen.getByRole('button', { name: /responding/i }));
    expect(onStateChange).toHaveBeenCalledWith('responding');
  });

  it('Orb canvas has non-zero pixel data after 100ms (something is being drawn)', async () => {
    render(<Orb state="idle" size={100} />);
    const canvas = screen.getByTestId('orb-canvas') as HTMLCanvasElement;
    await waitFor(
      () => {
        const ctx = canvas.getContext('2d');
        expect(ctx).not.toBeNull();
        const imageData = ctx!.getImageData(50, 50, 1, 1);
        const hasNonZero = imageData.data.some((v) => v !== 0);
        expect(hasNonZero).toBe(true);
      },
      { timeout: 500 }
    );
  });

  it('useOrbState returns different primaryColor values for each distinct state', () => {
    const idle = useOrbState('idle');
    const listening = useOrbState('listening');
    const thinking = useOrbState('thinking');
    const responding = useOrbState('responding');
    const colors = [idle.primaryColor, listening.primaryColor, thinking.primaryColor, responding.primaryColor];
    const unique = new Set(colors);
    expect(unique.size).toBe(4);
  });
});
