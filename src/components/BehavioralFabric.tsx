import { motion } from "framer-motion";
import { useState } from "react";

const FIBERS = [
  {
    label: "Individual",
    color: "from-gold to-gold/50",
    cases: [
      { title: "Financial Wellness App", principle: "Mental Accounting", desc: "Helping individuals save by reframing spare change as 'pre-committed wealth'." },
      { title: "Habit Formation Platform", principle: "Implementation Intentions", desc: "Turning vague goals into specific if-then plans that stick." },
    ],
  },
  {
    label: "Corporate",
    color: "from-indigo-light to-cyan",
    cases: [
      { title: "Reducing Burnout", principle: "Choice Architecture", desc: "Restructuring decision environments to reduce cognitive overload for teams." },
      { title: "Talent Retention", principle: "Endowment Effect", desc: "Making employees feel ownership over their growth trajectory." },
    ],
  },
  {
    label: "Institutional",
    color: "from-cyan to-gold",
    cases: [
      { title: "Policy Adoption", principle: "Default Effect", desc: "Opt-out frameworks that boosted program enrollment by 340%." },
      { title: "Public Health Nudges", principle: "Social Norms", desc: "Community-level messaging that shifted behavior at population scale." },
    ],
  },
];

const BehavioralFabric = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4">
            The Behavioral Fabric
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Three threads.{" "}
            <span className="font-serif-display italic text-gradient-gold">One weave.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We operate across every scale of human decision-making.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {FIBERS.map((fiber, i) => (
            <motion.div
              key={fiber.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              className="card-hover group relative rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 cursor-pointer overflow-hidden"
            >
              {/* Top gradient line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${fiber.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

              <h3 className="text-2xl font-bold font-display mb-2">{fiber.label}</h3>
              <div className={`w-12 h-0.5 bg-gradient-to-r ${fiber.color} mb-6 transition-all duration-500 ${activeIndex === i ? "w-full" : ""}`} />

              <div className="space-y-5">
                {fiber.cases.map((c) => (
                  <motion.div
                    key={c.title}
                    initial={false}
                    animate={{ opacity: activeIndex === i ? 1 : 0.6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gold text-xs tracking-widest uppercase mb-1">
                      {c.principle}
                    </p>
                    <p className="font-semibold text-sm mb-1">{c.title}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{c.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BehavioralFabric;
