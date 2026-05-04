"use client";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      <a href="/">
        <img src="/logo.png" className="h-10 cursor-pointer" />
      </a>

      <div className="space-x-6 text-gray-700 font-medium">
        <a href="/" className="hover:text-blue-500">Home</a>
        <a href="/features" className="hover:text-blue-500">Features</a>
        <a href="/about" className="hover:text-blue-500">About</a>
        <a href="/contact" className="hover:text-blue-500">Early Access</a>
      </div>
    </nav>
  );
}