import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticleCanvas from "./ParticleCanvas";
import winerocksLogo from "@/assets/winerocks-logo.png";

const PRINCIPLES = [
  { name: "Loss Aversion", desc: "People feel losses ~2× more than gains. Frame the stakes." },
  { name: "Social Proof", desc: "We follow the crowd. Show the momentum." },
  { name: "Anchoring", desc: "The first number sets the stage. Choose it wisely." },
  { name: "Default Effect", desc: "What's pre-selected wins. Design the default." },
  { name: "Commitment Device", desc: "Small yeses lead to big commitments." },
];

const HeroSection = () => {
  const [nudgeActive, setNudgeActive] = useState(false);
  const [currentPrinciple, setCurrentPrinciple] = useState(PRINCIPLES[0]);

  const handleNudge = useCallback(() => {
    const next = PRINCIPLES[Math.floor(Math.random() * PRINCIPLES.length)];
    setCurrentPrinciple(next);
    setNudgeActive(false);
    // Force re-trigger
    requestAnimationFrame(() => setNudgeActive(true));
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleCanvas nudgeActive={nudgeActive} nudgePrinciple={currentPrinciple.name} />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={winerocksLogo} alt="Winerocks logo" className="w-20 h-20 mx-auto mb-6 object-contain" />
          <p className="text-sm tracking-[0.3em] uppercase text-gold mb-6 font-medium">
            Behavioral Science × AI
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 font-display">
            We Engineer{" "}
            <span className="font-serif-display italic text-gradient-gold">
              Human
            </span>
            <br />
            Advantage.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            A venture lab where behavioral economics meets AI, creating solutions
            that don't just compute—they{" "}
            <span className="text-gold font-medium">compel</span>.
          </p>

          <button
            onClick={handleNudge}
            className="magnetic-btn inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full text-lg"
          >
            <span className="w-2 h-2 rounded-full bg-accent-foreground animate-pulse-gold" />
            Give me a nudge
          </button>
        </motion.div>

        <AnimatePresence mode="wait">
          {nudgeActive && (
            <motion.div
              key={currentPrinciple.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="mt-10 inline-block px-6 py-4 rounded-xl bg-card/80 backdrop-blur-md border border-border"
            >
              <p className="text-gold font-semibold text-sm tracking-wide uppercase mb-1">
                {currentPrinciple.name}
              </p>
              <p className="text-foreground/80 text-sm">{currentPrinciple.desc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
