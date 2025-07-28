"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="cta-section">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2>Ready to launch your SaaS?</h2>
        <p>Join hundreds of teams building with our platform.</p>
        <a href="#" className="cta-btn-large">
          Start Free Trial
        </a>
      </motion.div>
    </section>
  );
}
