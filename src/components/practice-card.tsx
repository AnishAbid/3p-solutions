import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

type Service = (typeof services)[number];

export function PracticeCard({
  practice,
  className,
}: {
  practice: Service;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "group h-full gap-0 overflow-hidden py-0 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none",
        className,
      )}
    >
      <div className="relative aspect-[16/10] bg-muted">
        <Image
          src={practice.image}
          alt={practice.imageAlt}
          fill
          className="object-cover transition duration-700 group-hover:scale-105 motion-reduce:transform-none"
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </div>
      <CardHeader className="pt-5">
        <Badge variant="outline" className="border-gold/40 bg-gold-soft/40 text-navy">
          {practice.kicker}
        </Badge>
        <CardTitle className="mt-3 font-heading text-2xl font-semibold">
          {practice.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-3">
        <p className="leading-relaxed text-muted-foreground">{practice.summary}</p>
      </CardContent>
      <CardFooter className="mt-4 border-t-0 bg-transparent">
        <Link
          href={practice.href}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:text-navy/70"
        >
          Explore {practice.shortTitle}
          <ArrowUpRight className="size-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
