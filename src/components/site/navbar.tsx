"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";
import { SiteLogo } from "./site-logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const isHome = pathname === "/";
  const overHero = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-[background,border-color,backdrop-filter] duration-300",
        overHero
          ? "border-transparent bg-transparent"
          : "border-border bg-background/88 backdrop-blur-[18px]",
      )}
    >
      <div className="container-prosopon flex min-h-[4.75rem] items-center justify-between gap-6">
        <Link aria-label="Prosopon home" className="shrink-0" href="/">
          <SiteLogo />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm text-muted-foreground transition-colors hover:text-foreground",
                  active && "text-primary",
                )}
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link className="gold-button" href="/contact">
            Book a Call
          </Link>
        </div>

        <button
          aria-controls={menuId}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-border bg-background/60 text-primary transition-colors hover:bg-secondary md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "grid border-t border-border bg-background text-foreground transition-[grid-template-rows] duration-200 md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
        id={menuId}
      >
        <nav aria-label="Mobile navigation" className="container-prosopon min-h-0 overflow-hidden">
          <div className="flex flex-col gap-2 py-5">
            {links.map((link) => {
              const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "min-h-11 rounded border border-transparent px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:border-border hover:bg-secondary hover:text-foreground",
                    active && "text-primary",
                  )}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link className="gold-button mt-2 w-full" href="/contact" onClick={() => setOpen(false)}>
              Book a Call
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
