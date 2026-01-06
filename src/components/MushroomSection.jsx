import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

const mushroomData = [
  {
    title: "For stamina",
    name: "Cordyceps",
    description:
      "Increases oxygenation to sustain energy and support rapid recovery.",
    img: "//www.ryzesuperfoods.com/cdn/shop/files/Mushroom_3.png?v=1736871771",
  },
  {
    title: "For focus",
    name: "Lion's Mane",
    description:
      "Supports calm, but laser sharp focus and boosts overall brain health.",
    img: "//www.ryzesuperfoods.com/cdn/shop/files/Mushroom_6.png?v=1736871825",
  },
  {
    title: "For Mood",
    name: "Reishi",
    description:
      "Boosts your mood, relieves stress and supports peaceful sleep.",
    img: "//www.ryzesuperfoods.com/cdn/shop/files/Mushroom_2.png?v=1736871919",
  },
  {
    title: "For Gut Health",
    name: "Turkey Tail",
    description: "Protects your gut and promotes healthy digestion.",
    img: "//www.ryzesuperfoods.com/cdn/shop/files/Mushroom_1.png?v=1736871957",
  },
  {
    title: "For Immunity",
    name: "Shiitake",
    description: "Promotes metabolic function and supports the immune system.",
    img: "//www.ryzesuperfoods.com/cdn/shop/files/Mushroom_4.png?v=1736872267",
  },
  {
    title: "For Longevity",
    name: "King Trumpet",
    description:
      "Contains amino acids and antioxidants that reduce oxidative stress.",
    img: "//www.ryzesuperfoods.com/cdn/shop/files/Mushroom_5.png?v=1736872302",
  },
  {
    title: "FOR GUT COMFORT",
    name: "ORGANIC FIBER",
    description:
      "Our gentle fiber blend supports digestive health & a balanced gut microbiome.",
    img: "//www.ryzesuperfoods.com/cdn/shop/files/Image_10982c31-1fbd-4b68-a492-a6da05706f46.png?v=1758025861",
    img: "//www.ryzesuperfoods.com/cdn/shop/files/Image_10982c31-1fbd-4b68-a492-a6da0570f46.png?v=1758025861",
  },
];

const MushroomSection = () => {
  return (
    <section className="relative py-4 bg-[#fbfbf3] overflow-x-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,hsla(13,58%,51%,0.1)_0%,hsla(53,60%,97%,0.1)_100%)]"></div>

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Header Block */}
        <div className="flex flex-col items-center gap-4 text-center mb-12 px-6 max-w-[800px]">
          <span className="text-[#A3452C] sofia-sans  font-extrabold text-xl md:text-2xl uppercase tracking-wide">
            Superfood Ingredients
          </span>
          <div className="flex flex-col md:gap-3 justify-center">
            <h2 className="text-[#533A2D] text-4xl md:text-5xl font-semibold">
              Our 100% Organic,
            </h2>
            <h2 className="text-[#CA5839] text-4xl md:text-5xl font-semibold">
              6-Mushroom Blend
            </h2>
          </div>
          <p className="text-[#533A2D] text-lg leading-relaxed sofia-sans max-w-150">
            Each organic mushroom in our blend was carefully handpicked for its
            distinct health benefits, to address your physical and mental
            wellbeing as well as everything in between.
          </p>
        </div>

        {/* Desktop Grid - 3 Cards per row */}
        <div className="hidden md:flex justify-center w-full px-4 overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-fit mx-auto">
            {mushroomData.map((item, index) => (
              <div
                key={index}
                className={`
                  flex p-8 items-center border-2 border-[#CA5839] rounded-[24px] bg-[#F9F1E9] 
                  bg-no-repeat bg-[length:35%] bg-[right_center]
                  max-w-[585px] h-[210px] shrink-0 transition-transform hover:shadow-md
                  /* Centers the 7th card in the middle column */
                  ${index === 6 ? "lg:col-start-2" : ""}
                `}
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="flex flex-col justify-center items-start gap-3 max-w-[62%]">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-[#A3452C] text-lg font-bold uppercase leading-tight">
                      {item.title}
                    </h4>
                    <h3 className="text-[#533A2D] text-2xl font-bold capitalize leading-tight">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-[#533A2D] text-[16px] font-normal leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Swiper (Visible only on Mobile) */}
        <div className="w-full md:hidden mb-8">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1.2}
            centeredSlides={true}
            spaceBetween={15}
            loop={true}
            autoplay={{ delay: 3000 }}
            className="w-full"
          >
            {mushroomData.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="flex p-5 items-center border-2 border-[#CA5839] rounded-[20px] bg-[#F9F1E9] bg-no-repeat bg-contain bg-right min-h-[210px]"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <div className="flex flex-col justify-center items-start gap-3 max-w-[60%]">
                    <div>
                      <h4 className="text-[#A3452C] text-xs font-bold uppercase tracking-tight">
                        {item.title}
                      </h4>
                      <h3 className="text-[#533A2D] text-lg font-bold capitalize">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-[#533A2D] text-sm leading-tight">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA Section */}
        <div className="w-full max-w-[420px] flex flex-col items-center mt-12 px-6">
          <a
            href="/products/mushroom-coffee"
            className="group w-full bg-gradient-to-r from-[#a3452c] to-[#ca5839] text-white py-5 rounded-xl font-bold text-xl flex justify-center items-center gap-3 transition-all hover:scale-[1.02] shadow-lg active:scale-95"
          >
            TRY RYZE TODAY
            <img
              className="w-5 transition-transform group-hover:translate-x-1"
              src="https://cdn.shopify.com/s/files/1/0247/8597/7449/files/right-arrow-icon.svg?"
              alt="arrow"
            />
          </a>

          <div className="flex items-center gap-2 mt-4 opacity-90">
            <img
              className="w-5 h-5"
              src="https://cdn.shopify.com/s/files/1/0247/8597/7449/files/Guarantee-Icon.png"
              alt="guarantee"
            />
            <span className="text-[#533A2D] text-lg sofia-sans">
              30-Day Money Back Guarantee
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MushroomSection;
