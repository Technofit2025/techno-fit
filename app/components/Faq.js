"use client";

import { useState } from "react";

const faqs = [
  { q: "Do I need any special equipment?", a: "No — just your phone. TechnoFit uses your camera to see your movement, so there are no wearables, sensors or gym machines required." },
  { q: "Is my camera data private?", a: "Yes, we take this seriously. Your camera is used to power real-time coaching feedback. Full details of how data is handled will be published in the app's privacy policy at launch." },
  { q: "Which phones will be supported?", a: "TechnoFit is being built for modern iOS and Android devices. Exact requirements will be confirmed closer to launch." },
  { q: "Can it help with injuries or recovery?", a: "TechnoFit includes physiotherapy-aware programs designed around safe movement. It is guidance, not a substitute for professional medical advice — always consult a healthcare provider for injuries." },
  { q: "When does it launch, and what will it cost?", a: "We're opening early access in phases. Pricing will be announced closer to launch, and early-access members get priority. Join the list to be first in line." },
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-28 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-blue-400 font-medium tracking-wide uppercase text-sm">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Questions, answered</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                >
                  <span className="font-semibold text-lg">{f.q}</span>
                  <span className={`text-blue-400 text-2xl leading-none transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 -mt-1 p-text">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
