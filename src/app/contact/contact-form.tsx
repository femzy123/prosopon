"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/site/reveal";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setError("");
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { message?: string } | null;
        throw new Error(data?.message || "The message could not be sent right now.");
      }

      form.reset();
      setStatus("submitted");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "The message could not be sent right now.",
      );
      setStatus("idle");
    }
  }

  return (
    <section className="page-section section-parchment">
      <div className="container-prosopon grid gap-12 lg:grid-cols-[0.82fr_1fr]">
        <Reveal>
          <form
            aria-busy={status === "submitting"}
            aria-label="Contact form"
            className="obsidian-panel rounded-2xl p-6 sm:p-10"
            onSubmit={onSubmit}
          >
            {status === "submitted" ? (
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
                <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
                  <label htmlFor="website">Website</label>
                  <input autoComplete="off" id="website" name="website" tabIndex={-1} type="text" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field autoComplete="name" label="Name" maxLength={120} name="name" required />
                  <Field
                    autoComplete="email"
                    label="Email"
                    maxLength={254}
                    name="email"
                    required
                    type="email"
                  />
                  <Field
                    autoComplete="organization"
                    label="Company"
                    maxLength={160}
                    name="company"
                  />
                  <div className="grid gap-2">
                    <label className="label-mono" htmlFor="service">
                      Service interest
                    </label>
                    <select
                      className="min-h-12 w-full rounded border border-input bg-(--parchment) px-3 text-sm text-background transition-colors focus:border-primary"
                      id="service"
                      name="service"
                      required
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
                      className="min-h-36 w-full resize-y rounded border border-input bg-(--parchment) px-3 py-3 text-sm text-background transition-colors focus:border-primary"
                      id="message"
                      maxLength={4000}
                      name="message"
                      required
                    />
                  </div>
                </div>
                {error ? (
                  <p className="mt-5 text-sm text-primary" role="alert">
                    {error}
                  </p>
                ) : null}
                <div className="mt-8">
                  <button
                    className="gold-button disabled:cursor-not-allowed disabled:opacity-70"
                    disabled={status === "submitting"}
                    type="submit"
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </>
            )}
          </form>
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="parchment-card p-7 sm:p-10">
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
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  maxLength?: number;
}) {
  return (
    <div className="grid gap-2">
      <label className="label-mono" htmlFor={name}>
        {label}
      </label>
      <input
        autoComplete={autoComplete}
        className="min-h-12 w-full rounded border border-input bg-[var(--parchment)] px-3 text-sm text-background transition-colors focus:border-primary"
        id={name}
        maxLength={maxLength}
        name={name}
        required={required}
        type={type}
      />
    </div>
  );
}
