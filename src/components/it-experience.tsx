import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
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
              <li key={industry.name} className="flex gap-3 text-sm">
                <span className="relative mt-0.5 size-14 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={industry.image}
                    alt={industry.imageAlt}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </span>
                <span>
                  <p className="font-medium text-white">{industry.name}</p>
                  <p className="mt-0.5 text-white/60">{industry.summary}</p>
                </span>
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
      <section className="container-site py-16 md:py-24">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight md:text-4xl">
            {itPractice.techHeading}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            {itPractice.techIntro}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <TechLogos className="mt-8" />
        </Reveal>
      </section>

      <section className="border-t bg-cream py-16 md:py-24">
        <div className="container-site">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight md:text-4xl">
              {itPractice.industriesHeading}
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              {itPractice.industriesIntro}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {itPractice.industries.map((industry, index) => (
              <Reveal key={industry.name} delay={(index % 3) * 80}>
                <article className="group overflow-hidden rounded-2xl border bg-card transition duration-500 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={industry.image}
                      alt={industry.imageAlt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105 motion-reduce:transform-none"
                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 40vw, 100vw"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-navy/80 px-2.5 py-1 font-heading text-xs text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl">{industry.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {industry.summary}
                    </p>
                    <p className="mt-4 text-xs tracking-wide text-navy/70">
                      {industry.tech.join(" · ")}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
