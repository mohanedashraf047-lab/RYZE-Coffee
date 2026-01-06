const items = [
  {
    img: "https://www.ryzesuperfoods.com/cdn/shop/files/inifite-carousel-image-test.png?v=1734357300",
    text: "Happiness Booster",
  },
  {
    img: "https://www.ryzesuperfoods.com/cdn/shop/files/sharp_focus.png?v=1736393609",
    text: "Sharp Focus",
  },
  {
    img: "https://www.ryzesuperfoods.com/cdn/shop/files/gut_health.png?v=1736393608",
    text: "Gut Health",
  },
];

export default function Banner1() {
  return (
    <section className="w-full bg-linear-to-r from-ryze-orange-dark to-ryze-orange overflow-hidden border-y border-white/10">
      <div className="flex w-max animate-scroll">
        {/* Render twice for infinite loop */}
        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-12 md:gap-16 py-8 px-5 md:py-10"
          >
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 md:gap-4">
                <img
                  src={item.img}
                  alt={item.text}
                  className="h-12 md:h-16 w-auto"
                />
                <p className="uppercase whitespace-nowrap font-bold text-ryze-offwhite text-xl md:text-2xl">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
