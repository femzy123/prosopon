import type { Metadata } from "next";
import { CtaSection } from "@/components/site/cta-section";

export const metadata: Metadata = {
  title: "Case Studies — Prosopon",
  description:
    "Selected delivery and advisory engagements by Prosopon — across the Government of Alberta, Rogers Communications, and Canadian financial services.",
  openGraph: {
    title: "Case Studies — Prosopon",
    description:
      "Real engagements: GoA Grant Application Portal, Rogers Enterprise Authentication & Frictionless AutoPay, and an investment-firm Salesforce CRM rollout.",
  },
};

const studies = [
  {
    company: "Government of Alberta — Ministry of Municipal Affairs",
    sector: "Public Sector · Grant Application Portal · <$2M",
    problem:
      "The Ministry needed a robust financial management portal to handle the full lifecycle of grants for local governments — application, approval, allocation, payments, expenditure tracking, reporting, and audit — without the friction of legacy processes.",
    solution:
      "Senior Scrum Master leading two cross-functional teams (service designers, full-stack engineers, QA automation, DevOps, digital architects, BAs, product owners, content designers, and UX) under a dual-track agile model: Kanban for design discovery, Scrum for delivery. Phased MVP-first releases with continuous integration of features.",
    outcomes: [
      ["Dual-track", "Kanban design + Scrum delivery"],
      ["MVP-first", "Phased release strategy"],
      ["UAT", "End-to-end stewardship of internal acceptance"],
    ],
  },
  {
    company: "Rogers Communications",
    sector: "Telecommunications · Identity, Billing & Payments · ~$1M",
    problem:
      "Rogers' identity and access management was implemented inconsistently across enterprise applications, increasing attack surface, operational expense, and time-to-market. Customer-facing billing flows also needed friction removed to lift autopay enrolment.",
    solution:
      "Supported three cross-functional Scrum teams across Wireless, Connected Home, and Manage & Support — delivering Enterprise Authentication Services (EAS), the Frictionless AutoPay discount experience, Installment Payment Plans, and Device Affordability pre-orders. Acted as RTE coordinating PI Planning, Scrum of Scrums, and System Demos within the Scaled Agile framework.",
    outcomes: [
      ["EAS", "Common CIAM patterns across customer apps"],
      ["AutoPay", "Eligible-customer discount applied automatically"],
      ["3 ARTs", "Coordinated across mobile & web teams"],
    ],
  },
  {
    company: "Honey Wealth Asset Management",
    sector: "Financial Services · Salesforce CRM Rollout · <$700K",
    problem:
      "An investment firm client needed a cloud-based CRM to track real-time analytics, customer success, complaints, and case management — integrated across their existing Jira and ServiceNow estate, with virtual-assistant features for incident handling.",
    solution:
      "Scrum Master to a cross-functional team of developers, QA, BAs, product owners, content designers, UX/UI, and analytics. Coached the team on agile values, facilitated ceremonies, and tracked velocity and burn metrics. Supported go-live and post go-live validations across SIT and production releases.",
    outcomes: [
      ["Real-time", "Customer analytics, support, and feedback"],
      ["Integrated", "Salesforce → Jira → ServiceNow"],
      ["Predictable", "Time-to-market via mature agile cadence"],
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="container-prosopon py-24 sm:py-32">
          <p className="label-mono mb-6">Case studies</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Selected work, plainly told.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A few engagements that best represent how Prosopon operates — across
            government, telecom, and financial services. Program values are approximate
            and reflect the in-scope portion of work led by Prosopon.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-muted/40">
        <div className="container-prosopon flex flex-col gap-px py-24 sm:py-32">
          {studies.map((study, index) => (
            <article key={study.company} className="border border-border bg-background p-8 sm:p-12">
              <div className="flex items-center justify-between gap-6">
                <p className="label-mono">{study.sector}</p>
                <p className="font-mono text-xs text-muted-foreground">{`0${index + 1} / 0${studies.length}`}</p>
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                {study.company}
              </h2>

              <div className="mt-10 grid gap-10 lg:grid-cols-2">
                <div>
                  <p className="label-mono mb-3">Problem</p>
                  <p className="text-base leading-relaxed text-muted-foreground">{study.problem}</p>
                </div>
                <div>
                  <p className="label-mono mb-3">Solution</p>
                  <p className="text-base leading-relaxed text-muted-foreground">{study.solution}</p>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3">
                {study.outcomes.map(([value, label]) => (
                  <div key={label} className="bg-background p-6">
                    <p className="text-2xl font-semibold tracking-tight">{value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
