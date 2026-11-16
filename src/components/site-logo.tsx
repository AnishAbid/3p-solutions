import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

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
      <Image
        src="/images/logo.png"
        alt=""
        width={40}
        height={38}
        className="size-9 object-contain"
        priority
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-heading text-[1.05rem] font-semibold tracking-wide">
          {site.name}
        </span>
        <span
          className={cn(
            "mt-1 text-[0.65rem] font-medium tracking-[0.2em] uppercase",
            light ? "text-gold" : "text-muted-foreground",
          )}
        >
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
