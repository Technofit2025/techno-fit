import Link from "next/link";
import { POSTS } from "./posts";

export const metadata = {
  title: "Blog",
  description:
    "Insights on AI fitness, real-time form correction, smart nutrition and mental wellness from the team building TechnoFit.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "TechnoFit Blog — AI Fitness, Explained",
    description:
      "How AI is changing fitness: form correction, nutrition, coaching and wellness.",
    url: "/blog",
    images: ["/og-image.jpg"],
  },
};

export default function BlogIndex() {
  const posts = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-10 text-center">
        <p className="text-blue-400 font-medium tracking-wide uppercase text-sm">The TechnoFit Blog</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-3">AI Fitness, Explained</h1>
        <p className="mt-5 max-w-2xl mx-auto p-text">
          How intelligent coaching is changing the way people train, eat, recover and stay consistent.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                <span className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {post.tags[0]}
                </span>
                <span>{post.readMins} min read</span>
              </div>
              <h2 className="text-xl font-semibold group-hover:text-white transition-colors">{post.title}</h2>
              <p className="mt-3 p-text text-base">{post.excerpt}</p>
              <span className="inline-block mt-5 text-blue-400 font-medium">Read more →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
