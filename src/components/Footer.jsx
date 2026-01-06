import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#CA5839] text-white pt-20 pb-12 px-6 md:px-[80px] lg:px-[120px] font-sans relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-20">
          
          {/* Left Column: Logo, Desc, Socials */}
          <div className="flex flex-col gap-6 max-w-[400px]">
            <div className="flex flex-col items-start gap-1">
               <h2 className="text-[48px] md:text-[64px] font-[200] leading-none tracking-widest md:tracking-[0.3em] uppercase opacity-100">
                 RYZE
               </h2>
            </div>
            <p className="text-[17px] md:text-[18px] leading-[1.6] opacity-100 font-semibold max-w-[340px]">
              Loaded with adaptogenic mushrooms, our coffee blend delivers calmer energy, sharper focus, and immune support for a balanced body.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex gap-4">
                <a href="#" className="w-9 h-9 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#CA5839] transition-all"><FaFacebookF className="text-sm" /></a>
                <a href="#" className="w-9 h-9 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#CA5839] transition-all"><FaInstagram className="text-sm" /></a>
                <a href="#" className="w-9 h-9 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#CA5839] transition-all"><FaTiktok className="text-sm" /></a>
                <a href="#" className="w-9 h-9 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#CA5839] transition-all"><FaYoutube className="text-sm" /></a>
                <a href="#" className="w-9 h-9 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#CA5839] transition-all"><FaPinterestP className="text-sm" /></a>
              </div>
              {/* Mushroom Character */}
              <img 
                src="https://cdn.shopify.com/s/files/1/0247/8597/7449/files/mushroom_character_small.png?v=1734584324" 
                alt="Mushroom Character" 
                className="w-10 h-auto"
              />
            </div>
          </div>

          {/* Center Column: Main Links */}
          <div className="flex flex-col gap-3 min-w-[200px] lg:pt-4">
            {["About The Brand", "Store Locator", "Manage Subscription", "Become An Ambassador", "Track Your Order", "Careers", "Coffee Shops - Partner with Us"].map((link) => (
              <a key={link} href="#" className="text-[18px] font-semibold hover:opacity-75 transition-opacity underline-offset-4 decoration-1">
                {link}
              </a>
            ))}
          </div>

          {/* Right Column: Legal, Copyright, Disclaimer */}
          <div className="flex flex-col gap-6 lg:text-right lg:items-end lg:pt-4">
            <div className="flex flex-wrap gap-x-6 gap-y-2 lg:justify-end text-[17px] underline underline-offset-4 font-semibold">
              <a href="#" className="hover:opacity-75 transition-opacity">Privacy policy</a>
              <a href="#" className="hover:opacity-75 transition-opacity">Terms of sale</a>
              <a href="#" className="hover:opacity-75 transition-opacity">Refund policy</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-[17px] underline underline-offset-4 font-semibold hover:opacity-75 transition-opacity">Do Not Share or Sell My Personal Information</a>
              <p className="text-[17px] font-semibold mt-2">
                © 2026, RYZE Superfoods All Rights Reserved
              </p>
            </div>
            
            {/* Disclaimer Box */}
            <div className="bg-[#A3452C] p-6 rounded-[10px] max-w-[420px]">
              <p className="text-[13px] leading-[1.6] font-medium italic">
                "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
