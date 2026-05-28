import type { Metadata } from "next";
import { Reveal } from "@/components/site/reveal";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact | Prosopon",
  description:
    "Tell Prosopon about your transformation, delivery, or advisory challenge and start a practical conversation.",
  openGraph: {
    title: "Contact | Prosopon",
    description: "Start a conversation with Prosopon about transformation delivery and advisory support.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="page-section section-hero-noir pt-24 sm:pt-32">
        <div className="container-prosopon grid gap-12 lg:grid-cols-[0.82fr_1fr]">
          <Reveal>
            <p className="label-mono mb-6">Start the conversation</p>
            <h1 className="hero-title max-w-4xl">Tell us what needs to move.</h1>
            <p className="mt-7 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              A short note about your team, program, or advisory need is enough to begin.
              Prosopon will respond with a practical next step.
            </p>
          </Reveal>
          <Reveal className="grid gap-4" delay={0.08}>
            <aside className="surface-panel p-7 transition-transform duration-200 hover:-translate-y-1 hover:border-primary/60 sm:p-10">
              <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-primary">
                Good fit conversations
              </h2>
              <ul className="grid gap-4 text-muted-foreground">
                <li>Complex transformation initiatives that need delivery structure</li>
                <li>Regulated or stakeholder-heavy programs with execution risk</li>
                <li>AI-informed advisory tied to operations, analytics, or enterprise delivery</li>
              </ul>
            </aside>
            <aside className="surface-panel p-7 transition-transform duration-200 hover:-translate-y-1 hover:border-primary/60 sm:p-10">
              <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-primary">
                Direct contact
              </h2>
              <p>
                <a className="text-foreground hover:text-primary" href="mailto:hello@prosopon.co">
                  hello@prosopon.co
                </a>
              </p>
              <p className="mt-4 text-muted-foreground">Initial inquiries are handled by email.</p>
            </aside>
          </Reveal>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
