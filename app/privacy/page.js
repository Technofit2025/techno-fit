export const metadata = {
  title: "Privacy Policy",
  description: "How TechnoFit collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function Privacy() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-gray-400">Last updated: September 2026</p>

        <div className="mt-10 space-y-8 text-lg leading-relaxed text-gray-300">
          <p>
            TechnoFit (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy explains what
            information we collect through this website and how we use it. It applies to techno-fit.com and
            does not cover the TechnoFit mobile app, which will have its own in-app policy.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Information we collect</h2>
            <p>
              When you request early access, we collect the details you submit: your name, email address,
              phone number and your selected fitness goal. We also collect standard analytics data (such as
              pages visited and general location) if you accept analytics cookies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">How we use it</h2>
            <p>
              We use your contact details only to inform you about early access, product updates and launch
              news for TechnoFit. Analytics data helps us understand how the site is used so we can improve it.
              We do not sell your personal information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Cookies &amp; analytics</h2>
            <p>
              We load analytics and advertising tools (such as Google Analytics and the Meta Pixel) only after
              you accept cookies via our consent banner. If you decline, these tools are not loaded. You can
              change your choice at any time by clearing your browser storage for this site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Who we share it with</h2>
            <p>
              Early-access submissions are stored using Google services. Analytics data is processed by the
              providers named above. These partners process data on our behalf under their own privacy terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Your rights</h2>
            <p>
              You can ask us to access, correct or delete your personal information at any time by emailing{" "}
              <a href="mailto:hello@techno-fit.com" className="text-blue-400 underline">hello@techno-fit.com</a>.
              Depending on where you live, you may have additional rights under laws such as the GDPR.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
            <p>
              Questions about this policy? Email{" "}
              <a href="mailto:hello@techno-fit.com" className="text-blue-400 underline">hello@techno-fit.com</a>.
            </p>
          </div>

          <p className="text-sm text-gray-500">
            This policy is provided as a general starting point and should be reviewed by a qualified legal
            professional before launch, especially if you collect data from the EU, UK or California.
          </p>
        </div>
      </section>
    </main>
  );
}
