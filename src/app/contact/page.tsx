import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — TrimMyPDF',
  description: 'Get in touch with the TrimMyPDF team.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Contact</h1>

      <div className="mt-8 space-y-6 text-gray-700">
        <p>
          Found a bug, have a question, or want to suggest a tool? Send an email — every message gets
          read.
        </p>

        <a
          href="mailto:josiasboco@gmail.com"
          className="inline-block rounded-lg bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-700"
        >
          josiasboco@gmail.com
        </a>
      </div>
    </main>
  );
}
