import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="container-site py-24 text-center">
      <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-gold uppercase">
        404
      </p>
      <h1 className="mt-3 text-4xl font-semibold">This page is not on the drawings.</h1>
      <p className="mx-auto mt-4 max-w-md text-muted-foreground">
        The route you asked for is not part of the 3P Solutions site. Head home
        or send a brief instead.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className={cn(buttonVariants(), "h-11 px-5")}>
          Home
        </Link>
        <Link
          href="/contact"
          className={cn(buttonVariants({ variant: "outline" }), "h-11 px-5")}
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
