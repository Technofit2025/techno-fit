export const dynamic = "force-static";

import { POSTS } from "./blog/posts";

export default function sitemap() {
  const base = "https://techno-fit.com";
  const now = new Date();
  const staticPaths = ["", "/features", "/about", "/blog", "/contact", "/privacy", "/terms"];
  const blogPaths = POSTS.map((p) => `/blog/${p.slug}`);
  return [...staticPaths, ...blogPaths].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
