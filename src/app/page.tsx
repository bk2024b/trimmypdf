import type { Metadata } from 'next';
import Link from 'next/link';
import { Combine, Shrink, ShieldCheck, LogIn, Sparkles, Upload, Wand2, Download } from 'lucide-react';
import ToolCard from '@/components/ToolCard';
import Reveal from '@/components/Reveal';
import TrustBadges from '@/components/TrustBadges';

export const metadata: Metadata = {
  title: 'TrimMyPDF — Free PDF tools that never leave your browser',
  description:
    'Merge and compress PDF files instantly, for free. Everything runs in your browser — no uploads, no accounts, no waiting.',
  alternates: { canonical: '/' },
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
  {
    question: 'Do I need to install anything?',
    answer:
      'No. TrimMyPDF runs entirely in your web browser — no downloads, no browser extensions, and no desktop software to keep updated.',
  },
  {
    question: 'Is there a file size limit?',
    answer:
      "There's no artificial cap we impose. In practice, the limit is your device's own memory rather than a rule we've set — most PDFs, including large scanned documents, process without issue.",
  },
  {
    question: 'Can I use TrimMyPDF on my phone?',
    answer:
      'Yes. Both tools work in any modern mobile browser, so you can merge or compress PDFs from your phone or tablet without installing an app.',
  },
];

const HOW_IT_WORKS = [
  {
    icon: Upload,
    title: 'Drop your file',
    description:
      'Drag and drop a PDF onto the tool, or click to browse and select one from your device. Nothing uploads yet — the file just loads into your browser.',
  },
  {
    icon: Wand2,
    title: 'Choose your tool',
    description:
      'Pick Merge to combine several PDFs into one in the order you want, or Compress to shrink a large file down to a manageable size.',
  },
  {
    icon: Download,
    title: 'Download instantly',
    description:
      'Your new PDF is ready in seconds. Since everything runs locally on your device, there is no upload queue and no wait.',
  },
];

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: '100% private',
    description: 'Files are processed on your device. Nothing is ever uploaded to a server.',
  },
  {
    icon: LogIn,
    title: 'No sign-up',
    description: 'Drop your file and go. No account or email required.',
  },
  {
    icon: Sparkles,
    title: 'Free to use',
    description: 'Core tools are free, with no limits that get in your way.',
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

      <Reveal className="mx-auto max-w-3xl px-4 pb-16 pt-20 text-center sm:pt-28">
        <TrustBadges />
        <h1 className="mt-6 tracking-tight text-gray-900">
          <span className="block text-6xl font-extrabold leading-[1.05] sm:text-7xl md:text-8xl">
            Free PDF tools
          </span>
          <span className="mt-3 block text-2xl font-light text-gray-500 sm:text-3xl">
            that never leave your browser
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600">
          Merge and compress PDF files instantly — no uploads, no accounts, no waiting.
        </p>
      </Reveal>

      <Reveal delay={100} className="mx-auto grid max-w-3xl gap-4 px-4 sm:grid-cols-2">
        <ToolCard
          href="/merge-pdf"
          title="Merge PDF"
          description="Combine multiple PDFs into one, in the order you choose."
          cta="Merge files"
          icon={Combine}
        />
        <ToolCard
          href="/compress-pdf"
          title="Compress PDF"
          description="Shrink a large PDF down to size, without leaving your browser."
          cta="Compress a file"
          icon={Shrink}
        />
      </Reveal>

      <section className="mx-auto mt-32 max-w-3xl px-4">
        <h2 className="text-center text-xl font-semibold text-gray-900">How it works</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {HOW_IT_WORKS.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Icon strokeWidth={2.5} className="h-4 w-4" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-3xl px-4">
        <div className="grid gap-4 border-t border-gray-200 pt-16 sm:grid-cols-3">
          {TRUST_ITEMS.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <Icon strokeWidth={2.5} className="h-5 w-5 text-emerald-600" />
                <h2 className="mt-3 font-semibold text-gray-900">{title}</h2>
                <p className="mt-1 text-sm text-gray-600">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="mx-auto mt-32 max-w-3xl px-4 pb-24">
        <h2 className="text-xl font-semibold text-gray-900">Frequently asked questions</h2>
        <div className="mt-6 space-y-6">
          {FAQS.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-medium text-gray-900">{faq.question}</h3>
              <p className="mt-1 text-sm text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <footer className="border-t border-gray-200 py-10">
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
