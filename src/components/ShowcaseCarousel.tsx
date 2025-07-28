"use client";

import { motion } from "framer-motion";

const slides = [
  { title: "Dashboard UI", img: "https://picsum.photos/800/400?1" },
  { title: "Analytics Page", img: "https://picsum.photos/800/400?2" },
  { title: "Mobile App", img: "https://picsum.photos/800/400?3" },
  { title: "Onboarding Flow", img: "https://picsum.photos/800/400?4" },
  { title: "Settings Page", img: "https://picsum.photos/800/400?5" },
];

export default function ShowcaseCarousel() {
  return (
    <section className="carousel-container">
      <motion.div
        className="carousel-wrapper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Outer draggable container */}
        <motion.div
          className="carousel"
          drag="x"
          dragConstraints={{ left: -((slides.length - 1) * 320), right: 0 }}
          dragElastic={0.1}
          style={{ display: "flex", gap: "1.5rem", cursor: "grab" }}
        >
          {slides.map((slide, i) => (
            <motion.div
              key={i}
              className="carousel-item"
              whileHover={{ scale: 1.05 }}
              style={{
                minWidth: "300px",
                background: "var(--bg-light)",
                borderRadius: "0.75rem",
                padding: "1rem",
                textAlign: "center",
                boxShadow: "0 10px 20px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src={slide.img}
                alt={slide.title}
                style={{ borderRadius: "0.5rem", width: "100%" }}
              />
              <h3 style={{ marginTop: "1rem", color: "var(--accent)" }}>
                {slide.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
