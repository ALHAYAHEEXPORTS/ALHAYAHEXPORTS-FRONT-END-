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

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-md'}`}
    >
      <div className="flex justify-between items-center w-full px-4 md:px-8 lg:px-16 py-3">
        {/* Logo Section with animation */}
        <motion.div 
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <img
              src={img.logo}
              alt="Hayah Foods Logo"
              className="w-20 h-auto sm:w-24 md:w-32 transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </motion.div>

        {/* Navigation Links - Enhanced */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 items-center">
          {[
            { path: "/about", icon: <FiInfo />, text: "About Us" },
            { path: "/product", icon: <FiBox />, text: "Products" },
            { path: "/bulk-order-enquiry", icon: <FiTruck />, text: "Bulk Order" },
            { path: "/ProcessStep", icon: <FiSettings />, text: "Process" }
          ].map((item) => (
            <motion.li 
              key={item.path}
              whileHover={{ y: -2 }}
              className="relative group"
            >
              <Link 
                to={item.path} 
                className={`flex items-center gap-2 px-3 py-2 rounded-full
                  ${location.pathname === item.path 
                    ? 'text-yellow-600' 
                    : 'text-gray-700 hover:text-yellow-600'
                  } transition-colors duration-300`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </Link>
              <motion.div 
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-600 transform origin-left
                  ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0'}
                  group-hover:scale-x-100 transition-transform duration-300`}
              />
            </motion.li>
          ))}
        </ul>

        {/* Contact Button - Enhanced */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/Qrcode"
            className="flex items-center gap-2 px-4 py-2 bg-yellow-50 hover:bg-yellow-100
                     text-yellow-700 rounded-full transition-all duration-300
                     hover:shadow-md hover:scale-105"
          >
            <RiQrCodeLine className="text-xl" />
            <span className="font-semibold">Contact</span>
          </Link>

          {/* Scroll Indicator */}
          <motion.button 
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
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

        {/* Mobile Menu Button - Enhanced */}
        <motion.button 
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? (
            <FiX className="w-6 h-6 text-gray-800" />
          ) : (
            <FiMenu className="w-6 h-6 text-gray-800" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu - Enhanced */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              {/* ...existing mobile menu code... */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
