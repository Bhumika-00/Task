"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (dotRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;
      }
      if (outlineRef.current) {
        outlineRef.current.animate(
          { left: `${clientX}px`, top: `${clientY}px` },
          { duration: 250, fill: "forwards" }
        );
      }
    };

    document.addEventListener("mousemove", move);

    // Scale on hover near particles or links
    const enlarge = () => outlineRef.current?.style.setProperty("transform", "scale(1.6)");
    const shrink = () => outlineRef.current?.style.setProperty("transform", "scale(1)");

    document.addEventListener("mouseenter", enlarge, true);
    document.addEventListener("mouseleave", shrink, true);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseenter", enlarge, true);
      document.removeEventListener("mouseleave", shrink, true);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={outlineRef} className="cursor-outline" />
    </>
  );
}
