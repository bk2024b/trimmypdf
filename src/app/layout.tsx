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
          Google Privacy & Messaging (formerly Funding Choices)
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

        {/*
          Google AdSense
        */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}`}
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />

        {/*
          Google Analytics (GA4)
        */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DRV08B6SV8"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-DRV08B6SV8');
          `}
        </Script>

        {/*
          Microsoft Clarity
        */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");`}
        </Script>
      </head>

      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}