'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import DropZone from '@/components/DropZone';
import Reveal from '@/components/Reveal';
import MergeIllustration from '@/components/MergeIllustration';
import TrustBadges from '@/components/TrustBadges';
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
    <main className="mx-auto max-w-2xl px-4 pb-24">
      {/* Hero — trust badges sit above the fold, before the headline */}
      <Reveal className="pt-16 text-center sm:pt-20">
        <TrustBadges />
        <h1 className="mt-6 tracking-tight text-gray-900">
          <span className="block text-6xl font-extrabold leading-[1.05] sm:text-7xl md:text-8xl">
            Merge PDF
          </span>
          <span className="mt-3 block text-2xl font-light text-gray-500 sm:text-3xl">
            in the right order
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-gray-600">
          Combine multiple PDFs into one — right in your browser.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-10">
        <MergeIllustration />
      </Reveal>

      {/* Tool */}
      <Reveal delay={150} className="mt-16">
        <DropZone multiple onFilesSelected={addFiles} />
      </Reveal>

      {files.length > 0 && (
        <ul className="mt-6 divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {files.map((file, i) => (
            <li key={`${file.name}-${i}`} className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="truncate text-gray-800">{file.name}</span>
              <button
                onClick={() => removeFile(i)}
                className="ml-4 shrink-0 rounded-full p-1 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
                aria-label={`Remove ${file.name}`}
              >
                <X strokeWidth={2.5} className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <button
        onClick={handleMerge}
        disabled={files.length < 2 || isProcessing}
        className="mt-8 w-full rounded-2xl bg-emerald-600 px-6 py-4 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-sm"
      >
        {isProcessing ? 'Merging…' : `Merge ${files.length || ''} PDFs`.trim()}
      </button>

      {resultUrl && (
        <Reveal className="mt-6">
          <a
            href={resultUrl}
            download="merged.pdf"
            className="flex items-center justify-center rounded-2xl border border-emerald-600 px-6 py-4 text-base font-semibold text-emerald-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-md"
          >
            Download merged.pdf
          </a>
        </Reveal>
      )}
    </main>
  );
}
