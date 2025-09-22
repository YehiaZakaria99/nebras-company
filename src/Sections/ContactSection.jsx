import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { cn } from "./../lib/utils";
import ContactCard from "../Components/ContactCard/ContactCard";
import Map from "../Components/Map/Map";
import contactDetails from "../Data/contactDetails.json";
import { Fragment } from "react";

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
          {contactDetails.data.map(({ icon, title, details }, idx) => (
            <Fragment key={`${idx}${title}`}>
              <div className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg rounded-xl">
                <div
                  className={cn(
                    "h-full w-full bg-white border-t border-b-4 border-secColor backdrop-blur-lg rounded-2xl shadow-md",
                    "transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 hover:shadow-secColor ",
                    "group"
                  )}
                >
                  <ContactCard icon={icon} title={title} details={details} />
                </div>
              </div>
            </Fragment>
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
