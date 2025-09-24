import React from "react";
import { cn } from "../../lib/utils";

const FutureSectionCard = React.memo(({ data }) => {
  return (
    <>
      {
        <div className="h-96 relative group">
          {/* Image */}
          <img
            loading="lazy"
            className="h-full w-full object-cover"
            src={data.imgSrc}
            alt={data.title}
          />
          {/* desc */}
          <p
            className={cn(
              "font-semibold text-center text-xl md:text-3xl",
              "absolute top-0 left-0 w-full h-full z-10",
              "flex justify-center items-center",
              "bg-gradient-to-br from-black/80 to-secColor/50 text-white",
              "px-2 font-bold"
            )}
          >
            {data.desc}
          </p>
        </div>
      }
    </>
  );
});

export default FutureSectionCard;
