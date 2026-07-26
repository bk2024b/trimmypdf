import { PDFDocument } from 'pdf-lib';

/**
 * Merges multiple PDF files into a single PDF, in the order given.
 * Runs entirely in the browser — nothing is uploaded anywhere.
 */
export async function mergePdfs(files: File[]): Promise<Blob> {
  if (files.length < 2) {
    throw new Error('Select at least two PDF files to merge.');
  }

  const mergedPdf = await PDFDocument.create();

  for (const file of files) {
    const bytes = await file.arrayBuffer();
    const pdf = await PDFDocument.load(bytes);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  const mergedBytes = await mergedPdf.save();
  return new Blob([mergedBytes], { type: 'application/pdf' });
}
