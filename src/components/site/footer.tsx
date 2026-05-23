import Link from "next/link";
import { SiteLogo } from "./site-logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--black-brown)]">
      <div className="container-prosopon py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_12rem_14rem]">
          <div>
            <Link aria-label="Prosopon home" className="inline-flex" href="/">
              <SiteLogo />
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Professional services for structured transformation delivery, advisory, and digital
              enablement.
            </p>
          </div>

          <div>
            <h2 className="label-mono mb-4">Explore</h2>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link className="hover:text-foreground" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-foreground" href="/case-studies">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link className="hover:text-foreground" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-foreground" href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:text-foreground" href="/privacy">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="label-mono mb-4">Contact</h2>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <a className="hover:text-foreground" href="mailto:hello@prosopon.co">
                  hello@prosopon.co
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
