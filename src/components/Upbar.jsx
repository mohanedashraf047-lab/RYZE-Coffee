import React from "react";

const Upbar = () => {
  return (
    <div className="w-screen  flex items-center justify-center max-h-15 bg-linear-to-r from-[#a6462d] to-[#cb5839] py-2 text-sm  ">
      <img
        src="//www.ryzesuperfoods.com/cdn/shop/files/Rye-TM-3D-Side-pose_1.png?height=256&v=1756304306"
        alt="bar_image"
        srcSet="//www.ryzesuperfoods.com/cdn/shop/files/Rye-TM-3D-Side-pose_1.png?height=256&v=1756304306 256w"
        className="w-14 h-14"
      />
      <p className="text-white text-[16px] pr-14 text-center">
        NEW YEAR SALE <br /> UP TO 40% OFF + FREE GIFTS
      </p>
    </div>
  );
};

export default Upbar;
