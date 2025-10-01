import { useLayoutEffect, useRef, useState } from "react";
import bgImg from "/HomePage/OurExperienceSection/bgImg.webp";
import certificationsImages from "../Data/certificationsImages";
import { cn } from "../lib/utils";
import FlipBook from "../Components/FlipBook/FlipBook";
import { Link } from "react-router";


export default function OurExperienceSection() {
  const bookRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="ourEsxperienceSection"
      className="relative bg-secColor/95 py-20 px-4 md:px-16 bg-cover bg-bottom md:bg-fixed overflow-hidden"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-secColor/50 z-10" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-1 gap-12 relative z-20">
        {/* Flipbook */}

        <FlipBook
          bookRef={bookRef}
          isMobile={isMobile}
          imgs={certificationsImages}
        />

        {/* More Details */}
        <div className="text-center">
          <Link
            to={""}
            className={cn(
              "mt-6 inline-block text-md px-4 py-2 rounded-md",
              "text-secColor font-bold bg-white border-2 border-secColor",
              "hover:bg-secColor hover:border-white hover:text-white transition duration-300"
            )}
          >
            More Details
          </Link>
        </div>
      </div>
    </section>
  );
}
