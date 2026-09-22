import { IconShield, IconPhysio, IconGlobe, IconCoach } from "./Icons";

const points = [
  { Icon: IconCoach, title: "Built by an athlete + a CTO", desc: "Founded by an Asian silver-medalist and a technology leader with 18+ years in software." },
  { Icon: IconPhysio, title: "Physiotherapy-aware", desc: "Programs designed with recovery and injury safety in mind, not just intensity." },
  { Icon: IconShield, title: "Privacy-first by design", desc: "Your camera powers the coaching — we treat that trust seriously." },
  { Icon: IconGlobe, title: "Built for everyone", desc: "Multilingual coaching designed to work across regions and skill levels." },
];

export default function TrustStrip() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 border-y border-white/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {points.map((p, i) => (
          <div key={i} className="text-center sm:text-left">
            <div className="w-11 h-11 mx-auto sm:mx-0 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
              <p.Icon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
