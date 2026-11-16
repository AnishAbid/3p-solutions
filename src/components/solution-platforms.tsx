import { ArrowUpRight } from "lucide-react";
import { solutionPlatforms } from "@/lib/site";

export function SolutionPlatforms() {
  return (
    <section className="border-t bg-navy text-white">
      <div className="container-site py-16 md:py-20">
        <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
          Solution platforms
        </p>
        <h2 className="font-display mt-3 max-w-2xl text-3xl leading-tight md:text-4xl">
          Platforms we implement and sell.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
          These are the systems 3P Solutions already puts in front of customers:
          Odoo ERP, cloud platforms used in delivery, the OpenAI API, and Subkaro
          products. Related industry work is listed below.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {solutionPlatforms.map((platform) => (
            <li key={platform.name}>
              <a
                href={platform.href}
                target="_blank"
                rel="noopener"
                className="group flex h-full flex-col rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:border-gold/50 hover:bg-white/10"
              >
                <p className="font-display text-xl">{platform.name}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">
                  {platform.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                  Open {platform.name}
                  <ArrowUpRight className="size-4" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
