"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jane Doe",
    text: "This landing page is stunning! My conversions doubled.",
  },
  {
    name: "Mark Taylor",
    text: "The animations and design quality blew me away.",
  },
  {
    name: "Sophia Lee",
    text: "Easily one of the cleanest SaaS templates I’ve seen.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      {testimonials.map((t, i) => (
        <motion.div
          className="testimonial-card"
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
        >
          <p>"{t.text}"</p>
          <h4 style={{ marginTop: "1rem", color: "var(--accent2)" }}>
            - {t.name}
          </h4>
        </motion.div>
      ))}
    </section>
  );
}
