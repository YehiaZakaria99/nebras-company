import bgImg from "/OurServicesPage/bgImg.webp";

import constructionImg from "/GalleryPage/33.webp";
import pipelinesImg from "/GalleryPage/35.webp";
import mechanicalImg from "/GalleryPage/31.webp";
import electricalImg from "/GalleryPage/34.webp";
import technicalImg from "/GalleryPage/32.webp";

import { cn } from "../../lib/utils";
import OurServicesPageCard from "../../Components/OurServicesPageCard/OurServicesPageCard";
import { useEffect } from "react";

export default function OurServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 0,
      img: constructionImg,
      title: "Construction",
      description: `We have extensive experience in all aspects of construction, from civil and marine works to building and infrastructure development.`,
    },
    {
      id: 1,
      img: pipelinesImg,
      title: "Pipelines",
      description: `We specialize in the design, construction, and maintenance of pipelines for oil, gas, and water transmission. 
      Our capabilities include pipe construction, bending, automatic welding, procedure testing, permanent control of welding procedures,
      lowering pipe strings with pipe fitters, and both manual & automatic joint welding methods.`,
    },
    {
      id: 2,
      img: mechanicalImg,
      title: "Mechanical",
      description: `We provide a full range of mechanical services, including equipment installation,
      maintenance, and repair, with a specific focus on air conditioning and refrigeration systems.`,
    },
  ];

  return (
    <section className="ourservices-page pb-0">
      {/* Header Section */}
      <section
        className={cn(
          "relative px-6 md:px-16 py-10 mb-20 flex flex-col-reverse md:flex-row items-center gap-10 bg-cover h-[300px] md:h-[450px] lg:h-[500px] md:bg-fixed bg-center shadow-xl overflow-hidden",
          "header"
        )}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-secColor/60 z-10" />
        <div className="md:w-1/2 space-y-4 z-20 text-center md:text-left">
          <h1
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-lg",
              "text-secColor"
            )}
          >
            Our Services
          </h1>
          <p
            className="text-white text-lg md:text-2xl max-w-md font-bold"
          >
            We offer a wide range of services, with our core business focused on
            earthwork activities.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section>
        {services.map((service, index) => (
          <OurServicesPageCard
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </section>
    </section>
  );
}
