# TechnoFit — Launch & SEO Guide

A step-by-step checklist to get techno-fit.com deployed, found on Google, and growing.
Do them roughly in this order. Items marked **[you]** need your accounts; **[done]** are already built into the site.

---

## 1. Deploy the latest changes  **[you]**
Everything is committed on the `main` branch. Push it and Vercel auto-deploys:

```bash
cd "D:\Dell My Documents\Technofit-App\website\techno-fit"
git push origin main
```

Then open https://techno-fit.com and hard-refresh (Ctrl+F5) to confirm the logo and /blog are live.

---

## 2. Google Search Console — get indexed  **[you]**
This is how Google discovers and ranks you. Without it, indexing is slow and you're blind.

1. Go to https://search.google.com/search-console and add property **techno-fit.com** (Domain, or URL-prefix `https://techno-fit.com`).
2. Choose the **HTML tag** verification method. It gives you a code that looks like:
   `<meta name="google-site-verification" content="XXXXXXXXXXXX" />`
3. Copy just the **content value** (`XXXXXXXXXXXX`).
4. In **Vercel → your project → Settings → Environment Variables**, add:
   - Name: `NEXT_PUBLIC_GSC_VERIFICATION`
   - Value: the code from step 3
5. Redeploy (Vercel → Deployments → ... → Redeploy). The site now outputs the verification tag automatically.
6. Back in Search Console, click **Verify**.
7. In Search Console → **Sitemaps**, submit: `sitemap.xml`
8. Use **URL Inspection** on your homepage and blog posts → "Request indexing" to speed things up.

> The site already generates `sitemap.xml`, `robots.txt`, per-page titles, Open Graph tags, and structured data — you don't need to touch code for any of that.

---

## 3. Analytics — start measuring  **[you]**
Traffic scripts are built in but load only when you provide IDs (and only after visitors accept cookies).

In **Vercel → Settings → Environment Variables**, add:
- `NEXT_PUBLIC_GA_ID` = your Google Analytics 4 Measurement ID (looks like `G-XXXXXXXXXX`) — create at https://analytics.google.com
- `NEXT_PUBLIC_FB_PIXEL_ID` = your Meta Pixel ID (only if you'll run Facebook/Instagram ads) — from https://business.facebook.com Events Manager

Redeploy after adding. Leave them blank and nothing tracks.

---

## 4. Google Business Profile  **[you]** (you already have one)
1. Make sure the profile's **website link points to https://techno-fit.com**.
2. Keep the business **name, address, phone (NAP)** identical to what's on the site/footer — consistency helps local SEO.
3. Post updates occasionally (launch news, early access) — Google favors active profiles.
> The site already links to your profile ("Find us on Google" in the footer) and references it in structured data.

---

## 5. Backlinks — build authority  **[you]**
New domains rank slowly until other sites link to you. Get a few quality links:

- **Product Hunt** — launch when the app is ready (huge for early traction). https://producthunt.com
- **BetaList / BetaPage** — for pre-launch products collecting early access.
- **AI tool directories** — There's An AI For That (theresanaiforthat.com), Futurepedia, AI Scout, etc.
- **Fitness app directories & roundups** — pitch to write-ups of "AI fitness apps."
- **Your own channels** — link from Instagram (@farhan_asif_khan_official / brand), LinkedIn, Technometics site.
- **Local press / startup features** — Mumbai/Indian startup blogs.

Aim for 5–10 real links in the first few months. Quality > quantity.

---

## 6. Content — keep the blog growing  **[done + you]**
5 SEO articles are already published at /blog. Each targets real search terms. To keep ranking momentum, add ~2 posts/month. Good next topics:
- "Voice Coaching: Talk to Your AI Trainer, Jazz"
- "AI Physiotherapy: Safe Workouts for Injury Recovery"
- "3D AI Trainers vs Workout Videos: What's the Difference?"
- "How AI Food Scanning Makes Calorie Tracking Effortless"
- "Multilingual Fitness Coaching: Expert Guidance in Your Language"

Send me a topic and I'll write and publish it the same way.

---

## 7. Ongoing / nice-to-have
- Replace the AI-generated **founder & team photos** with real photos (trust + credibility).
- Add the **real live-training screen** to the interface section (send the screenshot).
- When the app launches, add **App Store / Play Store badges** and real **testimonials/ratings**.
- Consider a short **explainer video** for the hero.

---

### What's already built into the site (no action needed)
✅ Fast WebP images & static hosting  ✅ Per-page SEO titles/descriptions  ✅ Canonical URLs
✅ Open Graph + Twitter cards + share image  ✅ sitemap.xml & robots.txt  ✅ Organization + FAQ + Article structured data
✅ Cookie consent  ✅ Privacy Policy & Terms  ✅ Blog with 5 posts  ✅ Mobile responsive
