import type { Metadata } from "next";
import { ChartNoAxesCombined, Landmark, RadioTower } from "lucide-react";
import { CtaSection } from "@/components/site/cta-section";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Case Studies | Prosopon",
  description:
    "Representative Prosopon engagements across public sector, telecommunications, and financial services.",
  openGraph: {
    title: "Case Studies | Prosopon",
    description:
      "Selected delivery engagements for Government of Alberta, Rogers Communications, and Honey Wealth Asset Management.",
  },
};

const studies = [
  {
    icon: Landmark,
    company: "Government of Alberta Ministry of Municipal Affairs",
    meta: "Public sector | Grant application portal | Under $2M",
    paragraphs: [
      "The Ministry needed a robust financial management portal for local government grants, covering application, approval, allocation, payments, expenditure tracking, reporting, and audit.",
      "Prosopon led two cross-functional teams through a dual-track agile model, using Kanban for design discovery and Scrum for delivery. The work included onboarding, ways of working, backlog management, stakeholder reporting, and UAT stewardship.",
    ],
    points: [
      ["Dual-track", "Kanban discovery with Scrum delivery"],
      ["MVP-first", "Phased release strategy and continuous integration"],
      ["UAT", "Defect triage and change request stewardship"],
    ],
  },
  {
    icon: RadioTower,
    company: "Rogers Communications",
    meta: "Telecommunications | Identity, billing, payments | Near $1M",
    paragraphs: [
      "Rogers needed delivery support across customer-facing web and mobile features, including enterprise authentication, billing, payments, installment plans, and device affordability flows.",
      "Prosopon supported three cross-functional teams, coordinated PI Planning, Scrum of Scrums, System Demos, and ART Sync, and helped manage risks, dependencies, releases, and stakeholder communication.",
    ],
    points: [
      ["EAS", "Common authentication patterns across customer applications"],
      ["AutoPay", "Discount experience designed to reduce payment friction"],
      ["3 teams", "Scaled agile coordination across web and mobile squads"],
    ],
  },
  {
    icon: ChartNoAxesCombined,
    company: "Honey Wealth Asset Management",
    meta: "Financial services | CRM rollout | Under $700K",
    paragraphs: [
      "An investment firm client needed a cloud-based CRM to track analytics, customer success, support, feedback, complaints, and case management across an integrated operating environment.",
      "Prosopon supported the Salesforce rollout as Scrum Master, coaching agile practices, facilitating ceremonies, supporting go-live validation, and tracking delivery metrics across the team.",
    ],
    points: [
      ["Salesforce", "CRM rollout with analytics and support functions"],
      ["Integrated", "Jira, ServiceNow, analytics, and case workflows"],
      ["Predictable", "Improved cadence through agile coaching and delivery metrics"],
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="page-section section-hero-noir pt-24 sm:pt-32">
        <div className="container-prosopon">
          <Reveal>
            <p className="label-mono mb-6">Selected work</p>
            <h1 className="hero-title max-w-5xl">Proof from regulated delivery environments.</h1>
            <p className="mt-7 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Representative engagements across public sector, telecommunications, and financial
              services. Each summary is intentionally concise for senior review.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-section section-parchment">
        <RevealStagger className="container-prosopon grid gap-5" stagger={0.08}>
          {studies.map((study) => (
            <RevealItem key={study.company}>
              <article className="parchment-card case-study-card group grid gap-9 p-6 sm:p-10 lg:grid-cols-[minmax(0,0.65fr)_minmax(320px,1fr)]">
                <div>
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-border text-primary transition-colors duration-300 group-hover:border-primary/60 group-hover:text-[var(--gold-bright)]">
                    <study.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <p className="label-mono mt-3">{study.meta}</p>
                  <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                    {study.company}
                  </h2>
                </div>
                <div>
                  {study.paragraphs.map((paragraph) => (
                    <p className="mb-4 text-muted-foreground" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                  <div className="mt-7 grid gap-px border border-border bg-border sm:grid-cols-3">
                    {study.points.map(([value, label]) => (
                      <div className="parchment-stat p-5" key={label}>
                        <strong className="block text-xl tracking-tight">{value}</strong>
                        <span className="mt-2 block text-xs leading-relaxed text-muted-foreground">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      <CtaSection />
    </>
  );
}
