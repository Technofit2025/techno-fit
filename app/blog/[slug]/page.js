import Link from "next/link";
import { POSTS, getPost } from "../posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      images: ["/og-image.jpg"],
      publishedTime: post.date,
    },
  };
}

function Block({ b }) {
  if (b.h2) return <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4">{b.h2}</h2>;
  if (b.p) return <p className="p-text mb-5 leading-relaxed">{b.p}</p>;
  if (b.ul)
    return (
      <ul className="list-disc pl-6 mb-6 space-y-2 p-text">
        {b.ul.map((li, i) => (
          <li key={i}>{li}</li>
        ))}
      </ul>
    );
  if (b.cta)
    return (
      <div className="mt-12 rounded-2xl p-8 text-center bg-gradient-to-br from-blue-600 to-violet-600">
        <h3 className="text-2xl font-bold">Be among the first to experience TechnoFit</h3>
        <p className="mt-2 text-white/85">Join the early-access list and train with an AI coach that actually sees you.</p>
        <Link href="/contact" className="inline-block mt-5 px-7 py-3 rounded-full bg-white text-blue-700 font-semibold hover:scale-105 transition">
          Get Early Access
        </Link>
      </div>
    );
  return null;
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return (
      <main className="bg-black text-white min-h-screen flex items-center justify-center">
        <p className="p-text">Post not found. <Link href="/blog" className="text-blue-400 underline">Back to blog</Link></p>
      </main>
    );
  }
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "TechnoFit" },
    publisher: {
      "@type": "Organization",
      name: "TechnoFit",
      logo: { "@type": "ImageObject", url: "https://techno-fit.com/apple-touch-icon.png" },
    },
    image: "https://techno-fit.com/og-image.jpg",
    mainEntityOfPage: `https://techno-fit.com/blog/${post.slug}`,
  };
  return (
    <main className="bg-black text-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="max-w-3xl mx-auto px-6 pt-24 pb-24">
        <Link href="/blog" className="text-sm text-blue-400 hover:text-blue-300">← All articles</Link>
        <div className="flex items-center gap-3 text-xs text-gray-400 mt-6 mb-4">
          {post.tags.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">{t}</span>
          ))}
          <span>{post.readMins} min read</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">{post.title}</h1>
        <div className="mt-10">
          {post.blocks.map((b, i) => (
            <Block key={i} b={b} />
          ))}
        </div>
      </article>
    </main>
  );
}
