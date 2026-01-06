import React, { useState } from "react";

const ProductSelection = () => {
  const [purchaseType, setPurchaseType] = useState("subscribe");
  const [selectedBundle, setSelectedBundle] = useState(2);

  const bundles = [
    {
      id: 1,
      name: "Starter Kit",
      servings: "30 Servings",
      price: purchaseType === "subscribe" ? 30 : 45,
      originalPrice: 45,
      popular: false,
      description: "Perfect to get started.",
      gift: "FREE Wooden Spoon",
      savings: purchaseType === "subscribe" ? "Save 33%" : ""
    },
    {
      id: 2,
      name: "Best Value",
      servings: "60 Servings",
      price: purchaseType === "subscribe" ? 55 : 85,
      originalPrice: 85,
      popular: true,
      description: "Our most popular choice.",
      gift: "FREE Wooden Spoon + Frother",
      savings: purchaseType === "subscribe" ? "Save 35%" : ""
    },
    {
      id: 3,
      name: "Family Pack",
      servings: "90 Servings",
      price: purchaseType === "subscribe" ? 75 : 120,
      originalPrice: 120,
      popular: false,
      description: "Best for the whole family.",
      gift: "FREE Spoon + Frother + Canister",
      savings: purchaseType === "subscribe" ? "Save 37%" : ""
    },
  ];

  return (
    <section id="shop" className="bg-[#fbfbf3] py-16 md:py-24">
      <div className="max-w-[1240px] mx-auto px-6 flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Left Col: Product Image */}
        <div className="flex-1 lg:sticky lg:top-32 h-fit">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-white p-2">
             <img 
              src="/assets/ryze-bag.png" 
              alt="RYZE Mushroom Coffee"
              className="w-full h-auto object-cover rounded-[24px]"
             />
             {/* Float Badge */}
             <div className="absolute top-8 right-8 bg-[#ca5839] text-white w-20 h-20 rounded-full flex flex-col items-center justify-center font-bold shadow-lg">
                <span className="text-xl leading-none">40%</span>
                <span className="text-[10px] uppercase">OFF</span>
             </div>
          </div>
          
          {/* Trust points */}
          <div className="grid grid-cols-2 gap-6 mt-10">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-[#533a2d]/5 flex items-center justify-center">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca5839" strokeWidth="2.5">
                   <polyline points="20 6 9 17 4 12"></polyline>
                 </svg>
               </div>
               <span className="text-sm font-extrabold text-[#533a2d] uppercase tracking-tight">30-Day Guarantee</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-[#533a2d]/5 flex items-center justify-center">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca5839" strokeWidth="2.5">
                   <polyline points="20 6 9 17 4 12"></polyline>
                 </svg>
               </div>
               <span className="text-sm font-extrabold text-[#533a2d] uppercase tracking-tight">Free Shipping</span>
             </div>
          </div>
        </div>

        {/* Right Col: Selection Logic */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#533a2d] mb-4 leading-tight uppercase">
              Choose Your <span className="text-[#ca5839]">Ritual</span>
            </h2>
            <p className="text-[#533a2d]/70 text-lg md:text-xl font-medium">Select a bundle to start your transformation.</p>
          </div>

          {/* Toggle: Subscribe vs One-time */}
          <div className="flex bg-[#f9f1e9] p-1.5 rounded-2xl border border-[#533a2d1a] shadow-inner">
            <button 
              onClick={() => setPurchaseType("subscribe")}
              className={`flex-1 py-4.5 rounded-xl font-black text-sm uppercase tracking-widest transition-all duration-300 ${purchaseType === "subscribe" ? "bg-[#ca5839] text-white shadow-lg" : "text-[#533a2d] hover:bg-black/5"}`}
            >
              Subscribe & Save (40%)
            </button>
            <button 
              onClick={() => setPurchaseType("onetime")}
              className={`flex-1 py-4.5 rounded-xl font-black text-sm uppercase tracking-widest transition-all duration-300 ${purchaseType === "onetime" ? "bg-[#ca5839] text-white shadow-lg" : "text-[#533a2d] hover:bg-black/5"}`}
            >
              One-time
            </button>
          </div>

          {/* Bundle Cards */}
          <div className="flex flex-col gap-4">
            {bundles.map((bundle) => (
              <div 
                key={bundle.id}
                onClick={() => setSelectedBundle(bundle.id)}
                className={`relative cursor-pointer px-6 py-6 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between group ${selectedBundle === bundle.id ? "border-[#ca5839] bg-[#ca58390d]" : "border-[#533a2d1a] hover:border-[#ca583955] bg-white/50"}`}
              >
                {bundle.popular && (
                  <span className="absolute -top-3 left-6 bg-[#ca5839] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.1em] shadow-md z-10">
                    Most Popular
                  </span>
                )}
                
                <div className="flex items-center gap-6">
                   {/* Custom Radio */}
                   <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedBundle === bundle.id ? "border-[#ca5839]" : "border-[#533a2d1a]"}`}>
                     {selectedBundle === bundle.id && <div className="w-3 h-3 rounded-full bg-[#ca5839]" />}
                   </div>

                   <div className="flex flex-col">
                    <h4 className="text-xl md:text-2xl font-black text-[#533a2d] uppercase tracking-tight">{bundle.name}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#533a2d]/60 font-bold">{bundle.servings}</span>
                      {bundle.savings && (
                        <span className="text-[10px] font-black text-[#ca5839] bg-[#ca58391a] px-2 py-0.5 rounded uppercase">{bundle.savings}</span>
                      )}
                    </div>
                    <p className="text-xs text-[#ca5839] font-extrabold mt-1.5 flex items-center gap-1">
                       <span className="text-base">+</span> {bundle.gift}
                    </p>
                  </div>
                </div>

                <div className="text-right flex flex-col items-end">
                    <span className="text-3xl font-black text-[#533a2d] leading-none">${bundle.price}</span>
                    <span className="text-sm text-[#533a2d]/30 line-through font-bold">${bundle.originalPrice}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Action Button Section */}
          <div className="flex flex-col gap-4 mt-2">
            <button className="group w-full bg-[#ca5839] hover:bg-[#a3452c] text-white py-6 rounded-2xl font-black text-2xl uppercase tracking-[0.1em] transition-all shadow-xl hover:shadow-[#ca583944] active:scale-[0.98] flex items-center justify-center gap-3">
              Add To Cart
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transition-transform group-hover:translate-x-2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <div className="flex items-center justify-center gap-3">
               <img src="https://cdn.shopify.com/s/files/1/0247/8597/7449/files/Secure_Checkout_Icon.svg?v=1625567087" alt="Secure" className="h-4 opacity-50" />
               <p className="text-xs text-[#533a2d]/50 font-bold uppercase tracking-widest">
                 Cancel or pause subscription anytime
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSelection;
