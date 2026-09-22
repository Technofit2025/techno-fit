import HomeClient from "./HomeClient";
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do I need any special equipment?", acceptedAnswer: { "@type": "Answer", text: "No — just your phone. TechnoFit uses your camera to see your movement, so there are no wearables, sensors or gym machines required." } },
    { "@type": "Question", name: "Is my camera data private?", acceptedAnswer: { "@type": "Answer", text: "Yes, we take this seriously. Your camera is used to power real-time coaching feedback. Full details of how data is handled will be published in the app's privacy policy at launch." } },
    { "@type": "Question", name: "Which phones will be supported?", acceptedAnswer: { "@type": "Answer", text: "TechnoFit is being built for modern iOS and Android devices. Exact requirements will be confirmed closer to launch." } },
    { "@type": "Question", name: "Can it help with injuries or recovery?", acceptedAnswer: { "@type": "Answer", text: "TechnoFit includes physiotherapy-aware programs designed around safe movement. It is guidance, not a substitute for professional medical advice." } },
    { "@type": "Question", name: "When does it launch, and what will it cost?", acceptedAnswer: { "@type": "Answer", text: "We are opening early access in phases. Pricing will be announced closer to launch, and early-access members get priority." } },
  ],
};


export const metadata = {
  title: { absolute: "TechnoFit — AI-Powered Fitness Coaching That Sees & Corrects You" },
  description:
    "TechnoFit turns your phone into an intelligent AI coach — it watches your form, corrects you in real time, and adapts to your goals with voice coaching, smart nutrition and physiotherapy.",
  alternates: { canonical: "/" },
  openGraph: {
    images: ["/og-image.jpg"],
    title: "TechnoFit — AI-Powered Fitness. Real Results.",
    description:
      "Your phone becomes an intelligent coach that sees your form, corrects you in real time, and adapts to you.",
    url: "/",
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <HomeClient />
    </>
  );
}
