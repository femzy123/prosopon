import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-prosopon py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link className="flex items-center gap-2" href="/">
              <span className="grid h-7 w-7 place-items-center rounded-sm bg-primary text-[11px] font-bold text-primary-foreground">
                P
              </span>
              <span className="text-base font-semibold tracking-tight">Prosopon</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              A modern tech consulting firm helping startups and enterprises design, build, and
              scale digital products.
            </p>
          </div>

          <div>
            <p className="label-mono mb-4">Navigate</p>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link className="text-muted-foreground hover:text-foreground" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground" href="/case-studies">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-muted-foreground hover:text-foreground" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="label-mono mb-4">Contact</p>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li>hello@prosopon.co</li>
              <li>+1 (415) 555-0144</li>
              <li>San Francisco · Remote</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Prosopon. All rights reserved.
          </p>
          <p className="label-mono">Built with intent.</p>
        </div>
      </div>
    </footer>
  );
}
