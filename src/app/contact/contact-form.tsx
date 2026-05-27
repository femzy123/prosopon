"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/site/reveal";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="page-section">
      <div className="container-prosopon grid gap-12 lg:grid-cols-[0.82fr_1fr]">
        <Reveal>
          <form aria-label="Contact form" className="surface-panel p-6 sm:p-10" onSubmit={onSubmit}>
            {submitted ? (
              <div className="py-12 text-center" role="status">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-primary text-primary">
                  <Send aria-hidden="true" className="h-5 w-5" />
                </div>
                <h2 className="mt-6 text-3xl font-extrabold tracking-tight">Message received.</h2>
                <p className="mx-auto mt-3 max-w-md text-muted-foreground">
                  Thank you for reaching out. Prosopon will review the context and respond with a
                  practical next step.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field autoComplete="name" label="Name" name="name" required />
                  <Field autoComplete="email" label="Email" name="email" required type="email" />
                  <Field autoComplete="organization" label="Company" name="company" />
                  <div className="grid gap-2">
                    <label className="label-mono" htmlFor="service">
                      Service interest
                    </label>
                    <select
                      className="min-h-12 w-full rounded border border-input bg-white/70 px-3 text-sm text-foreground transition-colors focus:border-primary"
                      id="service"
                      name="service"
                    >
                      <option>Transformation delivery</option>
                      <option>AI-informed advisory</option>
                      <option>Digital enablement</option>
                      <option>Governance and delivery support</option>
                    </select>
                  </div>
                  <div className="grid gap-2 sm:col-span-2">
                    <label className="label-mono" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="min-h-36 w-full resize-y rounded border border-input bg-white/70 px-3 py-3 text-sm text-foreground transition-colors focus:border-primary"
                      id="message"
                      name="message"
                      required
                    />
                  </div>
                </div>
                <div className="mt-8">
                  <button className="gold-button" type="submit">
                    Send Message
                  </button>
                </div>
              </>
            )}
          </form>
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="surface-panel p-7 sm:p-10">
            <p className="label-mono mb-6">What happens next</p>
            <ol className="grid gap-6 text-muted-foreground">
              <li>
                <strong className="text-foreground">1. Context review:</strong> Prosopon reviews
                the note and identifies the likely delivery or advisory fit.
              </li>
              <li>
                <strong className="text-foreground">2. Intro call:</strong> A focused conversation
                clarifies goals, constraints, risk, and decision paths.
              </li>
              <li>
                <strong className="text-foreground">3. Engagement shape:</strong> The next step is
                scoped around the problem, whether advisory, embedded support, or a defined project.
              </li>
            </ol>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="grid gap-2">
      <label className="label-mono" htmlFor={name}>
        {label}
      </label>
      <input
        autoComplete={autoComplete}
        className="min-h-12 w-full rounded border border-input bg-white/70 px-3 text-sm text-foreground transition-colors focus:border-primary"
        id={name}
        name={name}
        required={required}
        type={type}
      />
    </div>
  );
}
