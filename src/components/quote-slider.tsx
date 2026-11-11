"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuoteSlider({ quotes }: { quotes: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const count = quotes.length;

  const go = useCallback(
    (next: number) => {
      setIndex((current) => (current + next + count) % count);
    },
    [count],
  );

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches || count < 2) return;
    const id = window.setInterval(() => go(1), 7000);
    return () => window.clearInterval(id);
  }, [count, go]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {quotes.map((quote) => (
            <blockquote key={quote} className="w-full shrink-0 pr-4">
              <p className="font-display text-3xl leading-[1.2] text-navy md:text-5xl">
                “{quote}”
              </p>
              <p className="mt-6 text-[0.65rem] font-semibold tracking-[0.2em] text-gold uppercase">
                3psolutions.com.pk
              </p>
            </blockquote>
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-center gap-3">
        <button
          type="button"
          aria-label="Previous quote"
          onClick={() => go(-1)}
          className="inline-flex size-10 items-center justify-center rounded-full border text-navy transition hover:border-gold hover:text-gold"
        >
          <ChevronLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Next quote"
          onClick={() => go(1)}
          className="inline-flex size-10 items-center justify-center rounded-full border text-navy transition hover:border-gold hover:text-gold"
        >
          <ChevronRight className="size-4" />
        </button>
        <div className="ml-2 flex gap-2">
          {quotes.map((quote, i) => (
            <button
              key={quote}
              type="button"
              aria-label={`Show quote ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === index ? "w-8 bg-gold" : "w-2.5 bg-navy/20 hover:bg-navy/40",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
