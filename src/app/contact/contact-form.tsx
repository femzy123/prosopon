"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="border-b border-border bg-muted/40">
      <div className="container-prosopon grid gap-16 py-24 lg:grid-cols-[1fr_1.4fr]">
        <aside className="flex flex-col gap-10">
          <div>
            <p className="label-mono mb-4">Direct</p>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4" strokeWidth={1.5} />
                hello@prosopon.co
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4" strokeWidth={1.5} />
                +1 (415) 555-0144
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4" strokeWidth={1.5} />
                San Francisco · Remote-first
              </li>
            </ul>
          </div>

          <div className="border border-border bg-background p-6">
            <p className="label-mono mb-3">Prefer to schedule?</p>
            <p className="text-sm text-muted-foreground">
              Book a 30-minute intro call directly. We&apos;ll send a calendar link after
              a brief intake email — no hold-music phone tree.
            </p>
          </div>
        </aside>

        <form className="border border-border bg-background p-8 sm:p-10" onSubmit={onSubmit}>
          {submitted ? (
            <div className="py-12 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">
                <Send className="h-5 w-5" />
              </div>
              <h2 className="mt-6 text-2xl font-semibold tracking-tight">Message received.</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                We&apos;ll reply within two business days. If it&apos;s urgent, email
                hello@prosopon.co directly.
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" required type="email" />
              </div>
              <Field label="Company" name="company" />
              <div>
                <label className="label-mono mb-2 block !text-foreground" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full resize-none border border-border bg-background px-3 py-3 text-sm outline-none transition-colors focus:border-foreground"
                  id="message"
                  name="message"
                  placeholder="What are you working on?"
                  required
                  rows={6}
                />
              </div>
              <button
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-foreground"
                type="submit"
              >
                Send message <Send className="h-4 w-4" />
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="label-mono mb-2 block !text-foreground" htmlFor={name}>
        {label}
        {required ? <span className="ml-1 text-muted-foreground">*</span> : null}
      </label>
      <input
        className="h-11 w-full border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-foreground"
        id={name}
        name={name}
        required={required}
        type={type}
      />
    </div>
  );
}
