import Link from "next/link";

export function CtaSection() {
  return (
    <section className="page-section">
      <div className="container-prosopon">
        <div className="surface-panel px-6 py-14 text-center sm:px-12 lg:px-20">
          <p className="label-mono mb-6">Next step</p>
          <h2 className="mx-auto max-w-4xl text-3xl font-extrabold tracking-[-0.045em] sm:text-5xl">
            Bring structure to the work that matters.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Share the transformation, delivery, or advisory challenge in front of your team.
            Prosopon will help clarify the path to execution.
          </p>
          <div className="mt-8 flex justify-center">
            <Link className="gold-button" href="/contact">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
