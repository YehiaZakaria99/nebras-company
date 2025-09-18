import React, { useLayoutEffect, useRef } from "react";
import { cn } from "../../lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OurServicesPageCard({
  index,
  service: { img, title, description },
}) {
  const container = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    let ctx;
    if (container.current && imageRef.current) {
      ctx = gsap.context(() => {
        gsap.fromTo(
          imageRef.current,
          { scale: 2 },
          {
            scale: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: container.current,
              start: "top 80%",
              end: "bottom 80%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
        ScrollTrigger.refresh();
      }, container);
    }

    return () => {
      ctx && ctx.revert();
    };
  }, []);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 px-4"
    >
      <div
        className={cn(
          "flex flex-col md:flex-row items-center gap-10 w-full rounded-[25px] md:p-[50px]  "
        )}
        style={{ top: `calc(-5vh + ${index * 25}px)` }}
      >
        <div className="shadow-md shadow-secColor flex flex-col md:flex-row gap-[50px] bg-white text-primary p-8 rounded-xl overflow-hidden w-full max-w-6xl mx-auto">
          {/* Text Section */}
          <div className="w-full md:w-[50%] flex flex-col justify-center space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold text-primary">
              {title}
            </h3>
            <p className="text-primary text-lg leading-relaxed">
              {description}
            </p>
          </div>

          {/* Image Section */}
          <div className="relative w-full md:w-[50%] h-[250px] md:h-[400px] rounded-lg overflow-hidden">
            <img
              ref={imageRef}
              src={img}
              alt={title}
              loading="lazy"
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out will-change-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
