"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9 } }
};

export default function About() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      
      {/* HERO */}
      <section className="relative text-center py-28 px-6">
        <div className="absolute inset-0 bg-blue-600/10 blur-3xl"></div>

        <motion.div initial="hidden" animate="show" variants={fadeUp} className="relative z-10">
          <h1 className="text-5xl font-bold">The Story Behind TechnoFit</h1>

          <p className="mt-6 max-w-3xl mx-auto p-text leading-relaxed">
            A vision born at the intersection of elite athletic experience and advanced technology —
            driven by a belief that fitness should be intelligent, safe, and accessible to everyone.
          </p>
        </motion.div>
      </section>

      {/* VISION */}
      <motion.section initial="hidden" whileInView="show" variants={fadeUp}
        className="py-20 px-6 text-center bg-gray-900">

        <h2 className="text-4xl font-bold">Our Vision</h2>

        <p className="mt-6 max-w-4xl mx-auto p-text leading-relaxed">
          To revolutionize global fitness by building an intelligent ecosystem where every individual
          has access to real-time, expert-level coaching. TechnoFit envisions a world where technology
          doesn’t just assist fitness — it understands, adapts, and evolves with the user.
        </p>
      </motion.section>

      {/* CONCEPT STORY */}
      <motion.section initial="hidden" whileInView="show" variants={fadeUp}
        className="py-20 px-6 max-w-5xl mx-auto p-text leading-relaxed space-y-6">

        <p>
          Every year, millions of people begin their fitness journey with enthusiasm and determination.
          Yet most fail to achieve results — not because they lack effort, but because they lack guidance.
        </p>

        <p>
          People follow workout videos, mimic exercises, and assume they are doing it correctly.
          Over time, incorrect form leads to injuries, slow progress, and frustration.
        </p>

        <p>
          Traditional fitness apps provide content — but not understanding.
          They show you what to do, but they don’t know if you’re doing it right.
        </p>

        <p className="text-white font-semibold">
          That gap led to a powerful question:
        </p>

        <p className="text-white font-semibold">
          What if your device could understand your body like a real coach?
        </p>

        <p>
          What if it could watch you train, detect mistakes instantly,
          correct your posture, and guide you step by step — in real time?
        </p>

        <p>
          That question became a vision. That vision became TechnoFit.
        </p>

        <p className="text-white font-semibold">
          TechnoFit is not just an app — it is a transformation from passive fitness to intelligent fitness.
        </p>

      </motion.section>

      {/* AI TRAINERS */}
      <motion.section initial="hidden" whileInView="show" variants={fadeUp}
        className="py-24 text-center bg-black">

        <h2 className="text-4xl font-bold mb-10">Meet Your AI Trainers</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">

  {/* JAZZ */}
  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 group hover:scale-105 transition duration-500">

    <div className="relative w-36 h-36 mx-auto mb-6">
      <img
        src="/images/ai-jazz.png"
        className="w-full h-full object-cover rounded-full"
      />

      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
    </div>

    <h3 className="text-2xl font-semibold">Jazz</h3>
    <p className="text-blue-400">AI Fitness Coach</p>

    <p className="mt-4 p-text">
      Jazz is your intelligent fitness companion — guiding you with real-time feedback,
      motivation, and precision. Designed to feel human, responsive, and adaptive.
    </p>
  </div>


  {/* WASIM AI */}
  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 group hover:scale-105 transition duration-500">

    <div className="relative w-36 h-36 mx-auto mb-6">
      <img
        src="/images/ai-wasim.png"
        className="w-full h-full object-cover rounded-full"
      />

      <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
    </div>

    <h3 className="text-2xl font-semibold">Wasim (AI Avatar)</h3>
    <p className="text-blue-400">AI Performance Coach</p>

    <p className="mt-4 p-text">
      A digital extension of Founder Wasim’s expertise — bringing elite athletic knowledge,
      discipline, and real-world training intelligence into your daily workouts.
    </p>
  </div>

