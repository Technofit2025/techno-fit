export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://techno-fit.com/sitemap.xml",
    host: "https://techno-fit.com",
  };
}
