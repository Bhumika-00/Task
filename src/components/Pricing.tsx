"use client";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$9/mo",
    features: ["Basic analytics", "Email support", "Single user"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29/mo",
    features: ["Advanced analytics", "Priority support", "5 users"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$99/mo",
    features: ["All features", "Dedicated manager", "Unlimited users"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <h2 className="section-title">Choose Your Plan</h2>
      <div className="pricing-cards">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
            <button className="cta-btn">Get Started</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
