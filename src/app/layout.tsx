import type { Metadata } from "next";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://prosopon.co"),
  title: {
    default: "Prosopon — Tech Consulting for Modern Product Teams",
    template: "%s",
  },
  description:
    "Prosopon is a modern tech consulting firm helping startups and enterprises design, build, and scale digital products through strategy, product, and execution.",
  authors: [{ name: "Prosopon" }],
  openGraph: {
    title: "Prosopon — Tech Consulting for Modern Product Teams",
    description:
      "Strategy, product management, and engineering leadership for teams building digital products that scale.",
    type: "website",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fe0ab923-d1d2-4166-96f0-3586f3325e5a/id-preview-4e3299c6--16446757-8054-49c0-b83f-c65c67a11cac.lovable.app-1777233426809.png",
    ],
  },
  twitter: {
    card: "summary",
    title: "Prosopon — Tech Consulting for Modern Product Teams",
    description: "Prosopon builds scalable digital products for startups and enterprises.",
    images: [
      "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fe0ab923-d1d2-4166-96f0-3586f3325e5a/id-preview-4e3299c6--16446757-8054-49c0-b83f-c65c67a11cac.lovable.app-1777233426809.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
