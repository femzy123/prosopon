import type { Metadata } from "next";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy | Prosopon",
  description:
    "Prosopon's privacy policy for website visitors and prospective clients who contact the firm.",
  openGraph: {
    title: "Privacy Policy | Prosopon",
    description:
      "How Prosopon handles information shared through its website and business inquiries.",
  },
};

const sections = [
  {
    title: "Information we collect",
    body: [
      "Prosopon may collect information you choose to provide when you contact the firm, including your name, email address, organization, service interest, and message details.",
      "The website may also receive standard technical information such as browser type, device information, referring page, and general usage data through hosting or security infrastructure.",
    ],
  },
  {
    title: "How information is used",
    body: [
      "Information is used to respond to inquiries, evaluate potential engagement fit, communicate about Prosopon's services, and maintain the reliability and security of the website.",
      "Prosopon does not sell personal information. Information is not used for unrelated advertising or shared with third parties for their independent marketing purposes.",
    ],
  },
  {
    title: "Service providers",
    body: [
      "Prosopon may use trusted service providers for website hosting, email, security, and business operations. These providers process information only as needed to support those services.",
      "Where external specialists are involved in a potential engagement, Prosopon only shares relevant information when appropriate for scoping, delivery, or professional collaboration.",
    ],
  },
  {
    title: "Retention and security",
    body: [
      "Prosopon keeps inquiry and business contact information for as long as needed to respond, manage professional relationships, meet legal obligations, and maintain business records.",
      "Reasonable administrative, technical, and organizational safeguards are used to protect information, but no website or email system can be guaranteed completely secure.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You may request access to, correction of, or deletion of personal information you have provided, subject to legal, contractual, and business record requirements.",
      "You may also ask Prosopon to stop contacting you about services or business updates.",
    ],
  },
  {
    title: "Contact",
    body: [
      "Questions about this policy or privacy-related requests can be sent to hello@prosopon.co.",
      "This policy may be updated as the website, services, or legal requirements change.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="page-section section-hero-noir pt-24 sm:pt-32">
        <div className="container-prosopon">
          <Reveal>
            <p className="label-mono mb-6">Privacy Policy</p>
            <h1 className="hero-title max-w-5xl">How Prosopon handles information.</h1>
            <p className="mt-7 max-w-3xl text-lg text-muted-foreground sm:text-xl">
              This policy explains how Prosopon collects, uses, and protects information shared
              through the website and business inquiries.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-section section-parchment">
        <div className="container-prosopon">
          <Reveal className="grid gap-5">
            <p className="text-sm text-muted-foreground">Last updated: May 28, 2026</p>
            <div className="grid gap-4">
              {sections.map((section) => (
                <article className="parchment-card p-6 sm:p-8" key={section.title}>
                  <h2 className="text-2xl font-extrabold tracking-tight">{section.title}</h2>
                  <div className="mt-4 grid gap-3 text-muted-foreground">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
