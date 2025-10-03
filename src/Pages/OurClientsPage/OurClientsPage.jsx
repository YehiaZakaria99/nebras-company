import React, { memo } from "react";
import { clients } from "../../Data/ourClientsData";
import IntroOverlay from "../../Components/IntroOverlay/IntroOverlay";
import Slider from "react-slick";

function OurClientsPage() {
  const settingsLTR = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const settingsRTL = {
    ...settingsLTR,
    rtl: true,
  };

  return (
    <>
      <section className="relative our-clients">
        <IntroOverlay />

        {/* Header */}
        <section className="py-5 md:py-10">
          <div className="space-y-4 z-20 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-secColor">
              Our Clients
            </h1>
            <p className="text-primary text-md px-3 md:text-2xl font-bold max-w-5xl mx-auto">
              <span>
                We are proud to partner with clients who trust us to deliver
                quality and innovation.
              </span>
            </p>
          </div>

          <div className="slider-container space-y-12 md:space-y-20 py-16">
            <Slider {...settingsLTR} className="md:px-20">
              {clients.map((client, idx) => (
                <div
                  key={`row1-${idx}`}
                  className="img flex items-center justify-center px-2 md:px-5"
                >
                  <img
                    className="w-full h-10 md:h-20 object-contain"
                    src={client.imgSrc}
                    alt={client.alt}
                  />
                </div>
              ))}
            </Slider>

            <Slider {...settingsRTL} className="md:px-20">
              {clients.map((client, idx) => (
                <div
                  key={`row2-${idx}`}
                  className="img flex items-center justify-center px-2 md:px-5"
                >
                  <img
                    className="w-full h-10 md:h-20 object-contain"
                    src={client.imgSrc}
                    alt={client.alt}
                  />
                </div>
              ))}
            </Slider>

            <Slider {...settingsLTR} className="md:px-20">
              {clients.reverse().map((client, idx) => (
                <div
                  key={`row3-${idx}`}
                  className="img flex items-center justify-center px-2 md:px-5"
                >
                  <img
                    className="w-full h-10 md:h-20 object-contain"
                    src={client.imgSrc}
                    alt={client.alt}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </section>
    </>
  );
}

export default memo(OurClientsPage);
