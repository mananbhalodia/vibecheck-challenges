export interface EasingPreviewProps {
  cssCubicBezier: string;
}

export function EasingPreview({ cssCubicBezier }: EasingPreviewProps) {
  return (
    <div data-testid="easing-preview-box">
      <div style={{ width: 200, height: 40, background: '#222', borderRadius: 4, overflow: 'hidden' }} />
      <button type="button" data-testid="preview-button">Preview</button>
    </div>
  );
}
