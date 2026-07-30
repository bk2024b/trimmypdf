'use client';

import { useState } from 'react';
import DropZone from '@/components/DropZone';
import Reveal from '@/components/Reveal';
import CompressIllustration from '@/components/CompressIllustration';
import TrustBadges from '@/components/TrustBadges';
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
    <main className="mx-auto max-w-2xl px-4 pb-24">
      {/* Hero — trust badges sit above the fold, before the headline */}
      <Reveal className="pt-16 text-center sm:pt-20">
        <TrustBadges />
        <h1 className="mt-6 tracking-tight text-gray-900">
          <span className="block text-6xl font-extrabold leading-[1.05] sm:text-7xl md:text-8xl">
            Compress PDF
          </span>
          <span className="mt-3 block text-2xl font-light text-gray-500 sm:text-3xl">
            without losing quality
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-gray-600">
          Reduce your PDF size by up to 90% — right in your browser.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-10">
        <CompressIllustration />
      </Reveal>

      {/* Tool */}
      <Reveal delay={150} className="mt-16">
        <DropZone onFilesSelected={handleFile} label="Drop your PDF file here" />
      </Reveal>

      {file && (
        <div className="mt-4 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm">
          {file.name} · {(file.size / 1024 / 1024).toFixed(2)} MB
        </div>
      )}

      <div className="mt-6 flex gap-3">
        {QUALITY_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            onClick={() => setQuality(opt.value)}
            className={`flex-1 rounded-2xl border px-3 py-3 text-sm font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
              quality === opt.value
                ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                : 'border-gray-200 bg-white text-gray-600 hover:border-emerald-300'
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
        className="mt-8 w-full rounded-2xl bg-emerald-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-sm"
      >
        {isProcessing ? 'Compressing…' : 'Compress PDF'}
      </button>

      {result && file && (
        <Reveal className="mt-6 space-y-3">
          <p className="text-sm text-gray-600">
            New size: {(result.size / 1024 / 1024).toFixed(2)} MB
            {result.size < file.size && (
              <span className="font-medium text-emerald-700">
                {' '}
                · {Math.round((1 - result.size / file.size) * 100)}% smaller
              </span>
            )}
          </p>
          <a
            href={result.url}
            download="compressed.pdf"
            className="flex items-center justify-center rounded-2xl border border-emerald-600 px-6 py-4 text-base font-semibold text-emerald-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-md"
          >
            Download compressed.pdf
          </a>
        </Reveal>
      )}
    </main>
  );
}
