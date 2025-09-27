import React from "react";
import { PhotoView } from "react-photo-view";
import { cn } from "../../lib/utils";

const ProjectsPageCard = React.memo(function ProjectCard({ src, alt, index }) {
  return (
    <PhotoView key={`${index}${alt}`} src={src}>
      <div className="relative group rounded-lg overflow-hidden shadow-md aspect-[5/3] shadow-secColor border border-secColor cursor-pointer">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="cursor-pointer w-full h-full object-cover transition-transform duration-500 group-hover:scale-125 will-change-transform"
        />
        <div
          className={cn(
            "absolute inset-0 z-10 bg-gradient-to-br from-black/40 to-secColor/40",
            "transition duration-300 group-hover:from-transparent group-hover:to-transparent"
          )}
        />
      </div>
    </PhotoView>
  );
});

export default ProjectsPageCard;
