'use client';

import { useState } from 'react';
import DropZone from '@/components/DropZone';
import { mergePdfs } from '@/lib/pdf/merge';

export default function MergePdfPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const addFiles = (newFiles: File[]) => {
    setResultUrl(null);
    setError(null);
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleMerge = async () => {
    setIsProcessing(true);
    setError(null);
    try {
      const blob = await mergePdfs(files);
      setResultUrl(URL.createObjectURL(blob));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong while merging.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Merge PDF files</h1>
      <p className="mt-2 text-gray-600">
        Combine multiple PDFs into one, in the order you choose. Everything happens on your device.
      </p>

      <div className="mt-8">
        <DropZone multiple onFilesSelected={addFiles} />
      </div>

      {files.length > 0 && (
        <ul className="mt-6 divide-y divide-gray-200 rounded-lg border border-gray-200">
          {files.map((file, i) => (
            <li key={`${file.name}-${i}`} className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="truncate text-gray-800">{file.name}</span>
              <button
                onClick={() => removeFile(i)}
                className="ml-4 shrink-0 text-gray-400 hover:text-red-500"
                aria-label={`Remove ${file.name}`}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <button
        onClick={handleMerge}
        disabled={files.length < 2 || isProcessing}
        className="mt-6 w-full rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {isProcessing ? 'Merging…' : `Merge ${files.length || ''} PDFs`.trim()}
      </button>

      {resultUrl && (
        <a
          href={resultUrl}
          download="merged.pdf"
          className="mt-4 flex items-center justify-center rounded-lg border border-emerald-600 px-6 py-3 font-medium text-emerald-700 hover:bg-emerald-50"
        >
          Download merged.pdf
        </a>
      )}
    </main>
  );
}
