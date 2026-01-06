import React from "react";

const BrandTrust = () => {
  const mediaLogos = [
    { 
      name: "Forbes", 
      url: "https://cdn.shopify.com/s/files/1/0247/8597/7449/files/Forbes_Logo.svg?v=1625567087" 
    },
    { 
      name: "The New York Times", 
      url: "https://cdn.shopify.com/s/files/1/0247/8597/7449/files/The_New_York_Times_Logo.svg?v=1625567087" 
    },
    { 
      name: "Business Insider", 
      url: "https://cdn.shopify.com/s/files/1/0247/8597/7449/files/Business_Insider_Logo.svg?v=1625567087" 
    },
    { 
      name: "Rolling Stone", 
      url: "https://cdn.shopify.com/s/files/1/0247/8597/7449/files/Rolling_Stone_Logo.svg?v=1625567087" 
    },
  ];

  return (
    <section className="bg-white py-10 md:py-14 border-b border-[#533a2d]/5">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          <span className="text-[#533a2d] font-extrabold uppercase tracking-[0.2em] text-xs md:text-sm opacity-50 whitespace-nowrap">
            As Seen In
          </span>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-40 hover:opacity-100 transition-opacity duration-500">
            {mediaLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.url}
                alt={logo.name}
                className="h-5 md:h-7 lg:h-8 w-auto grayscale object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandTrust;
