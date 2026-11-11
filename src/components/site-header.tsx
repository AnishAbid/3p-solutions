"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MobileServices, ServicesMenu } from "@/components/services-menu";
import { SiteLogo } from "@/components/site-logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { headerLinks, nav } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isServicesActive(pathname: string) {
  return (
    pathname.startsWith("/projects") ||
    pathname.startsWith("/renewables") ||
    pathname.startsWith("/municipal-services") ||
    pathname.startsWith("/practices")
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const onDark = pathname === "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b",
        onDark
          ? "border-white/10 bg-navy-deep/95 text-white backdrop-blur-md"
          : "border-border bg-background/95 text-navy backdrop-blur-md",
      )}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4">
        <SiteLogo tone={onDark ? "light" : "dark"} />
        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
          <ServicesMenu onDark={onDark} active={isServicesActive(pathname)} />
          {headerLinks.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative py-1 whitespace-nowrap transition-colors",
                  onDark
                    ? active
                      ? "text-gold"
                      : "text-white/80 hover:text-white"
                    : active
                      ? "text-navy"
                      : "text-muted-foreground hover:text-navy",
                )}
              >
                {item.label}
                {active ? (
                  <span className="absolute inset-x-0 -bottom-1 h-px bg-gold" />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-10 px-4",
              onDark
                ? "bg-gold text-navy hover:bg-gold/90"
                : "bg-navy text-primary-foreground hover:bg-navy/90",
            )}
          >
            Get in touch
          </Link>
        </div>
        <Sheet
          open={mobileOpen}
          onOpenChange={(open) => setMobileOpen(open)}
        >
          <SheetTrigger
            aria-label="Open menu"
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "lg:hidden",
              onDark &&
                "border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white",
            )}
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(100%,20rem)] bg-navy text-white">
            <SheetHeader>
              <SheetTitle className="text-white">Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 overflow-y-auto px-4 pb-8">
              <MobileLink href="/" label="Home" />
              <MobileServices onNavigate={() => setMobileOpen(false)} />
              {nav.map((item) => (
                <MobileLink key={item.href} href={item.href} label={item.label} />
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MobileLink({ href, label }: { href: string; label: string }) {
  return (
    <SheetClose
      nativeButton={false}
      render={
        <Link
          href={href}
          className="rounded-md px-1 py-2 text-base text-white/90 hover:bg-white/10 hover:text-white"
        />
      }
    >
      {label}
    </SheetClose>
  );
}
