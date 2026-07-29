import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'TrimMyPDF — Free PDF tools that never leave your browser',
    template: '%s | TrimMyPDF',
  },
  description:
    'Merge and compress PDF files instantly, for free. Everything runs in your browser — no uploads, no accounts, no waiting.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/*
          Google Privacy & Messaging (formerly Funding Choices) — shows the
          consent banner to EU/UK/CA visitors before ads personalize.
          The pub ID below is correct, but this exact script (in particular
          the `?ers=1` query string) should be swapped for whatever Google
          generates once you create a message under
          AdSense > Privacy & messaging. Don't skip that dashboard step —
          without a configured message, this script has nothing to show.
        */}
        <Script
          id="google-funding-choices"
          src={`https://fundingchoicesmessages.google.com/i/${process.env.NEXT_PUBLIC_ADSENSE_PUB_ID}?ers=1`}
          strategy="beforeInteractive"
        />
        <Script id="google-funding-choices-present" strategy="beforeInteractive">
          {`(function() {
            function signalGooglefcPresent() {
              if (!window.frames['googlefcPresent']) {
                if (document.body) {
                  const iframe = document.createElement('iframe');
                  iframe.style.cssText = 'width:0;height:0;border:none;z-index:-1000;left:-1000px;top:-1000px;';
                  iframe.style.display = 'none';
                  iframe.name = 'googlefcPresent';
                  document.body.appendChild(iframe);
                } else {
                  setTimeout(signalGooglefcPresent, 0);
                }
              }
            }
            signalGooglefcPresent();
          })();`}
        </Script>

        {/* Google AdSense — loads on every page since this is the root layout */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
