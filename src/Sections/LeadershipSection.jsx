import { cn } from "../lib/utils";
import { NavLink } from "react-router";
import chairmanImg from "/HomePage/LeadershipSection/chairman.webp";
import bgImg from "/HomePage/LeadershipSection/bgImg.webp";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import chairmanMessage from "../Data/chairmanMessage";




gsap.registerPlugin(ScrollTrigger);

export default function LeadershipSection() {
  const imageRef = useRef(null);
  const overlayImageRef = useRef(null);
  const textRef = useRef(null);

  const headingRef = useRef(null);
  const quoteRef = useRef(null);
  const buttonRef = useRef(null);
  const overlayVideoRef = useRef(null);
  // const videoRef = useRef(null);
  const textSectionRef = useRef(null);

  // New: Refs for list items and leader cards
  const listRefs = useRef([]);
  const leaderRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🎬 Timeline 1: Visuals
      const tlVisual = gsap.timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tlVisual.fromTo(
        overlayImageRef.current,
        { x: "0%" },
        { x: "100%", ease: "power2.out", duration: 1.2 }
      );

      tlVisual.fromTo(
        overlayVideoRef.current,
        { x: "0%" },
        { x: "-100%", ease: "power2.out", duration: 1.2 },
        "-=1"
      );

      tlVisual.fromTo(
        textRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );

      // 🎯 Timeline 2: Text content
      const tlText = gsap.timeline({
        scrollTrigger: {
          trigger: textSectionRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });

      // 🪄 Heading from left
      tlText.from(headingRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      // 🪄 Quote from right
      tlText.from(
        quoteRef.current,
        {
          x: 50,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      );

      // 🪄 List items from bottom
      tlText.from(
        listRefs.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=0.4"
      );

      // 🪄 Button from bottom
      tlText.from(buttonRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      // 🪄 Leaders from opposite sides
      tlText.from(leaderRefs.current[0], {
        x: -30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });

      tlText.from(
        leaderRefs.current[1],
        {
          x: 30,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="leadershipSection"
      className={cn("py-20 bg-white relative overflow-hidden bg-cover bg-center h-screen md:bg-fixed")}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70 z-10" />
      {/* Heading */}
      {/* <div className="mb-12">
        <h3
          ref={headingRef}
          className="text-3xl text-center md:text-4xl font-extrabold text-primary tracking-wide mb-2"
        >
          Leadership to Inspire & Encourage
        </h3>
      </div> */}
      <div className="container mx-auto px-4 flex flex-col justify-center items-center gap-10 z-50 relative">
        {/* Image */}
        <div className="w-1/2 space-y-4 ">
          <div
            className={cn(
              "relative  rounded-xl overflow-hidden ",
              "flex justify-center",
              "py-3"
            )}
          >
            <div className="img-box w-60 h-60 overflow-hidden rounded-xl shadow-md shadow-hover group relative ">
              <img
                ref={imageRef}
                loading="lazy"
                src={chairmanImg}
                alt="team"
                className={cn(
                  "w-full h-full object-cover object-top",
                  "group-hover:scale-125 duration-300"
                )}
              />
              <div
                ref={overlayImageRef}
                className="absolute inset-0 bg-white z-10"
              />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-lg text-white">{chairmanMessage.title}</p>
            <p className="text-xs text-gray-300">{chairmanMessage.position}</p>
          </div>
        </div>

        {/* Right Side */}
        <div ref={textSectionRef} className="w-full lg:w-1/2">
          <div className="space-y-4 text-center">
            {/* Quote */}
            <p ref={quoteRef} className="italic text-white font-bold">
              “{chairmanMessage.shortMsg}
            </p>

            {/* Button */}
            <div ref={buttonRef} className="flex justify-center">
              <NavLink
                to="about/leade
                    rship"
                className={cn(
                  "inline-block font-semibold mt-4 px-6 py-2 rounded-lg",
                  "special-style border"
                )}
              >
                Read More
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
