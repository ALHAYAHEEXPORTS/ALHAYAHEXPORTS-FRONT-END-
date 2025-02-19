import React from "react";
import { Link } from "react-router-dom";
import { img } from "../assets copy/image";

const Footer = () => {
  return (
    <footer className="bg-yellow-950 text-white w-full py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
        
        {/* Left Section: Company Info */}
        <div className="flex flex-col items-center md:items-start">
          {/* Hide Logo on Mobile */}
          <img
            src={img.footerlogo}
            alt="Hayah Foods Logo"
            className="hidden sm:block w-20 sm:w-24 h-auto mb-4"
          />

          {/* Paragraph visible only on larger screens */}
          <p className="hidden sm:block text-xs leading-relaxed opacity-90 max-w-sm">
            At Hayah Foods, we take immense pride in offering fine quality food
            products that exceed our customers' expectations. Our commitment to
            excellence is evident in every product we deliver.
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-3 mt-4 justify-center md:justify-start">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={img.facebook} alt="Facebook" className="w-5 sm:w-6 h-5 sm:h-6 transition transform hover:scale-110" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={img.instagram} alt="Instagram" className="w-5 sm:w-6 h-5 sm:h-6 transition transform hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Center Section: Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-xs md:text-sm">
          
            <li className="flex text-left"><Link to="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
            <li className="flex text-left"><Link to="/product" className="hover:text-yellow-400 transition">Product</Link></li>
            <li className="flex text-left"><Link to="/admin-login" className="hover:text-yellow-400 transition">Admin</Link></li>
            <li className="flex text-left"><Link to="/ProcessStep" className="hover:text-yellow-400 transition">Production Process</Link></li>
            <li className="flex text-left"><Link to="/basmati" className="hover:text-yellow-400 transition">Products Information</Link></li>
            <li className="flex text-left"><Link to="/contact-us" className="hover:text-yellow-400 transition">Contact Us</Link></li>
            <li className="flex text-left"><Link to="/Qrcode" className="hover:text-yellow-400 transition">QR & Scan</Link></li>
          </ul>
        </div>

        {/* Right Section: Contact Info */}
        <div>
          <h3 className="text-base font-semibold mb-3">Contact Info</h3>
          <div className="text-xs opacity-90 flex flex-col items-end md:items-start">
            <p className="mb-2 text-right md:text-left">
              <strong>ADDRESS:</strong><br />
              KS AGRO IMPEX, KURAK, TARAOIRI, Karnal, Haryana, 132116
            </p>
            <p className="mb-2 text-right md:text-left">
              <strong>EMAIL:</strong><br />
              <a href="mailto:business@hayahfoods.com" className="hover:text-yellow-400 transition">
                alhayahexports@gmail.com
              </a> <br />
              <a href="mailto:Ankushdahiya222@gmail.com" className="hover:text-yellow-400 transition">
                Ankushdahiya222@gmail.com
              </a>
            </p>
            <p className="text-right md:text-left">
              <strong>PHONE:</strong><br />
              <a href="tel:+919890052500" className="hover:text-yellow-400 transition">+91-9890052500</a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="mt-8 border-t border-gray-400 pt-4 text-center text-xs opacity-80">
        <p>© {new Date().getFullYear()} Hayah Foods | All Rights Reserved</p>
      </div>

  
   
    </footer>
  );
};

export default Footer;
