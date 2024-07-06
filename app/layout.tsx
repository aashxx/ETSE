import { Metadata } from "@/utils/types";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import PageLayout from "@/custom-components/page-layout";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Relay Testing and Transformer Testing in Hyderabad | Electrical Testing and Service Engineers",
  description: "Electrical Testing and Service Engineers provide expert relay testing, transformer testing, and energy meter calibration services in Hyderabad. Established in 1984 with over 40 years of excellence.",
  keywords: "relay testing in Hyderabad, transformer testing in Hyderabad, energy meter calibration in Hyderabad, relay testing, transformer testing, energy meter calibration",
  openGraph: {
    title: "Relay Testing and Transformer Testing in Hyderabad | Electrical Testing and Service Engineers",
    description: "Electrical Testing and Service Engineers provide expert relay testing, transformer testing, and energy meter calibration services in Hyderabad. Established in 1984 with over 40 years of excellence.",
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
    title: "Relay Testing and Transformer Testing in Hyderabad | Electrical Testing and Service Engineers",
    description: "Electrical Testing and Service Engineers provide expert relay testing, transformer testing, and energy meter calibration services in Hyderabad. Established in 1984 with over 40 years of excellence.",
    image: "https://i.postimg.cc/MGBYBZkH/founder.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
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
      </head>
      <body className={dm_sans.className}>
        <PageLayout>
          {children}
        </PageLayout>
      </body>
    </html>
  );
}
