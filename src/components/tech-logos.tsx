import { itPractice } from "@/lib/site";
import { cn } from "@/lib/utils";

type Logo = (typeof itPractice.techLogos)[number];

function logoSrc(logo: Logo) {
  return `/icons/tech/${logo.file}`;
}

export function TechLogos({
  featured = false,
  className,
}: {
  featured?: boolean;
  className?: string;
}) {
  const names = featured ? itPractice.featuredTech : null;
  const logos = names
    ? names
        .map((name) => itPractice.techLogos.find((item) => item.name === name))
        .filter((item): item is Logo => Boolean(item))
    : itPractice.techLogos;

  return (
    <ul
      className={cn(
        "grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6",
        featured && "sm:grid-cols-4 md:grid-cols-4",
        className,
      )}
    >
      {logos.map((logo) => (
        <li key={logo.name}>
          <div className="flex h-full flex-col items-center justify-center gap-2 rounded-xl bg-white px-2 py-3 text-center shadow-sm ring-1 ring-black/10">
            <span
              className={cn(
                "flex size-10 items-center justify-center rounded-lg",
                "onDark" in logo && logo.onDark ? "bg-neutral-900" : "bg-transparent",
              )}
            >
              <img
                src={logoSrc(logo)}
                alt=""
                width={32}
                height={32}
                className="size-8 object-contain"
              />
            </span>
            <span className="text-[0.65rem] leading-tight font-medium text-navy">
              {logo.name}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
