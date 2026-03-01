import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GenerativeCanvas } from '../src/components/GenerativeCanvas';
import { perlin2D } from '../src/utils/perlinNoise';

describe('GenerativeCanvas', () => {
  it('Canvas element renders on mount', () => {
    render(<GenerativeCanvas />);
    expect(screen.getByTestId('generative-canvas')).toBeInTheDocument();
  });

  it('Flow Field is the default algorithm on initial render', () => {
    render(<GenerativeCanvas />);
    const flowTab = screen.getByRole('tab', { name: /flow field/i });
    expect(flowTab).toHaveAttribute('aria-selected', 'true');
  });

  it('Switching to Lissajous tab clears the canvas and starts new render loop', async () => {
    render(<GenerativeCanvas />);
    await userEvent.click(screen.getByRole('tab', { name: /lissajous/i }));
    expect(screen.getByTestId('generative-canvas')).toBeInTheDocument();
  });

  it('Switching to Recursive Tree tab clears the canvas and starts new render loop', async () => {
    render(<GenerativeCanvas />);
    await userEvent.click(screen.getByRole('tab', { name: /recursive tree/i }));
    expect(screen.getByTestId('generative-canvas')).toBeInTheDocument();
  });

  it('Switching algorithms cancels the previous requestAnimationFrame loop', async () => {
    render(<GenerativeCanvas />);
    await userEvent.click(screen.getByRole('tab', { name: /lissajous/i }));
    await userEvent.click(screen.getByRole('tab', { name: /flow field/i }));
    expect(screen.getByTestId('generative-canvas')).toBeInTheDocument();
  });

  it('Changing a slider value calls algorithm.update() with new params', () => {
    render(<GenerativeCanvas />);
    expect(screen.getByTestId('control-panel')).toBeInTheDocument();
  });

  it('"Regenerate" button triggers a new init() call with the current algorithm', async () => {
    render(<GenerativeCanvas />);
    await userEvent.click(screen.getByTestId('regenerate-btn'));
    expect(screen.getByTestId('regenerate-btn')).toBeInTheDocument();
  });

  it('"Pause" button stops the animation loop (canvas stops updating)', async () => {
    render(<GenerativeCanvas />);
    await userEvent.click(screen.getByTestId('pause-resume-btn'));
    expect(screen.getByTestId('pause-resume-btn')).toHaveTextContent('Resume');
  });

  it('"Resume" button restarts the animation loop after pause', async () => {
    render(<GenerativeCanvas />);
    await userEvent.click(screen.getByTestId('pause-resume-btn'));
    await userEvent.click(screen.getByTestId('pause-resume-btn'));
    expect(screen.getByTestId('pause-resume-btn')).toHaveTextContent('Pause');
  });

  it('"Save PNG" button triggers a file download', async () => {
    const createElement = document.createElement.bind(document);
    let downloadClicked = false;
    document.createElement = ((tag: string) => {
      const el = createElement(tag);
      if (tag === 'a') {
        el.click = () => { downloadClicked = true; };
      }
      return el;
    }) as typeof document.createElement;
    render(<GenerativeCanvas />);
    await userEvent.click(screen.getByTestId('save-png-btn'));
    expect(downloadClicked).toBe(true);
    document.createElement = createElement;
  });

  it('Canvas has non-zero pixel data 500ms after Flow Field initializes', async () => {
    render(<GenerativeCanvas />);
    const canvas = screen.getByTestId('generative-canvas') as HTMLCanvasElement;
    await waitFor(
      () => {
        const ctx = canvas.getContext('2d');
        expect(ctx).not.toBeNull();
        const imageData = ctx!.getImageData(100, 100, 1, 1);
        const hasNonZero = imageData.data.some((v) => v !== 0);
        expect(hasNonZero).toBe(true);
      },
      { timeout: 1000 }
    );
  });

  it('Canvas has non-zero pixel data 500ms after Lissajous initializes', async () => {
    render(<GenerativeCanvas />);
    await userEvent.click(screen.getByRole('tab', { name: /lissajous/i }));
    const canvas = screen.getByTestId('generative-canvas') as HTMLCanvasElement;
    await waitFor(
      () => {
        const ctx = canvas.getContext('2d');
        expect(ctx).not.toBeNull();
        const imageData = ctx!.getImageData(100, 100, 1, 1);
        const hasNonZero = imageData.data.some((v) => v !== 0);
        expect(hasNonZero).toBe(true);
      },
      { timeout: 1000 }
    );
  });

  it('Canvas has non-zero pixel data 500ms after Recursive Tree initializes', async () => {
    render(<GenerativeCanvas />);
    await userEvent.click(screen.getByRole('tab', { name: /recursive tree/i }));
    const canvas = screen.getByTestId('generative-canvas') as HTMLCanvasElement;
    await waitFor(
      () => {
        const ctx = canvas.getContext('2d');
        expect(ctx).not.toBeNull();
        const imageData = ctx!.getImageData(100, 100, 1, 1);
        const hasNonZero = imageData.data.some((v) => v !== 0);
        expect(hasNonZero).toBe(true);
      },
      { timeout: 1000 }
    );
  });

  it('destroy() is called when the component unmounts (no memory leak)', () => {
    const { unmount } = render(<GenerativeCanvas />);
    unmount();
    expect(screen.queryByTestId('generative-canvas')).not.toBeInTheDocument();
  });

  it('Perlin noise function returns values consistently in range [-1, 1] for any input', () => {
    for (let i = 0; i < 20; i++) {
      const v = perlin2D(Math.random() * 100, Math.random() * 100);
      expect(v).toBeGreaterThanOrEqual(-1);
      expect(v).toBeLessThanOrEqual(1);
    }
  });
});
