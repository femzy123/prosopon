import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Compass, LayoutGrid, Workflow } from "lucide-react";
import Link from "next/link";
import { CtaSection } from "@/components/site/cta-section";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/reveal";
import { SectionHeader } from "@/components/site/section-header";

export const metadata: Metadata = {
  title: "Prosopon — Transformation Delivery & Advisory",
  description:
    "Prosopon is a Canadian advisory and delivery firm helping banks, telecoms, government, and retail leaders execute complex transformation with disciplined project delivery and AI-informed enablement.",
  openGraph: {
    title: "Prosopon — Transformation Delivery & Advisory",
    description:
      "Sector-informed advisory and structured project delivery for regulated, complex transformation programs.",
  },
};

const services = [
  {
    icon: Workflow,
    title: "Project & Enterprise Delivery",
    desc: "Project, agile, and enterprise delivery management for complex, regulated, cross-functional programs.",
  },
  {
    icon: LayoutGrid,
    title: "Digital Enablement",
    desc: "Operational process improvement, workflow automation, and technology implementation that ships.",
  },
  {
    icon: Compass,
    title: "Transformation Advisory",
    desc: "Sector-informed guidance on modernization, execution readiness, and AI-informed transformation governance.",
  },
];

const stats = [
  { value: "2021", label: "Canadian incorporated" },
  { value: "4", label: "Core sectors served" },
  { value: "5+", label: "Enterprise partners" },
  { value: "100%", label: "Growth via referral" },
];

const partners = ["BMO", "TD", "Rogers", "TJX Canada", "Gov. of Alberta"];

const industries = [
  ["Financial Services", "BMO · TD · wealth & banking platforms"],
  ["Telecommunications", "Rogers · enterprise authentication, billing & payments"],
  ["Public Sector", "Government of Alberta · grants, citizen-facing portals"],
  ["Retail", "TJX Canada · operational & digital enablement"],
];

