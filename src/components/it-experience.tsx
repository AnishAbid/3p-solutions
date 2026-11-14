import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TechLogos } from "@/components/tech-logos";
import { itPractice } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ItExperience({
  variant = "page",
  className,
}: {
  variant?: "page" | "home";
  className?: string;
}) {
  if (variant === "home") {
    return (
      <div className={cn("mt-6 space-y-6 border-t border-white/15 pt-6", className)}>
        <div>
          <h3 className="text-[0.65rem] font-semibold tracking-[0.22em] text-gold uppercase">
            {itPractice.techHeading}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {itPractice.techIntro}
          </p>
          <TechLogos featured className="mt-4" />
        </div>
        <div className="border-t border-white/15 pt-6">
          <h3 className="text-[0.65rem] font-semibold tracking-[0.22em] text-gold uppercase">
            {itPractice.industriesHeading}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {itPractice.industriesIntro}
          </p>
          <ul className="mt-4 space-y-3">
            {itPractice.industries.slice(0, 3).map((industry) => (
              <li key={industry.name} className="text-sm">
                <p className="font-medium text-white">{industry.name}</p>
                <p className="mt-0.5 text-white/60">{industry.summary}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/practices/it"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold hover:text-white"
          >
            All industries and technologies
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("bg-background", className)}>
      <section className="container-site py-16 md:py-20">
        <h2 className="font-display text-3xl leading-tight md:text-4xl">
          {itPractice.techHeading}
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">{itPractice.techIntro}</p>
        <TechLogos className="mt-8" />
      </section>

      <section className="border-t bg-cream py-16 md:py-20">
        <div className="container-site">
          <h2 className="font-display text-3xl leading-tight md:text-4xl">
            {itPractice.industriesHeading}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            {itPractice.industriesIntro}
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {itPractice.industries.map((industry) => (
              <article
                key={industry.name}
                className="rounded-2xl border bg-card p-6"
              >
                <h3 className="font-display text-2xl">{industry.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {industry.summary}
                </p>
                <p className="mt-4 text-xs tracking-wide text-navy/70">
                  {industry.tech.join(" · ")}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
