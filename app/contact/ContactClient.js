"use client";

import { useState, useRef } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const submittedRef = useRef(false);
  const timeoutRef = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    // Honeypot: real users never fill this hidden field.
    if (e.target.website && e.target.website.value) {
      e.preventDefault();
      return;
    }
    setIsError(false);
    setIsSuccess(false);
    setIsSubmitting(true);
    submittedRef.current = true;

    // Safety net: if the response never comes back, surface an error.
    timeoutRef.current = setTimeout(() => {
      if (submittedRef.current) {
        submittedRef.current = false;
        setIsSubmitting(false);
        setIsError(true);
      }
    }, 15000);
    // The form itself POSTs to the hidden iframe (default action).
  };

  // Fires when the Apps Script response actually loads in the hidden iframe.
  const handleIframeLoad = () => {
    if (!submittedRef.current) return; // ignore the initial mount load
    submittedRef.current = false;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsSubmitting(false);
    setIsSuccess(true);
    if (formRef.current) formRef.current.reset();
    setTimeout(() => setIsSuccess(false), 6000);
  };

  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="text-center py-28 px-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          Get Early Access
        </h1>

        <p className="mt-6 max-w-3xl mx-auto p-text">
          Join the future of intelligent fitness. Be among the first to experience TechnoFit.
        </p>
      </section>

      {/* FORM + IMAGE */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 px-8 md:px-16 max-w-7xl mx-auto pb-20 items-center">

        {/* FORM CARD */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-2xl">

          <form
            ref={formRef}
            action="https://script.google.com/macros/s/AKfycbzqiHk3rHe3Zo-sAYbEZwveTY7w40iHxMdQEsUUGmUy4sEJNDJ8GJOEvbr0hUyxd-v-/exec"
            method="POST"
            target="hidden_iframe"
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            {/* Honeypot (hidden from humans, catches bots) */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <input
              name="name"
              placeholder="Full Name"
              required
              className="w-full p-4 bg-black border border-white/10 rounded-lg"
            />

            <input
              name="email"
              type="email"
              required
              pattern="[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
              onInvalid={(e) =>
                e.target.setCustomValidity("Please enter a valid email (example: name@gmail.com)")
              }
              onInput={(e) => e.target.setCustomValidity("")}
              placeholder="Email Address"
              className="w-full p-4 bg-black border border-white/10 rounded-lg"
            />

            <input
              name="phone"
              type="tel"
              required
              pattern="^\+[1-9]\d{7,14}$"
              onInvalid={(e) =>
                e.target.setCustomValidity("Enter phone with country code (e.g. +919876543210)")
              }
              onInput={(e) => e.target.setCustomValidity("")}
              placeholder="+919876543210"
              className="w-full p-4 bg-black border border-white/10 rounded-lg"
            />

            <p className="text-gray-500 text-sm mt-1">
              Include country code (e.g. +1, +91, +44)
            </p>

            <select
              name="goal"
              required
              defaultValue=""
              className="w-full p-4 bg-black border border-white/10 rounded-lg"
            >
              <option value="" disabled>Select Your Goal</option>
              <option>Weight Loss</option>
              <option>Muscle Gain</option>
              <option>General Fitness</option>
              <option>Physiotherapy</option>
              <option>Mental Wellness</option>
            </select>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full p-4 rounded-lg text-lg font-semibold transition ${
                isSubmitting
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-violet-600 hover:opacity-90"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Get Early Access 🚀"}
            </button>

          </form>

          {/* SUCCESS MESSAGE */}
          {isSuccess && (
            <p className="text-green-400 text-center mt-4" role="status">
              ✅ You&rsquo;re on the list! We&rsquo;ll contact you soon.
            </p>
          )}

          {/* ERROR MESSAGE */}
          {isError && (
            <p className="text-red-400 text-center mt-4" role="alert">
              Something went wrong. Please try again, or email us at hello@techno-fit.com.
            </p>
          )}

          {/* HIDDEN IFRAME */}
          <iframe
            name="hidden_iframe"
            title="form-target"
            onLoad={handleIframeLoad}
            style={{ display: "none" }}
          ></iframe>

        </div>

        {/* IMAGE */}
        <div className="relative group flex justify-center">

          <img
            src="/images/early-access-preview.webp"
            alt="TechnoFit app early-access preview"
            className="w-full max-w-md rounded-2xl shadow-2xl transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-blue-500/10 blur-3xl -z-10"></div>

        </div>

      </section>

    </main>
  );
}
