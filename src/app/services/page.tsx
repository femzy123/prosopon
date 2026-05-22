import type { Metadata } from "next";
import { ArrowRight, Check, Compass, LayoutGrid, Workflow } from "lucide-react";
import Link from "next/link";
import { CtaSection } from "@/components/site/cta-section";
import { SectionHeader } from "@/components/site/section-header";

export const metadata: Metadata = {
  title: "Services — Prosopon",
  description:
    "Project & enterprise delivery, digital enablement, transformation support, and sector-informed advisory for organizations executing complex change.",
  openGraph: {
    title: "Services — Prosopon",
    description:
      "Disciplined delivery and sector-informed advisory across financial services, telecom, public sector, and retail.",
  },
};

const services = [
  {
    icon: Workflow,
    title: "Project, Agile & Enterprise Delivery",
    summary: "Embedded delivery leadership for complex, regulated, cross-functional programs.",
    bullets: [
      "Scrum, Kanban, and Scaled Agile facilitation",
      "PI Planning, Scrum of Scrums, RTE coordination",
      "Risk, dependency, and stakeholder management",
      "Executive reporting and program governance",
    ],
  },
  {
    icon: LayoutGrid,
    title: "Digital Enablement & Process Improvement",
    summary: "Operational workflow redesign, automation, and technology implementation.",
    bullets: [
      "Workflow automation and tooling rollouts",
      "CRM and platform implementations (e.g. Salesforce)",
      "Cloud migration and integration support",
      "UAT stewardship and release coordination",
    ],
  },
  {
    icon: Compass,
    title: "Enterprise & Digital Transformation",
    summary: "Structured execution of large-scale modernization, including AI adoption.",
    bullets: [
      "Transformation roadmaps & operating model design",
      "Legacy modernization and platform consolidation",
      "AI adoption planning across core functions",
      "Change enablement and team upskilling",
    ],
  },
  {
    icon: Compass,
    title: "Advisory Services",
    summary: "Sector-informed guidance for modernization, execution readiness, and governance.",
    bullets: [
      "Transformation governance frameworks",
      "Execution readiness assessments",
      "AI-informed technology investment guidance",
      "Trusted-advisor support to senior leadership",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-prosopon py-24 sm:py-32">
          <p className="label-mono mb-6">Services</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Senior leadership, on demand.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Three core disciplines, scoped to fit your team. Engage us for a sprint, a
            quarter, or as long as you need to ship the next chapter of your product.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-muted/40">
        <div className="container-prosopon py-24 sm:py-32">
          <div className="flex flex-col gap-px border border-border bg-border">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="grid gap-10 bg-background p-8 sm:p-12 lg:grid-cols-[1fr_1.4fr]"
              >
                <div>
                  <p className="label-mono mb-4">{`0${index + 1}`}</p>
                  <service.icon className="h-7 w-7" strokeWidth={1.5} />
                  <h2 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-base text-muted-foreground">{service.summary}</p>
                </div>
                <div>
                  <p className="label-mono mb-6">What&apos;s included</p>
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link className="mt-8 inline-flex items-center gap-1 text-sm font-medium hover:opacity-70" href="/contact">
                    Discuss this engagement <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-prosopon py-24">
          <SectionHeader eyebrow="Engagement models" title="Flexible by design." />
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
            {[
              ["Advisory", "Weekly working sessions with your leadership team.", "From 4 weeks"],
              ["Embedded", "Senior operator inside your team, full or part-time.", "From 8 weeks"],
              ["Project", "Defined scope with a fixed timeline and outcome.", "Custom"],
            ].map(([title, description, duration]) => (
              <div key={title} className="bg-background p-8">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                <p className="label-mono mt-6">{duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
