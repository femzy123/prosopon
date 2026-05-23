import type { Metadata } from "next";
import {
  BrainCircuit,
  Building2,
  Landmark,
  MessageSquareText,
  SlidersHorizontal,
  Target,
  UserRoundCheck,
  UsersRound,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { CtaSection } from "@/components/site/cta-section";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/reveal";
import { SectionHeader } from "@/components/site/section-header";

export const metadata: Metadata = {
  title: "Services | Prosopon",
  description:
    "Project delivery, digital enablement, transformation governance, and AI-informed advisory for organizations executing complex change.",
  openGraph: {
    title: "Services | Prosopon",
    description:
      "Disciplined delivery and sector-aware advisory across financial services, telecom, public sector, and retail.",
  },
};

const services = [
  {
    icon: Workflow,
    title: "Project, agile, and enterprise delivery",
    summary:
      "Embedded leadership for complex programs, including Scrum, Kanban, scaled agile coordination, executive reporting, risk management, and delivery governance.",
  },
  {
    icon: SlidersHorizontal,
    title: "Digital enablement and process improvement",
    summary:
      "Operational workflow redesign, automation, CRM and platform implementation, UAT stewardship, release coordination, and delivery support for technology change.",
  },
  {
    icon: Building2,
    title: "Enterprise and digital transformation",
    summary:
      "Modernization roadmaps, operating model design, legacy transformation, cloud and integration support, change enablement, and delivery readiness.",
  },
  {
    icon: BrainCircuit,
    title: "AI-informed advisory",
    summary:
      "Practical guidance on where AI can support operations, customer engagement, analytics, and enterprise delivery without creating unmanaged risk.",
  },
  {
    icon: Landmark,
    title: "Transformation governance",
    summary:
      "Decision forums, reporting cadence, dependency management, risk escalation, and stakeholder alignment for programs that need visibility and control.",
  },
  {
    icon: UsersRound,
    title: "Specialist delivery support",
    summary:
      "A flexible model that combines senior oversight with external specialists and professional service providers when an engagement needs deeper capability.",
  },
];

const models = [
  {
    icon: MessageSquareText,
    title: "Advisory",
    description: "Focused working sessions, executive guidance, readiness reviews, and decision support.",
  },
  {
    icon: UserRoundCheck,
    title: "Embedded",
    description:
      "Senior operator inside the team, leading delivery rituals, risk, reporting, and stakeholder coordination.",
  },
  {
    icon: Target,
    title: "Project",
    description: "Defined transformation scope with clear outcomes, cadence, governance, and handoff.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-section pt-24 sm:pt-32">
        <div className="container-prosopon">
          <Reveal>
            <p className="label-mono mb-6">Services</p>
            <h1 className="hero-title max-w-5xl">Execution leadership for high-stakes transformation.</h1>
            <p className="mt-7 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Prosopon brings senior delivery judgment to programs where complexity, regulation,
              and cross-functional coordination cannot be handled by generic playbooks.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-section">
        <div className="container-prosopon">
          <RevealStagger className="grid gap-4 lg:grid-cols-3">
            {services.map((service) => (
              <RevealItem className="h-full" key={service.title}>
                <article className="noir-card flex min-h-80 h-full flex-col p-7">
                  <div className="flex items-center gap-2">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-primary">
                      <service.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                  </div>
                  <h2 className="mt-14 text-2xl font-extrabold leading-tight tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground">{service.summary}</p>
                  <Link className="label-mono mt-auto pt-8 hover:text-foreground" href="/contact">
                    Discuss this service
                  </Link>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="page-section">
        <div className="container-prosopon">
          <Reveal className="grid gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(320px,0.45fr)] md:items-end">
            <SectionHeader eyebrow="Engagement models" title="Flexible by design, senior by default." />
            <p className="text-muted-foreground">
              Prosopon can advise leadership, embed into delivery, or lead a defined
              transformation workstream. The model follows the problem, not a preset package.
            </p>
          </Reveal>
          <RevealStagger className="mt-12 grid gap-3" stagger={0.06}>
            {models.map((model) => (
              <RevealItem key={model.title}>
                <article className="surface-panel grid gap-5 p-6 sm:grid-cols-[4rem_1fr] sm:p-7">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-primary">
                    <model.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h2 className="text-xl font-extrabold tracking-tight">{model.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{model.description}</p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
