import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — TrimMyPDF',
  description: 'Why TrimMyPDF exists and how it works.',
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">About TrimMyPDF</h1>

      <div className="mt-8 space-y-6 text-gray-700">
        <p>
          Most "free" PDF tools online come with a catch: file size limits, accounts you didn't ask for,
          or your document sitting on someone else's server while you wait. TrimMyPDF exists to do the
          opposite — a couple of PDF tools that work instantly, respect your files, and get out of your
          way.
        </p>

        <p>
          Every tool on this site runs entirely in your browser. Your PDF is processed on your own device
          and never uploaded anywhere — not for merging, not for compressing. There's no server in the
          middle to slow things down, queue your file, or quietly keep a copy.
        </p>

        <div>
          <h2 className="text-lg font-semibold text-gray-900">What that means for you</h2>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>No sign-up, no email, no account to manage</li>
            <li>No upload wait — processing starts the moment you drop a file</li>
            <li>Your files stay private, because they never leave your device</li>
            <li>Free to use, supported by ads rather than a paywall</li>
          </ul>
        </div>

        <p>
          TrimMyPDF is built and maintained independently. If something breaks, feels confusing, or you'd
          like to see another tool added, I'd genuinely like to hear about it —{' '}
          <Link href="/contact" className="font-medium text-emerald-700 hover:underline">
            get in touch
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
