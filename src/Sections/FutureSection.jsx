import React, { useState } from "react";
import { cn } from "../lib/utils";
import ourVisionImg from "/FutureSection/our-vision.webp";
import ourMissionImg from "/FutureSection/our-mission.webp";
import FutureSectionCard from "../Components/FutureSectionCard/FutureSectionCard";

const futureSectionCardData = {
  vision: {
    id: 1,
    title: "Our-Vision",
    imgSrc: ourVisionImg,
    desc: `To lead with innovation and set new standards of excellence.`,
  },
  mission: {
    id: 2,
    title: "Our-Mission",
    imgSrc: ourMissionImg,
    desc: `To deliver reliable solutions that create lasting value.`,
  },
};

export default function FutureSection() {
  const [active, setActive] = useState("vision");

  return (
    <>
      {/*Foundations for the Future  */}
      <section className="py-16 bg-gray-100 overflow-hidden" id="futureSection">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-12">
            <h3
              //   ref={titleRef}
              className="text-3xl md:text-5xl font-extrabold text-secColor tracking-wide mb-2"
            >
              Foundations for the Future
            </h3>
            <div className="w-24 h-[3px] bg-secColor mx-auto" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row max-w-5xl mx-auto items-center md:items-start">
          <div className="left flex md:flex-col text-md md:text-2xl  font-bold">
            <button
              onClick={() => setActive("vision")}
              className={cn(
                "p-10 border-t-4 md:border-0 md:border-l-4",
                active === "vision" && "border-secColor text-secColor"
              )}
            >
              Our Vision
            </button>
            <button
              onClick={() => setActive("mission")}
              className={cn(
                "p-10 border-t-4 md:border-0 md:border-l-4",
                active === "mission" && "border-secColor text-secColor"
              )}
            >
              Our Mission
            </button>
          </div>
          <div className="right flex-1">
            <FutureSectionCard data={futureSectionCardData[active]} />
          </div>
        </div>
      </section>
    </>
  );
}
