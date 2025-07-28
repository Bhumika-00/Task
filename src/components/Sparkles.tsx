"use client";
import { useEffect } from "react";

export default function Sparkles() {
  useEffect(() => {
    const canvas = document.getElementById("sparkles") as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2,
      alpha: Math.random(),
      speed: 0.005 + Math.random() * 0.01,
    }));

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((s) => {
        s.alpha += s.speed * (Math.random() > 0.5 ? 1 : -1);
        s.alpha = Math.max(0, Math.min(1, s.alpha));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return null;
}
