import { cn } from "../lib/utils";
import { NavLink } from "react-router";
import chairmanImg from "/HomePage/LeadershipSection/chairman.webp";
import bgImg from "/HomePage/LeadershipSection/bgImg.webp";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import chairmanMessage from "../Data/chairmanMessage";
import AnimatedOverlay from "../Components/AnimatedOverlay/AnimatedOverlay";

gsap.registerPlugin(ScrollTrigger);

export default function LeadershipSection() {
  const imageRef = useRef(null);
  const overlayImageRef = useRef(null);

  const headingRef = useRef(null);
  const quoteRef = useRef(null);
  const buttonRef = useRef(null);
  // const videoRef = useRef(null);
  const textSectionRef = useRef(null);

  // New: Refs for list items and leader cards
  const listRefs = useRef([]);
  const leaderRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🎯 Timeline 2: Text content
      const tlText = gsap.timeline({
        scrollTrigger: {
          trigger: textSectionRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });

      // 🪄 Heading from left
      // tlText.from(headingRef.current, {
      //   x: -50,
      //   opacity: 0,
      //   duration: 0.6,
      //   ease: "power2.out",
      // });

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
      // tlText.from(
      //   listRefs.current,
      //   {
      //     y: 30,
      //     opacity: 0,
      //     duration: 0.5,
      //     ease: "power2.out",
      //     stagger: 0.2,
      //   },
      //   "-=0.4"
      // );

      // 🪄 Button from bottom
      // tlText.from(buttonRef.current, {
      //   y: 30,
      //   opacity: 0,
      //   duration: 0.5,
      //   ease: "power2.out",
      // });

      // 🪄 Leaders from opposite sides
      // tlText.from(leaderRefs.current[0], {
      //   x: -30,
      //   opacity: 0,
      //   duration: 0.5,
      //   ease: "power2.out",
      // });

      // tlText.from(
      //   leaderRefs.current[1],
      //   {
      //     x: 30,
      //     opacity: 0,
      //     duration: 0.5,
      //     ease: "power2.out",
      //   },
      //   "-=0.3"
      // );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="leadershipSection"
      className={cn(
        "py-32 bg-white relative overflow-hidden bg-cover bg-center  "
      )}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tl from-black/80 to-secColor/80 z-10" />
      {/* Heading */}
      <div className="container mx-auto px-4 flex flex-col-reverse justify-center items-center gap-10 z-50 relative">
        {/* Image */}
        <div className="w-1/2 space-y-4 ">
          <div
            className={cn(
              "relative  rounded-xl overflow-hidden ",
              "flex justify-center",
              "py-3"
            )}
          >
            <div
              className={cn(
                "img-box w-40 h-40 overflow-hidden rounded-xl shadow-md shadow-secColor group relative ",
                "hover:rotate-2 duration-300"
              )}
            >
              <img
                ref={imageRef}
                loading="lazy"
                src={chairmanImg}
                alt="team"
                className={cn(
                  "w-full h-full object-cover object-top",
                  "group-hover:scale-125 duration-300"
                  // "group-hover:rotate-2"
                )}
              />
              {/* <AnimatedOverlay imgRef={imageRef} /> */}
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-lg text-white">
              {chairmanMessage.author}
            </p>
            <p className="text-sm text-secColor font-bold">
              {chairmanMessage.position}
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div ref={textSectionRef} className="w-full lg:w-1/2">
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center py-10 text-secColor">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-32 h-32"
              >
                <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6v-6H5.17A3.17 3.17 0 0 1 8.34 9h1.83V6H7.17Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6v-6h-2.83A3.17 3.17 0 0 1 18.34 9h1.83V6h-3Z" />
              </svg>
            </div>

            {/* Quote */}
            <p ref={quoteRef} className="italic text-white font-bold text-xl">
              {chairmanMessage.shortMsg}
            </p>

            {/* Button */}
            {/* <div ref={buttonRef} className="flex justify-center">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
