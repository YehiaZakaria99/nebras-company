import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { cn } from "./../lib/utils";
import ContactCard from "../Components/ContactCard/ContactCard";

const contactData = [
  {
    icon: <Mail size={24} />,
    title: "Emails",
    details: ["aaaaa@gmail.com"],
  },
  {
    icon: <Phone size={24} />,
    title: "Phone",
    details: ["01234567890"],
  },
  {
    icon: <MapPin size={24} />,
    title: "Location",
    details: [
      "Al Bandariyah Business Centre, Office No 105,",
      "Al Amir Faisal Bin Fahd Rd, Khobar, K.S.A",
    ],
  },
];

export default function ContactSection() {
  return (
    <section
      id="contactUs"
      className="relative bg-white py-24 px-4 md:px-12 lg:px-24 xl:px-32 overflow-hidden"
    >
      {/* <div className="absolute top-0 left-0 w-full h-40 bg-secColor/80 rounded-full blur-3xl z-0"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-full h-80 bg-secColor/20 rounded-full blur-3xl z-0"></div> */}

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* header */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-5xl font-extrabold text-secColor tracking-wide mb-2">
            Get In Touch
          </h3>
          <div className="w-24 h-[3px] bg-secColor mx-auto" />
          <p className="text-center max-w-[30rem] mx-auto font-semibold my-6 text-lg  md:text-xl text-primary/90">
            Have a question or need assistance? We're just one message away.
          </p>
        </div>

        {/* map */}
        <div
          id="location"
          className="rounded-3xl overflow-hidden shadow-sm shadow-secColor border border-secColor/10 mb-16"
        >
          <iframe
            title="GSP Location"
            className="w-full h-[400px]"
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d915417.7871715222!2d49.758230847358675!3d26.331332553463806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d30.0192266!2d31.2727774!4m5!1s0x3e49e9b296d1f973%3A0xa03ccdc4c9c1c993!2sAL%20BANDARIYAH%20TOWER%2C%208627%2BWMG%2C%20Al%20Bandariyah%2C%20Al%20Khobar%2034424%2C%20Saudi%20Arabia!3m2!1d26.302312999999998!2d50.214204699999996!5e0!3m2!1sen!2seg!4v1752067534992!5m2!1sen!2seg"
          ></iframe>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {contactData.map(({ icon, title, details }, idx) => (
            <ContactCard icon={icon} title={title} details={details} />
          ))}
        </div>

        {/* CTA */}
        <div>
          <Link
            to="/contact"
            className={cn(
              "group inline-flex items-center transform  gap-2  md:px-8 md:py-4 text-xs md:text-sm lg:text-lg px-4 py-2 rounded-md border border-secColor text-secColor",
              "hover:bg-secColor hover:text-white transition-all duration-300 font-semibold"
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
