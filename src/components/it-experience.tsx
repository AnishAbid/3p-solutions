import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
      <div className={cn("mt-6 border-t border-white/15 pt-6", className)}>
        <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-gold uppercase">
          {itPractice.yearsLabel} · {itPractice.associatedWith}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{itPractice.intro}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {itPractice.featuredTech.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-white/20 px-2.5 py-0.5 text-[0.7rem] tracking-wide text-white/80"
            >
              {tech}
            </li>
          ))}
        </ul>
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
          Industries and stack
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    );
  }

  return (
    <section className={cn("bg-background py-16 md:py-20", className)}>
      <div className="container-site">
        <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
          {itPractice.associatedWith}
        </p>
        <h2 className="font-display mt-3 max-w-3xl text-3xl leading-tight md:text-4xl">
          {itPractice.yearsLabel} across industries, with a modern web stack.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">{itPractice.intro}</p>
        <p className="mt-2 text-sm text-muted-foreground">{itPractice.role}.</p>

        <div className="mt-8 flex flex-wrap gap-2">
          {itPractice.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gold/35 bg-gold-soft/30 px-3 py-1 text-xs font-medium text-navy"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-8 grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
          {itPractice.capabilities.map((item) => (
            <li key={item} className="rounded-xl border bg-card px-4 py-3">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
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
  );
}
