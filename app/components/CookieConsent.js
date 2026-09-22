"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem("tf_consent")) setShow(true);
    } catch (e) {}
  }, []);

  const decide = (value) => {
    try { localStorage.setItem("tf_consent", value); } catch (e) {}
    if (value === "granted") window.dispatchEvent(new Event("tf-consent-granted"));
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] px-4 pb-4 pointer-events-none">
      <div className="pointer-events-auto mx-auto max-w-3xl bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 shadow-2xl">
        <p className="text-sm text-gray-300 flex-1">
          We use cookies to understand how the site is used and improve your experience. See our{" "}
          <a href="/privacy" className="text-blue-400 underline hover:text-blue-300">Privacy Policy</a>.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => decide("denied")}
            className="px-5 py-2 rounded-full border border-white/20 text-sm text-gray-200 hover:bg-white/10 transition"
          >
            Decline
          </button>
          <button
            onClick={() => decide("granted")}
            className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
