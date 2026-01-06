import React from "react";

const JoinEmail = () => {
  return (
    <section className="bg-[#fcfbf3] pt-24 pb-20 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-4">
        {/* Header Block */}
        <div className="flex flex-col items-center text-center">
          <span className="text-[#533A2D] font-bold text-lg md:text-xl uppercase tracking-[0.3em] mb-4">
            HOW I RYZE
          </span>
          <h2 className="text-[#533A2D] text-[48px] md:text-[64px] font-medium leading-none mb-4">
            Join <span className="text-[#CA5839]">The RYZE Club</span>
          </h2>
          <p className="text-[#533A2D] text-lg md:text-xl font-medium tracking-wide">
            For exclusive offers, giveaways, and wellness tips
          </p>
        </div>

        {/* Subscription Form */}
        <div className="w-full max-w-[850px] mt-12">
          <form
            className="flex flex-col md:flex-row gap-4 items-center w-full"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter Your Email Here*"
              required
              className="w-full md:flex-1 h-[80px] px-8 rounded-[12px] bg-[#F9F1E9] border border-[#533A2D]/20 text-[#533A2D] text-[24px] focus:outline-none focus:border-[#CA5839] transition-all placeholder:text-[#533A2D]/40"
            />

            <button
              type="submit"
              className="w-full md:w-[220px] h-[80px] bg-[#CA5839] text-white font-bold text-[20px] rounded-[12px] hover:bg-[#A3452C] transition-all duration-300 uppercase tracking-widest cursor-pointer"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinEmail;
