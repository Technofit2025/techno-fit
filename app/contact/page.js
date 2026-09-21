import ContactClient from "./ContactClient";

export const metadata = {
  title: "Get Early Access",
  description:
    "Join the future of intelligent fitness. Be among the first to experience TechnoFit — request early access today.",
  alternates: { canonical: "/contact" },
  openGraph: {
    images: ["/og-image.jpg"],
    title: "Get Early Access to TechnoFit",
    description: "Be among the first to experience AI-powered fitness coaching.",
    url: "/contact",
  },
};

export default function Page() {
  return <ContactClient />;
}
