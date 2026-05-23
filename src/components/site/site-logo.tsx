import { cn } from "@/lib/utils";

interface SiteLogoProps {
  compact?: boolean;
  className?: string;
}

export function SiteLogo({ compact = false, className }: SiteLogoProps) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-primary text-primary">
        <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 64 64">
          <circle cx="32" cy="32" fill="none" r="25" stroke="currentColor" strokeWidth="2" />
          <path
            d="M20 34 32 22l12 12"
            fill="none"
            stroke="var(--gold-bright)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
          />
          <path d="m24 34 8-8 8 8-8 8Z" fill="currentColor" />
        </svg>
      </span>
      <span className="grid gap-0.5">
        <span className="font-serif text-sm tracking-[0.22em] text-foreground">PROSOPON</span>
        {!compact ? (
          <span className="text-[0.5rem] font-bold uppercase tracking-[0.22em] text-primary">
            Digital Transformation Consult
          </span>
        ) : null}
      </span>
    </span>
  );
}
