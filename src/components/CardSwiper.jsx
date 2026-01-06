import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const testimonialData = [
  {
    id: 1,
    name: "Brenda M.",
    title: "Obsessed with the coffee!",
    quote:
      "As a Momma of 3, I’m always looking for ways to keep my energy up and I found it! RYZE has completely changed the way my days feel.",
    imgDesktop:
      "https://www.ryzesuperfoods.com/cdn/shop/files/Hillary2.jpg?v=1737058734",
    imgMobile:
      "https://www.ryzesuperfoods.com/cdn/shop/files/Hillary_mobile2.jpg?v=1737058725",
  },
  {
    id: 2,
    name: "Adam M.",
    title: "I FEEL AMAZING",
    quote:
      "Just 8 simple ingredients. Coffee that provides the immune support, improved focus, boosted metabolism and ALL the energy I need to thrive in my Jiu Jitsu career and my day to day.",
    imgDesktop:
      "https://www.ryzesuperfoods.com/cdn/shop/files/Adam2.jpg?v=1737058674",
    imgMobile:
      "https://www.ryzesuperfoods.com/cdn/shop/files/Adam_mobile2.jpg?v=1737058685",
  },
  {
    id: 3,
    name: "Rachel A.",
    title: "MUST-HAVE FOR ENERGY",
    quote:
      "Highly, highly recommend trying this. It tastes so good and has ingredients for immunity, focus, and gut health! Plus I can drink this during the day and still sleep soundly.",
    imgDesktop:
      "https://www.ryzesuperfoods.com/cdn/shop/files/Rachel2.jpg?v=1737058643",
    imgMobile:
      "https://www.ryzesuperfoods.com/cdn/shop/files/Rachel_mobile2.jpg?v=1737058653",
  },
];

const CardSwiper = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Ensure Swiper buttons work
  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="bg-[#fbfbf3] py-16 md:py-24 overflow-visible">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-6 md:gap-10">
        {/* Header Block */}
        <div className="text-center flex flex-col items-center gap-4">
          <span className="text-[#A3452C] font-bold text-xl md:text-2xl uppercase tracking-wider">
            200K+ Five Star Reviews
          </span>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
            <h2 className="text-[#533A2D] text-4xl md:text-[48px] font-bold">
              Join The
            </h2>
            <h2 className="text-[#CA5839] text-4xl md:text-[48px] font-bold">
              RYZE Revolution
            </h2>
          </div>
          <p className="text-[#533A2D] text-base md:text-lg max-w-150 leading-relaxed">
            Hear from RYZE'rs everywhere who are experiencing the life-changing
            benefits of mushrooms.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <img
              className="w-24 md:w-28"
              src="//www.ryzesuperfoods.com/cdn/shop/files/reviews-stars.png?v=1736537577"
              alt="Stars"
            />
            <span className="text-[#533A2D] font-bold text-lg md:text-xl">
              284,707 Reviews
            </span>
          </div>
        </div>

        {/* Swiper Slider */}
        <div
          className="relative mt-8"
          style={{
            width: "100%",
          }}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            /* spaceBetween 0 for sharp edge-to-edge look */
            spaceBetween={32}
            slidesPerView={1}
            loop={true}
            slideToClickedSlide={true}
            onSwiper={setSwiperInstance}
            /* Added navigation prop to link your refs */
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="h-full !pb-12"
          >
            {testimonialData.map((item) => (
              <SwiperSlide
                key={item.id}
                className="!h-auto cursor-pointer"
              >
                <div
                  className="tm-pdp__card flex flex-row h-full min-h-[250px] overflow-hidden bg-[#F9F1E9]"
                  style={{
                    border: "2px solid #CA5839",
                    borderRadius: "15px",
                  }}
                >
                  {/* Left Column: Image */}
                  <div className="w-[40%] relative overflow-hidden">
                    <img
                      className="absolute inset-0 w-full h-full object-cover"
                      src={item.imgDesktop}
                      alt={item.name}
                    />
                  </div>

                  {/* Right Column: Content */}
                  <div className="w-[60%] p-4 md:p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                      <img
                        className="w-[100px] md:w-[116px] mb-4 mt-2"
                        src="https://www.ryzesuperfoods.com/cdn/shop/files/reviews-stars.png?v=1736537577"
                        alt="Stars"
                      />
                      <h4 className="text-sm md:text-base font-bold text-[#A3452C] uppercase mb-4 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-[14px] md:text-[16px] text-[#533A2D] leading-[1.5] font-normal">
                        {item.quote}
                      </p>
                    </div>

                    {/* Bottom Footer */}
                    <div className="mt-4 flex items-center justify-between w-full pt-4 border-t border-[#533A2D]/5">
                      <span className="font-bold text-sm md:text-base uppercase text-[#533A2D]">
                        {item.name}
                      </span>

                      <div className="flex items-center gap-2 pt-px pr-2 pb-1 pl-2 rounded-full min-w-[160px] bg-[#FCFBF3] border border-[#FCFBF3]">
                        <img
                          className="max-w-full h-auto"
                          src="https://cdn.shopify.com/s/files/1/0247/8597/7449/files/Guarantee-Icon.png"
                          alt="icon"
                        />
                        <span className="text-[18px] font-bold text-[#533A2D] sofia-sans leading-normal mt-[3px]">
                          Verified <br /> Buyer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons - Added bg-white and higher z-index */}
          <button
            ref={prevRef}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-xl hover:scale-110 transition-transform"
          >
            <img
              src="//www.ryzesuperfoods.com/cdn/shop/files/chevron-left_small.png?v=1354633773085009013"
              className="w-4 cursor-pointer"
              alt="prev"
            />
          </button>

          <button
            ref={nextRef}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-xl hover:scale-110 transition-transform"
          >
            <img
              src="//www.ryzesuperfoods.com/cdn/shop/files/chevron-right_small.png?v=15530380197500459449"
              className="w-4 cursor-pointer"
              alt="next"
            />
          </button>
        </div>

        {/* CTA Section */}
        <div className="w-full max-w-[400px] flex flex-col items-center gap-4 mt-12">
          <a
            href="#"
            className="w-full bg-linear-to-r from-[#a3452c] to-[#ca5839] text-white py-5 px-8 rounded-lg font-bold text-xl flex justify-center items-center gap-3 hover:brightness-110 transition-all shadow-lg"
          >
            TRY RYZE TODAY
            <img
              className="w-5"
              src="https://cdn.shopify.com/s/files/1/0247/8597/7449/files/right-arrow-icon.svg?"
              alt="arrow"
            />
          </a>
          <div className="flex items-center gap-2">
            <img
              className="w-5 h-5"
              src="https://cdn.shopify.com/s/files/1/0247/8597/7449/files/Guarantee-Icon.png"
              alt="Guarantee"
            />
            <p className="text-[#533A2D] font-medium">
              30-Day Money Back Guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSwiper;
