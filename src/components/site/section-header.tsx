import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      {eyebrow ? <p className="label-mono mb-5">{eyebrow}</p> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="mt-5 text-base text-muted-foreground sm:text-lg">{description}</p> : null}
    </div>
  );
}
