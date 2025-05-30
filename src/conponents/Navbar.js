import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { img } from "../assets copy/image";
import { FiHome, FiInfo, FiBox, FiTruck, FiSettings, FiMenu, FiX } from 'react-icons/fi';
import { RiQrCodeLine } from 'react-icons/ri';
import { HiChevronDown } from 'react-icons/hi';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add scroll to bottom function
  const scrollToBottom = () => {
    const offset = 0;
    window.scrollTo({ top: document.body.scrollHeight - offset, behavior: "smooth" });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full transition-all duration-300
        ${isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-md'}`}
      style={{ zIndex: 1000 }} // Ensure navbar is always on top
    >
      {/* Main Navigation Bar */}
      <div className="relative flex justify-between items-center w-full px-4 md:px-8 lg:px-16 py-3">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 z-50">
          <img
            src={img.logo}
            alt="Hayah Foods Logo"
            className="w-16 h-auto sm:w-20 md:w-24 transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {[
            { path: "/about", text: "About Us" },
            { path: "/product", text: "Products" },
            { path: "/bulk-order-enquiry", text: "Bulk Order" },
            { path: "/ProcessStep", text: "Process" }
          ].map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300
                ${location.pathname === item.path 
                  ? 'text-yellow-600 bg-yellow-50' 
                  : 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50'}`}
            >
              <span className="font-medium">{item.text}</span>
            </Link>
          ))}
        </div>

        {/* Right Section - Contact & Scroll */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            to="/Qrcode"
            className="flex items-center gap-2 px-4 py-2 bg-yellow-50 hover:bg-yellow-100
                     text-yellow-700 rounded-full transition-all duration-300
                     hover:shadow-md hover:scale-105"
          >
            <RiQrCodeLine className="text-xl" />
            <span className="font-semibold">Contact</span>
          </Link>

          {/* Added Scroll Button */}
          <motion.button 
            onClick={scrollToBottom}
            className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 
                     text-gray-600 transition-all duration-300
                     hover:shadow-md"
            whileHover={{ y: 3 }}
            animate={{ y: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <HiChevronDown className="text-xl" />
          </motion.button>
        </div>

        {/* Mobile Menu Button - Updated z-index */}
        <button 
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ zIndex: 1002 }} // Above the mobile menu
        >
          {isMobileMenuOpen ? (
            <FiX className="w-6 h-6 text-gray-800" />
          ) : (
            <FiMenu className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay - Updated z-indices */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop - Updated */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50"
              style={{ zIndex: 1001 }} // Above navbar, below menu button
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu - Updated */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-[80%] max-w-sm h-screen bg-white"
              style={{ zIndex: 1001 }} // Same as backdrop
            >
              {/* Mobile Menu Content */}
              <div className="flex flex-col h-full overflow-y-auto pt-16"> {/* Added pt-16 for navbar height */}
                {/* Mobile Menu Header - Removed close button from header */}
                <div className="px-4 pb-4 border-b">
                  <span className="text-lg font-semibold text-gray-800">Menu</span>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex flex-col p-4 space-y-4">
                  {[
                    { path: "/about", text: "About Us" },
                    { path: "/product", text: "Products" },
                    { path: "/bulk-order-enquiry", text: "Bulk Order" },
                    { path: "/ProcessStep", text: "Process" }
                  ].map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                        ${location.pathname === item.path 
                          ? 'bg-yellow-50 text-yellow-600' 
                          : 'hover:bg-gray-50 text-gray-700'}`}
                    >
                      <span className="font-medium">{item.text}</span>
                    </Link>
                  ))}
                </div>

                {/* Mobile Contact Button */}
                <div className="mt-auto p-4 border-t">
                  <Link
                    to="/Qrcode"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-yellow-500
                             text-white rounded-lg hover:bg-yellow-600 transition-colors"
                  >
                    <RiQrCodeLine className="text-xl" />
                    <span className="font-semibold">Contact Us</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
