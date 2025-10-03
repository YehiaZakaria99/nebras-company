import React, { useEffect, useLayoutEffect, useRef } from "react";
import { cn } from "../../lib/utils";

const OurExperiencePageCard = ({ data: { title, description, img } }) => {
  const cardRef = useRef();
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.scrollTo(0, 0);
    }
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center gap-10 w-full rounded-[25px] md:p-[40px]"
      )}
    >
      <div
        ref={cardRef}
        className="shadow-md shadow-secColor flex flex-col-reverse md:flex-row gap-[50px] bg-white text-primary p-8 rounded-xl  w-full max-w-6xl mx-auto h-[500px] md:h-[600px] overflow-auto "
      >
        {/* Text Section */}
        <div className="w-full md:w-[50%] flex flex-col justify-center space-y-4 py-10">
          <h3 className="text-3xl md:text-4xl font-bold text-secColor">
            {title}
          </h3>
          <div className="space-y-2">
            {description.map((desc, i) => (
              <p
                key={i}
                className="text-primary font-bold text-lg leading-relaxed"
              >
                {desc}
              </p>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-[50%] h-full rounded-lg bg-white flex items-center justify-center p-4">
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="object-cover sm:object-contain h-full w-full transition-transform duration-500 ease-in-out will-change-transform"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(OurExperiencePageCard);
