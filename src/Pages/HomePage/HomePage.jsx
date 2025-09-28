// import React from "react";
import { useEffect, useState } from "react";
import ScrollUp from "../../Components/Scroll/ScrollUp";
import { cn } from "../../lib/utils";
// import AboutSection from "../../Sections/AboutSection";
import LeadershipSection from "../../Sections/LeadershipSection";
import HeroSection from "./../../Sections/HeroSection";
import ContactSection from "../../Sections/ContactSection";
// import GallerySection from "./../../Sections/GallerySection";
// import GalleryContextProvider from "../../Context/GalleryContext";
// import IntroOverlay from "../../Components/IntroOverlay/IntroOverlay";
// import Loading from "./../../Components/Loading/Loading";
import OurServicesSection from "../../Sections/OurServicessSection";
import FutureSection from "../../Sections/FutureSection";
import OurExperienceSection from "../../Sections/OurExperienceSection";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);

  function handleScroll() {
    if (window.scrollY >= 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={cn("relative", "", "")}>
        <HeroSection />
        <OurServicesSection />
        <LeadershipSection />
        <FutureSection />
        <OurExperienceSection />
        <ContactSection />

        {/* <AboutSection /> */}
        {/* 

        <GalleryContextProvider>
          <GallerySection />
        </GalleryContextProvider> */}

        {/* <Loading /> */}
        {isScrolled && <ScrollUp to="heroSection" />}
      </div>
    </>
  );
}
