import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { img } from "../assets copy/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';

const Footer = () => {
  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#3f2512ef] to-[#2a1a0def] text-white">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-left">
          
          {/* Company Info Section */}
          <motion.div 
            className="flex flex-col items-center md:items-start space-y-6"
            {...fadeInUp}
          >
            <img
              src={img.footerlogo}
              alt="Hayah Foods Logo"
              className="w-32 h-auto filter brightness-110 hover:brightness-125 transition-all duration-300"
            />
            <p className="text-sm leading-relaxed opacity-90 max-w-sm text-center md:text-left">
              At Hayah Foods, we take immense pride in offering fine quality food
              products that exceed our customers' expectations.
            </p>
            
            {/* Enhanced Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              {[
                { Icon: FaFacebookF, link: "https://facebook.com", color: "hover:bg-blue-600" },
                { Icon: FaInstagram, link: "https://instagram.com", color: "hover:bg-pink-600" },
                { Icon: FaTwitter, link: "https://twitter.com", color: "hover:bg-blue-400" },
                { Icon: FaLinkedinIn, link: "https://linkedin.com", color: "hover:bg-blue-700" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/10 ${social.color} 
                            flex items-center justify-center transition-all duration-300
                            hover:scale-110 hover:shadow-lg hover:shadow-white/10`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.Icon className="w-4 h-4 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section - Enhanced */}
          <motion.div 
            className="md:ml-12"
            {...fadeInUp}
          >
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-yellow-500" />
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { text: "About Us", path: "/about" },
                { text: "Our Products", path: "/product" },
                { text: "Admin Portal", path: "/admin-login" },
                { text: "Production Process", path: "/ProcessStep" },
                { text: "Product Information", path: "/basmati" },
                { text: "Contact Us", path: "/contact-us" },
                { text: "QR & Scan", path: "/Qrcode" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="group transition-all duration-300"
                >
                  <Link 
                    to={link.path} 
                    className="flex items-center space-x-2 text-gray-300 group-hover:text-yellow-400"
                  >
                    <span className="w-2 h-0.5 bg-yellow-500 transition-all group-hover:w-3" />
                    <span>{link.text}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info Section - Enhanced */}
          <motion.div 
            className="md:ml-8"
            {...fadeInUp}
          >
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-yellow-500" />
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <HiLocationMarker className="w-5 h-5 text-yellow-500 mt-1" />
                <p className="text-sm">
                  KS AGRO IMPEX, KURAK, TARAOIRI,<br />
                  Karnal, Haryana, 132116
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <HiMail className="w-5 h-5 text-yellow-500 mt-1" />
                <div className="text-sm">
                  <a href="mailto:alhayahexports@gmail.com" 
                     className="hover:text-yellow-400 transition block">
                    alhayahexports@gmail.com
                  </a>
                  <a href="mailto:Ankushdahiya222@gmail.com" 
                     className="hover:text-yellow-400 transition block">
                    Ankushdahiya222@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <HiPhone className="w-5 h-5 text-yellow-500" />
                <a href="tel:+919890052500" 
                   className="text-sm hover:text-yellow-400 transition">
                  +91-9890052500
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} Hayah Foods | All Rights Reserved
            </p>
            <div className="flex space-x-6 text-sm opacity-80">
              <Link to="/privacy-policy" className="hover:text-yellow-400 transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-yellow-400 transition">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
