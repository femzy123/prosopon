import type { Metadata } from "next";
import { BrainCircuit, BriefcaseBusiness, Compass, Cog, ShieldCheck, UsersRound, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlogPostGrid } from "@/components/site/blog-post-grid";
import { CtaSection } from "@/components/site/cta-section";
import { Reveal, RevealItem, RevealStagger } from "@/components/site/reveal";
import { SectionHeader } from "@/components/site/section-header";
import { getBloggerPosts } from "@/lib/blogger";
import type { BlogPost } from "@/lib/blogger-types";

export const metadata: Metadata = {
  title: "Prosopon | Transformation Delivery and Advisory",
  description:
    "Prosopon helps banks, telecoms, public sector teams, and retail leaders deliver complex transformation with structured execution and practical AI-informed enablement.",
  openGraph: {
    title: "Prosopon | Transformation Delivery and Advisory",
    description:
      "Sector-aware advisory and structured project delivery for regulated, complex transformation programs.",
  },
};

const stats = [
  { value: "2015", label: "Canadian incorporated firm" },
  { value: "4", label: "Core sectors served" },
  { value: "5+", label: "Enterprise and public sector partners" },
  { value: "100%", label: "Growth led by referral and delivery trust" },
];

const leaders = [
  { name: "Bank of Montreal", logo: "/leaders/bmo-blue-on-transparent-en.svg", width: 174, height: 42 },
  { name: "TD Bank", logo: "/leaders/td-logo-desktop.png", width: 110, height: 42 },
  { name: "Rogers Communications", logo: "/leaders/rogers.png", width: 148, height: 42 },
  { name: "TJX Canada", logo: "/leaders/tjx-canada.png", width: 132, height: 42 },
  { name: "Government of Alberta", logo: "/leaders/alberta.svg", width: 168, height: 42 },
];
const marqueeLeaders = [...leaders, ...leaders];

const capabilities = [
  {
    icon: BriefcaseBusiness,
    title: "Enterprise delivery",
    body: "Project, agile, and enterprise delivery leadership for programs that need structure, pace, and governance.",
  },
  {
    icon: Cog,
    title: "Digital enablement",
    body: "Workflow automation, process improvement, and technology implementation tied to measurable outcomes.",
  },
  {
    icon: Compass,
    title: "Transformation advisory",
    body: "Sector-informed guidance for modernization, execution readiness, governance, and practical AI adoption.",
  },
];

const methods = [
  ["01", "Diagnose", "Understand the program context, stakeholders, constraints, risks, and delivery readiness."],
  ["02", "Structure", "Set the roadmap, governance, team rituals, decision paths, and reporting cadence."],
  ["03", "Deliver", "Lead cross-functional execution through sprint delivery, dependency management, and release readiness."],
  ["04", "Transfer", "Leave teams with cleaner operating practices, better visibility, and a stronger execution model."],
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Regulated delivery context",
    body: "Experience across banking, telecommunications, public sector, and retail environments where governance and stakeholder trust matter.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Execution over theatre",
    body: "Clear roadmaps, visible risks, practical ceremonies, and decision paths that keep work moving toward delivery.",
  },
  {
    icon: BrainCircuit,
    title: "AI with operational restraint",
    body: "AI-informed advisory focused on useful adoption, workflow fit, data quality, and risk awareness.",
  },
  {
    icon: UsersRound,
    title: "Flexible specialist model",
    body: "Senior oversight can be paired with external specialists when the work requires deeper technical or domain support.",
  },
];

