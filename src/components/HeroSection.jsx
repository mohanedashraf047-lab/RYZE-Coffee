import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isReady, setIsReady] = useState(false);
  const [activeTab, setActiveTab] = useState("flavor");

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <div className="w-full sofia-sans">
      {/* SECTION 1: HERO */}
      <Link 
        to="/products/mushroom-coffee" 
        className="block relative min-h-[500px] md:min-h-[600px] flex flex-col md:flex-row bg-[#f2e7da] overflow-hidden group cursor-pointer"
      >
        {/* Text Content Overlay/Column */}
        <div className="flex flex-col items-center justify-center w-full px-6 py-12 md:py-0 md:w-1/2 md:pl-20 z-10 text-center md:text-left md:absolute md:inset-y-0 md:left-0 pointer-events-none">
          <div className="max-w-[500px] w-full flex flex-col items-center md:items-start pointer-events-auto">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase mb-4 md:mb-6 leading-tight text-[#533a2d]">
              Heal Your <span className="text-[#ca5839]">Body & Mind</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold uppercase mb-3 md:mb-4 tracking-wide text-[#533a2d]">
              New Year Sale
            </h2>
            <h4 className="text-[#ca5839] text-base sm:text-lg md:text-xl font-bold mb-6 md:mb-8">
              40% Off Bundles +<br />
              Gifts worth $40
            </h4>

            {/* Stars */}
            <div
              className={`flex items-center gap-3 mb-8 md:mb-10 transition-opacity duration-1000 ${
                isReady ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0Z" fill="#FFC700"/>
                  </svg>
                ))}
              </div>
              <span className="text-[#533a2d] font-bold text-base md:text-lg whitespace-nowrap">
                189,467 Reviews
              </span>
            </div>

            <div
              className="w-full md:w-fit py-4 md:py-5 px-8 flex justify-center items-center gap-3 bg-[#ca5839] text-white font-bold text-lg md:text-xl rounded-lg shadow-xl group-hover:scale-[1.05] transition-transform"
            >
              TRY RYZE TODAY
            </div>
          </div>
        </div>
        {/* Background Image Container */}
        <div className="w-full h-full min-h-[350px] md:min-h-0">
          <picture>
            <source
              srcSet="//www.ryzesuperfoods.com/cdn/shop/files/English_Desktop.png?v=1767100412&width=1920"
              media="(min-width: 1025px)"
            />
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="//www.ryzesuperfoods.com/cdn/shop/files/English_Mobile.png?v=1767100409&width=768"
              alt="Hero"
            />
          </picture>
        </div>
      </Link>

      {/* SECTION 2: UPDATED INFINITE BANNER */}
      <Link 
        to="/products/mushroom-coffee"
        className="block bg-linear-to-r from-[#a3452c] to-[#ca5839] py-10 overflow-hidden border-y border-white/20 cursor-pointer"
      >
        <div className="banner-mask">
          <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="flex gap-20 px-10 items-center flex-nowrap"
              >
                <CarouselItem
                  img="https://www.ryzesuperfoods.com/cdn/shop/files/sharp_focus.png?v=1736393609"
                  text="Sharp Focus"
                />
                <CarouselItem
                  img="https://www.ryzesuperfoods.com/cdn/shop/files/inifite-carousel-image-test.png?v=1734357300"
                  text="Happiness Booster"
                />
                <CarouselItem
                  img="https://www.ryzesuperfoods.com/cdn/shop/files/gut_health.png?v=1736393608"
                  text="Gut Health"
                />
              </div>
            ))}
          </div>
        </div>
      </Link>

      {/* SECTION 3: CALLOUT CARD */}
      <section className="bg-[#fbfbf3] py-12 ">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex flex-col lg:flex-row gap-8 md:gap-12">
          {/* Image Section */}
          <div className="flex-1 w-full lg:w-1/2 relative">
            <picture>
              <source
                srcSet="//www.ryzesuperfoods.com/cdn/shop/files/1848X2016_1.webp?v=1758294527"
                media="(min-width: 1025px)"
              />
              <img
                className="rounded-2xl w-full h-auto object-cover shadow-sm"
                src="//www.ryzesuperfoods.com/cdn/shop/files/1480X1481_1.webp?v=1758294649"
                alt="Health benefits"
              />
            </picture>
            {/* Callout Arrow 1 */}
            <div className="absolute top-[10%] left-[80%] hidden lg:block">
               <div className="relative group">
                  <div className="absolute -left-32 top-0 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-[#ca5839]/20 w-48 transition-transform group-hover:scale-105">
                     <p className="text-[#533a2d] text-sm font-bold leading-tight">Rich & creamy mouth-feel</p>
                  </div>
                  <svg width="60" height="40" viewBox="0 0 60 40" className="rotate-45 text-[#ca5839]">
                     <path d="M5 35 Q 30 35 55 5" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5"/>
                     <path d="M55 5 L 45 5 M 55 5 L 55 15" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
               </div>
            </div>
            {/* Callout Arrow 2 */}
            <div className="absolute bottom-[20%] left-[5%] hidden lg:block">
               <div className="relative group">
                  <div className="absolute left-24 bottom-0 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-[#ca5839]/20 w-48 transition-transform group-hover:scale-105">
                     <p className="text-[#533a2d] text-sm font-bold leading-tight">Hint of roasted hazelnut</p>
                  </div>
                  <svg width="60" height="40" viewBox="0 0 60 40" className="-rotate-12 text-[#ca5839]">
                     <path d="M55 35 Q 30 35 5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5"/>
                     <path d="M5 5 L 15 5 M 5 5 L 5 15" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
               </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 w-full lg:w-1/2 flex flex-col gap-6 md:gap-8">
            <div className="text-center lg:text-left">
              <span className="text-[#a3452c] font-extrabold text-lg md:text-2xl uppercase tracking-tight block mb-2">
                Energy | Focus | Gut Health | Immunity
              </span>
              <h3 className="text-[#533a2d] font-sans text-3xl md:text-5xl font-semibold leading-tight">
                Covering All Aspects
              </h3>
              <h3 className="text-[#ca5839] text-3xl md:text-5xl font-semibold leading-tight">
                of Health
              </h3>
              <p className="text-[#533a2d] text-base md:text-lg mt-4 leading-relaxed max-w-[500px] mx-auto lg:mx-0">
                All-day energy & focus, no jitters or crash. Enjoy enhanced
                well-being every day.
              </p>
            </div>

            {/* Flavor/Feeling InfoBlock with Tabs */}
            <div className="bg-[#f9f1e9] sofia-sans rounded-2xl border border-[#533a2d]/5 overflow-hidden shadow-sm">
              <div className="flex border-b border-[#533a2d]/10">
                <button
                  onClick={() => setActiveTab("flavor")}
                  className={`flex-1 py-4 font-bold uppercase tracking-wider text-sm md:text-base transition-colors ${
                    activeTab === "flavor"
                      ? "bg-[#ca5839] text-white"
                      : "text-[#533a2d] hover:bg-[#533a2d]/5"
                  }`}
                >
                  Flavor
                </button>
                <button
                  onClick={() => setActiveTab("feeling")}
                  className={`flex-1 py-4 font-bold uppercase tracking-wider text-sm md:text-base transition-colors ${
                    activeTab === "feeling"
                      ? "bg-[#ca5839] text-white"
                      : "text-[#533a2d] hover:bg-[#533a2d]/5"
                  }`}
                >
                  Feeling
                </button>
              </div>
              <div className="p-6 md:p-8 min-h-[160px] flex items-center">
                {activeTab === "flavor" ? (
                  <div className="w-full">
                    <ul className="space-y-4 text-base md:text-[18px]">
                      <li className="flex items-start gap-3 font-bold text-[#533a2d]">
                        <CheckCircle /> Smooth & creamy like your favorite latte
                      </li>
                      <li className="flex items-start gap-3 font-bold text-[#533a2d]">
                        <CheckCircle /> Nutty aroma & robust flavor
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="w-full">
                    <p className="font-medium text-[#533a2d] leading-relaxed text-base md:text-[20px]">
                      You'll get jitter-free energy that boosts gut health,
                      immunity, and your mood without the afternoon crash.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Icons Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 md:gap-6 py-4 md:py-6">
              <IconItem
                img="//www.ryzesuperfoods.com/cdn/shop/files/Frame_4734.png?v=1736363055"
                label="48 mg caffeine"
              />
              <IconItem
                img="//www.ryzesuperfoods.com/cdn/shop/files/Frame_4727_1.png?v=1737566170"
                label="Gluten Free"
              />
              <IconItem
                img="//www.ryzesuperfoods.com/cdn/shop/files/Frame_4732.png?v=1736363184"
                label="100% vegan"
              />
              <IconItem
                img="//www.ryzesuperfoods.com/cdn/shop/files/Frame_4730.png?v=1737566248"
                label="no sugar"
              />
              <IconItem
                img="//www.ryzesuperfoods.com/cdn/shop/files/Frame_4731.png?v=1736363232"
                label="non gmo"
              />
            </div>

            {/* Footer Section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 pt-4 border-t border-black/5">
              {/* Left Column: Button */}
              <div className="w-full sm:w-auto">
                <button className="flex flex-col items-center justify-center w-full sm:min-w-[160px] md:min-w-[200px] bg-[#ca5839] text-white py-4 md:py-6 px-4 md:px-8 rounded-lg font-bold text-lg md:text-xl uppercase tracking-widest hover:brightness-110 transition-all cursor-pointer leading-tight">
                  <span>View</span>
                  <span>Nutrition</span>
                </button>
              </div>

              {/* Right Column: Ingredients Text */}
              <div className="flex-1 text-center sm:text-left">
                <p className="text-sm md:text-base leading-relaxed text-[#533a2d]">
                  <strong>Ingredients:</strong> Organic Instant Coffee, Organic
                  RYZE Super6™ Mushroom Blend (
                  <strong>
                    Cordyceps, Reishi, Turkey Tail, King Trumpet, Shiitake,
                    Lion's Mane
                  </strong>
                  ), Organic Prebiotic Blend (Acacia Fiber, Inulin Fiber,
                  Tapioca Fiber).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const CarouselItem = ({ img, text }) => (
  <div className="flex items-center gap-4 text-white whitespace-nowrap">
    <img src={img} alt={text} className="w-8 h-8" />
    <span className="text-[28px] font-bold uppercase tracking-wider">{text}</span>
  </div>
);

const IconItem = ({ img, label }) => (
  <div className="flex flex-col items-center gap-3 max-w-[110px] text-center">
    <img
      src={img}
      alt={label}
      className="w-12 h-12 md:w-16 md:h-16 object-contain"
    />
    <span className="text-sm md:text-2xl font-semiboldbold uppercase text-[#a6462d] leading-none tracking-tight">
      {label}
    </span>
  </div>
);

const CheckCircle = () => (
  <svg width="20" height="21" viewBox="0 0 20 21" className="shrink-0 mt-1">
    <path
      d="M0 10.3721C0 4.84922 4.47715 0.37207 10 0.37207C15.5228 0.37207 20 4.84922 20 10.3721C20 15.8949 15.5228 20.3721 10 20.3721C4.47715 20.3721 0 15.8949 0 10.3721Z"
      fill="#CA5839"
    />
    <path
      d="M14.2473 6.53046L8.28066 12.2888L6.69733 10.5971"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HeroSection;
