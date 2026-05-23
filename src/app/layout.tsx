import type { Metadata } from "next";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://prosopon.co"),
  title: {
    default: "Prosopon | Transformation Delivery and Advisory",
    template: "%s",
  },
  description:
    "Prosopon is a Canadian professional services firm helping organizations deliver complex transformation through structured execution, sector-aware advisory, and practical digital enablement.",
  authors: [{ name: "Prosopon" }],
  openGraph: {
    title: "Prosopon | Transformation Delivery and Advisory",
    description:
      "Structured delivery, advisory, and practical digital enablement for regulated and operationally complex organizations.",
    type: "website",
    images: ["/hero-bg.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prosopon | Transformation Delivery and Advisory",
    description:
      "Canadian professional services for transformation delivery, advisory, and digital enablement.",
    images: ["/hero-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="en" suppressHydrationWarning>
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
