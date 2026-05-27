import { cn } from "@/lib/utils";

interface SiteLogoProps {
  compact?: boolean;
  className?: string;
  tone?: "light" | "dark";
}

export function SiteLogo({ compact = false, className, tone = "light" }: SiteLogoProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 290 80"
      className={cn(
        "h-auto w-[min(12rem,calc(100vw-6.75rem))] shrink-0 sm:w-[12.25rem]",
        compact && "w-[9.375rem] sm:w-[9.375rem]",
        className,
      )}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="36" r="26" stroke="#C4A96C" strokeWidth="1.5" />
      <path
        d="M20 36 L32 24 L44 36"
        stroke="#C4A96C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path d="M24 36 L32 28 L40 36 L32 44 Z" fill={tone === "dark" ? "#F5F0E8" : "#1C1A16"} />
      <text
        dominantBaseline="auto"
        fill={tone === "dark" ? "#F5F0E8" : "#1C1A16"}
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="22"
        fontWeight="400"
        letterSpacing="3"
        x="68"
        y="38"
      >
        PROSOPON
      </text>
      <text
        dominantBaseline="auto"
        fill="#C4A96C"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="7.5"
        fontWeight="400"
        letterSpacing="1.1"
        lengthAdjust="spacingAndGlyphs"
        textLength="154"
        x="69"
        y="54"
      >
        Digital Transformation Consult
      </text>
    </svg>
  );
}
