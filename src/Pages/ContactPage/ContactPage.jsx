import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect } from "react";
import bgImg from "/ContactPage/bgImg.webp";
import { cn } from "../../lib/utils";
import Map from "../../Components/Map/Map";
import contactDetails from "../../Data/contactDetails.json";
import ContactCard from "../../Components/ContactCard/ContactCard";

export default function ContactPage() {
  return (
    <section className="">
      {/* Header */}
      <div
        className="relative px-6 md:px-16 py-10 flex flex-col-reverse md:flex-row items-center gap-10 bg-cover h-[300px] md:h-[450px] lg:h-[500px] md:bg-fixed bg-bottom shadow-xl overflow-hidden"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 to-secColor/50 z-10" />
        <div className="md:w-1/2 space-y-4 z-20 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-bg leading-tight drop-shadow-xl text-secColor">
            Contact Us
          </h1>
          <p
            className="text-white text-lg md:text-2xl max-w-md font-bold"
            data-aos="fade-left"
          >
            Reach out to us for any inquiries, collaborations, or support. Our
            team is always ready to assist you.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2  gap-10">
        {/* Left - Contact Info & Map */}
        <div className="space-y-8 order-2 md:order-1">
          <h2 className="text-3xl font-bold mb-4 text-secColor">{""}</h2>

          <div className="">
            {/* Map */}
            <Map />
            {/* Info Items */}
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white rounded-xl shadow-lg shadow-secColor p-8 order-1">
          <h2 className="text-2xl font-semibold mb-6 text-secColor">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secColor"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secColor"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secColor"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secColor"
              />
            </div>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secColor resize-none"
            ></textarea>
            <button
              type="submit"
              className={cn(
                "flex items-center gap-2 bg-secColor text-white px-6 py-3 ",
                "rounded-lg border-2 border-secColor",
                "transition-all duration-300 hover:bg-white hover:text-secColor hover:border-secring-secColor"
              )}
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-3 mb-16">
        {contactDetails.data.map(({ icon, title, details }, idx) => (
          <>
            <div
              key={`${idx}${title}`}
              className={cn(
                "h-full w-full bg-white border-b-4 border-l border-secColor backdrop-blur-lg rounded-2xl shadow-md",
                "transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 hover:shadow-secColor ",
                "group"
              )}
            >
              <ContactCard icon={icon} title={title} details={details} />
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
