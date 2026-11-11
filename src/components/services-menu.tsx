"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { getService, serviceMenu } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ServicesMenu({
  onDark,
  active,
}: {
  onDark: boolean;
  active?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "relative inline-flex items-center gap-1 py-1 whitespace-nowrap transition-colors",
          onDark
            ? open || active
              ? "text-gold"
              : "text-white/80 hover:text-white"
            : open || active
              ? "text-navy"
              : "text-muted-foreground hover:text-navy",
        )}
      >
        Services
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
        {active ? (
          <span className="absolute inset-x-0 -bottom-1 h-px bg-gold" />
        ) : null}
      </button>
        <div
          id={menuId}
          role="menu"
          className={cn(
            "fixed top-16 left-1/2 z-50 w-[min(92vw,64rem)] -translate-x-1/2 pt-2 transition duration-200",
            open
              ? "visible translate-y-0 opacity-100"
              : "invisible pointer-events-none -translate-y-1 opacity-0",
          )}
        >
          <div className="origin-top rounded-xl border border-gold/25 bg-navy-deep/98 p-5 text-white shadow-2xl ring-1 ring-white/10 backdrop-blur-md">
          <div className="mb-4 flex items-end justify-between gap-4 border-b border-white/10 pb-3">
            <div>
              <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-gold uppercase">
                Practices
              </p>
              <p className="mt-1 font-heading text-lg">Construction, energy, municipal, Odoo</p>
            </div>
            <Link
              href="/practices"
              onClick={() => setOpen(false)}
              className="text-xs tracking-[0.14em] text-gold uppercase hover:underline"
            >
              All practices
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {serviceMenu.map((group) => (
              <div key={group.kicker}>
                <Link
                  href={group.href}
                  onClick={() => setOpen(false)}
                  className="text-[0.65rem] font-semibold tracking-[0.2em] text-gold uppercase hover:text-gold/80"
                >
                  {group.kicker}
                </Link>
                <ul className="mt-3 space-y-2">
                  {group.slugs.map((slug) => {
                    const service = getService(slug);
                    if (!service) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={service.href}
                          onClick={() => setOpen(false)}
                          className="group flex gap-3 rounded-lg p-1.5 transition hover:bg-white/8"
                        >
                          <span className="relative size-12 shrink-0 overflow-hidden rounded-md">
                            <Image
                              src={service.image}
                              alt=""
                              fill
                              className="object-cover transition duration-500 group-hover:scale-105"
                              sizes="48px"
                            />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-medium text-white group-hover:text-gold">
                              {service.shortTitle}
                            </span>
                            <span className="mt-0.5 line-clamp-2 block text-xs leading-snug text-white/55">
                              {service.blurb}
                            </span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileServices({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-white/10 pb-3">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between rounded-md px-1 py-2 text-base text-white"
      >
        Services
        <ChevronDown
          className={cn("size-4 transition-transform", open && "rotate-180")}
        />
      </button>
      {open ? (
        <div className="mt-1 space-y-3 pl-1">
          {serviceMenu.map((group) => (
            <div key={group.kicker}>
              <Link
                href={group.href}
                onClick={onNavigate}
                className="text-[0.65rem] font-semibold tracking-[0.18em] text-gold uppercase"
              >
                {group.kicker}
              </Link>
              <ul className="mt-1">
                {group.slugs.map((slug) => {
                  const service = getService(slug);
                  if (!service) return null;
                  return (
                    <li key={slug}>
                      <Link
                        href={service.href}
                        onClick={onNavigate}
                        className="block rounded-md px-1 py-1.5 text-sm text-white/80 hover:bg-white/10 hover:text-white"
                      >
                        {service.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
