import React from "react";

const ComparisonTable = () => {
  const features = [
    { 
      name: "Focus & Energy", 
      ryze: "Sharp focus, no jitters", 
      regular: "Crash and anxiety",
      ryzeCheck: true,
      regCheck: false
    },
    { 
      name: "Gut Health", 
      ryze: "Soothing & supportive", 
      regular: "High acidity & bloating",
      ryzeCheck: true,
      regCheck: false
    },
    { 
      name: "Immune Support", 
      ryze: "6 Adaptogenic mushrooms", 
      regular: "None",
      ryzeCheck: true,
      regCheck: false
    },
    { 
      name: "Caffeine Level", 
      ryze: "Perfect balance (48mg)", 
      regular: "Too high (150mg+)",
      ryzeCheck: true,
      regCheck: false
    },
    { 
      name: "Ingredients", 
      ryze: "100% Organic & Vegan", 
      regular: "Often processed",
      ryzeCheck: true,
      regCheck: false
    }
  ];

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-[#533a2d] text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 leading-none">
            The Better <br className="md:hidden" /> <span className="text-[#ca5839]">Brew</span>
          </h2>
          <p className="text-[#533a2d]/50 text-base md:text-xl font-bold uppercase tracking-[0.2em]">Compare and switch today</p>
        </div>

        <div className="relative overflow-hidden rounded-[40px] border-4 border-[#fbfbf3] shadow-2xl bg-[#fbfbf3]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#533a2d] text-white">
                <th className="py-8 px-6 md:px-10 text-xl font-black uppercase tracking-wider">The Standard</th>
                <th className="py-8 px-6 md:px-10 text-xl font-black uppercase tracking-wider text-center text-[#ca5839] bg-white relative">
                  RYZE
                  <div className="absolute -top-1 left-0 w-full h-1.5 bg-[#ca5839]" />
                </th>
                <th className="py-8 px-6 md:px-10 text-xl font-black uppercase tracking-wider opacity-40 text-center">Regular</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={f.name} className="group transition-colors hover:bg-white">
                  <td className="py-6 px-6 md:px-10 font-extrabold text-[#533a2d] text-lg border-b border-[#533a2d]/5">{f.name}</td>
                  <td className="py-6 px-6 md:px-10 border-b border-[#533a2d]/5 bg-white text-center">
                    <div className="flex flex-col items-center gap-2">
                       <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-black">✓</div>
                       <span className="font-black text-[#ca5839] text-sm md:text-base uppercase tracking-tight">{f.ryze}</span>
                    </div>
                  </td>
                  <td className="py-6 px-6 md:px-10 border-b border-[#533a2d]/5 text-center">
                    <div className="flex flex-col items-center gap-2 opacity-30 grayscale">
                       <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500 font-black">✕</div>
                       <span className="font-bold text-[#533a2d] text-sm md:text-base uppercase tracking-tight">{f.regular}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
