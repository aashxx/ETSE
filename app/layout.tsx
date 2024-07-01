import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import PageLayout from "@/custom-components/page-layout";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ETSE",
  description: "Electrical Testing and Service Engineers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <PageLayout>
          {children}
        </PageLayout>
      </body>
    </html>
  );
}
