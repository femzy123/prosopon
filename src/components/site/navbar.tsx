"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
  const isHome = pathname === "/";
  const overHero = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        overHero
          ? "border-transparent bg-transparent text-white"
          : scrolled
            ? "border-border bg-background/85 text-foreground backdrop-blur-md"
            : "border-transparent bg-background text-foreground",
      )}
    >
      <div className="container-prosopon flex h-16 items-center justify-between">
        <Link className="group flex items-center gap-2" href="/">
          <span
            className={cn(
              "grid h-7 w-7 place-items-center rounded-sm text-[11px] font-bold tracking-tight",
              overHero ? "bg-white text-[#0d0a08]" : "bg-primary text-primary-foreground",
            )}
          >
            P
          </span>
          <span className="text-base font-semibold tracking-tight">Prosopon</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                className={cn(
                  "text-sm transition-colors",
                  overHero
                    ? "text-white/70 hover:text-white"
                    : "text-muted-foreground hover:text-foreground",
                  active && (overHero ? "text-white" : "text-foreground"),
                )}
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            className={cn(
              "inline-flex h-9 items-center rounded-md px-4 text-sm font-medium transition-colors",
              overHero
                ? "bg-white text-[#0d0a08] hover:bg-white/90"
                : "bg-primary text-primary-foreground hover:bg-foreground",
            )}
            href="/contact"
          >
            Book a Call
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className={cn(
            "inline-flex h-9 w-9 items-center justify-center rounded-md md:hidden",
            overHero ? "hover:bg-white/10" : "hover:bg-muted",
          )}
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background text-foreground md:hidden">
          <nav className="container-prosopon flex flex-col gap-1 py-4">
            {links.map((link) => {
              const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
                    active && "text-foreground",
                  )}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              className="mt-2 inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Book a Call
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
