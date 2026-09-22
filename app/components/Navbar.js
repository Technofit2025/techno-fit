"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/about", label: "About" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-5 md:px-8 h-16">
        {/* LOGO */}
        <Link href="/" aria-label="TechnoFit home" className="shrink-0">
          <img src="/logo-white.webp" alt="TechnoFit" className="h-11 w-auto" />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
          >
            Get Early Access
          </Link>
        </div>

        {/* MOBILE RIGHT */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/contact"
            className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-semibold"
          >
            Join
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center gap-1.5 w-9 h-9 items-center"
          >
            <span className={`block h-0.5 w-5 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/10 px-5 py-6 flex flex-col gap-5 text-gray-200">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-lg">
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center px-5 py-3 rounded-full bg-white text-black font-semibold"
          >
            Get Early Access
          </Link>
        </div>
      )}
    </header>
  );
}