</div>

      </motion.section>

      {/* FOUNDERS */}
      <motion.section initial="hidden" whileInView="show" variants={fadeUp}
        className="py-28 px-10 bg-gray-900">

        <h2 className="text-4xl font-bold text-center mb-16">
          The Visionaries Behind TechnoFit
        </h2>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl">
            <div className="flex justify-center mb-6">
  <div className="relative group">

    <div className="w-40 h-40 rounded-full overflow-hidden bg-black flex items-center justify-center shadow-xl">
      <img
        src="/images/founder-wasim.png"
        className="w-full h-full object-cover scale-110"
      />
    </div>

    {/* Glow effect */}
    <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

  </div>
</div>

            <h3 className="text-2xl font-semibold">Wasim Mulla</h3>
            <p className="text-blue-400">Founder</p>

            <p className="mt-4 p-text">
  Wasim Mulla is not just the founder of TechnoFit — he is the embodiment of its core philosophy.
  An Indian national athlete and Asian silver medalist in triple jump, his journey in sports
  was built on discipline, precision, and relentless pursuit of excellence.
</p>

<p className="mt-4 p-text">
  Through years of training and competition, he witnessed a common problem — even dedicated individuals
  often failed to achieve results due to lack of proper guidance and incorrect techniques.
  This gap between effort and results became the foundation of TechnoFit’s vision.
</p>

<p className="mt-4 p-text">
  Beyond sports, Wasim brings over 20 years of experience in IT infrastructure and security,
  having successfully delivered large-scale projects across India, the Middle East, and Africa.
  His ability to merge deep technical expertise with real-world fitness experience gave birth
  to the idea of an intelligent fitness ecosystem.
</p>

<p className="mt-4 p-text">
  TechnoFit is his vision of making expert-level coaching accessible to everyone —
  not limited by geography, cost, or availability — but powered by intelligence and technology.
</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl">
            <div className="flex justify-center mb-6">
  <div className="relative group">

    <div className="w-40 h-40 rounded-full overflow-hidden bg-black flex items-center justify-center shadow-xl">
      <img
        src="/images/cofounder-jason.png"
        className="w-full h-full object-cover scale-110"
      />
    </div>

    <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

  </div>
</div>

            <h3 className="text-2xl font-semibold">Jason D’Souza</h3>
            <p className="text-blue-400">Co-Founder</p>

            <p className="mt-4 p-text">
  Jason D’Souza brings the technological strength and global perspective that powers TechnoFit’s foundation.
  With over 18 years of international experience in software development and system architecture,
  he has built and led scalable solutions across industries.
</p>

<p className="mt-4 p-text">
  Currently serving as a CTO for a multinational company based in Australia,
  Jason plays a critical role in shaping the intelligent architecture behind TechnoFit,
  ensuring it is not just innovative, but also scalable and reliable.
</p>

<p className="mt-4 p-text">
  Beyond technology, Jason is a passionate athlete and a dedicated middle-distance runner.
  His personal connection to fitness, combined with his long-standing association with Wasim,
  brings a deeper emotional alignment to the vision.
</p>

<p className="mt-4 p-text">
  Their journey is not just professional — it is personal.
  Jason’s father, Late Mr. Gerald D’Souza, played a significant role in supporting Wasim’s
  early international athletic journey, making this collaboration a continuation of shared
  values, trust, and purpose.
</p>
          </div>

        </div>

      </motion.section>

      {/* TEAM */}
