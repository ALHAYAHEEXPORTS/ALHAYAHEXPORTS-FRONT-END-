import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { img } from "../assets copy/image";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center w-full px-3 md:px-8 lg:px-16 py-4">
        {/* Logo Section (Left) */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={img.logo}
              alt="Hayah Foods Logo"
              className="w-20 h-auto sm:w-24 md:w-32 transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* Navigation Links (Centered) */}
        <ul className="hidden md:flex space-x-4 lg:space-x-8 items-center text-gray-800 font-medium mx-auto">
          <li>
            <Link to="/about" className="relative text-gray-800 hover:text-yellow-700 transition duration-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/product" className="relative text-gray-800 hover:text-yellow-700 transition duration-300">
              Products
            </Link>
          </li>
          <li>
            <Link to="/bulk-order-enquiry" className="relative text-gray-800 hover:text-yellow-700 transition duration-300">
              Bulk Order Enquiry
            </Link>
          </li>
          <li>
            <Link to="/ProcessStep" className="relative text-gray-800 hover:text-yellow-700 transition duration-300">
             Making Process
            </Link>
          </li>
        </ul>
     
        <div className="hidden md:flex px-10">
  <Link
    to="/Qrcode"
    className="relative flex items-center gap-2 text-gray-900 hover:text-yellow-900 bg-slate-100 rounded-full p-3 transition duration-300  hover:shadow-lg"
  >
    <span className="font-semibold">Contact</span>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h5v5H3V3zM16 3h5v5h-5V3zM3 16h5v5H3v-5zM16 16h5v5h-5v-5zM10 10h4v4h-4v-4zM10 3h4v4h-4V3zM10 17h4v4h-4v-4zM3 10h4v4H3v-4zM17 10h4v4h-4v-4z"/>
    </svg>
  </Link>
</div>



        {/* Scroll Down Button (Right Side) */}
        <div className="hidden md:flex">
          <button 
            onClick={scrollToBottom} 
            className="text-gray-900 hover:text-yellow-900 bg-slate-100 rounded-full p-2 transition duration-300 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>



        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-gray-800">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div 
      initial={{ x: "-100%" }} 
      animate={{ x: 0 }} 
      exit={{ x: "-100%" }} 
      transition={{ duration: 0.4, ease: "easeOut" }} 
      className="fixed top-0 left-0 w-4/5 max-w-xs h-full bg-white shadow-lg z-[60] p-6"
    >
      {/* Close Button */}
      <button 
        onClick={toggleMenu} 
        className="absolute top-5 right-5 text-gray-800 focus:outline-none text-2xl"
      >
        ✖
      </button>

      {/* Mobile Navigation Links */}
      <ul className="flex flex-col items-start space-y-5 text-gray-800 font-medium mt-10">
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/product" onClick={toggleMenu}>Products</Link></li>
        <li><Link to="/bulk-order-enquiry" onClick={toggleMenu}>Bulk Order Enquiry</Link></li>
        <li><Link to="/ProcessStep" onClick={toggleMenu}>Making Process</Link></li>

        {/* Contact QR Code Button (Now Visible on Mobile) */}
        <li className="w-full ">
          <Link 
            to="/Qrcode" 
            className="w-full flex mt-11 gap-3 justify-center text-gray-900 hover:text-yellow-900 bg-slate-100  p-3 transition duration-300 shadow-md hover:shadow-lg"
            onClick={toggleMenu}
          >
            <span className="font-semibold">Contact</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h5v5H3V3zM16 3h5v5h-5V3zM3 16h5v5H3v-5zM16 16h5v5h-5v-5zM10 10h4v4h-4v-4zM10 3h4v4h-4V3zM10 17h4v4h-4v-4zM3 10h4v4H3v-4zM17 10h4v4h-4v-4z"/>
            </svg>
          </Link>
        </li>
      </ul>
    </motion.div>
  )}
</AnimatePresence>

    </nav>
  );
};

export default Navbar;
