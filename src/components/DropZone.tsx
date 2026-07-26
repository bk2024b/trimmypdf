'use client';

import { useCallback, useId, useState } from 'react';

interface DropZoneProps {
  /** Allow selecting/dropping more than one file (merge needs this, compress doesn't) */
  multiple?: boolean;
  onFilesSelected: (files: File[]) => void;
  label?: string;
}

export default function DropZone({ multiple = false, onFilesSelected, label }: DropZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const inputId = useId();

  const handleFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList) return;
      const pdfFiles = Array.from(fileList).filter((f) => f.type === 'application/pdf');
      if (pdfFiles.length === 0) return;
      onFilesSelected(multiple ? pdfFiles : [pdfFiles[0]]);
    },
    [multiple, onFilesSelected]
  );

  return (
    <div
      role="button"
      tabIndex={0}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragging(false);
        handleFiles(e.dataTransfer.files);
      }}
      onClick={() => document.getElementById(inputId)?.click()}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') document.getElementById(inputId)?.click();
      }}
      className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-12 text-center cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
        isDragging
          ? 'border-emerald-500 bg-emerald-50'
          : 'border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100'
      }`}
    >
      <input
        id={inputId}
        type="file"
        accept="application/pdf"
        multiple={multiple}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
      <svg
        className="mb-3 h-8 w-8 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V4m0 12.5-4-4m4 4 4-4M4 20h16" />
      </svg>
      <p className="text-base font-medium text-gray-700">
        {label ?? (multiple ? 'Drop your PDF files here' : 'Drop your PDF file here')}
      </p>
      <p className="mt-1 text-sm text-gray-500">or click to browse — files never leave your browser</p>
    </div>
  );
}
