import type { Metadata } from "next";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import "./globals.css";

import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prosopon.ca"),
  title: {
    default: "Prosopon | Transformation Delivery and Advisory",
    template: "%s",
  },
  description:
    "Prosopon is a Canadian professional services firm helping organizations deliver complex transformation through structured execution, sector-aware advisory, and practical digital enablement.",
  authors: [{ name: "Prosopon" }],
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-parchment.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
  openGraph: {
    title: "Prosopon | Transformation Delivery and Advisory",
    description:
      "Structured delivery, advisory, and practical digital enablement for regulated and operationally complex organizations.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prosopon - Transformation, delivered with discipline.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosopon | Transformation Delivery and Advisory",
    description:
      "Canadian professional services for transformation delivery, advisory, and digital enablement.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-scroll-behavior="smooth"
      lang="en"
      className={`${hankenGrotesk.variable} ${jetBrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1" id="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