const insights = [
  {
    tag: "Point of view",
    date: "2026",
    title: "Why regulated delivery still beats velocity theatre.",
    excerpt:
      "Inside banks and government, structured execution outperforms speed-for-its-own-sake. A short field note on what actually ships.",
  },
  {
    tag: "Field note",
    date: "2026",
    title: "AI-informed advisory, without the hype cycle.",
    excerpt:
      "How we evaluate AI inside enterprise programs — narrowly scoped, governance-first, and only where it compounds delivery.",
  },
  {
    tag: "Case insight",
    date: "2026",
    title: "Dual-track Agile inside the public sector.",
    excerpt:
      "Lessons from delivering a citizen-facing grant portal under audit, accessibility, and procurement constraints.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative -mt-16 overflow-hidden border-b border-border bg-[#0d0a08]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundPosition: "center right",
            backgroundSize: "cover",
          }}
        />
        <div
          aria-hidden
          className="animate-drift pointer-events-none absolute -left-32 top-1/3 h-[34rem] w-[34rem] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(closest-side, rgba(232,160,90,0.18), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="animate-drift-2 pointer-events-none absolute -right-40 -top-20 h-[40rem] w-[40rem] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(closest-side, rgba(120,90,200,0.14), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #0d0a08 0%, rgba(13,10,8,0.92) 45%, rgba(13,10,8,0.55) 75%, rgba(13,10,8,0.2) 100%)",
          }}
        />
        <div aria-hidden className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay" />
        <div className="container-prosopon relative pb-24 pt-40 sm:pb-32 sm:pt-48 lg:pb-40 lg:pt-56">
          <p className="label-mono animate-rise mb-8 text-white/50" style={{ animationDelay: "60ms" }}>
            Canadian professional services · Est. 2021
          </p>
          <h1
            className="animate-rise max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "140ms" }}
          >
            Transformation, delivered <br className="hidden sm:block" />
            with <span className="font-light italic text-white/80">discipline.</span>
          </h1>
          <p className="animate-rise mt-8 max-w-xl text-lg text-white/70" style={{ animationDelay: "260ms" }}>
            Prosopon is a Canadian advisory and delivery firm helping banks, telecoms, government,
            and retail leaders execute complex transformation — with structured project delivery,
            sector-informed advisory, and practical AI-era enablement.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: "380ms" }}>
            <Link
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 text-sm font-medium text-[#0d0a08] transition-colors hover:bg-white/90"
              href="/contact"
            >
              Book a Discovery Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              className="inline-flex h-12 items-center justify-center rounded-md border border-white/25 bg-white/5 px-6 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
              href="/services"
            >
              View Services
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-white/15 pt-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-xs text-white/55">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container-prosopon py-12 sm:py-16">
          <p className="label-mono mb-8 text-center text-muted-foreground">Trusted by leaders at</p>
          <div className="grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {partners.map((partner) => (
              <div
                key={partner}
                className="text-center font-mono text-sm tracking-[0.18em] text-muted-foreground/80 sm:text-base"
              >
                {partner.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ambient-glow relative overflow-hidden border-b border-border">
        <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
        <div className="container-prosopon relative py-24 sm:py-32">
          <Reveal>
            <SectionHeader
              description="We bring delivery patterns proven inside regulated, complex environments — and tailor them to your industry's realities."
              eyebrow="Industries"
              title="Sector-informed, not sector-agnostic."
            />
          </Reveal>
          <RevealStagger className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2">
            {industries.map(([title, description]) => (
              <RevealItem key={title}>
                <div className="glow-card group relative h-full border border-transparent p-8 sm:p-10">
                  <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-foreground">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-foreground/70 transition-all duration-500 group-hover:w-full" />
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="ambient-glow border-b border-border bg-background">
        <div className="container-prosopon py-24 sm:py-32">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeader
                description="Short, opinionated points of view from inside complex programs — written by the people doing the work."
                eyebrow="Insights"
                title="Field notes from regulated delivery."
              />
              <Link className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:opacity-80" href="/case-studies">
                See case studies
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>

          <RevealStagger className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
            {insights.map((insight) => (
              <RevealItem key={insight.title} className="h-full">
                <article className="glow-card group flex h-full flex-col border border-transparent p-8">
                  <div className="label-mono flex items-center gap-3">
                    <span>{insight.tag}</span>
                    <span className="h-px w-6 bg-border" />
                    <span>{insight.date}</span>
                  </div>
                  <h3 className="mt-8 text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-foreground">
                    {insight.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{insight.excerpt}</p>
                  <div className="mt-auto pt-10">
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground">
                      Read
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="ambient-glow border-b border-border bg-muted/30">
        <div className="container-prosopon py-24 sm:py-32">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeader
                description="From early discovery through enterprise delivery, we plug into your team where it matters most."
                eyebrow="What we do"
                title="Three disciplines, one outcome."
              />
              <Link className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:opacity-80" href="/services">
                All services
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>

          <RevealStagger className="mt-16 grid gap-px border border-border bg-border md:grid-cols-3">
            {services.map((service) => (
              <RevealItem key={service.title} className="h-full">
                <div className="glow-card group h-full border border-transparent p-8">
                  <service.icon className="h-6 w-6 text-foreground transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-105" strokeWidth={1.5} />
                  <h3 className="mt-8 text-xl font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                  <Link className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-foreground" href="/services">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
        <div className="container-prosopon relative py-24 sm:py-32">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <SectionHeader
                description="We embed quickly, communicate plainly, and ship in tight iterations. You always know what's happening and why."
                eyebrow="How we work"
                title="A clear process. No surprises."
              />
            </Reveal>
            <RevealStagger className="flex flex-col gap-10" stagger={0.1}>
              {[
                ["01", "Discover", "Stakeholder interviews, technical audit, and a written point of view within two weeks."],
                ["02", "Design", "Roadmap, architecture, and the operating model needed to execute confidently."],
                ["03", "Deliver", "Embedded leadership and weekly checkpoints until the work is in production."],
                ["04", "Hand off", "Documentation, training, and a clean transition back to your team."],
              ].map(([number, title, description]) => (
                <RevealItem key={number}>
                  <div className="group grid grid-cols-[auto_1fr] gap-6 border-t border-border pt-6 transition-colors hover:border-foreground/40">
                    <span className="font-mono text-sm text-muted-foreground transition-colors group-hover:text-foreground">{number}</span>
                    <div>
                      <h3 className="text-lg font-semibold">{title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
