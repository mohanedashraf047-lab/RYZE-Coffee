import React from "react";

const AboutUs = () => {
  return (
    <section className="relative py-12 bg-[#fbfbf3] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header Block */}
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <span className="text-[#A3452C] sofia-sans text-2xl md:text-2xl font-extrabold uppercase tracking-wide">
            Who We Are
          </span>
          <div className="flex flex-col md:flex-row md:gap-2 items-center">
            <h2 className="text-[#533A2D] text-4xl md:text-[48px] font-semibold leading-tight capitalize">
              Beyond Your
            </h2>
            <h2 className="text-[#CA5839] text-4xl md:text-[48px] font-semibold leading-tight capitalize">
              Daily Ritual
            </h2>
          </div>
          <p className="text-[#533A2D] text-lg leading-relaxed max-w-[650px]">
            We want to help you RYZE in all aspects of life, by offering a daily
            ritual and community that will help you improve day by day, both
            mentally and physically.
          </p>
        </div>

        {/* Content Items Wrapper */}
        <div className="flex flex-col gap-16 md:gap-24">
        {/* Item 1 - Learn More About Us */}
        <div className="flex flex-col gap-8 mx-auto max-w-[1200px] md:flex-row items-stretch rounded-2xl overflow-hidden shadow-sm">
          <div className="w-full md:w-1/2 min-h-[300px]">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="//www.ryzesuperfoods.com/cdn/shop/files/Auto_Layout_Vertical_1_6444bc0c-dc45-45ce-a0df-a7f835fb6ee8.png?v=1736893277"
                />
                <img
                  src="//www.ryzesuperfoods.com/cdn/shop/files/Auto_Layout_Vertical-2.png?v=1737143427"
                  alt="Learn More About Us"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-start bg-[#f9f1e9]">
              <h2 className="text-[#A3452C] sofia-sans  text-4xl font-bold mb-4">
                Learn More About Us
              </h2>
              <p className="text-[#533A2D] text-lg sofia-sans leading-relaxed mb-8">
                For years, both of us ran on coffee. Our coffee consumption
                became a dependency that actually made us anxious and unsettled.{" "}
                <strong>We knew we needed better so we made it.</strong> <br />
                <br />
                We're Andrée and Rashad, founders of RYZE, and we're here for a
                very simple reason: to share the daily ritual that has
                transformed our lives for the better, with all of you.
              </p>
              <a
                href="/pages/our-story"
                className="bg-[#CA5839] text-lg hover:text-black hover:bg-[#9f3315] text-white px-8 py-6 rounded-lg font-bold tracking-wide transition-all transform"
              >
                VIEW MORE
              </a>
            </div>
          </div>

        {/* Item 2 - Free Mindfulness App (REVERSED) */}
        <div className="flex flex-col gap-8 mx-auto max-w-[1200px] md:flex-row-reverse items-stretch rounded-2xl overflow-hidden shadow-sm">
          <div className="w-full md:w-1/2 min-h-[300px]">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="//www.ryzesuperfoods.com/cdn/shop/files/CleanShot_2024-11-06_at_7_.25.38_2x_1_1.png?v=1736893292"
                />
                <img
                  src="//www.ryzesuperfoods.com/cdn/shop/files/CleanShot_2024-11-06_at_7_.25.38_2x_1.png?v=1734584324"
                  alt="Free Mindfulness App"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-start bg-[#f9f1e9]">
              <h2 className="text-[#A3452C] sofia-sans  text-4xl font-bold mb-4">
                Free Mindfulness App
              </h2>
              <p className="text-[#533A2D] text-lg sofia-sans leading-relaxed mb-8">
                Our duty is to help you RYZE in all aspects of life, by offering
                services and a community that will help you improve day by day,
                both mentally and physically.
                <br />
                <br />A perfect addition to your RYZE ritual
              </p>
              <a
                href="/products/mushroom-coffee"
                className="bg-[#CA5839] text-lg hover:text-black hover:bg-[#9f3315] text-white px-8 py-6 rounded-lg font-bold tracking-wide transition-all transform"
              >
                VIEW MORE
              </a>
            </div>
          </div>

        {/* Item 3 - Become An Ambassador */}
        <div className="flex flex-col gap-8 mx-auto max-w-[1200px] md:flex-row items-stretch rounded-2xl overflow-hidden shadow-sm">
          <div className="w-full md:w-1/2 min-h-[300px]">
              <picture>
                <img
                  src="//www.ryzesuperfoods.com/cdn/shop/files/ambassador-home-desktop.jpg?v=1764947679"
                  alt="Become An Ambassador"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-start bg-[#f9f1e9]">
              <h2 className="text-[#A3452C] sofia-sans  text-4xl font-bold mb-4">
                Become An Ambassador
              </h2>
              <p className="text-[#533A2D] text-lg sofia-sans leading-relaxed mb-8">
                Meet the RYZE Brand Ambassador Program — a community of coffee
                lovers who want to earn more with RYZE. Enjoy discounts for your
                followers, commission earnings on the sales you drive, first
                access to product launches, and more!
              </p>
              <a
                href="https://www.ryzesuperfoods.com/pages/brandambassdor"
                className="bg-[#CA5839] text-lg hover:text-black hover:bg-[#9f3315] text-white px-8 py-6 rounded-lg font-bold tracking-wide transition-all transform"
              >
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
