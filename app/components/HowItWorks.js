"use client";

import { motion } from "framer-motion";
import { IconScan, IconPose, IconTarget } from "./Icons";

const steps = [
  { n: "01", Icon: IconScan, title: "Point your camera", desc: "Prop up your phone. TechnoFit sees your whole body in real time — no wearables, no extra gear." },
  { n: "02", Icon: IconPose, title: "Move, and get corrected", desc: "The AI checks your form rep by rep and guides you back into the right position the moment you drift." },
  { n: "03", Icon: IconTarget, title: "Improve every session", desc: "It adapts your workouts, nutrition and recovery as you progress — coaching that learns you." },
];

export default function HowItWorks() {
  return (
    <section className="py-28 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-medium tracking-wide uppercase text-sm">How it works</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">Expert coaching in three steps</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                  <s.Icon className="w-6 h-6" />
                </div>
                <span className="text-5xl font-bold text-white/10">{s.n}</span>
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 p-text">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
