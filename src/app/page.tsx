import type { Metadata } from 'next';
import Link from 'next/link';
import ToolCard from '@/components/ToolCard';

export const metadata: Metadata = {
  title: 'TrimMyPDF — Free PDF tools that never leave your browser',
  description:
    'Merge and compress PDF files instantly, for free. Everything runs in your browser — no uploads, no accounts, no waiting.',
};

const FAQS = [
  {
    question: 'Is it really free?',
    answer: 'Yes. Merging and compressing PDFs is free, with no artificial limits on typical file sizes.',
  },
  {
    question: 'Where do my files go?',
    answer: 'Nowhere. Processing happens locally in your browser — your PDF is never uploaded to a server.',
  },
  {
    question: 'Will compressing lose quality?',
    answer:
      'Some, depending on the setting you choose. Pick "Best quality" for light compression, or "Smallest file" to shrink as much as possible.',
  },
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* Signature mark: a faint echo of the logo, ties the brand together without shouting */}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 text-emerald-600 opacity-[0.06] sm:h-[28rem] sm:w-[28rem]"
        fill="none"
        stroke="currentColor"
        strokeWidth={4}
      >
        <path d="M50 10h70l40 40v130a10 10 0 0 1-10 10H50a10 10 0 0 1-10-10V20a10 10 0 0 1 10-10Z" />
        <path d="M120 10v40h40" />
      </svg>

      <section className="mx-auto max-w-3xl px-4 pb-16 pt-20 text-center sm:pt-28">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Free PDF tools that never leave your browser.
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
          Merge and compress PDF files instantly — no uploads, no accounts, no waiting.
        </p>
      </section>

      <section className="mx-auto grid max-w-3xl gap-4 px-4 sm:grid-cols-2">
        <ToolCard
          href="/merge-pdf"
          title="Merge PDF"
          description="Combine multiple PDFs into one, in the order you choose."
          cta="Merge files"
        />
        <ToolCard
          href="/compress-pdf"
          title="Compress PDF"
          description="Shrink a large PDF down to size, without leaving your browser."
          cta="Compress a file"
        />
      </section>

      <section className="mx-auto mt-24 max-w-3xl px-4">
        <div className="grid gap-8 border-t border-gray-200 pt-12 sm:grid-cols-3">
          <div>
            <h2 className="font-semibold text-gray-900">100% private</h2>
            <p className="mt-1 text-sm text-gray-600">
              Files are processed on your device. Nothing is ever uploaded to a server.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">No sign-up</h2>
            <p className="mt-1 text-sm text-gray-600">Drop your file and go. No account or email required.</p>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">Free to use</h2>
            <p className="mt-1 text-sm text-gray-600">Core tools are free, with no limits that get in your way.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-3xl px-4 pb-24">
        <h2 className="text-xl font-semibold text-gray-900">Frequently asked questions</h2>
        <dl className="mt-6 space-y-6">
          {FAQS.map((faq) => (
            <div key={faq.question}>
              <dt className="font-medium text-gray-900">{faq.question}</dt>
              <dd className="mt-1 text-sm text-gray-600">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

      <footer className="border-t border-gray-200 py-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 px-4 text-sm text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} TrimMyPDF</p>
          <nav className="flex gap-4">
            <Link href="/about" className="hover:text-gray-700">
              About
            </Link>
            <Link href="/privacy" className="hover:text-gray-700">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-gray-700">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
