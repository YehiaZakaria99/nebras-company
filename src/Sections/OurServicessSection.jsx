import constructionImg from "/GalleryPage/19.webp";
import pipeLineImg from "/GalleryPage/36.webp";
import mechanicalImg from "/GalleryPage/31.webp";
import electricalImg from "/GalleryPage/34.webp";
import technicalImg from "/GalleryPage/32.webp";

import { ArrowRight, Building2, Cable, Settings, Wrench } from "lucide-react";
import { Link } from "react-router";
import { cn } from "../lib/utils";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import IntroOverlay from "../Components/IntroOverlay/IntroOverlay";
import AnimatedOverlay from "../Components/AnimatedOverlay/AnimatedOverlay";
import OurServicesSectionCard from "../Components/OurServicesSectionCard/OurServicesSectionCard";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <Building2 size={36} />,
    title: "Construction",
    description:
      "Comprehensive civil and construction services tailored to industrial needs.",
    bgImg: constructionImg,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36px"
        viewBox="0 0 48 48"
        fill="currentColor"
      >
        <path d="M40,30a2,2,0,0,0-2,2v1H22a2,2,0,0,1,0-4h4A12,12,0,0,0,26,5H10V4A2,2,0,0,0,6,4V16a2,2,0,0,0,4,0V15H26a2,2,0,0,1,0,4H22a12,12,0,0,0,0,24H38v1a2,2,0,0,0,4,0V32A2,2,0,0,0,40,30Z" />
      </svg>
    ),
    title: "Pipelines",
    description:
      "Expertise in pipeline installation, maintenance, and inspection.",
    bgImg: pipeLineImg,
  },
  {
    icon: <Settings size={36} />,
    title: "Mechanical",
    description:
      "Innovative mechanical systems and equipment for industrial operations.",
    bgImg: mechanicalImg,
  },
  // {
  //   icon: <Cable size={36} />,
  //   title: "Electrical Solutions",
  //   description:
  //     "High-quality electrical systems, installations, and automation.",
  //   bgImg: electricalImg,
  // },
  // {
  //   icon: <Wrench size={36} />,
  //   title: "Technical Solutions",
  //   description:
  //     "Specialized technical support and custom-engineered solutions.",
  //   bgImg: technicalImg,
  // },
];

export default function OurServicesSection() {
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const overlayImageRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    services.forEach((service) => {
      const img = new Image();
      img.src = service.bgImg;
    });
  }, []);

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
          //
          className="grid sm:grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:px-0 lg:px-10 py-10"
        >
          {services.map((service, idx) => (
            <OurServicesSectionCard
              key={idx}
              service={service}
              idx={idx}
              imgRef={imgRef}
              btnRef = {btnRef}
            />
          ))}
        </div>


      </div>
    </section>
  );
}
