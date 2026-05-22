import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact — Prosopon",
  description:
    "Tell us about your team and what you're trying to ship. We respond to every inquiry within two business days.",
  openGraph: {
    title: "Contact — Prosopon",
    description: "Get in touch with Prosopon — we respond within two business days.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-prosopon py-24 sm:py-32">
          <p className="label-mono mb-6">Contact</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Tell us about the work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A few sentences about your team and what you&apos;re trying to ship is enough to
            get started. We respond to every inquiry within two business days.
          </p>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
