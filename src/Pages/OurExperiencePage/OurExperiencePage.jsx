import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";
import { cn } from "../../lib/utils";
import IntroOverlay from "../../Components/IntroOverlay/IntroOverlay";
import OurExperiencePageCard from "../../Components/OurExperiencePageCard/OurExperiencePageCard";

import { experienceData } from "../../Data/certificationsImages";


gsap.registerPlugin(ScrollTrigger);

export default function OurExperiencePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card-item");

      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top center",
          end: "bottom center",
          scrub: true,
          onEnter: () => {
            gsap.to(cards, { opacity: 0, duration: 0.2 });
            gsap.to(card, { opacity: 1, duration: 0.3 });
          },
          onEnterBack: () => {
            gsap.to(cards, { opacity: 0, duration: 0.2 });
            gsap.to(card, { opacity: 1, duration: 0.3 });
          },
        });
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative our-experience">
      <IntroOverlay />

      {/* Header */}
      <section className="py-5 md:py-10">
        <div className="space-y-4 z-20 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-secColor">
            Our Experience
          </h1>
          <p className="text-primary text-lg md:text-2xl font-bold">
            Our certifications demonstrate our commitment to safety, quality,
            and environmental standards.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="pt-5 relative">
        <div ref={wrapperRef} className="relative">
          {experienceData.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "card-item h-screen flex items-center justify-center sticky top-0 px-4",
                "opacity-0 transition-opacity duration-100"
              )}
            >
              <OurExperiencePageCard
                data={item}
                index={index}
                // imgSrc={certificationsImages[index]}
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
