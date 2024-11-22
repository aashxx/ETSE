import { Metadata } from "@/utils/types";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import PageLayout from "@/custom-components/page-layout";
import Head from "next/head";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Relay Testing in Hyderabad | Electrical Testing Services",
  description: "Electrical Testing and Service Engineers provide expert relay testing, transformer testing, and energy meter calibration services in Hyderabad.",
  keywords: "relay testing in Hyderabad, transformer testing in Hyderabad, energy meter calibration in Hyderabad, relay testing, transformer testing, energy meter calibration",
  canonical: "https://www.etse.co.in",
  openGraph: {
    title: "Relay Testing in Hyderabad | Electrical Testing Services",
    description: "Electrical Testing and Service Engineers provide expert relay testing, transformer testing, and energy meter calibration services in Hyderabad.",
    url: "https://www.etse.co.in",
    images: [
      {
        url: "https://i.postimg.cc/MGBYBZkH/founder.jpg",
        width: 800,
        height: 600,
        alt: "Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relay Testing in Hyderabad | Electrical Testing Services",
    description: "Electrical Testing and Service Engineers provide expert relay testing, transformer testing, and energy meter calibration services in Hyderabad.",
    image: "https://i.postimg.cc/MGBYBZkH/founder.jpg",
  },
};

const jsonLd = {
  "@context": "http://schema.org",
  "@type": "Organization",
  "name": "Electrical Testing and Service Engineers",
  "@id": "https://www.etse.co.in",
  "url": "https://www.etse.co.in",
  "logo": "https://i.postimg.cc/MGBYBZkH/founder.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot No. 10 W, Anupuram, Kapra, ECIL Post",
    "addressLocality": "Hyderabad",
    "postalCode": "500062",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+919949545959",
    "contactType": "Customer Service"
  },
  "sameAs": [
    "https://www.linkedin.com/company/electrical-testing-and-service-engineers"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={metadata.canonical} />
        {metadata.openGraph && (
          <>
            <meta property="og:title" content={metadata.openGraph.title} />
            <meta property="og:description" content={metadata.openGraph.description} />
            <meta property="og:url" content={metadata.openGraph.url} />
            {metadata.openGraph.images && metadata.openGraph.images.length > 0 && (
              <meta property="og:image" content={metadata.openGraph.images[0].url} />
            )}
          </>
        )}
        {metadata.twitter && (
          <>
            <meta name="twitter:card" content={metadata.twitter.card} />
            <meta name="twitter:title" content={metadata.twitter.title} />
            <meta name="twitter:description" content={metadata.twitter.description} />
            <meta name="twitter:image" content={metadata.twitter.image} />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body className={dm_sans.className}>
        <PageLayout>
          {children}
        </PageLayout>
      </body>
    </html>
  );
}
