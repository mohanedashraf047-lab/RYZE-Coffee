import React from "react";

const ProductHero = () => {
  return (
    <section className="bg-[#fbfbf3] py-12 md:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:px-20">
        {/* Left: Product Image with badges */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-start">
          <div className="relative max-w-[600px] w-full group">
            <div className="absolute inset-0 bg-[#ca583910] rounded-[40px] blur-3xl group-hover:bg-[#ca583915] transition-all duration-700"></div>
            <img 
              src="/assets/ryze-bag.png" 
              alt="RYZE Mushroom Coffee" 
              className="relative w-full h-auto object-contain rounded-[32px] shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
            />
            {/* Floating Badges */}
            <div className="absolute top-6 right-6 bg-white py-2 px-4 rounded-full shadow-lg flex items-center gap-2 border border-[#ca583920]">
              <div className="flex text-[#FFC700]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0Z" />
                  </svg>
                ))}
              </div>
              <span className="text-[10px] font-black uppercase text-[#533a2d]">189k+ Happy RYZErs</span>
            </div>
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="text-[#a3452c] font-black uppercase tracking-[0.2em] text-sm mb-4">Mushroom Magic in a Mug</span>
          <h1 className="text-5xl md:text-7xl font-black text-[#533a2d] leading-[0.9] mb-6 uppercase tracking-tight">
            RYZE <br /> <span className="text-[#ca5839]">Mushroom Coffee</span>
          </h1>
          <p className="text-[#533a2d] text-lg md:text-xl font-medium leading-relaxed max-w-[500px] mb-8">
            Experience sharp focus, sustained energy, and optimized gut health with our unique 6-mushroom blend. No jitters, no crash, just pure cognitive performance.
          </p>
          
          <div className="grid grid-cols-2 gap-4 w-full max-w-[400px] mb-10">
            <BenefitItem text="Sharp Focus" />
            <BenefitItem text="Gut Health" />
            <BenefitItem text="No Jitters" />
            <BenefitItem text="100% Organic" />
          </div>

          <a 
            href="#shop"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-4 bg-[#ca5839] text-white py-5 px-10 rounded-2xl font-black text-xl uppercase tracking-widest shadow-2xl hover:bg-[#a3452c] transition-all hover:scale-[1.05] active:scale-95"
          >
            ORDER NOW
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform group-hover:translate-x-2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          
          <p className="mt-4 text-[#533a2d]/40 text-xs font-black uppercase tracking-widest flex items-center gap-2">
             <img src="https://cdn.shopify.com/s/files/1/0247/8597/7449/files/Guarantee-Icon.png" alt="Icon" className="h-4 w-auto grayscale" />
             30-Day Money Back Guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

const BenefitItem = ({ text }) => (
  <div className="flex items-center gap-2 text-[#533a2d]/70 text-sm font-black uppercase tracking-tight">
    <div className="w-5 h-5 rounded-full bg-[#ca58391a] flex items-center justify-center">
      <svg width="12" height="12" fill="none" stroke="#ca5839" strokeWidth="3" viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
    {text}
  </div>
);

export default ProductHero;
