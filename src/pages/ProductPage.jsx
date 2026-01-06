import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Upbar from "../components/Upbar";
import ProductHero from "../components/ProductHero";
import BrandTrust from "../components/BrandTrust";
import ProductSelection from "../components/ProductSelection";
import ComparisonTable from "../components/ComparisonTable";
import MushroomSection from "../components/MushroomSection";
import HowToPrepare from "../components/HowToPrepare";
import CardSwiper from "../components/CardSwiper";
import QA from "../components/QA";
import Footer from "../components/Footer";

const ProductPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#fbfbf3] overflow-x-hidden sofia-sans">
      <header className="fixed top-0 left-0 w-full z-[100] shadow-sm">
        <Upbar />
        <Navbar />
      </header>

      <main className="pt-24 md:pt-32">
        <ProductHero />
        <BrandTrust />
        <ProductSelection />
        <ComparisonTable />
        <MushroomSection />
        <HowToPrepare />
        <CardSwiper />
        <div id="faq">
           <QA />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default ProductPage;
