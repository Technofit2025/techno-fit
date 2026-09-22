export const metadata = {
  title: "Terms of Use",
  description: "The terms that govern your use of the TechnoFit website.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function Terms() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold">Terms of Use</h1>
        <p className="mt-4 text-gray-400">Last updated: September 2026</p>

        <div className="mt-10 space-y-8 text-lg leading-relaxed text-gray-300">
          <p>
            By using techno-fit.com you agree to these terms. If you do not agree, please do not use the site.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Early access</h2>
            <p>
              TechnoFit is in pre-launch. Features described on this site represent our product vision and may
              change before release. Submitting the early-access form does not guarantee access or a specific
              launch date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Use of the site</h2>
            <p>
              You agree to use this site lawfully and not to attempt to disrupt, misuse or gain unauthorized
              access to it. All content, branding and designs on this site are owned by TechnoFit and may not
              be copied or reused without permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Not medical advice</h2>
            <p>
              TechnoFit provides fitness guidance and is not a substitute for professional medical advice.
              Consult a qualified healthcare provider before starting any exercise or nutrition program.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Disclaimer</h2>
            <p>
              This site is provided &ldquo;as is&rdquo; without warranties of any kind. To the extent permitted
              by law, TechnoFit is not liable for any damages arising from your use of the site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
            <p>
              Questions? Email{" "}
              <a href="mailto:hello@techno-fit.com" className="text-blue-400 underline">hello@techno-fit.com</a>.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            These terms are a general starting point and should be reviewed by a qualified legal professional
            before launch.
          </p>
        </div>
      </section>
    </main>
  );
}
