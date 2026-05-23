import Image from "next/image";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  compact?: boolean;
  className?: string;
}

export function SiteLogo({ compact = false, className }: SiteLogoProps) {
  const width = compact ? 150 : 196;
  const height = Math.round((width / 290) * 80);

  return (
    <Image
      alt=""
      aria-hidden="true"
      className={cn(
        "h-auto w-[min(12rem,calc(100vw-6.75rem))] shrink-0 sm:w-[12.25rem]",
        compact && "w-[9.375rem] sm:w-[9.375rem]",
        className,
      )}
      height={height}
      src="/logo.svg"
      width={width}
      loading="eager"
    />
  );
}