<section className="text-center py-24 bg-gray-900 px-6">

  <h2 className="text-4xl font-bold mb-6">
    The Team Behind TechnoFit
  </h2>

  <p className="p-text max-w-3xl mx-auto mb-16">
    Behind TechnoFit is a passionate team of engineers and developers
    working relentlessly to bring intelligent fitness to life.
  </p>

  <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

    {/* DICKI */}
    <div className="group">

      <div className="relative w-36 h-36 mx-auto mb-6">
        <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center shadow-xl">
          <img
            src="/images/team-dicki.png"
            className="w-full h-full object-cover scale-110"
          />
        </div>

        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
      </div>

      <h3 className="text-xl font-semibold">Dicki Prima</h3>
      <p className="text-blue-400 text-sm">Senior Software Developer</p>
      <p className="text-gray-500 text-sm">Indonesia</p>

    </div>


    {/* FAISAL */}
    <div className="group">

      <div className="relative w-36 h-36 mx-auto mb-6">
        <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center shadow-xl">
          <img
            src="/images/team-faisal.png"
            className="w-full h-full object-cover scale-110"
          />
        </div>

        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
      </div>

      <h3 className="text-xl font-semibold">Faisal Mistry</h3>
      <p className="text-blue-400 text-sm">AI Engineer</p>
      <p className="text-gray-500 text-sm">Pune, India</p>

    </div>


    {/* RITESH */}
    <div className="group">

      <div className="relative w-36 h-36 mx-auto mb-6">
        <div className="w-full h-full rounded-full overflow-hidden bg-black flex items-center justify-center shadow-xl">
          <img
            src="/images/team-ritesh.png"
            className="w-full h-full object-cover scale-110"
          />
        </div>

        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
      </div>

      <h3 className="text-xl font-semibold">Ritesh Patil</h3>
      <p className="text-blue-400 text-sm">Flutter Developer</p>
      <p className="text-gray-500 text-sm">Kolhapur, India</p>

    </div>

  </div>

</section>

      {/* PARTNER */}
<motion.section
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={fadeUp}
  className="py-28 px-10 bg-black"
>

  {/* HEADING */}
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold">Strategic Partner</h2>

    <p className="p-text max-w-3xl mx-auto mt-4 leading-relaxed">
      The creative vision and brand identity of TechnoFit has been shaped through a strong collaboration,
      bringing together technology with impactful storytelling and user-centric design.
    </p>

    <div className="w-16 h-[2px] bg-blue-500 mx-auto mt-6"></div>
  </div>

  {/* GRID */}
  <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

    {/* IMAGE */}
    <div className="flex justify-center md:justify-end">
      <div className="relative group">

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-64 h-64 rounded-2xl overflow-hidden bg-black shadow-2xl"
        >
          <img
            src="/images/partner-bhakti.png"
            className="w-full h-full object-cover"
            alt="Bhakti Dabholkar"
          />
        </motion.div>

        <div className="absolute inset-0 bg-blue-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

      </div>
    </div>

    {/* TEXT */}
    <div>

      <h3 className="text-3xl font-bold">Bhakti Dabholkar</h3>
      <p className="text-blue-400 mt-1">Strategic & Creative Partner</p>

      <p className="mt-6 p-text leading-relaxed">
        Bhakti has played a pivotal role in shaping the identity of TechnoFit — bringing
        together creativity, clarity, and strategic thinking to craft a brand that truly connects with people.
      </p>

      <p className="mt-4 p-text">
        Her exceptional design sense, attention to detail, and ability to translate complex ideas
        into intuitive and engaging user experiences have been instrumental in defining how users
        perceive and interact with the platform.
      </p>

      <p className="mt-4 p-text">
        Beyond aesthetics, her strategic approach ensures that every element of TechnoFit is purposeful —
        aligning design, storytelling, and user experience into one cohesive vision.
      </p>

      <p className="mt-6 text-gray-300 font-medium">
        Her contribution continues to shape the heart of TechnoFit.
      </p>

    </div>

  </div>

</motion.section>
{/* CLOSING SECTION */}
<motion.section
  initial="hidden"
  whileInView="show"
  variants={fadeUp}
  className="py-28 px-6 text-center bg-black"
>

  <h2 className="text-4xl md:text-5xl font-bold mb-8">
    This Is Just the Beginning
  </h2>

  <p className="max-w-4xl mx-auto p-text leading-relaxed text-lg">
    TechnoFit is more than a product — it is a movement towards a smarter,
    more accessible, and more human approach to fitness.
  </p>

  <p className="mt-6 max-w-4xl mx-auto p-text leading-relaxed">
    A future where your device doesn’t just track you, but understands you.
    Where guidance is not limited by location, and where every individual
    has access to expert-level coaching — anytime, anywhere.
  </p>

  <p className="mt-6 max-w-4xl mx-auto p-text leading-relaxed">
    We are not building just another fitness app.
    We are building the future of intelligent fitness.
  </p>

  <p className="mt-8 text-white font-semibold text-lg">
    And this is only the beginning.
  </p>

</motion.section>
    </main>
  );
}