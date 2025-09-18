import React from "react";
import { cn } from "../../lib/utils";
import AnimatedOverlay from "../AnimatedOverlay/AnimatedOverlay";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export default function OurServicesSectionCard({
  service,
  idx,
  imgRef,
  btnRef,
}) {
  return (
    <>
      <div
        style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        className={cn(
          "bg-white rounded-2xl overflow-hidden  shadow-md shadow-secColor h-[30rem] border-hover ",
          "transition-all duration-300 transform group ",
          "relative hover:scale-[1.02] ",
          idx % 2 === 0 ? "hover:rotate-2" : "hover:-rotate-2"
        )}
      >
        <div className="img-box h-full relative ">
          <img
            // ref={imgRef}
            loading="lazy"
            className={cn(
              "w-full h-full object-cover ",
              "group-hover:scale-125 transition-all duration-300"
            )}
            src={service.bgImg}
            alt={service.title}
          />
          <AnimatedOverlay imgRef={imgRef} />

          <div
            className={cn(
              "overlay absolute inset-0 z-10 bg-gradient-to-br from-black/80 to-secColor/50",
              "transition duration-300"
            )}
          ></div>
        </div>
        <div
          className={cn(
            "content flex flex-col items-center gap-3 text-white",
            "absolute z-20 bottom-32 left-1/2",
            "transform -translate-x-1/2",
            "will-change-transform"
          )}
        >
          {/* <div className="transform group-hover:-translate-y-5 transition-all duration-300">
                  {solution.icon}
                </div> */}
          <h3 className="text-xl md:text-2xl lg:text-4xl font-bold transform group-hover:-translate-y-5 transition-all duration-300">
            {service.title}
          </h3>
          {/* Button */}
          <div className="mt-12  overflow-hidden">
            <Link
              ref={btnRef}
              to="/ourServices"
              className={cn(
                "inline-flex items-center transform  gap-2  md:px-8 md:py-4 text-xs md:text-sm lg:text-lg px-4 py-2 rounded-md border bg-secColor text-white ",
                " transition-all duration-300 font-bold group"
              )}
            >
              See More
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          {/* <p className="text-sm ">{solution.description}</p> */}
        </div>
      </div>
    </>
  );
}
