import type { Metadata } from 'next';

const TITLE = 'Compress PDF — Shrink File Size Without Losing Quality';
const DESCRIPTION =
  'Compress a PDF for free, right in your browser. Reduce file size by up to 90% with no uploads, no account, and nothing to install.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/compress-pdf' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/compress-pdf',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function CompressPdfLayout({ children }: { children: React.ReactNode }) {
  return children;
}
