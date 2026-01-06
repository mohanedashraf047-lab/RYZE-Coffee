import React from "react";

const HowToPrepare = () => {
  const steps = [
    {
      id: "01",
      title: "Scoop",
      description: "Add 1 tablespoon of RYZE Mushroom Coffee to your favorite mug.",
      img: "/assets/scoop.png"
    },
    {
      id: "02",
      title: "Stir",
      description: "Pour 8-10 oz of hot or cold water and stir well.",
      img: "/assets/stir.png"
    },
    {
      id: "03",
      title: "Sip",
      description: "Enjoy it black or with your favorite creamer/sweetener.",
      img: "/assets/sip.png"
    }
  ];

  return (
    <section className="bg-[#fbfbf3] py-20 md:py-32">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[#533a2d] text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 leading-none">
            Your Daily <br className="md:hidden" /> <span className="text-[#ca5839]">Ritual</span>
          </h2>
          <p className="text-[#533a2d]/50 text-base md:text-xl font-bold uppercase tracking-[0.2em]">3 simple steps in seconds</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {steps.map((step) => (
             <div key={step.id} className="flex flex-col items-center text-center group">
                <div className="relative mb-10 w-full flex justify-center">
                   {/* Number Background */}
                   <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] md:text-[220px] leading-none opacity-[0.03] font-black pointer-events-none text-[#533a2d]">
                      {step.id}
                   </span>
                   
                   {/* Icon Container */}
                   <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-[40px] bg-white flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:-rotate-3 shadow-xl border border-[#ca58391a] z-10">
                      <img src={step.img} alt={step.title} className="w-32 md:w-40 h-auto object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-110" />
                   </div>
                   
                   {/* Decorative circle */}
                   <div className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full bg-[#ca5839] flex items-center justify-center text-white font-black text-xl shadow-lg z-20 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                      {step.id.startsWith('0') ? step.id.substring(1) : step.id}
                   </div>
                </div>
                
                <h4 className="text-[#533a2d] text-3xl md:text-4xl font-extrabold uppercase mb-4 tracking-tight">{step.title}</h4>
                <p className="text-[#533a2d]/70 text-lg md:text-xl leading-relaxed max-w-[300px] font-medium">
                  {step.description}
                </p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToPrepare;
