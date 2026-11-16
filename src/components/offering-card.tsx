import Image from "next/image";

export function OfferingCard({
  id,
  title,
  summary,
  points,
  image,
  imageAlt,
}: {
  id?: string;
  title: string;
  summary: string;
  points: readonly string[];
  image: string;
  imageAlt: string;
}) {
  return (
    <article
      id={id}
      className="scroll-mt-24 overflow-hidden rounded-2xl border bg-card"
    >
      <div className="relative aspect-[16/10] bg-muted">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <div className="p-6 md:p-7">
        <h3 className="font-display text-2xl">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {summary}
        </p>
        {points.length > 0 ? (
          <ul className="mt-5 space-y-2 text-sm leading-relaxed">
            {points.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
