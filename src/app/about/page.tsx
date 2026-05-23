import type { Metadata } from "next";
import { CtaSection } from "@/components/site/cta-section";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/reveal";
import { SectionHeader } from "@/components/site/section-header";

export const metadata: Metadata = {
  title: "About | Prosopon",
  description:
    "Prosopon Inc. is a Canadian professional services firm established in 2021, delivering advisory, project execution, and digital enablement.",
  openGraph: {
    title: "About | Prosopon",
    description:
      "A Canadian advisory and delivery firm helping organizations execute complex transformation with discipline.",
  },
};

const differentiators = [
  [
    "Delivery in regulated environments",
    "Experience across banks, telecommunications, public sector, and retail where governance and stakeholder complexity are the default.",
  ],
  [
    "Senior credibility by design",
    "Engagements are led with the judgment needed to support senior leaders, program owners, and cross-functional delivery teams.",
  ],
  [
    "Structured execution",
    "Prosopon brings disciplined delivery through agile, Scrum, scaled agile, and enterprise governance practices tailored to the program.",
  ],
  [
    "Practical advisory",
    "Recommendations are grounded in delivery experience and tailored to each industry context, especially around emerging AI adoption.",
  ],
];

const partners = ["Bank of Montreal", "TD Bank", "Rogers Communications", "TJX Canada", "Government of Alberta"];

export default function AboutPage() {
  return (
    <>
      <section className="page-section pt-24 sm:pt-32">
        <div className="container-prosopon">
          <Reveal>
            <p className="label-mono mb-6">About</p>
            <h1 className="hero-title max-w-5xl">
              A Canadian firm built for the complex middle of transformation.
            </h1>
            <p className="mt-7 max-w-3xl text-lg text-muted-foreground sm:text-xl">
              Prosopon Inc. was federally and provincially incorporated in August 2021 to
              help organizations navigate transformation initiatives that demand structured
              execution, cross-functional coordination, and technology-informed decisions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-section">
        <div className="container-prosopon grid gap-12 lg:grid-cols-[0.82fr_1fr]">
          <Reveal>
            <SectionHeader eyebrow="Mission" title="Confidence in execution." />
          </Reveal>
          <Reveal className="grid gap-5 text-muted-foreground">
            <p>
              Prosopon enables organizations to deliver transformation initiatives with
              confidence by combining structured project delivery, sector-informed advisory,
              and practical technology enablement that drives measurable business outcomes.
            </p>
            <p>
              The firm has evolved from supporting small and mid-sized organizations to serving
              senior leaders across financial services, telecommunications, public sector, and retail.
            </p>
            <p>
              As demand for AI adoption grows across operations, customer engagement, analytics, and
              enterprise delivery, Prosopon helps clients separate useful adoption from unmanaged risk.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-section">
        <div className="container-prosopon">
          <Reveal>
            <SectionHeader eyebrow="What sets us apart" title="Our competitive edge." />
          </Reveal>
          <RevealStagger className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
            {differentiators.map(([title, description]) => (
              <RevealItem key={title}>
                <article className="bg-card p-7 sm:p-10">
                  <h2 className="text-2xl font-extrabold tracking-tight">{title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground">{description}</p>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="page-section">
        <div className="container-prosopon">
          <Reveal>
            <SectionHeader
              description="A selection of organizations Prosopon has supported through delivery and advisory engagements."
              eyebrow="Partners"
              title="Trusted by enterprise leaders."
            />
          </Reveal>
          <RevealStagger className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {partners.map((partner) => (
              <RevealItem key={partner}>
                <div className="bg-card p-6 text-center">
                  <p className="font-serif text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {partner}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="page-section">
        <div className="container-prosopon">
          <Reveal>
            <SectionHeader
              description="Prosopon is led by its director, who provides strategic oversight, client engagement leadership, and delivery governance. The company engages external specialists and professional service providers when an engagement needs sector-specific expertise, technology enablement, or project execution capacity."
              eyebrow="Team model"
              title="Led from the top, scaled by specialists."
            />
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
