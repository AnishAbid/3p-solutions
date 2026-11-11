"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Slide = {
  src: string;
  alt: string;
  label?: string;
};

export function ImageSlider({
  slides,
  interval = 6500,
  className,
  imageClassName,
  overlayClassName,
  children,
  showControls = true,
}: {
  slides: readonly Slide[];
  interval?: number;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
  showControls?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const current = slides[index];

  const go = useCallback(
    (next: number) => {
      setIndex((current) => (current + next + count) % count);
    },
    [count],
  );

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches || paused || count < 2) return;
    const id = window.setInterval(() => go(1), interval);
    return () => window.clearInterval(id);
  }, [count, go, interval, paused]);

  return (
    <section
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          className={cn(
            "object-cover transition-opacity duration-1000 ease-in-out",
            i === index ? "opacity-100" : "opacity-0",
            i === index && "motion-safe:animate-slow-zoom",
            imageClassName,
          )}
          sizes="100vw"
        />
      ))}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/55 to-navy-deep/25",
          overlayClassName,
        )}
      />
      <div className="relative z-10">{children}</div>
      {showControls && count > 1 ? (
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="container-home flex items-end justify-between gap-4 pb-6">
            <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-gold uppercase">
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              {current?.label ? ` · ${current.label}` : ""}
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => go(-1)}
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white backdrop-blur-sm transition hover:border-gold hover:text-gold"
              >
                <ChevronLeft className="size-4" />
              </button>
              <div className="flex items-center gap-2">
                {slides.map((slide, i) => (
                  <button
                    key={slide.src}
                    type="button"
                    aria-label={`Show slide ${i + 1}`}
                    aria-current={i === index}
                    onClick={() => setIndex(i)}
                    className={cn(
                      "h-1 rounded-full transition-all",
                      i === index ? "w-10 bg-gold" : "w-3 bg-white/35 hover:bg-white/70",
                    )}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => go(1)}
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white backdrop-blur-sm transition hover:border-gold hover:text-gold"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
