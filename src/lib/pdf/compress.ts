import { PDFDocument } from 'pdf-lib';

export type CompressQuality = 'low' | 'medium' | 'high';

// scale = render resolution multiplier, jpegQuality = 0-1 JPEG compression level.
// Lower scale/quality = smaller file, more visible quality loss.
const QUALITY_SETTINGS: Record<CompressQuality, { scale: number; jpegQuality: number }> = {
  low: { scale: 1.0, jpegQuality: 0.5 },
  medium: { scale: 1.5, jpegQuality: 0.7 },
  high: { scale: 2.0, jpegQuality: 0.85 },
};

let workerConfigured = false;

/**
 * Compresses a PDF entirely client-side.
 *
 * IMPORTANT TRADE-OFF (v1 approach): this renders every page to an image and
 * rebuilds the PDF from those images. That's the reliable way to shrink
 * image-heavy / scanned PDFs in the browser without a native library — but
 * the output loses selectable/searchable text, since every page becomes a
 * flat image. Fine for scanned documents and photo-heavy PDFs; not ideal for
 * text-heavy documents someone wants to keep searchable.
 *
 * A future iteration could special-case genuinely text-based PDFs (recompress
 * only the embedded images, keep text as text) or offer a server-side
 * Ghostscript pass as a Pro feature for those cases.
 */
export async function compressPdf(file: File, quality: CompressQuality = 'medium'): Promise<Blob> {
  if (typeof window === 'undefined') {
    throw new Error('compressPdf can only run in the browser.');
  }

  // Dynamic import on purpose: a static top-level `import * as pdfjsLib from
  // 'pdfjs-dist'` gets evaluated by Next.js during prerendering, which runs
  // in Node.js — and pdf.js reaches for browser-only APIs (DOMMatrix) as
  // soon as it's loaded, crashing the build. Importing it lazily here means
  // it's only ever loaded in the browser, when this function actually runs.
  const pdfjsLib = await import('pdfjs-dist');

  if (!workerConfigured) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
    workerConfigured = true;
  }

  const { scale, jpegQuality } = QUALITY_SETTINGS[quality];

  const bytes = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: bytes }).promise;
  const outputDoc = await PDFDocument.create();

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const viewport = page.getViewport({ scale });

    const canvas = document.createElement('canvas');
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas 2D context unavailable.');

    await page.render({ canvasContext: ctx, viewport, canvas }).promise;

    const jpegDataUrl = canvas.toDataURL('image/jpeg', jpegQuality);
    const jpegBytes = await fetch(jpegDataUrl).then((res) => res.arrayBuffer());
    const jpegImage = await outputDoc.embedJpg(jpegBytes);

    const outputPage = outputDoc.addPage([viewport.width, viewport.height]);
    outputPage.drawImage(jpegImage, {
      x: 0,
      y: 0,
      width: viewport.width,
      height: viewport.height,
    });
  }

  const outputBytes = await outputDoc.save();
  return new Blob([new Uint8Array(outputBytes)], { type: 'application/pdf' });
}