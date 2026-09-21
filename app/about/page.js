import AboutClient from "./AboutClient";

export const metadata = {
  title: "About",
  description:
    "The story and team behind TechnoFit — founded by national athlete Wasim Mulla and technology leader Jason Dsouza to bring real-time, intelligent fitness coaching to everyone.",
  alternates: { canonical: "/about" },
  openGraph: {
    images: ["/og-image.jpg"],
    title: "About TechnoFit — Built by Passion, Powered by Experience",
    description:
      "Founded by athletes and technology leaders to bridge real-world fitness expertise with intelligent technology.",
    url: "/about",
  },
};

export default function Page() {
  return <AboutClient />;
}
