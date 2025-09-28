import React, { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { cn } from "../../lib/utils";

const FlipBook = React.memo(({ bookRef, imgs }) => {
  const [bookSize, setBookSize] = useState({ width: 500, height: 500 });

  useEffect(() => {
    const resizeBook = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      let width = Math.min(screenWidth * 0.9, 500);
      let height = Math.min(screenHeight * 0.7, 600);

      if (width < 250) width = 250;
      if (height < 350) height = 350;

      setBookSize({ width, height });
    };
    window.addEventListener("resize", resizeBook);
    resizeBook();
    return () => window.removeEventListener("resize", resizeBook);
  }, []);

  return (
    <div className="w-full flex justify-center">
      <HTMLFlipBook
        key={`${bookSize.width}-${bookSize.height}`}
        ref={bookRef}
        width={bookSize.width}
        height={bookSize.height}
        showCover={false}
        className="shadow-2xl rounded-xl mx-auto"
        useMouseEvents={true}
        flippingTime={500}
      >
        {/* Cover Page */}
        <div
          className={cn(
            "h-full rounded-xl",
            "flex items-center justify-center",
            "bg-white text-primary font-bold border-4 border-secColor/50 shadow-md shadow-secColor"
          )}
        >
          <div className="text-center space-y-2 px-4 h-full flex flex-col items-center justify-center">
            <h2 className="text-xl md:text-3xl font-bold text-secColor tracking-wide">
              Our Certifications
            </h2>
            <p className="text-sm">
              These certificates prove our commitment to safety, quality, and
              environmental policy.
            </p>
            <p className="text-sm absolute bottom-10">
              Click page to explore more
            </p>
          </div>
        </div>

        {/* Pages */}
        {imgs.map((img, i) => (
          <div
            key={i}
            className="bg-white h-full w-full rounded-xl border-4 border-secColor/50 shadow-md shadow-secColor"
          >
            <img
              loading="lazy"
              src={img}
              alt={`Certificate ${i + 1}`}
              className="rounded-xl shadow-lg h-full w-full object-contain will-change-transform"
            />
          </div>
        ))}

        {/* Back Page */}
        <div className="flex items-center justify-center bg-white text-white h-full rounded-xl border-4 border-secColor/50 shadow-md shadow-secColor">
          <div className="text-center space-y-2 h-full flex flex-col justify-center">
            <p className="text-lg md:text-3xl font-bold text-secColor">
              Nebras Company
            </p>
            <p className="text-sm text-primary font-bold">
              Certified to Build Excellence
            </p>
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
});

export default FlipBook;
