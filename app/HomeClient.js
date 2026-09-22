"use client";

import { motion } from "framer-motion";
import { IconPose, IconCoach, IconDiet, IconWellness, IconVoice, IconPhysio, IconTarget, IconGlobe } from "./components/Icons";
import HowItWorks from "./components/HowItWorks";
import TrustStrip from "./components/TrustStrip";
import Faq from "./components/Faq";

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9 } }
};

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      

      {/* HERO */}
     <section className="relative min-h-screen grid md:grid-cols-2 items-center px-6 md:px-10 overflow-hidden">

  {/* BACKGROUND */}
  <div className="absolute inset-0 bg-black z-0"></div>

  {/* BLUE + PURPLE GLOW */}
  <div className="absolute right-[-200px] top-[-100px] w-[700px] h-[700px] bg-blue-600/20 blur-3xl rounded-full z-0"></div>
  <div className="absolute left-[-220px] bottom-[-120px] w-[620px] h-[620px] bg-violet-600/20 blur-3xl rounded-full z-0"></div>

  {/* LEFT CONTENT */}
  <div className="relative z-30 max-w-xl">

   
    <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
      </span>
      Early access is now open
    </div>

    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">AI-Powered</span>
      <br />
      Fitness.
      <br />
      Real Results.
    </h1>

    <p className="mt-6 p-text text-lg leading-relaxed">
      TechnoFit is a first-of-its-kind AI-powered fitness ecosystem that doesn’t just guide you —
      it observes, understands, corrects, and evolves with you in real time.
    </p>

    <p className="mt-4 p-text leading-relaxed hidden sm:block">
      By combining artificial intelligence, motion tracking, and human-like interaction,
      TechnoFit transforms your device into a truly intelligent coach.
    </p>
    {/* CTA */}
    <div className="mt-8 flex flex-wrap gap-4">

      <a href="/contact">
        <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl shadow-[0_0_24px_rgba(124,58,237,0.5)] hover:scale-105 transition">
          Get Early Access
        </button>
      </a>

      <a href="#demo">
  <button className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white/10 transition">
    Watch Demo
  </button>
