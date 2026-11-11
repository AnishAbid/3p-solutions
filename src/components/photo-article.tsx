import Image from "next/image";

export function PhotoArticle({
  title,
  body,
  image,
  imageAlt,
}: {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <article className="group overflow-hidden rounded-xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none">
      <div className="relative aspect-[16/10] bg-muted">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover transition duration-700 group-hover:scale-105 motion-reduce:transform-none"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {body}
        </p>
      </div>
    </article>
  );
}
