import HomeClient from "./HomeClient";

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
  return <HomeClient />;
}
