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
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/78" />
        </>
      ) : null}
      <div className="relative container-site py-14 md:py-20">
        {kicker ? (
          <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
            {kicker}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-4xl leading-tight font-semibold md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
