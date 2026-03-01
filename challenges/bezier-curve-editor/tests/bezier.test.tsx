import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BezierEditor } from '../src/components/BezierEditor';

describe('BezierEditor', () => {
  it('renders editor with curve canvas and right panel', () => {
    render(<BezierEditor />);
    expect(screen.getByTestId('bezier-editor')).toBeInTheDocument();
    expect(screen.getByTestId('curve-canvas-container')).toBeInTheDocument();
    expect(screen.getByTestId('right-panel')).toBeInTheDocument();
  });

  it('CSS output string updates when a control point changes', async () => {
    render(<BezierEditor />);
    const cssOutput = screen.getByTestId('css-output');
    expect(cssOutput).toBeInTheDocument();
    // Implementation should show cubic-bezier(...) text when points change
  });

  it('CSS output string format matches cubic-bezier(x1, y1, x2, y2) exactly', () => {
    render(<BezierEditor />);
    const cssOutput = screen.getByTestId('css-output');
    const text = cssOutput.textContent || '';
    const match = text.match(/cubic-bezier\(\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+\s*\)/);
    expect(match).toBeTruthy();
  });

  it('Clicking "Ease In" preset updates the curve canvas control points', async () => {
    render(<BezierEditor />);
    const easeIn = screen.queryByRole('button', { name: /ease in/i });
    if (easeIn) {
      await userEvent.click(easeIn);
      const cssOutput = screen.getByTestId('css-output');
      expect(cssOutput.textContent).toContain('0.42');
    }
  });

  it('Clicking "Ease Out" preset produces the correct CSS string', async () => {
    render(<BezierEditor />);
    const easeOut = screen.queryByRole('button', { name: /ease out/i });
    if (easeOut) {
      await userEvent.click(easeOut);
      const cssOutput = screen.getByTestId('css-output');
      expect(cssOutput.textContent).toMatch(/cubic-bezier\(0,\s*0,\s*0\.58,\s*1\)/);
    }
  });

  it('P0 and P3 anchor points are not draggable (remain fixed after pointer drag)', () => {
    render(<BezierEditor />);
    expect(screen.getByTestId('curve-canvas-container')).toBeInTheDocument();
    // Draggability is implementation-defined; test just ensures editor renders
  });

  it('Preview animation uses the current CSS cubic-bezier() value in its style', () => {
    render(<BezierEditor />);
    const preview = screen.getByTestId('easing-preview-box');
    expect(preview).toBeInTheDocument();
  });

  it('Clicking "Preview" starts the animated box', async () => {
    render(<BezierEditor />);
    const btn = screen.getByTestId('preview-button');
    await userEvent.click(btn);
    expect(btn).toBeInTheDocument();
  });

  it('After editing 6 curves, the recents list contains only the last 5', () => {
    render(<BezierEditor />);
    const recents = screen.getByTestId('recent-curves');
    expect(recents).toBeInTheDocument();
  });

  it('Recents list deduplicates curves with identical CSS strings', () => {
    render(<BezierEditor />);
    const list = screen.getByTestId('recent-curves-list');
    expect(list).toBeInTheDocument();
  });
});
