import React from "react";
import { cn } from "../../lib/utils";

export default function ContactCard({ icon, title, details }) {
  return (
    <>
      <a
        href={
          title === "Emails"
            ? `mailto:${details[0]}`
            : title === "Phone"
            ? `tel:${details[0]}`
            : "#location"
        }
        className={cn(
          "h-full bg-white border-t border-b-4 border-secColor backdrop-blur-lg rounded-2xl p-6  shadow-md",
          "flex flex-col items-center",
          "transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 hover:shadow-secColor ",
          "group"
        )}
      >
        {/* icon */}
        <div
          className={cn(
            "bg-white text-secColor p-3 rounded-full mb-3 transition-all duration-300",
            "border border-secColor",
            "group-hover:bg-secColor group-hover:text-white"
          )}
        >
          {icon}
        </div>
        {/* title */}
        <h3 className="font-bold text-lg text-secColor">{title}</h3>
        {/* details */}
        {details.map((_, idx) => (
          <p
            key={`${idx}${title}`}
            className="text-sm mt-1 text-center font-semibold"
          >
            {details[idx]}
          </p>
        ))}
      </a>
    </>
  );
}

/* 

              <a
                href="mailto:mohammed@gsp-sa.com"
                className="hover:underline block"
              >
                mohammed@gsp-sa.com
              </a>

              <a
              href="tel:+966138813042"
              className="text-sm hover:underline mt-1"
            >
              +966 13 881 3042
            </a>
*/
