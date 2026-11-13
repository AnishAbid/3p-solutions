import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { partnerCards, productPartner } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ProductPartners({
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
          Product partners
        </p>
        <p className="mt-2 text-sm text-white/70">
          Products from{" "}
          <a
            href={productPartner.href}
            target="_blank"
            rel="noopener"
            className="text-gold underline-offset-4 hover:underline"
          >
            {productPartner.name}
          </a>
          . {productPartner.summary}
        </p>
        <ul className="mt-4 grid grid-cols-2 gap-2">
          {partnerCards.map((product) => (
            <li key={product.name}>
              <a
                href={product.href}
                target="_blank"
                rel="noopener"
                className="group relative block overflow-hidden rounded-lg"
              >
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  width={640}
                  height={400}
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transform-none"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-1 bg-navy-deep/78 px-2 py-1.5 text-xs font-medium text-white">
                  {product.name}
                  <ArrowUpRight className="size-3.5 shrink-0 text-gold" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <section className={cn("border-t bg-cream py-16 md:py-20", className)}>
      <div className="container-site">
        <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
          Product partners
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl leading-tight md:text-4xl">
          Software products from {productPartner.name}
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Names and descriptions as published on{" "}
          <a
            href={productPartner.href}
            target="_blank"
            rel="noopener"
            className="text-navy underline-offset-4 hover:underline"
          >
            subkaro.com
          </a>
          . {productPartner.summary} Each product opens in a new tab.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {partnerCards.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener"
              className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transform-none"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105 motion-reduce:transform-none"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[0.65rem] tracking-[0.2em] text-gold uppercase">
                  {productPartner.name}
                </p>
                <h3 className="font-display mt-2 text-2xl">{product.name}</h3>
                <p className="mt-2 text-sm font-medium text-navy">{product.tagline}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-navy group-hover:text-gold">
                  Open {product.name}
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
