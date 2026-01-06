import React, { useState } from "react";

const FAQCard = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`bg-[#f9f1e9] rounded-2xl border transition-all duration-300 ease-in-out ${
        isOpen ? "border-[#CA5839]/30 shadow-md" : "border-transparent"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 md:p-6 text-left focus:outline-none cursor-pointer"
      >
        <div className="flex items-center justify-between w-full">
          <h3 className={`text-[#533A2D] sofia-sans text-lg md:text-[20px] font-bold leading-tight pr-4 transition-colors 
            ${isOpen ? "text-[#CA5839]" : ""}`}>
            {question}
          </h3>
          <div className="flex-shrink-0">
             <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                <span className={`text-[#CA5839] text-2xl font-light transform transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                  +
                </span>
             </div>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="h-px w-full bg-[#533A2D]/10 mb-4" />
          <p className="text-[#533A2D]/80 text-base md:text-lg leading-relaxed">
            {answer}
          </p>
        </div>
      </button>
    </div>
  );
};

const QA = () => {
  const faqData = [
    {
      question: "How much caffeine is in the product?",
      answer:
        "A cup of our mushroom coffee medium roast contains about 48mg of caffeine, less than half of a regular cup. Dark roast contains 80-90mg.",
    },
    {
      question: "Are there any additives or sweeteners?",
      answer: "Absolutely none.",
    },
    {
      question: "Can you consume while pregnant?",
      answer:
        "Yes, it is safe, but we always recommend consulting with your physician before repeated use during pregnancy or breastfeeding.",
    },
    {
      question: "When is the best time to consume Ryze?",
      answer:
        "First thing in the morning for energy and focus, or as a smooth afternoon pick-me-up without the harsh crash.",
    },
    {
      question: "Does mushroom coffee contain coffee?",
      answer:
        "Yes! It uses organic arabica coffee grown in Mexico, spray-dried into a pure powder.",
    },
    {
      question: "Where do you ship?",
      answer:
        "We currently ship domestically within the US. We are working on international shipping soon!",
    },
    {
      question: "Where is it made?",
      answer:
        "Based in Boston, mushrooms grown in CA and NV, and shipped from our warehouse in Texas.",
    },
    {
      question: "Mushroom vs. Regular Coffee?",
      answer:
        "Mushroom coffee offers sharper focus, immune support, and gut health benefits with less caffeine.",
    },
    {
      question: "Will they make me trip?",
      answer:
        "No. These are functional mushrooms, not psychedelic. They have zero psychoactive effects.",
    },
    {
      question: "Is it Gluten-Free and Vegan?",
      answer:
        "All ingredients are naturally gluten-free and vegan. We are currently finalizing official certifications.",
    },
    {
      question: "Are you organic?",
      answer: "Our mushroom blend and fiber blend are 100% organic.",
    },
    {
      question: "How should I use it?",
      answer:
        "Stir into 8-10 oz of hot water. Use a frother for extra foam! Great with non-dairy milks.",
    },
  ];

  return (
    <section className="bg-[#fcfbf3] py-16 px-4 h-full">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-[#A3452C] text-2xl sofia-sans font-extrabold uppercase tracking-widest mb-2">
            RYZE FAQs
          </span>
          <div className="flex flex-col md:flex-row md:gap-3 items-center">
            <h2 className="text-[#533A2D] text-3xl md:text-5xl font-semibold">
              Frequently Asked
            </h2>
            <h2 className="text-[#CA5839] text-3xl md:text-5xl font-semibold">
              Questions
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {faqData.map((faq, index) => (
            <FAQCard key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QA;
