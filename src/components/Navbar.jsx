import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuLinks = [
    { name: "Try Now", href: "/products/mushroom-coffee", primary: true },
    { name: "Our Story", href: "#", primary: true },
    { name: "Mindfulness App", href: "#", primary: true },
    { name: "Recipes", href: "#", primary: true },
    { name: "Manage Subscription", href: "#" },
    { name: "Refer A Friend", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Shop on Demand", href: "#" },
    { name: "Gift Sets", href: "#" },
  ];

  return (
    <nav className="w-full h-16 md:h-20 flex items-center justify-between px-4 md:px-10 bg-[#fbfbf3] shadow-sm relative z-[100]">
      {/* Left Interface: Hamburger / X Toggle */}
      <div className="flex-1 flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-black/5 rounded-full transition-colors cursor-pointer relative w-12 h-12 flex items-center justify-center overflow-hidden"
        >
          <div className="relative w-6 h-5">
            <span 
              className={`absolute left-0 block w-full h-0.5 bg-[#533a2d] transition-all duration-300 ease-in-out ${
                isMenuOpen ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span 
              className={`absolute left-0 top-2 block w-full h-0.5 bg-[#533a2d] transition-opacity duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span 
              className={`absolute left-0 block w-full h-0.5 bg-[#533a2d] transition-all duration-300 ease-in-out ${
                isMenuOpen ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Center Interface: Logo */}
      <div className="flex-none">
        <Link to="/" className="block">
          <img
            src="//www.ryzesuperfoods.com/cdn/shop/files/RYZE-logo-brown-tm.png?v=1756304104&amp;width=180"
            className="w-[120px] md:w-[160px] lg:w-[180px] h-auto"
            alt="RYZE logo"
          />
        </Link>
      </div>

      {/* Right Interface: Icons (Search transforms or hides) */}
      <div className="flex-1 flex items-center justify-end gap-1 md:gap-4 lg:gap-6">
        <button className={`p-2 hover:bg-black/5 rounded-full transition-all duration-300 cursor-pointer hidden sm:block ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}>
          <IoSearch className="w-6 h-6 md:w-7 md:h-7 text-[#533a2d]" />
        </button>
        <button className="p-2 hover:bg-black/5 rounded-full transition-colors cursor-pointer">
          <FiShoppingCart className="w-6 h-6 md:w-7 md:h-7 text-[#533a2d]" />
        </button>
      </div>

      {/* Full Menu Overlay/Drawer (SLIDE IN) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#fbfbf3] z-[200] transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="max-w-[1200px] mx-auto h-full flex flex-col p-8 md:p-16 relative">
          
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between mb-16">
            <img
              src="//www.ryzesuperfoods.com/cdn/shop/files/RYZE-logo-brown-tm.png?v=1756304104&amp;width=180"
              className="w-[120px] md:w-[160px] h-auto"
              alt="RYZE logo"
            />
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-3 hover:bg-black/5 rounded-full transition-colors cursor-pointer group"
              aria-label="Close menu"
            >
              <RiCloseLine className="w-10 h-10 md:w-12 md:h-12 text-[#533a2d] group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Main Links */}
          <div className="flex-1 overflow-y-auto">
            <ul className="flex flex-col gap-6 md:gap-8">
              {menuLinks.map((link, idx) => (
                <li key={idx}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-3xl md:text-5xl font-bold uppercase transition-colors leading-tight block ${
                        link.primary ? "text-[#533a2d] hover:text-[#ca5839]" : "text-[#533a2d]/60 text-xl md:text-2xl hover:text-[#533a2d]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-3xl md:text-5xl font-bold uppercase transition-colors leading-tight block ${
                        link.primary ? "text-[#533a2d] hover:text-[#ca5839]" : "text-[#533a2d]/60 text-xl md:text-2xl hover:text-[#533a2d]"
                      }`}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Section: Socials */}
          <div className="pt-12 border-t border-[#533a2d]/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex gap-8 text-2xl text-[#533a2d]">
              <a href="#" className="hover:text-[#ca5839] transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-[#ca5839] transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-[#ca5839] transition-colors"><FaTiktok /></a>
              <a href="#" className="hover:text-[#ca5839] transition-colors"><FaYoutube /></a>
              <a href="#" className="hover:text-[#ca5839] transition-colors"><FaPinterestP /></a>
            </div>
            <p className="text-[#533a2d]/40 text-sm font-medium">© 2026 RYZE SUPERFOODS</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
