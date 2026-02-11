import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    name: "NextVibe",
    tag: "Event Tech",
    principle: "Scarcity & Social Proof",
    color: "from-gold/20 to-gold/5",
    challenge:
      "Event discovery is fragmented and passive. Users default to familiar events, missing high-value experiences—a classic status quo bias compounded by choice overload across dozens of platforms.",
    nudge:
      "Built the 'YouTube & Google for events'—a single discovery layer that leverages social proof ('238 people near you are interested') and scarcity signals ('87% sold') to transform passive browsing into decisive action. Algorithmic curation reduces choice overload while surfacing personally relevant events.",
    outcome:
      "Users discover 4× more events and convert from browsing to booking at significantly higher rates. The platform turns FOMO from anxiety into a precision engagement tool.",
    link: " https://nextvibe.co",
  },
  {
    name: "MintFactory",
    tag: "Startup Infrastructure",
    principle: "Commitment Escalation",
    color: "from-cyan/20 to-cyan/5",
    challenge:
      "Most startups die not from bad ideas, but from slow validation. Founders suffer from sunk cost fallacy—over-investing in unvalidated products—while potential early adopters face bystander effect, waiting for others to signal value first.",
    nudge:
      "Fused the mechanics of Product Hunt (social validation), vibe-coding (rapid prototyping), and Kickstarter (commitment devices) into a single platform. Founders get real-time market signals; backers use micro-commitments that escalate naturally from interest to investment, reducing the gap between 'I like this' and 'I'm in.'",
    outcome:
      "Dramatically accelerates product-market fit globally by compressing the feedback loop from months to days. Startups iterate faster, fail cheaper, and find their audience through behavioral signals rather than guesswork.",
    link: "https://themintfactory.xyz",
  },
  {
    name: "Prisms Healthcare",
    tag: "HealthTech",
    principle: "Choice Architecture",
    color: "from-indigo-light/20 to-indigo-light/5",
    challenge:
      "Electronic medical records are notoriously hostile to clinician workflows—poor defaults, cognitive overload, and friction-heavy interfaces lead to documentation fatigue, errors, and burnout. Clinicians default to workarounds that compromise patient data integrity.",
    nudge:
      "Consulted on building a robust EMR system grounded in choice architecture. Intelligent defaults pre-populate based on context, reducing unnecessary decisions. Information is layered progressively—surfacing what matters now and hiding what doesn't. Friction is strategically placed before irreversible actions, while routine tasks flow effortlessly.",
    outcome:
      "Clinicians spend less time fighting the system and more time with patients. Documentation accuracy improves, error rates drop, and the EMR becomes a behavioral ally rather than an obstacle to care.",
    link: "https://prismsHealthcare.com",
  },
  {
    name: "DailyManna",
    tag: "FaithTech",
    principle: "Identity & Community",
    color: "from-gold/20 to-indigo-light/5",
    challenge:
      "Devotional apps are often solitary experiences, disconnecting believers from communal faith practice. Without social accountability, engagement drops rapidly—a classic present bias where daily spiritual discipline loses to immediate distractions. Users lack identity reinforcement tied to their faith.",
    nudge:
      "Built for Deeper Life Christian Ministry, DailyManna anchors every interaction in the believer's identity in Christ. Community features create social commitment devices—daily devotionals are shared milestones, not isolated tasks. Streaks and group reflections leverage commitment escalation, while identity-based framing ('As a child of God, you've reflected 30 days straight') deepens intrinsic motivation beyond mere habit tracking.",
    outcome:
      "Believers engage consistently with scripture through identity-reinforced community. Daily devotional completion rates remain high as faith practice transforms from individual discipline into collective spiritual momentum.",
    link: "https://dailymanna.app",
  },
];

const VentureLab = () => {
  const [activeProject, setActiveProject] = useState<
    (typeof PROJECTS)[0] | null
  >(null);

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
            The Venture Lab
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Portfolios Powered by{" "}
            <span className="font-serif-display italic text-gradient-gold">
              BE.AI
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every venture is an experiment in human behavior. Here's what we've
            proven.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setActiveProject(project)}
              className="card-hover group cursor-pointer rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs tracking-widest uppercase text-muted-foreground">
                    {project.tag}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full border border-gold/30 text-gold">
                    {project.principle}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-display mb-2 group-hover:text-gold transition-colors">
                  {project.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Click to explore the behavioral challenge and outcome →
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Side Panel */}
      <AnimatePresence>
        {activeProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-50"
              onClick={() => setActiveProject(null)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-lg bg-card border-l border-border z-50 overflow-y-auto p-8"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mt-8">
                <span className="text-xs tracking-widest uppercase text-muted-foreground">
                  {activeProject.tag}
                </span>
                <h2 className="text-3xl font-bold font-display mt-2 mb-2">
                  {activeProject.name}
                </h2>
                <span className="inline-block text-xs px-3 py-1 rounded-full border border-gold/30 text-gold mb-8">
                  {activeProject.principle}
                </span>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-gold text-sm font-semibold tracking-wide uppercase mb-3">
                      The Behavioral Challenge
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      {activeProject.challenge}
                    </p>
                  </div>
                  <div className="h-px bg-border" />
                  <div>
                    <h4 className="text-gold text-sm font-semibold tracking-wide uppercase mb-3">
                      Our AI-Embedded Nudge
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      {activeProject.nudge}
                    </p>
                  </div>
                  <div className="h-px bg-border" />
                  <div>
                    <h4 className="text-gold text-sm font-semibold tracking-wide uppercase mb-3">
                      The Human Outcome
                    </h4>
                    <p className="text-foreground/80 leading-relaxed">
                      {activeProject.outcome}
                    </p>
                  </div>
                  {activeProject.link && (
                    <>
                      <div className="h-px bg-border" />
                      <a
                        href={activeProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-full text-sm"
                      >
                        Explore Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VentureLab;
