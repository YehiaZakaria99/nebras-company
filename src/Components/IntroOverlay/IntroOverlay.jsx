import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { cn } from "../../lib/utils";

export default function IntroOverlay() {
  const overlayRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    if (hasPlayedRef.current || !overlayRef.current) return;
    hasPlayedRef.current = true;

    gsap.to(overlayRef.current, {
      x: "100%",
      duration: 1,
      ease: "power4.inOut",
      onComplete: () => {
        setVisible(false);
      },
    });
  }, []);

  if (!visible) return null;

  return (
    <div className="absolute inset-0 z-[99999999999]">
      <div
        ref={overlayRef}
        className={cn(
          " absolute inset-0 bg-white will-change-transform",
          "flex justify-center items-center "
        )}
        style={{ transform: "translateX(0%)" }}
      />
    </div>
  );
}