export default async function HomePage() {
  const latestPosts = await getHomeBlogPosts();

  return (
    <>
      <section className="relative -mt-19 min-h-dvh overflow-hidden border-b border-border bg-(--black-brown)">
        <div
          aria-hidden="true"
          className="hero-image-breathe pointer-events-none absolute inset-0 hidden bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-85 md:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(16,14,10,0.98),rgba(16,14,10,0.78)_43%,rgba(16,14,10,0.22))]"
        />
        <div className="container-prosopon relative grid min-h-dvh items-center gap-14 pb-20 pt-36 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.55fr)]">
          <div>
            <p className="label-mono animate-rise mb-6">
              Canadian professional services | Established 2015
            </p>
            <h1 className="hero-title animate-rise text-foreground [animation-delay:90ms]">
              Transformation, delivered with{" "}
              <span className="italic text-(--antique-gold) font-light">
                discipline
              </span>
              .
            </h1>
            <p className="animate-rise mt-7 max-w-2xl text-lg text-muted-foreground [animation-delay:170ms] sm:text-xl">
              Prosopon helps banks, telecoms, public sector teams, and retail
              leaders deliver complex transformation with structured execution,
              sector-aware advisory, and practical AI-informed enablement.
            </p>
            <div className="animate-rise mt-9 flex flex-wrap flex-col sm:flex-row gap-3 [animation-delay:260ms]">
              <Link className="gold-button" href="/contact">
                Start a Conversation
              </Link>
              <Link className="ghost-button" href="/services">
                Explore Services
              </Link>
            </div>
          </div>

          <Reveal
            as="aside"
            className="surface-panel self-end"
            aria-label="Prosopon proof points"
            delay={1}
            x={64}
            y={0}
          >
            <h2 className="border-b border-border px-5 py-5 text-[0.68rem] font-bold uppercase tracking-label text-muted-foreground">
              Delivery credibility
            </h2>
            <div className="grid grid-cols-2">
              {stats.map((stat) => (
                <div
                  className="min-h-28 border-b border-r border-border p-5 even:border-r-0"
                  key={stat.label}
                >
                  <p className="text-3xl font-extrabold tracking-tight">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="home-partners-strip p-10 sm:p-12" aria-label="Trusted by leaders at">
        <div className="container-prosopon">
          <p className="home-partners-strip__label">Trusted by leaders at</p>
          <div className="home-partners-strip__names">
            <div className="home-partners-strip__track">
              <div className="home-partners-strip__group">
                {marqueeLeaders.map((leader, index) => (
                  <span className="home-partners-strip__name" key={`${leader.name}-${index}`}>
                    <Image
                      alt={leader.name}
                      className="home-partners-strip__logo"
                      height={leader.height}
                      src={leader.logo}
                      width={leader.width}
                    />
                  </span>
                ))}
              </div>
              <div aria-hidden="true" className="home-partners-strip__group">
                {marqueeLeaders.map((leader, index) => (
                  <span className="home-partners-strip__name" key={`${leader.name}-${index}`}>
                    <Image
                      alt=""
                      className="home-partners-strip__logo"
                      height={leader.height}
                      src={leader.logo}
                      width={leader.width}
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section section-parchment">
        <div className="container-prosopon">
          <Reveal className="grid gap-10 md:grid-cols-[minmax(0,0.72fr)_minmax(320px,0.45fr)] md:items-end">
            <SectionHeader
              description=""
              eyebrow="What Prosopon does"
              title="Senior delivery capability for transformation that cannot drift."
            />
            <p className="text-muted-foreground">
              Prosopon works where execution quality matters: regulated
              programs, cross-functional delivery, stakeholder complexity,
              operational modernization, and industry-specific AI adoption.
            </p>
          </Reveal>
          <RevealStagger className="mt-14 grid gap-4 md:grid-cols-3">
            {capabilities.map((capability) => (
              <RevealItem className="h-full" key={capability.title}>
                <article className="parchment-card flex min-h-72 h-full flex-col p-7">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-xs font-bold text-primary">
                    <capability.icon
                      aria-hidden="true"
                      className="h-5 w-5"
                      strokeWidth={1.7}
                    />
                  </span>
                  <h3 className="mt-11 text-2xl font-extrabold tracking-tight">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {capability.body}
                  </p>
                  <Link
                    className="label-mono mt-auto pt-8 hover:text-foreground"
                    href="/services"
                  >
                    View service
                  </Link>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="page-section">
        <div className="container-prosopon grid gap-12 lg:grid-cols-[0.82fr_1fr]">
          <Reveal>
            <p className="label-mono mb-5">How we work</p>
            <h2 className="section-title">
              Disciplined, direct, and built around delivery reality.
            </h2>
            <p className="mt-5 max-w-lg text-muted-foreground">
              The process is intentionally plain. Prosopon embeds quickly,
              clarifies the operating model, tracks risk, and keeps senior
              stakeholders close to the work.
            </p>
          </Reveal>
          <RevealStagger className="grid gap-3" stagger={0.06}>
            {methods.map(([number, title, body]) => (
              <RevealItem key={number}>
                <article className="surface-panel grid grid-cols-[4.5rem_1fr] gap-5 p-5 transition-transform duration-200 hover:-translate-y-1 hover:border-primary/60">
                  <strong className="label-mono">{number}</strong>
                  <div>
                    <h3 className="text-xl font-extrabold tracking-tight">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="page-section section-parchment border-b-2">
        <div className="container-prosopon">
          <Reveal className="grid border border-border bg-border lg:grid-cols-[minmax(0,0.56fr)_minmax(320px,1fr)]">
            <div className="obsidian-panel border-0 p-7 sm:p-10">
              <p className="label-mono mb-5">Why choose us</p>
              <h2 className="section-title">
                Senior judgment without the weight of a large firm.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Prosopon is designed for organizations that need credible
                transformation help, but want direct access to experienced
                operators rather than a heavy consulting machine.
              </p>
            </div>
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {reasons.map((reason) => (
                <article className="bg-card p-7 transition-transform duration-200 hover:scale-105 hover:bg-white hover:shadow-xl hover:shadow-primary sm:p-10" key={reason.title}>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-border text-primary">
                    <reason.icon
                      aria-hidden="true"
                      className="h-5 w-5"
                      strokeWidth={1.7}
                    />
                  </span>
                  <h3 className="mt-12 text-2xl font-extrabold tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {reason.body}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {latestPosts.length ? (
        <section className="page-section">
          <div className="container-prosopon">
            <Reveal className="grid gap-8 md:grid-cols-[minmax(0,0.72fr)_auto] md:items-end">
              <SectionHeader
                eyebrow="Latest thinking"
                title="Notes on delivery, transformation, and the work beneath the work."
              />
              <Link
                className="label-mono inline-flex items-center gap-2 justify-self-start transition-colors hover:text-foreground md:justify-self-end"
                href="/blog"
              >
                View all posts
                <MoveUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.8} />
              </Link>
            </Reveal>
            <Reveal className="mt-14">
              <BlogPostGrid posts={latestPosts} />
            </Reveal>
          </div>
        </section>
      ) : null}

      <CtaSection />
    </>
  );
}

async function getHomeBlogPosts(): Promise<BlogPost[]> {
  try {
    const { posts } = await getBloggerPosts({ limit: 3 });

    return posts;
  } catch (error) {
    console.error("Homepage Blogger posts failed to load", error);
    return [];
  }
}
