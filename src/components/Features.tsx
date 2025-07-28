"use client";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const features = [
  {
    title: "Blazing Fast",
    desc: "Optimized for performance with Next.js & edge rendering.",
  },
  {
    title: "Elite Animations",
    desc: "Smooth transitions and micro-interactions everywhere.",
  },
  {
    title: "Dark Aesthetics",
    desc: "Premium, modern dark UI with neon accents.",
  },
  {
    title: "Reusable Components",
    desc: "Modular architecture for SaaS-scale applications.",
  },
];

export default function Features() {
  return (
    <section id="features" className="features">
      {features.map((f, i) => (
        <Tilt key={i} options={{ max: 15, scale: 1.05 }}>
          <motion.div
            className="feature-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} // 👈 scroll-trigger reveal
            transition={{ delay: i * 0.2 }}
          >
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </motion.div>
        </Tilt>
      ))}
    </section>
  );
}
