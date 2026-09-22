export const dynamic = "force-static";

export default function sitemap() {
  const base = "https://techno-fit.com";
  const now = new Date();
  return ["", "/features", "/about", "/contact", "/privacy", "/terms"].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
