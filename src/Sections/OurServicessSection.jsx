import constructionImg from "/HomePage/OurServicesSection/19.webp";
import pipeLineImg from "/HomePage/OurServicesSection/36.webp";
import mechanicalImg from "/HomePage/OurServicesSection/31.webp";
import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";
import OurServicesSectionCard from "../Components/OurServicesSectionCard/OurServicesSectionCard";

// import { Link } from "react-router";
// import { cn } from "../lib/utils";
// import { useGSAP } from "@gsap/react";
// import IntroOverlay from "../Components/IntroOverlay/IntroOverlay";
// import AnimatedOverlay from "../Components/AnimatedOverlay/AnimatedOverlay";

// gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Construction",
    description:
      "Comprehensive civil and construction services tailored to industrial needs.",
    bgImg: constructionImg,
  },
  {
    title: "Pipelines",
    description:
      "Expertise in pipeline installation, maintenance, and inspection.",
    bgImg: pipeLineImg,
  },
  {
    title: "Mechanical",
    description:
      "Innovative mechanical systems and equipment for industrial operations.",
    bgImg: mechanicalImg,
  },
];

export default function OurServicesSection() {
  // const overlayImageRef = useRef(null);
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const btnRef = useRef(null);

  // useEffect(() => {
  //   services.forEach((service) => {
  //     const img = new Image();
  //     img.src = service.bgImg;
  //   });
  // }, []);

  // Animation

  return (
    <section
      className="py-16 bg-gray-100 overflow-hidden"
      id="ourServicesSection"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-12">
          <h3
            ref={titleRef}
            className="text-3xl md:text-5xl font-extrabold text-secColor tracking-wide mb-2"
          >
            Our Services
          </h3>
          <div className="w-24 h-[3px] bg-secColor mx-auto" />
          <p className="text-center max-w-[30rem] mx-auto font-semibold my-6 text-lg  md:text-xl text-primary/90">
            With our strong expertise and meticulous execution, we are able to
            tackle complex challenges and deliver effective solutions for our
            clients.
          </p>
        </div>

        <div
          // ref={scrollRef}
          className="grid sm:grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:px-0 lg:px-10 py-10"
        >
          {services.map((service, idx) => (
            <OurServicesSectionCard
              key={idx}
              service={service}
              idx={idx}
              imgRef={imgRef}
              btnRef={btnRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
