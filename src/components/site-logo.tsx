import Link from "next/link";
import { cn } from "@/lib/utils";

export function SiteLogo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const light = tone === "light";

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2.5 no-underline",
        light ? "text-white" : "text-navy",
        className,
      )}
    >
      <span
        className={cn(
          "flex size-9 shrink-0 items-center justify-center font-heading text-sm font-semibold tracking-wide",
          light ? "bg-gold text-navy" : "bg-navy text-gold",
        )}
      >
        3P
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-heading text-[1.05rem] font-semibold tracking-wide">
          3P Solutions
        </span>
        <span
          className={cn(
            "mt-1 text-[0.65rem] font-medium tracking-[0.2em] uppercase",
            light ? "text-gold" : "text-muted-foreground",
          )}
        >
          3Psolution
        </span>
      </span>
    </Link>
  );
}
