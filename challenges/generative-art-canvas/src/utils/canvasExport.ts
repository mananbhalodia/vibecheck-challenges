/**
 * Export current canvas frame as PNG download.
 */
export function exportCanvasAsPng(canvas: HTMLCanvasElement, filename = 'generative-art.png'): void {
  const dataUrl = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = filename;
  a.click();
}
