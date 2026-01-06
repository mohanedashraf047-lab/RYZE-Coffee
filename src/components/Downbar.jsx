import React, { useEffect, useState } from "react";

const Downbar = () => {
  const targetDate = new Date("2026-01-01T00:00:00"); // change if needed

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-linear-to-r from-[#4f1d1c] to-[#903427] w-screen gap-5 flex items-center justify-center py-2 text-sm font-medium">
      <div className="text-center text-white font-sans">
        <h2 className="text-2xl font-bold">NEW YEAR SALE</h2>
        <p className="text-sm text-[#fcfbf399] ">SAVE UP TO 40% OFF + FREE GIFTS</p>
      </div>

      <div className="ml-6 flex items-center space-x-2 text-white font-sans">
        <div className="text-center">
          <span className="text-[24px]">
            {String(timeLeft.days).padStart(2, "0")}
          </span>
          <div className="text-xs text-[#fcfbf399]">DAY</div>
        </div>
        <span>:</span>
        <div className="text-center">
          <span className="text-[24px]">
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
          <div className="text-xs text-[#fcfbf399]">HOUR</div>
        </div>
        <span>:</span>
        <div className="text-center">
          <span className="text-[24px]">
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>
          <div className="text-xs text-[#fcfbf399]">MIN</div>
        </div>
        <span>:</span>
        <div className="text-center">
          <span className="text-[24px]">
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>
          <div className="text-xs text-[#fcfbf399]">SEC</div>
        </div>
      </div>
    </div>
  );
};

export default Downbar;
