import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function IntroOverlay() {
  const overlayRef = useRef(null);
  const observerRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const playAnimation = () => {
      if (hasPlayedRef.current || !overlayRef.current) return;
      hasPlayedRef.current = true;

      gsap.to(overlayRef.current, {
        x: "100%",
        duration: 1.2,
        ease: "power4.inOut",
        onComplete: () => {
          setVisible(false);
        },
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playAnimation();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    window.addEventListener("load", () => {
      if (window.scrollY === 0) {
        playAnimation();
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!visible) return null;

  return (
    <div ref={observerRef} className="absolute inset-0 z-[99999999999]">
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-hover"
        style={{ transform: "translateX(0%)" }}
      />
    </div>
  );
}
