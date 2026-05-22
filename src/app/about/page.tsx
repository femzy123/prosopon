import type { Metadata } from "next";
import { CtaSection } from "@/components/site/cta-section";
import { SectionHeader } from "@/components/site/section-header";

export const metadata: Metadata = {
  title: "About — Prosopon",
  description:
    "Prosopon Inc. is a Canadian professional services firm — federally and provincially incorporated in 2021 — delivering advisory, project execution, and digital enablement to financial services, telecom, public sector, and retail leaders.",
  openGraph: {
    title: "About — Prosopon",
    description:
      "Canadian advisory and delivery firm helping enterprises execute complex transformation with discipline.",
  },
};

const principles = [
  [
    "Delivery in regulated, complex environments",
    "We've shipped inside banks, telecoms, and government — where compliance, scale, and stakeholder complexity are the default, not the exception.",
  ],
  [
    "Senior credibility, by design",
    "Our work earns trusted-advisor status with senior and C-suite leaders. Engagements are led by operators who have lived the problem.",
  ],
  [
    "Structured execution",
    "We bring disciplined delivery — agile, scrum, scaled agile, and enterprise governance — tailored to the program, not bolted on top of it.",
  ],
  [
    "Practical advisory, not generic frameworks",
    "Our recommendations come from delivery experience. We tailor solutions to your industry, particularly around emerging technologies like AI.",
  ],
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-prosopon py-24 sm:py-32">
          <p className="label-mono mb-6">About</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            A Canadian firm built for the complex middle of transformation.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Prosopon Inc. was federally and provincially incorporated in August 2021 to
            help organizations navigate transformation initiatives that demand structured
            execution, cross-functional coordination, and technology-informed decisions.
            What started as support for small and mid-sized organizations has grown into
            trusted-advisor relationships with senior leadership across financial services,
            telecommunications, public sector, and retail.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-muted/40">
        <div className="container-prosopon grid gap-16 py-24 sm:py-32 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeader
            description="We enable organizations to deliver transformation initiatives with confidence — combining structured project delivery, sector-informed advisory, and practical technology enablement that drives measurable business outcomes."
            eyebrow="Mission"
            title="Confidence in execution."
          />
          <div className="flex flex-col gap-6 text-base leading-relaxed text-muted-foreground">
            <p>
              The name <em>Prosopon</em> comes from the Greek word for the face one shows
              to the world — a fitting metaphor for the programs and products we help our
              clients bring to market.
            </p>
            <p>
              As clients prepare for 2026 budget cycles, demand for AI adoption is
              accelerating across operations, customer engagement, analytics, and
              enterprise delivery. Clients increasingly expect partners who demonstrate not
              only execution capability but informed guidance on best-in-class technology
              investments — tailored to their specific industry context.
            </p>
            <p>
              That&apos;s the work. Disciplined delivery, sector-aware advisory, and a flexible
              model that scales the right specialists onto the right engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-prosopon py-24 sm:py-32">
          <SectionHeader eyebrow="What sets us apart" title="Our competitive edge." />
          <div className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2">
            {principles.map(([title, description]) => (
              <div key={title} className="bg-background p-8 sm:p-10">
                <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/40">
        <div className="container-prosopon py-24">
          <SectionHeader
            description="A selection of organizations Prosopon has supported through delivery and advisory engagements."
            eyebrow="Partners"
            title="Trusted by enterprise leaders."
          />
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Bank of Montreal (BMO)",
              "TD Bank",
              "Rogers Communications",
              "TJX Canada",
              "Government of Alberta",
            ].map((partner) => (
              <div key={partner} className="bg-background p-6 text-center">
                <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground">
                  {partner.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-prosopon py-24">
          <SectionHeader
            description="Prosopon is led by its director, who provides strategic oversight, client engagement leadership, and delivery governance. We engage external specialists and trusted professional service providers as required to bring sector-specific expertise and technology enablement to each program."
            eyebrow="Team & model"
            title="Led from the top, scaled by specialists."
          />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
