"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { itPractice } from "@/lib/site";
import { cn } from "@/lib/utils";

type Logo = (typeof itPractice.techLogos)[number];

function logoSrc(logo: Logo) {
  return `/icons/tech/${logo.file}`;
}

function chunk<T>(items: readonly T[], size: number) {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push([...items.slice(i, i + size)]);
  }
  return pages;
}

function LogoCard({ logo }: { logo: Logo }) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 rounded-xl bg-white px-2 py-3 text-center shadow-sm ring-1 ring-black/10">
      <span
        className={cn(
          "flex size-10 items-center justify-center rounded-lg",
          "onDark" in logo && logo.onDark ? "bg-neutral-900" : "bg-transparent",
        )}
      >
        <img
          src={logoSrc(logo)}
          alt=""
          width={32}
          height={32}
          className="size-8 object-contain"
        />
      </span>
      <span className="text-[0.65rem] leading-tight font-medium text-navy">
        {logo.name}
      </span>
    </div>
  );
}

export function TechLogos({
  featured = false,
  className,
}: {
  featured?: boolean;
  className?: string;
}) {
  const names = featured ? itPractice.featuredTech : null;
  const logos = names
    ? names
        .map((name) => itPractice.techLogos.find((item) => item.name === name))
        .filter((item): item is Logo => Boolean(item))
    : itPractice.techLogos;

  const pageSize = featured ? 4 : 6;
  const pages = useMemo(() => chunk(logos, pageSize), [logos, pageSize]);
  const count = pages.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (next: number) => {
      setIndex((current) => (current + next + count) % count);
    },
    [count],
  );

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches || paused || count < 2) return;
    const id = window.setInterval(() => go(1), 5000);
    return () => window.clearInterval(id);
  }, [count, go, paused]);

  const dark = featured;
  const gridClass = featured
    ? "grid grid-cols-2 gap-2 sm:grid-cols-4"
    : "grid grid-cols-3 gap-2 sm:grid-cols-3 md:grid-cols-6";

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Technologies"
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {pages.map((page, pageIndex) => (
            <div
              key={page.map((item) => item.name).join("-")}
              className="w-full shrink-0"
              aria-hidden={pageIndex !== index}
            >
              <ul className={gridClass}>
                {page.map((logo) => (
                  <li key={logo.name} className="min-h-[5.5rem]">
                    <LogoCard logo={logo} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {count > 1 ? (
        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous technologies"
            onClick={() => go(-1)}
            className={cn(
              "inline-flex size-9 items-center justify-center rounded-full border transition",
              dark
                ? "border-white/25 text-white hover:border-gold hover:text-gold"
                : "border-navy/20 text-navy hover:border-gold hover:text-gold",
            )}
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next technologies"
            onClick={() => go(1)}
            className={cn(
              "inline-flex size-9 items-center justify-center rounded-full border transition",
              dark
                ? "border-white/25 text-white hover:border-gold hover:text-gold"
                : "border-navy/20 text-navy hover:border-gold hover:text-gold",
            )}
          >
            <ChevronRight className="size-4" />
          </button>
          <div className="ml-1 flex gap-2">
            {pages.map((page, i) => (
              <button
                key={page.map((item) => item.name).join("-")}
                type="button"
                aria-label={`Show technologies group ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index
                    ? "w-8 bg-gold"
                    : dark
                      ? "w-2.5 bg-white/30 hover:bg-white/55"
                      : "w-2.5 bg-navy/20 hover:bg-navy/40",
                )}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
