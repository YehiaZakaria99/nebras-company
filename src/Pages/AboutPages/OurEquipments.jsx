// images
import bgImg from "/AboutPages/our-equipments/bgImg.webp";

import img1 from "/AboutPages/our-equipments/1.webp";
import img2 from "/AboutPages/our-equipments/2.webp";
import img3 from "/AboutPages/our-equipments/3.webp";
import img4 from "/AboutPages/our-equipments/4.webp";
import img5 from "/AboutPages/our-equipments/5.webp";
import img6 from "/AboutPages/our-equipments/6.webp";
import img7 from "/AboutPages/our-equipments/7.webp";
import img8 from "/AboutPages/our-equipments/8.webp";
import img9 from "/AboutPages/our-equipments/9.webp";
import img10 from "/AboutPages/our-equipments/10.webp";
import img11 from "/AboutPages/our-equipments/11.webp";
import img12 from "/AboutPages/our-equipments/12.webp";
import img13 from "/AboutPages/our-equipments/13.webp";
import img14 from "/AboutPages/our-equipments/14.webp";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../../lib/utils";
import IntroOverlay from "../../Components/IntroOverlay/IntroOverlay";

gsap.registerPlugin(ScrollTrigger);

export default function OurEquipments() {
  const data = [
    { title: "Lorem ipsum dolor sit.", img: img1 },
    { title: "Lorem ipsum dolor sit.", img: img2 },
    { title: "Lorem ipsum dolor sit.", img: img3 },
    { title: "Lorem ipsum dolor sit.", img: img4 },
    { title: "Lorem ipsum dolor sit.", img: img5 },
    { title: "Lorem ipsum dolor sit.", img: img6 },
    { title: "Lorem ipsum dolor sit.", img: img7 },
    { title: "Lorem ipsum dolor sit.", img: img8 },
    { title: "Lorem ipsum dolor sit.", img: img9 },
    { title: "Lorem ipsum dolor sit.", img: img10 },
    { title: "Lorem ipsum dolor sit.", img: img11 },
    // { title: "Lorem ipsum dolor sit.", img: img12 },
    // { title: "Lorem ipsum dolor sit.", img: img13 },
    { title: "Lorem ipsum dolor sit.", img: img14 },
  ];
  useEffect(() => {
    data.forEach((item) => {
      const img = new Image();
      img.src = item.img;
    });
  }, []);

  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    const q = gsap.utils.selector(wrapperRef);

    const cards = q(".card-item");
    const images = q(".card-image");

    cards.forEach((card, index) => {
      const image = images[index];

      // Scroll Cart
      gsap.to(card, {
        y: -20 * (cards.length - index),
        ease: "power2.inOut",
        duration: 0.6,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom 10%",
          scrub: true,
        },
      });

      // Zoom Image
      gsap.fromTo(
        image,
        { scale: 0.5, y: 20, rotationY: 180, transformPerspective: 1000 },
        {
          scale: 1,
          rotationY: 0,
          y: 0,
          duration: 0.6,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    });
    // Cleanning Up
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className="relative our-equipments">
        <IntroOverlay />
        <section
          className={cn(
            "mb-20 relative px-6 md:px-16 py-5 md:py-10 bg-cover h-[300px] md:h-[450px] lg:h-[550px] md:bg-fixed bg-center  shadow-xl overflow-hidden",
            "flex flex-col-reverse md:flex-row items-center gap-10"
          )}
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-secColor/80 z-10" />
          <div className="md:w-1/2 space-y-4 z-20 text-center md:text-left">
            <h1
              className={cn(
                "text-4xl md:text-5xl lg:text-6xl font-extrabold text-bg tracking-tight leading-tight drop-shadow-lg",
                "text-secColor"
              )}
            >
              Our Equipments
            </h1>
            <p className="text-white text-lg md:text-2xl max-w-md font-bold">
              We use top-tier equipment to ensure the highest standards of
              quality and performance in all our projects.
            </p>
          </div>
        </section>
        <section className=" py-20">
          <div
            ref={wrapperRef}
            className={cn(
              "cards-wrapper max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 gap-12 relative z-10",
              "shadow-xl shadow-secColor overflow-hidden rounded-lg",
              "py-10"
            )}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "card-item  rounded-3xl p-6 sm:p-8  relative z-[1] transition-transform duration-300 will-change-transform "
                )}
              >
                <div className="card-image-container max-h-80 h-80  overflow-hidden rounded-2xl mb-4 ">
                  <img
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: "1000px",
                    }}
                    src={item.img}
                    alt={item.title}
                    className={cn(
                      "card-image w-full h-full object-contain object-center transition-all duration-300 rounded-2xl",
                      ""
                    )}
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-center text-secColor mt-5 truncate">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
