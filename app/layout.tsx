import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { company } from "@/lib/site-data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL(`https://${company.domain}`),
  title: {
    default: `${company.brandName} | Premium eBooks & Affiliate Excellence`,
    template: `%s | ${company.brandName}`
  },
  description:
    "Scelta Infinity is a premium showcase platform for high-quality eBooks, trusted affiliate recommendations, and elite freelance digital publishing services.",
  openGraph: {
    title: `${company.brandName} | Premium eBooks & Affiliate Excellence`,
    description:
      "Discover professional Amazon KDP books, trusted affiliate recommendations, and verified service profiles on Fiverr and Upwork.",
    url: `https://${company.domain}`,
    siteName: company.brandName,
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
