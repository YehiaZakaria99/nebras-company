import React, { memo, useLayoutEffect, useRef } from "react";
import { cn } from "../../lib/utils";


const OurServicesPageCard = React.memo(
  ({ index, service: { img, title, description } }) => {
    return (
      <div className="h-screen flex items-center justify-center sticky top-0 px-4">
        <div
          className={cn(
            "flex flex-col md:flex-row items-center gap-10 w-full rounded-[25px] md:p-[50px]  "
          )}
          style={{ top: `calc(-5vh + ${index * 25}px)` }}
        >
          <div className="shadow-md shadow-secColor flex flex-col md:flex-row gap-[50px] bg-white text-primary p-8 rounded-xl overflow-hidden w-full max-w-6xl mx-auto">
            {/* Text Section */}
            <div className="w-full md:w-[50%] flex flex-col justify-center space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-secColor">
                {title}
              </h3>
              <p className="text-primary font-bold text-lg leading-relaxed">
                {description}
              </p>
            </div>

            {/* Image Section */}
            <div className="relative w-full md:w-[50%] h-[250px] md:h-[400px] rounded-lg overflow-hidden">
              <img
                src={img}
                alt={title}
                loading="lazy"
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out will-change-transform"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default memo(OurServicesPageCard);
