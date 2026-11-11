import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaBand({
  title = "Build a sustainable future with us",
  body = "Contact 3P Solutions in Lahore about construction, solar and wind energy, or municipal services across Pakistan.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="container-site flex flex-col items-start justify-between gap-8 py-14 md:flex-row md:items-center md:py-16">
        <div className="max-w-xl">
          <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
            Get started
          </p>
          <h2 className="mt-3 text-3xl font-semibold md:text-4xl">{title}</h2>
          <p className="mt-4 text-white/75">{body}</p>
        </div>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-11 bg-gold px-6 text-navy hover:bg-gold/90",
          )}
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
