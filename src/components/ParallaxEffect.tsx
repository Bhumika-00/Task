"use client";
import { useEffect } from "react";

export function ParallaxEffect() {
  useEffect(() => {
    const bg = document.querySelector(".parallax-bg") as HTMLElement;
    const stars = document.querySelector(".stars-layer") as HTMLElement;
    const nebula = document.querySelector(".nebula-layer") as HTMLElement;

    const handler = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      stars.style.transform = `translate3d(${x / 2}px, ${y / 2}px, 0)`;
      nebula.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return null;
}
