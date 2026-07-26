'use client';

import { useState } from 'react';
import DropZone from '@/components/DropZone';
import { compressPdf, type CompressQuality } from '@/lib/pdf/compress';

const QUALITY_OPTIONS: { value: CompressQuality; label: string }[] = [
  { value: 'low', label: 'Smallest file' },
  { value: 'medium', label: 'Balanced' },
  { value: 'high', label: 'Best quality' },
];

export default function CompressPdfPage() {
  const [file, setFile] = useState<File | null>(null);
  const [quality, setQuality] = useState<CompressQuality>('medium');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<{ url: string; size: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFile = (files: File[]) => {
    setFile(files[0] ?? null);
    setResult(null);
    setError(null);
  };

  const handleCompress = async () => {
    if (!file) return;
    setIsProcessing(true);
    setError(null);
    try {
      const blob = await compressPdf(file, quality);
      setResult({ url: URL.createObjectURL(blob), size: blob.size });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong while compressing.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Compress PDF</h1>
      <p className="mt-2 text-gray-600">
        Shrink your PDF file size, right in your browser. Best for scanned or image-heavy PDFs.
      </p>

      <div className="mt-8">
        <DropZone onFilesSelected={handleFile} label="Drop your PDF file here" />
      </div>

      {file && (
        <div className="mt-4 rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-800">
          {file.name} · {(file.size / 1024 / 1024).toFixed(2)} MB
        </div>
      )}

      <div className="mt-6 flex gap-2">
        {QUALITY_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setQuality(opt.value)}
            className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
              quality === opt.value
                ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                : 'border-gray-200 text-gray-600 hover:border-gray-300'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <button
        onClick={handleCompress}
        disabled={!file || isProcessing}
        className="mt-6 w-full rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {isProcessing ? 'Compressing…' : 'Compress PDF'}
      </button>

      {result && file && (
        <div className="mt-4 space-y-2">
          <p className="text-sm text-gray-600">
            New size: {(result.size / 1024 / 1024).toFixed(2)} MB
            {result.size < file.size && (
              <span className="text-emerald-700"> · {Math.round((1 - result.size / file.size) * 100)}% smaller</span>
            )}
          </p>
          <a
            href={result.url}
            download="compressed.pdf"
            className="flex items-center justify-center rounded-lg border border-emerald-600 px-6 py-3 font-medium text-emerald-700 hover:bg-emerald-50"
          >
            Download compressed.pdf
          </a>
        </div>
      )}
    </main>
  );
}
