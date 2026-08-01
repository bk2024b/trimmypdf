import type { Metadata } from 'next';

const TITLE = 'Merge PDF — Combine Files Into One, Free';
const DESCRIPTION =
  'Merge multiple PDF files into one for free, right in your browser. No uploads, no account, and no limit on how many files you combine.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/merge-pdf' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/merge-pdf',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function MergePdfLayout({ children }: { children: React.ReactNode }) {
  return children;
}
