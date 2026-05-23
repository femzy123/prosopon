import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-section flex min-h-[70vh] items-center">
      <div className="container-prosopon">
        <div className="mx-auto max-w-lg text-center">
          <p className="label-mono mb-6">404</p>
          <h1 className="text-5xl font-extrabold tracking-tight text-foreground">Page not found</h1>
          <p className="mt-4 text-muted-foreground">
            The page you are looking for does not exist yet or has been moved.
          </p>
          <div className="mt-8 flex justify-center">
            <Link className="gold-button" href="/">
              Go home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