</a>

    </div>

    <motion.img
  src="/images/hero-phone.webp"
  alt="Hero"
  className="
    block md:hidden
    mt-8
    w-[88vw]
    max-w-[380px]
    mx-auto
    drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]
  "
  animate={{ y: [0, -15, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
/>

    

    {/* FEATURE ICONS */}
    <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm p-text text-center justify-items-center">

      <div className="flex flex-col items-center">
        <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-2"><IconPose /></div>
        <span>AI Pose Correction</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-2"><IconCoach /></div>
        <span>3D AI Coaches</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-2"><IconDiet /></div>
        <span>Smart Diet</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-2"><IconWellness /></div>
        <span>Mental Wellness</span>
      </div>

    </div>

  </div>

  {/* PHONE (MAIN HERO) */}
<motion.img
  src="/images/hero-phone.webp"
  alt="Hero"
  className="
hidden md:block
absolute right-0 md:right-[5%] bottom-0 
w-[75vw] md:w-[50vw] 
max-w-[850px] min-w-[300px] 
z-10 
drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]"

  animate={{
    y: [0, -20, 0],   // floating up and down
  }}

  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>

  {/* BOTTOM FADE */}
  <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-20"></div>

</section>
      {/* PARALLAX 3D TRAINER */}
      <section className="py-32 px-6 text-center bg-gradient-to-b from-black to-gray-900">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <h2 className="text-5xl font-bold mb-6">
            Meet Your AI Fitness Coaches
          </h2>

          <p className="max-w-3xl mx-auto p-text text-lg mb-12 leading-relaxed">
  Meet your intelligent AI fitness coaches — designed to guide, demonstrate,
  and correct your movements in real time. It’s like having a personal trainer
  with you, but smarter, scalable, and always available.
</p>

          <div className="relative max-w-5xl mx-auto flex items-end justify-center gap-4 md:gap-16">

            {/* glow stage */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-44 bg-gradient-to-r from-blue-600/30 to-violet-600/30 blur-3xl rounded-full -z-10"></div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-1/2 max-w-xs"
            >
              <img src="/images/coach-wasim.webp" alt="Wasim, your AI fitness coach" className="w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />
              <span className="absolute top-2 left-2 text-xs font-medium px-3 py-1 rounded-full bg-black/60 backdrop-blur border border-white/10">Wasim · AI Coach</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative w-1/2 max-w-xs"
            >
              <img src="/images/coach-jazz.webp" alt="Jazz, your AI fitness coach" className="w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]" />
              <span className="absolute top-2 right-2 text-xs font-medium px-3 py-1 rounded-full bg-black/60 backdrop-blur border border-white/10">Jazz · AI Trainer</span>
            </motion.div>

          </div>

        </motion.div>
      </section>

      <TrustStrip />

      {/* PROBLEM */}
      <section className="py-28 px-6 text-center bg-gray-900">
        <motion.div initial="hidden" whileInView="show" variants={fadeUp}>

          <h2 className="text-4xl font-bold">The Problem with Fitness Today</h2>

          <p className="mt-8 max-w-4xl mx-auto p-text leading-relaxed">
            Most fitness apps are passive — they play a video but can&rsquo;t see you. So you&rsquo;re left
            guessing whether your form is right, and that guesswork leads to injuries, slow progress, and
            eventually giving up.
          </p>

        </motion.div>
      </section>

      {/* SOLUTION */}
      <section className="py-28 px-6 text-center">
        <motion.div initial="hidden" whileInView="show" variants={fadeUp}>

          <h2 className="text-4xl font-bold">The TechnoFit Solution</h2>

          <p className="mt-8 max-w-4xl mx-auto p-text leading-relaxed">
            TechnoFit adds real intelligence to fitness. It watches your movement, catches mistakes the
            instant they happen, and corrects them — adapting to your level, your body, and your goals so
            every session actually counts.
          </p>

        </motion.div>
      </section>

      <HowItWorks />

      {/* DEMO VIDEO SECTION */}
<section id="demo" className="py-28 px-6 text-center bg-gradient-to-b from-gray-900 to-black">

  <h2 className="text-4xl font-bold mb-6">
    See TechnoFit in Action
  </h2>

  <p className="p-text max-w-2xl mx-auto mb-12">
    Watch how TechnoFit intelligently guides your workouts, corrects your form in real time,
    and interacts with you like a real coach.
  </p>

  <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg">

    {/* VIDEO */}
    <video
      controls
      playsInline
      preload="metadata"
      className="w-full aspect-video bg-black"
      poster="/images/demo-poster.jpg"
    >
      <source src="/videos/technofit-demo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

  </div>

</section>

      {/* FEATURES */}
      <section className="py-28 px-10">
        <h2 className="text-4xl text-center font-bold mb-16">
          Powerful Features Designed for Real Results
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            {
              icon: IconPose,
              title: "Real-Time AI Correction",
              desc: "Instantly detects posture errors and corrects your movements, reducing injury risk."
            },
            {
              icon: IconCoach,
              title: "3D Virtual Trainer",
              desc: "Demonstrates exercises dynamically and adapts to your workout style."
            },
            {
              icon: IconVoice,
              title: "Voice Coaching",
              desc: "Provides real-time feedback and motivation through natural conversation."
            },
            {
              icon: IconPhysio,
              title: "Physiotherapy Integration",
              desc: "Safe workout plans designed for recovery and injury management."
            },
            {
              icon: IconTarget,
              title: "Personalized Programs",
              desc: "Customized fitness plans based on your health, goals, and performance."
            },
            {
              icon: IconGlobe,
              title: "Global Accessibility",
              desc: "Multilingual support to reach users across different regions."
            }
          ].map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4"><f.icon className="w-6 h-6" /></div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 p-text">{f.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* UI */}
      <section className="py-28 text-center bg-gray-900">

  <h2 className="text-4xl font-bold mb-6">
    Experience the Interface
  </h2>

  <p className="p-text max-w-2xl mx-auto mb-16">
    Designed for simplicity, powered by intelligence — every screen feels intuitive,
    responsive, and built for real results.
  </p>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">

    {/* SPLASH */}
    <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg">
      
      <img
        src="/images/ui-splash.webp"
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />

      {/* Glow effect */}
      <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"></div>

    </div>

    {/* DASHBOARD */}
    <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg">
      
      <img
        src="/images/ui-dashboard.webp"
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"></div>

    </div>

    {/* TRAINING */}
    <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg">
      
      <img
        src="/images/ui-training.webp"
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"></div>

    </div>

  </div>

</section>
      {/* FOUNDERS */}
      {/* FOUNDERS SECTION */}
<section className="py-28 px-6 bg-black text-center">

  <h2 className="text-4xl md:text-5xl font-bold mb-6">
    Built by Passion. Powered by Experience.
  </h2>

  <p className="p-text max-w-3xl mx-auto mb-20 leading-relaxed text-lg">
    TechnoFit wasn&rsquo;t built as just another fitness app. It was built to close the gap between
    real-world coaching and intelligent technology — by athletes and technology leaders who know what
    actually drives results.
  </p>

  <div className="space-y-20 max-w-5xl mx-auto">

    {/* FOUNDER - WASIM */}
    <div className="flex flex-col md:flex-row items-center gap-10 text-left">

      <img
        src="/images/founder-wasim.webp"
        className="w-44 h-44 object-cover rounded-full border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.25)]"
      />

      <div>

        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Wasim Mulla
        </h3>

        <p className="text-blue-400 text-lg mt-1 mb-4">
          Founder
        </p>

        <p className="p-text leading-relaxed mb-4">
          An Indian national athlete and Asian silver medalist in triple jump, Wasim Mulla brings a rare
          combination of elite sports discipline and deep technical expertise. His journey in sports taught
          him the importance of precision, consistency, and correct training — values that became the foundation
          of TechnoFit.
        </p>

        <p className="p-text leading-relaxed">
          With over 20 years of experience in IT infrastructure and security, working across India, the Middle East,
          and Africa, Wasim has successfully delivered multi-million-dollar projects. By combining his passion for
          fitness with his technological background, he envisioned TechnoFit as a platform that could provide
          real-time, intelligent coaching to anyone, anywhere — making expert fitness guidance accessible at scale.
        </p>

      </div>

    </div>

    {/* CO-FOUNDER - JASON */}
    <div className="flex flex-col md:flex-row items-center gap-10 text-left">

      <img
        src="/images/cofounder-jason.webp"
        className="w-44 h-44 object-cover rounded-full border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.25)]"
      />

      <div>

        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Jason Dsouza
        </h3>

        <p className="text-blue-400 text-lg mt-1 mb-4">
          Co-Founder
        </p>

        <p className="p-text leading-relaxed mb-4">
          Jason Dsouza brings over 18 years of international experience in software development and technology
          leadership. Currently serving as a CTO for a multinational company based in Australia, he has played
          a key role in building scalable, high-performance systems across global markets.
        </p>

        <p className="p-text leading-relaxed">
          Beyond technology, Jason is a passionate athlete and a dedicated middle-distance runner. His long-standing
          connection with Wasim, supported by the mentorship of his late father, Mr. Gerald D’Souza — who played a
          significant role in Wasim’s early international sports journey — adds a deeply personal dimension to their
          collaboration. Together, they bring a shared vision and commitment to building TechnoFit as a truly
          transformative fitness platform.
        </p>

      </div>

    </div>

  </div>

</section>
      <Faq />

      {/* CTA */}
      <section className="py-24 px-6 bg-black">
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden px-8 py-16 md:py-20 text-center bg-gradient-to-br from-blue-600 to-violet-600">
          <div className="absolute -top-24 -right-20 w-72 h-72 bg-white/15 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-violet-400/30 blur-3xl rounded-full"></div>

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto leading-tight">
              Be among the first to experience the future
            </h2>
            <p className="mt-4 text-white/85 max-w-xl mx-auto">
              Join the early-access list and help shape TechnoFit before launch.
            </p>
            <a href="/contact">
              <button className="mt-8 px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-full hover:scale-105 transition">
                Get Early Access
              </button>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}