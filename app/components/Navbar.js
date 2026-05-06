"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      
      {/* TOP BAR */}
      <div className="flex justify-between items-center px-6 md:px-8 py-4">

        {/* LOGO */}
        <Link href="/" className="shrink-0">
          <img src="/logo.png" className="h-10 cursor-pointer" />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/features" className="hover:text-blue-500">Features</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
          <Link href="/contact">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              Early Access
            </button>
          </Link>
        </div>

        {/* MOBILE RIGHT SIDE */}
        <div className="flex items-center gap-2 md:hidden">

          {/* Quick CTA (always visible) */}
          <Link href="/contact">
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm">
              Join
            </button>
          </Link>

          {/* MENU BUTTON */}
          <button
            className="text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6 text-gray-700 font-medium">

          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/features" onClick={() => setOpen(false)}>Features</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>

          <Link href="/contact" onClick={() => setOpen(false)}>
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg">
              Early Access
            </button>
          </Link>

        </div>
      )}

    </nav>
  );
}