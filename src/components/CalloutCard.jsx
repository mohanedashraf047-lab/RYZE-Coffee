import React from "react";

const CalloutCard = () => {
  return (
    <section className="bg-ryze-offwhite font-['Sofia_Pro'] py-12 px-4 md:py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:px-20">
        {/* Responsive Image Section */}
        <div className="flex-1">
          <picture>
            <source
              srcSet="//www.ryzesuperfoods.com/cdn/shop/files/1848X2016_1.webp?v=1758294527"
              media="(min-width: 1025px)"
            />
            <source
              srcSet="//www.ryzesuperfoods.com/cdn/shop/files/1888X2000_1_f11335f6-6803-407e-816b-7a9cd04d6592.webp?v=1758294615"
              media="(min-width: 769px)"
            />
            <img
              src="//www.ryzesuperfoods.com/cdn/shop/files/1480X1481_1.webp?v=1758294649"
              alt="Covering All Aspects"
              className="w-full h-auto rounded-2xl object-cover shadow-sm"
            />
          </picture>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col gap-10">
          <header className="text-center lg:text-left">
            <span className="text-ryze-orange-dark uppercase font-extrabold text-xl md:text-2xl tracking-tight block mb-2">
              Energy | Focus | Gut Health | Immunity
            </span>
            <h3 className="text-ryze-brown text-4xl md:text-5xl font-semibold leading-tight">
              Covering All Aspects
            </h3>
            <h3 className="text-ryze-orange text-4xl md:text-5xl font-semibold leading-tight">
              of Health
            </h3>
            <p className="mt-4 text-ryze-brown text-lg md:text-xl leading-relaxed">
              All-day energy & focus, no jitters or crash. Enjoy enhanced
              well-being every day.
            </p>
          </header>

          {/* Flavor/Feeling Info Block */}
          <div className="bg-ryze-light-tan rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <span className="text-ryze-orange font-bold text-xl uppercase block mb-3">
                Flavor
              </span>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-ryze-brown font-semibold">
                  <span className="w-5 h-5 bg-ryze-orange rounded-full flex items-center justify-center text-[10px] text-white">
                    ✓
                  </span>
                  Smooth & creamy like your favorite latte
                </li>
                <li className="flex items-center gap-3 text-ryze-brown font-semibold">
                  <span className="w-5 h-5 bg-ryze-orange rounded-full flex items-center justify-center text-[10px] text-white">
                    ✓
                  </span>
                  Nutty aroma & robust flavor
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <span className="text-ryze-orange font-bold text-xl uppercase block mb-3">
                Feeling
              </span>
              <p className="text-ryze-brown text-lg font-medium leading-snug">
                You'll get jitter-free energy that boosts gut health, immunity,
                and your mood.
              </p>
            </div>
          </div>

          {/* Icons Grid */}
          <div className="flex flex-wrap justify-between gap-4">
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

          {/* Footer Ingredients Block */}
          <div className="flex flex-col md:flex-row items-center gap-6 border-t border-ryze-brown/10 pt-8">
            <button className="w-full md:w-[35%] bg-ryze-orange text-ryze-offwhite py-5 rounded-lg font-bold text-xl uppercase tracking-wider hover:brightness-110 transition-all">
              View Nutrition
            </button>
            <p className="flex-1 text-sm md:text-base text-ryze-brown/80 leading-relaxed">
              <strong>Ingredients:</strong> Organic Instant Coffee, Organic RYZE
              Super6™ Mushroom Blend (
              <strong>
                Cordyceps, Reishi, Turkey Tail, King Trumpet, Shiitake, Lion's
                Mane
              </strong>
              ), Organic Prebiotic Blend (Acacia Fiber, Inulin Fiber, Tapioca
              Fiber).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const IconItem = ({ img, label }) => (
  <div className="flex flex-col items-center text-center gap-2 w-[70px]">
    <img src={img} alt={label} className="w-12 h-12 md:w-16 md:h-16" />
    <span className="text-ryze-orange-dark text-[10px] md:text-xs font-bold uppercase leading-tight">
      {label}
    </span>
  </div>
);

export default CalloutCard;
