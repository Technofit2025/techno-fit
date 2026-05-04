"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">

      {/* TOP BAR */}
      <div className="flex justify-between items-center px-6 md:px-8 py-4">

        {/* LOGO */}
        <a href="/" className="shrink-0">
          <img src="/logo.png" className="h-10 cursor-pointer" />
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-blue-500">Home</a>
          <a href="/features" className="hover:text-blue-500">Features</a>
          <a href="/about" className="hover:text-blue-500">About</a>
          <a href="/contact" className="hover:text-blue-500">Early Access</a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="flex flex-col items-center gap-4 pb-6 md:hidden text-gray-700 font-medium">

          <a href="/" onClick={() => setOpen(false)}>Home</a>
          <a href="/features" onClick={() => setOpen(false)}>Features</a>
          <a href="/about" onClick={() => setOpen(false)}>About</a>
          <a href="/contact" onClick={() => setOpen(false)}>Early Access</a>

        </div>
      )}

    </nav>
  );
}