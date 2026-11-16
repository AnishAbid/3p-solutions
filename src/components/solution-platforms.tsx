import { ArrowUpRight } from "lucide-react";
import { solutionPlatforms } from "@/lib/site";
import { Reveal } from "@/components/reveal";

export function SolutionPlatforms() {
  return (
    <section className="relative overflow-hidden border-t bg-navy text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="container-site relative py-16 md:py-24">
        <Reveal>
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
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {solutionPlatforms.map((platform, index) => (
            <li key={platform.name}>
              <Reveal delay={index * 80}>
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener"
                  className="group flex h-full flex-col rounded-2xl border border-white/15 bg-white/5 p-5 transition duration-500 hover:-translate-y-1 hover:border-gold/50 hover:bg-white/10 motion-reduce:transform-none"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-white">
                    {platform.icon ? (
                      <img
                        src={platform.icon}
                        alt=""
                        width={28}
                        height={28}
                        className="size-7 object-contain"
                      />
                    ) : (
                      <span className="font-heading text-lg font-semibold text-navy">
                        {platform.name.slice(0, 1)}
                      </span>
                    )}
                  </span>
                  <p className="font-display mt-4 text-xl">{platform.name}</p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">
                    {platform.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                    Open {platform.name}
                    <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
