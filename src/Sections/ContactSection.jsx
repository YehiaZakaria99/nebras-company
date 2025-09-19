import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { cn } from "./../lib/utils";
import ContactCard from "../Components/ContactCard/ContactCard";
import Map from "../Components/Map/Map";

const contactData = [
  {
    icon: <Mail size={24} />,
    title: "Emails",
    details: ["Waleed@nebras1.com", "Mutab@nebras1.com"],
  },
  {
    icon: <Phone size={24} />,
    title: "Phone",
    details: ["+966 59 888 8924"],
  },
  {
    icon: <MapPin size={24} />,
    title: "Location",
    details: [
      "Prince Faisl bin Fahd bin Abdulaziz Steet Cross 1 Ibn Jabr, Bandriyah,",
      "Al Shamalia, Al Khobar - 34427 Saudi Arabia",
    ],
  },
];

export default function ContactSection() {
  return (
    <section
      id="contactUs"
      className="relative bg-white py-24 px-4 md:px-12 lg:px-24 xl:px-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-5xl font-extrabold text-secColor tracking-wide mb-2">
            Get In Touch
          </h3>
          <div className="w-24 h-[3px] bg-secColor mx-auto" />
          <p className="text-center max-w-[30rem] mx-auto font-semibold my-6 text-lg md:text-xl text-primary/90">
            Have a question or need assistance? We're just one message away.
          </p>
        </div>

        {/* Map */}
        <Map />

        {/* Contact Cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {contactData.map(({ icon, title, details }, idx) => (
            <div
              key={`${idx}${title}`}
              className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg rounded-xl"
            >
              <ContactCard icon={icon} title={title} details={details} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div>
          <Link
            to="/contact"
            className={cn(
              "group inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base lg:text-lg font-semibold rounded-md border border-secColor text-secColor shadow-sm",
              "hover:bg-secColor hover:text-white hover:shadow-md hover:scale-105 transition-all duration-300"
            )}
          >
            Send a Message
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
