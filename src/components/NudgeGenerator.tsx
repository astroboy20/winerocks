import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";

const SUGGESTIONS: Record<string, { principle: string; experiment: string }> = {
  "sign-up": { principle: "Social Proof", experiment: "Display a live counter of recent sign-ups. '142 people joined in the last hour.' Test it for 2 weeks." },
  "churn": { principle: "Loss Aversion", experiment: "Show users what they'll lose by leaving: 'You'll lose access to 3 saved projects and your streak of 47 days.' Frame cancellation as a loss." },
  "engagement": { principle: "Variable Reward", experiment: "Add an element of surprise to the core loop. Randomize the reward timing—people engage more with intermittent reinforcement." },
  "conversion": { principle: "Anchoring", experiment: "Lead with your premium tier. When users see the highest option first, the middle tier feels like a deal. Test a 3-tier pricing page." },
  "retention": { principle: "Commitment Device", experiment: "Ask users to set a micro-goal on Day 1. 'What do you want to achieve this week?' Pre-commitment increases follow-through by 65%." },
};

function findSuggestion(input: string) {
  const lower = input.toLowerCase();
  for (const [key, value] of Object.entries(SUGGESTIONS)) {
    if (lower.includes(key)) return value;
  }
  // Default response
  return {
    principle: "Choice Architecture",
    experiment: "Simplify the decision environment. Reduce options to 3, pre-select the best one, and add a 'Most popular' badge. Defaults win.",
  };
}

const NudgeGenerator = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [result, setResult] = useState<{ principle: string; experiment: string } | null>(null);
  const [typing, setTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTyping(true);
    setResult(null);
    setTimeout(() => {
      setResult(findSuggestion(input));
      setTyping(false);
    }, 1200);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center magnetic-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Nudge Generator"
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 400 }}
            className="fixed bottom-24 right-6 z-40 w-80 rounded-2xl border border-border bg-card/95 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            <div className="p-5 border-b border-border">
              <p className="text-gold text-xs tracking-widest uppercase font-semibold mb-1">
                Nudge Generator
              </p>
              <p className="text-muted-foreground text-sm">
                Stuck on a problem? Describe your challenge.
              </p>
            </div>

            <div className="p-5 min-h-[120px]">
              <AnimatePresence mode="wait">
                {result ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="text-gold font-semibold text-sm mb-2">
                      Try {result.principle}
                    </p>
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {result.experiment}
                    </p>
                    <button
                      onClick={() => {
                        setResult(null);
                        setInput("");
                      }}
                      className="mt-4 text-xs text-muted-foreground hover:text-gold transition-colors"
                    >
                      Ask another →
                    </button>
                  </motion.div>
                ) : typing ? (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2 text-muted-foreground text-sm"
                  >
                    <span className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                    Analyzing behavioral patterns...
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            {!result && !typing && (
              <form onSubmit={handleSubmit} className="p-4 pt-0">
                <div className="flex gap-2">
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g., users don't complete sign-up"
                    className="flex-1 bg-secondary rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-gold/50"
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-lg bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NudgeGenerator;
