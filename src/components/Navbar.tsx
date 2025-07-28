"use client";
import { motion } from "framer-motion";
import useMagnetic from "./ui/useMagnetic";
import { useState } from "react";

export default function Navbar() {
  const ctaRef = useMagnetic(0.4);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80 }}
    >
      <div className="logo">⚡ Elite SaaS</div>
      <div className="links">
        {/* Get Started moved here */}
        <div ref={ctaRef} className="magnetic">
          <a href="#contact" className="cta">
            Get Started
          </a>
        </div>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
      </div>
      <div className="mobile-icon" style={{ display: "none" }}>
        <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#contact" onClick={() => setMenuOpen(false)}>Get Started</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
        </div>
      )}
    </motion.nav>
  );
}
