import React, { useState, useEffect } from "react";

const AnnouncementBar = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2); // Example countdown

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full relative z-[110]">
      {/* Top Bar: Announcement */}
      <div className="bg-[var(--color-header-gradient)] py-[10px] text-center">
        <p className="text-[#FCFBF3] font-['Open_Sans'] text-base font-normal leading-5 uppercase tracking-wider">
          NEW YEAR SALE | UP TO 40% OFF + FREE GIFTS
        </p>
      </div>

      {/* Bottom Bar: Countdown */}
      <div className="bg-[var(--color-header-gradient)] py-2 border-t border-white/10 flex justify-center items-center gap-6 md:gap-8">
        <div className="text-center">
          <span className="block text-[#FCFBF3] font-['Sofia_Pro'] text-2xl font-extrabold leading-none">
            {String(timeLeft.days).padStart(2, "0")}
          </span>
          <span className="text-[#FCFBF3]/60 font-['Sofia_Pro'] text-[10px] uppercase">Days</span>
        </div>
        <div className="text-center">
          <span className="block text-[#FCFBF3] font-['Sofia_Pro'] text-2xl font-extrabold leading-none">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <span className="text-[#FCFBF3]/60 font-['Sofia_Pro'] text-[10px] uppercase">Hrs</span>
        </div>
        <div className="text-center">
          <span className="block text-[#FCFBF3] font-['Sofia_Pro'] text-2xl font-extrabold leading-none">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <span className="text-[#FCFBF3]/60 font-['Sofia_Pro'] text-[10px] uppercase">Min</span>
        </div>
        <div className="text-center">
          <span className="block text-[#FCFBF3] font-['Sofia_Pro'] text-2xl font-extrabold leading-none">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <span className="text-[#FCFBF3]/60 font-['Sofia_Pro'] text-[10px] uppercase">Sec</span>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
