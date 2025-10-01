import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";
import { cn } from "../../lib/utils";
import IntroOverlay from "../../Components/IntroOverlay/IntroOverlay";
import bgImg from "/AboutPages/our-equipments/bgImg.webp";
import OurExperiencePageCard from "../../Components/OurExperiencePageCard/OurExperiencePageCard";

import certificationsImages from "../../Data/certificationsImages";

gsap.registerPlugin(ScrollTrigger);
const data = [
  {
    id: `${1} Safety Policy`,
    title: "Safety Policy",
    img: bgImg,
    description: [
      "We believe that all accidents are preventable, and both management and employees share the responsibility for ensuring the safety and well-being of everyone, including contractors and visitors. Workplace risks can be minimized through proper controls and training.",
      "Effective communication and continuous safety training are essential to achieving an accident-free environment. All employees, contractors, and visitors must understand and follow the company’s safety policy.",
      "Reporting near-miss incidents, recognizing safe behavior, and empowering employees to stop unsafe acts at any time are key practices that strengthen safety awareness and foster a strong culture of prevention.",
    ],
  },
  {
    id: `${2} Quality Policy`,
    title: "Quality Policy",
    img: bgImg,
    description: [
      "We are committed to meeting customer requirements and continually improving the effectiveness of our quality management system. All related policies, manuals, and procedures are mandatory for all staff.",
      "Management is dedicated to delivering safe, high-quality services that ensure complete customer satisfaction. The quality system is regularly reviewed to maintain and improve established standards.",
      "The company has implemented measurable quality objectives and encourages everyone’s commitment to achieving the highest standards of workmanship, thereby strengthening the reputation of the organization.",
    ],
  },
  {
    id: `${3} Environmental Policy`,
    title: "Environmental Policy",
    img: bgImg,
    description: [
      "We are committed to protecting the environment by reducing noise and minimizing the impact of equipment and tools used in construction and manufacturing of modular and prefabricated buildings.",
      "Our policy includes developing an effective waste management system, ensuring compliance with all customer, legal, and industry requirements, and communicating these practices across all levels of the organization.",
      "We regularly review our environmental objectives each year, striving for continuous improvement and full compliance with national regulations to support sustainable operations.",
    ],
  },
];

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
          {data.map((item, index) => (
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
                imgSrc={certificationsImages[index]}
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
