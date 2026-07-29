import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — TrimMyPDF',
  description: 'How TrimMyPDF handles your files and data.',
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: July 2026</p>

      <div className="mt-10 space-y-10 text-gray-700">
        <section>
          <h2 className="text-lg font-semibold text-gray-900">Your files never leave your device</h2>
          <p className="mt-2">
            TrimMyPDF's merge and compress tools run entirely in your browser. When you drop a PDF into
            one of our tools, it is processed locally on your device using JavaScript — it is never
            uploaded, transmitted, or stored on our servers. We have no way to see, access, or retain the
            content of any file you process on this site.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Information we collect</h2>
          <p className="mt-2">Beyond the files you choose to process, we collect limited information:</p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>
              <span className="font-medium text-gray-900">Standard technical data</span> — such as your
              approximate location (country/region), browser type, device type, and pages visited. This is
              collected automatically by our hosting provider and any analytics tools we use, to
              understand traffic and keep the site running reliably.
            </li>
            <li>
              <span className="font-medium text-gray-900">Cookies and similar technologies</span> — used
              for basic site functionality and, where applicable, by advertising partners as described
              below.
            </li>
          </ul>
          <p className="mt-2">
            We do not require an account to use TrimMyPDF, and we do not ask for your name, email address,
            or payment details for the free tools.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Advertising and cookies</h2>
          <p className="mt-2">
            This site displays ads served by Google AdSense. Google and its partners may use cookies
            (including the DoubleClick DART cookie) to serve ads based on your visits to this and other
            websites, in order to show ads that are more relevant to you.
          </p>
          <p className="mt-2">
            You can opt out of personalized advertising by visiting{' '}
            <span className="font-medium text-gray-900">Google Ads Settings</span>, or opt out of
            third-party vendor use of cookies for personalization by visiting{' '}
            <span className="font-medium text-gray-900">www.aboutads.info</span>. You can also control or
            delete cookies through your browser settings at any time.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Third-party services</h2>
          <p className="mt-2">
            We use third-party services to run this site, including hosting and advertising providers.
            These providers may process technical data (like your IP address) under their own privacy
            policies. We recommend reviewing Google's Privacy &amp; Terms for details on how Google
            handles data across its advertising products.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Children's privacy</h2>
          <p className="mt-2">
            TrimMyPDF is not directed at children under 13, and we do not knowingly collect personal
            information from children.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Your rights</h2>
          <p className="mt-2">
            Depending on where you live, you may have rights over the limited data described above —
            including the right to know what's collected, and to request its deletion. Since we don't
            collect file content or require accounts, there is generally very little tied to you to
            request. For any questions or requests, contact us using the details below.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Changes to this policy</h2>
          <p className="mt-2">
            We may update this policy from time to time. Changes will be posted on this page with an
            updated "last updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900">Contact</h2>
          <p className="mt-2">
            Questions about this policy? Reach us at{' '}
            <span className="font-medium text-gray-900">josiasboco@gmail.com</span>.
          </p>
        </section>
      </div>
    </main>
  );
}
