import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="max-w-sm">
            <img src="/logo-white.webp" alt="TechnoFit" className="h-8 w-auto" />
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              An AI-powered fitness ecosystem that sees your form, corrects you in real
              time, and adapts to you — expert coaching, accessible to everyone.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <h3 className="text-white font-semibold mb-3">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features" className="hover:text-white transition">Features</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Early Access</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition">Terms of Use</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:hello@techno-fit.com" className="hover:text-white transition">hello@techno-fit.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-sm text-gray-500">
          <p>© {year} TechnoFit. All rights reserved.</p>
          <p>Powered by Technometics.</p>
        </div>
      </div>
    </footer>
  );
}
