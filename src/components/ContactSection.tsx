import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Start a{" "}
            <span className="font-serif-display italic text-gradient-gold">
              Chain Reaction
            </span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            One conversation can shift everything. Let's begin.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.a
            href="mailto:hi@winerocksgroup.com?subject=Initiating%20a%20Behavioral%20Chain%20Reaction..."
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-hover group rounded-2xl border border-border bg-card/50 p-8 text-center block"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
              <Mail className="w-5 h-5 text-gold" />
            </div>
            <p className="text-sm text-muted-foreground mb-2">Email</p>
            <p className="text-sm font-medium group-hover:text-gold transition-colors">
              hi@winerocksgroup.com
            </p>
          </motion.a>

          <motion.a
            href="tel:+2347051770030"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-hover group rounded-2xl border border-border bg-card/50 p-8 text-center block relative"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
              <Phone className="w-5 h-5 text-gold" />
            </div>
            <p className="text-sm text-muted-foreground mb-2">Phone</p>
            <p className="text-sm font-medium group-hover:text-gold transition-colors">
              +234 705 177 0030
            </p>
            <span className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-muted-foreground whitespace-nowrap">
              A call is a commitment device. Ready to commit?
            </span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-hover group rounded-2xl border border-border bg-card/50 p-8 text-center"
          >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
              <MapPin className="w-5 h-5 text-gold" />
            </div>
            <p className="text-sm text-muted-foreground mb-2">Location</p>
            <p className="text-sm font-medium">Lagos, Nigeria</p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-32 text-center"
      >
        <p className="text-muted-foreground text-sm mb-2">
          Winerocks. Where human behavior meets intelligent design.
        </p>
        <p className="text-muted-foreground/50 text-xs">
          © {new Date().getFullYear()} Winerocks Group. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
