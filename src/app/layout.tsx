import "./globals.css";
import type { Metadata } from "next";
import ClientWrapper from "@/components/ClientWrapper";
import CustomCursor from "@/components/ui/CustomCursor";
import Sparkles from "@/components/Sparkles";
import { ParallaxEffect } from "@/components/ParallaxEffect";

export const metadata: Metadata = {
  title: "Elite SaaS Landing",
  description: "Modern SaaS Landing Page with Dark Aesthetics & Animations",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* 🌌 Aurora waves & orbs */}
        <div className="aurora-bg">
          <div className="aurora" />
          <div className="aurora" />
          <div className="aurora" />
        </div>
        <div className="floating-orbs">
          <div className="orb orb1" />
          <div className="orb orb2" />
          <div className="orb orb3" />
        </div>

        {/* 🌠 Parallax background */}
        <div className="parallax-bg">
          <div className="stars-layer" />
          <div className="nebula-layer" />
          {/* ✨ Sparkles Canvas */}
          <canvas id="sparkles" />
        </div>
        <Sparkles />
        <ParallaxEffect />

        {/* Custom cursor + main content */}
        <CustomCursor />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
