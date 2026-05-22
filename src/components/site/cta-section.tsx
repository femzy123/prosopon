import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="border-t border-border bg-primary text-primary-foreground">
      <div className="container-prosopon py-24 sm:py-32">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <p className="label-mono mb-6 !text-primary-foreground/60">Let&apos;s talk</p>
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Let&apos;s build something <br />
              that works.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end">
            <Link
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-background/90"
              href="/contact"
            >
              Book a Call <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              className="inline-flex h-12 items-center justify-center rounded-md border border-primary-foreground/20 px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              href="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
