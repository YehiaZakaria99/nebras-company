import React, { memo } from "react";
import { cn } from "../../lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactCard = React.memo(({ icon, title, details }) => {
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
        className={cn("p-6 h-full", "flex flex-col items-center ")}
      >
        {/* icon */}
        <div
          className={cn(
            "bg-white text-secColor p-3 rounded-full mb-3 transition-all duration-300",
            "border border-secColor",
            "group-hover:bg-secColor group-hover:text-white"
          )}
        >
          {icon === "Mail" && <Mail size={24} />}
          {icon === "Phone" && <Phone size={24} />}
          {icon === "MapPin" && <MapPin size={24} />}
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
});

export default memo(ContactCard);
