import { itPractice } from "@/lib/site";
import { cn } from "@/lib/utils";

type Logo = (typeof itPractice.techLogos)[number];

function logoSrc(logo: Logo) {
  return `/icons/tech/${logo.file}`;
}

function LogoCard({ logo }: { logo: Logo }) {
  return (
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
  );
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
    : [...itPractice.techLogos];

  const track = [...logos, ...logos];

  return (
    <div className={cn("overflow-hidden", className)} aria-label="Technologies">
      <ul className="animate-tech-marquee flex w-max gap-2 pr-2 hover:[animation-play-state:paused]">
        {track.map((logo, index) => (
          <li
            key={`${logo.name}-${index}`}
            className="w-32 shrink-0"
            aria-hidden={index >= logos.length}
          >
            <LogoCard logo={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
