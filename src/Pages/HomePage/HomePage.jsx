import { useEffect, useState } from "react";
import ScrollUp from "../../Components/Scroll/ScrollUp";
import { cn } from "../../lib/utils";
import LeadershipSection from "../../Sections/LeadershipSection";
import HeroSection from "./../../Sections/HeroSection";
import ContactSection from "../../Sections/ContactSection";
import OurServicesSection from "../../Sections/OurServicessSection";
import FutureSection from "../../Sections/FutureSection";
import OurExperienceSection from "../../Sections/OurExperienceSection";
import Loading from "../../Components/Loading/Loading";

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let x = 1;
    const interval = setInterval(() => {
      if (x < 2) {
        setIsLoading(true);
        x = x + 1;
      } else {
        setIsLoading(false);
      }
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function handleScroll() {
    if (window.scrollY >= 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className={cn("relative", "", "")}>
        <HeroSection />
        <OurServicesSection />
        <LeadershipSection />
        <FutureSection />
        <OurExperienceSection />
        <ContactSection />

        <Loading />
        {isScrolled && <ScrollUp to="heroSection" />}
      </div>
    </>
  );
}
