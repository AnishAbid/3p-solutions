import { ArrowUpRight } from "lucide-react";
import { partnerProducts, productPartner } from "@/lib/site";
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
        <ul className="mt-4 space-y-3">
          {partnerProducts.map((product) => (
            <li key={product.name}>
              <a
                href={product.href}
                target="_blank"
                rel="noopener"
                className="group flex items-start justify-between gap-3 text-sm text-white/85 hover:text-gold"
              >
                <span>
                  <span className="font-medium">{product.name}</span>
                  <span className="mt-0.5 block text-white/60 group-hover:text-white/75">
                    {product.tagline}
                  </span>
                </span>
                <ArrowUpRight className="mt-0.5 size-4 shrink-0" />
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
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {partnerProducts.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener"
              className="group flex h-full flex-col rounded-2xl border bg-card p-6 transition hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transform-none"
            >
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
