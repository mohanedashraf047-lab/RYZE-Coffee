import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Upbar from "../components/Upbar";
import Downbar from "../components/Downbar";
import HeroSection from "../components/HeroSection";
import CardSwiper from "../components/CardSwiper";
import MushroomSection from "../components/MushroomSection";
import AboutUs from "../components/AboutUs";
import QA from "../components/QA";
import JoinEmail from "../components/JoinEmail";
import Footer from "../components/Footer";

const Home = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > headerHeight) {
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, headerHeight]);

  return (
    <div className="relative min-h-screen bg-[#fbfbf3] overflow-x-hidden">
      <header
        className={`fixed top-0 left-0 w-full z-100 transition-transform duration-300 shadow-sm ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Upbar />
        <Navbar />
      </header>

      <main className="pt-16 md:pt-20">
        <HeroSection />
        <CardSwiper />
        <MushroomSection />
        <AboutUs />
        <QA />
        <JoinEmail />
        <Footer />
      </main>

      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-[90]">
        <a
          href="https://www.ryzesuperfoods.com/products/mushroom-coffee"
          className="bg-[#ca5839] text-white font-bold px-6 py-4 rounded-md shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 uppercase tracking-wide text-sm md:text-base border border-white/20"
        >
          Try It
        </a>
      </div>
    </div>
  );
};

export default Home;