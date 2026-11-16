import Image from "next/image";
import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  title,
  description,
  className,
  image,
  imageAlt,
}: {
  kicker?: string;
  title: string;
  description: string;
  className?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden bg-navy text-white", className)}>
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            priority
            className="object-cover animate-slow-zoom motion-reduce:animate-none"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy/78 to-navy/55" />
        </>
      ) : null}
      <div className="relative container-site py-16 md:py-24">
        {kicker ? (
          <p className="animate-rise text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
            {kicker}
          </p>
        ) : null}
        <span className="animate-gold-line mt-4 block h-px w-16 bg-gold" />
        <h1 className="animate-rise mt-5 max-w-3xl text-4xl leading-tight font-semibold md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="animate-rise mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
