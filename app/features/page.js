"use client";


import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Features() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      <Navbar />

      {/* HERO */}
      <section className="text-center py-32 px-6 relative">
        <div className="absolute inset-0 bg-blue-600/10 blur-3xl"></div>

        <motion.div initial="hidden" animate="show" variants={fadeUp} className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Not Just Features.
            <br />A Complete Fitness Intelligence System.
          </h1>

          <p className="mt-6 max-w-4xl mx-auto p-text text-lg leading-relaxed">
            TechnoFit replaces guesswork, confusion, and inconsistency with real-time intelligence,
            human-like interaction, and complete lifestyle support. Every feature is designed
            to solve real-world problems — not just track activity.
          </p>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="px-10 py-20 space-y-40 max-w-6xl mx-auto">

        {/* AI POSE */}
        <FeatureBlock
          title="Real-Time AI Pose Correction"
          image="/images/feature-pose.png"
          reverse={false}
          content={[
  "Most people believe they are working hard — but very few are working correctly. The biggest reason people don’t see results is not lack of effort, but incorrect form.",
  
  "A slight bend in your back, wrong knee alignment, or improper posture can reduce effectiveness and increase the risk of injury without you even realizing it.",
  
  "TechnoFit solves this with real-time AI pose detection that continuously tracks your body movement using your phone camera.",
  
  "It doesn’t just observe — it understands and corrects. The moment your posture deviates, it instantly guides you back into the correct position.",
  
  "Imagine performing squats at home. Your back leans slightly forward. Within seconds, the AI detects it and corrects you — just like a professional trainer standing right beside you.",
  
  "This ensures every repetition is precise, safe, and results-driven — turning your workout into a truly effective session."
]}
        />

        {/* TRAINER */}
        <FeatureBlock
          title="Your Personal AI Trainer"
          image="/images/feature-trainer.png"
          reverse={true}
          content={[
  "Traditional fitness apps rely on pre-recorded videos. They don’t adapt, they don’t respond, and they don’t understand you.",
  
  "TechnoFit changes that completely with a dynamic AI trainer that behaves like a real human coach.",
  
  "Your AI trainer demonstrates exercises in real time, adapts to your speed, and reacts to your performance.",
  
  "If you’re struggling, it slows down. If you’re improving, it pushes you further.",
  
  "Imagine learning a new exercise — instead of replaying a video again and again, your AI coach guides you step-by-step until you master it.",
  
  "This creates a truly interactive training experience that evolves with you — not a one-size-fits-all routine."
]}
        />

        {/* VOICE */}
        <FeatureBlock
          title="Voice-Based AI Coaching"
          image="/images/feature-voice.png"
          reverse={false}
          content={[
  "In the middle of a workout, the last thing you want is to tap screens or navigate menus.",
  
  "TechnoFit eliminates friction with natural, voice-based interaction that feels like talking to a real coach.",
  
  "You don’t command the app — you communicate with it.",
  
  "Say, “Hey Jazz, I feel tired,” and your workout adjusts instantly.",
  
  "Ask, “What should I do next?” — and it guides you in real time.",
  
  "This creates a seamless, hands-free experience where the technology disappears and the coaching feels real."
]}
        />

        {/* DIET */}
        <FeatureBlock
          title="Smart Diet & Nutrition Guidance"
          image="/images/feature-diet.png"
          reverse={true}
          content={[
  "Exercise alone cannot transform your body — nutrition plays an equally critical role.",
  
  "Yet most people struggle with what to eat, how much to eat, and whether they are doing it right.",
  
  "TechnoFit provides intelligent, personalized nutrition guidance tailored to your body, goals, and lifestyle.",
  
  "It considers calorie requirements, macro balance, and even health conditions before recommending meals.",
  
  "Imagine trying to lose weight — instead of random dieting, TechnoFit guides you with structured meal plans that maintain energy while ensuring fat loss.",
  
  "It simplifies nutrition into something practical, sustainable, and effective."
]}
        />

        {/* FOOD SCAN */}
        <FeatureBlock
          title="Food Scan & Calorie Detection"
          image="/images/feature-food-scan.png"
          reverse={false}
          content={[
  "One of the biggest challenges in fitness is understanding what you are actually consuming.",
  
  "Estimating calories manually is difficult, time-consuming, and often inaccurate.",
  
  "TechnoFit solves this instantly with AI-powered food scanning.",
  
  "Simply take a picture of your meal — and the app analyzes calories, protein, carbs, and fats within seconds.",
  
  "Imagine scanning a plate of biryani or a restaurant meal — and instantly knowing whether it fits your goal.",
  
  "This transforms guesswork into clarity, helping you make smarter decisions every day."
]}
        />

        {/* SMART EATING */}
        <FeatureBlock
          title="Smart Eating Assistant"
          image="/images/feature-smart-eating.png"
          reverse={true}
          content={[
  "Staying disciplined with diet becomes hardest when you eat outside.",
  
  "Most people break their routine not because they want to — but because they don’t know what to choose.",
  
  "TechnoFit acts as your smart decision-making assistant even in real-world scenarios like restaurants.",
  
  "Simply scan a menu or ask the AI — and it recommends options aligned with your fitness goal.",
  
  "Imagine sitting in a restaurant and wondering what to order — TechnoFit guides you instantly.",
  
  "It ensures your lifestyle remains flexible without compromising your progress."
]}
        />

        {/* MENTAL HEALTH */}
        <FeatureBlock
          title="Mental Health & Wellness"
          image="/images/feature-mental-wellness.png"
          reverse={false}
          content={[
  "Fitness is not just about the body — it’s equally about the mind.",
  
  "Stress, anxiety, and lack of motivation are among the biggest barriers to consistency.",
  
  "TechnoFit integrates mental wellness into your fitness journey through AI-powered guidance and interaction.",
  
  "You can talk to your AI coach, share how you feel, and receive real-time support.",
  
  "Whether it’s guided breathing, calming sessions, or focus routines — the app adapts to your mental state.",
  
  "It ensures you stay not just physically fit, but mentally strong and balanced."
]}
        />

        {/* PHYSIO */}
        <FeatureBlock
          title="AI Physiotherapy & Recovery"
          image="/images/feature-physiotherapy.png"
          reverse={true}
          content={[
  "Injuries, pain, and physical limitations are one of the biggest reasons people stop their fitness journey.",
  
  "Most apps ignore this completely — but TechnoFit makes it a core part of the experience.",
  
  "The app provides AI-guided physiotherapy programs tailored to specific conditions such as lower back pain, knee issues, or recovery after injury.",
  
  "Your AI trainer demonstrates safe rehabilitation exercises while continuously monitoring your posture.",
  
  "Imagine experiencing lower back pain — instead of guessing exercises, TechnoFit guides you step-by-step with safe movements and real-time correction.",
  
  "It ensures recovery is not just possible, but effective and measurable — bringing you back stronger and safer."
]}
        />

      </section>

    </main>
  );
}


/* 🔥 REUSABLE COMPONENT */
function FeatureBlock({ title, content, image, reverse }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
      className={`grid md:grid-cols-2 gap-16 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >

      {/* TEXT */}
      <div className={`${reverse ? "md:order-2" : ""}`}>
        <h2 className="text-4xl font-bold">{title}</h2>

        {content.map((p, i) => (
          <p key={i} className="mt-4 p-text leading-relaxed">
            {p}
          </p>
        ))}
      </div>

      {/* IMAGE */}
      <div className="group relative">
        <img
          src={image}
          className="rounded-2xl shadow-xl transition duration-500 group-hover:scale-105"
        />

        {/* Glow */}
        <div className="absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>
      </div>

    </motion.div>
  );
}