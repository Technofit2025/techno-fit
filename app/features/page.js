import FeaturesClient from "./FeaturesClient";

export const metadata = {
  title: "Features",
  description:
    "A complete fitness intelligence system: real-time AI pose correction, a personal AI trainer, voice coaching, smart diet and nutrition, food-scan calorie detection, mental wellness and AI physiotherapy.",
  alternates: { canonical: "/features" },
  openGraph: {
    images: ["/og-image.jpg"],
    title: "TechnoFit Features — A Complete Fitness Intelligence System",
    description:
      "Real-time pose correction, an adaptive AI trainer, voice coaching, smart nutrition and AI physiotherapy.",
    url: "/features",
  },
};

export default function Page() {
  return <FeaturesClient />;
}
