'use client';

import { useCallback, useId, useState } from 'react';
import { FileUp } from 'lucide-react';

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
      className={`group flex flex-col items-center justify-center rounded-3xl border p-12 text-center cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 ${
        isDragging
          ? 'border-emerald-500 bg-emerald-50 shadow-lg -translate-y-0.5'
          : 'border-gray-200 bg-gray-50 shadow-sm hover:border-emerald-300 hover:bg-emerald-50/40 hover:shadow-md hover:-translate-y-0.5'
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
      <FileUp
        strokeWidth={2.5}
        className={`mb-3 h-9 w-9 transition-colors ${
          isDragging ? 'text-emerald-600' : 'text-gray-400 group-hover:text-emerald-500'
        }`}
        aria-hidden="true"
      />
      <p className="text-base font-medium text-gray-700">
        {label ?? (multiple ? 'Drop your PDF files here' : 'Drop your PDF file here')}
      </p>
      <p className="mt-1 text-sm text-gray-500">or click to browse — files never leave your browser</p>
    </div>
  );
}
