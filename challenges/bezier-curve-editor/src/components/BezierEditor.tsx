/**
 * Single exported component: split-panel layout with curve canvas (left),
 * CSS output, easing preview, preset selector, and recents (right).
 * No required props.
 */
export function BezierEditor() {
  return (
    <div data-testid="bezier-editor" style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <div data-testid="curve-canvas-container" style={{ width: 400, height: 400, background: '#1a1a1f', borderRadius: 8 }} />
      <div data-testid="right-panel" style={{ minWidth: 280 }}>
        <div data-testid="css-output" style={{ fontFamily: 'monospace', marginBottom: 16 }}>cubic-bezier(0.42, 0, 0.58, 1)</div>
        <div data-testid="easing-preview" style={{ marginBottom: 16 }} />
        <div data-testid="preset-selector" style={{ marginBottom: 16 }} />
        <div data-testid="recent-curves" />
      </div>
    </div>
  );
}
