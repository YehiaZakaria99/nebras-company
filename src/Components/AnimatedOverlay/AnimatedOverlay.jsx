import gsap from "gsap";
import React, { useEffect, useRef } from "react";

export default function AnimatedOverlay({ imgRef }) {
  const overlayRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🎬 Timeline 1: Visuals
      const tlVisual = gsap.timeline({
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tlVisual.fromTo(
        overlayRef.current,
        { x: "0%" },
        { x: "100%", ease: "power2.out", duration: 2 }
      );

      //   tlVisual.fromTo(
      //     textRef.current,
      //     { x: -50, opacity: 0 },
      //     { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      //     "-=0.6"
      //   );
    });

    return () => ctx.revert();
  });
  return (
    <>
      <div ref={overlayRef} className="absolute inset-0 bg-white z-[10]" />
    </>
  );
}
