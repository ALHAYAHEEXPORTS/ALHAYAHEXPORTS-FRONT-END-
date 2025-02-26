import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { img } from "../assets copy/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import footerBg from "../assets copy/Image-folder/footer.png";

const Footer = () => {
  const API_BASE_URL = "https://alhayaheexports-backend.vercel.app/api"; // API URL
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_BASE_URL}/contact`, { // Use dynamic API URL
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    console.log("📤 Sending Contact Data:", response.status); // Debugging
    if(response.status===201){
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        message: "",
      });
    }
  };

  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 }
  };

  return (
    <footer className="relative text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={footerBg} 
          alt="background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3f2512ef] to-[#2a1a0def] opacity-90" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto py-12 px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Section */}
          <motion.div 
            className="lg:col-span-5 glass-panel rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Company Info */}
            <div className="space-y-6">
              <img src={img.footerlogo} alt="Logo" className="w-32" />
              <p className="text-sm leading-relaxed opacity-90 max-w-sm text-center md:text-left">
                At Hayah Foods, we take immense pride in offering fine quality food
                products that exceed our customers' expectations.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
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

          {/* Right Section - Contact Form */}
          <motion.div 
            className="lg:col-span-7 glass-panel rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              Get In Touch
              <div className="h-1 w-20 bg-yellow-500 mt-2 rounded-full" />
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'fullName', type: 'text', placeholder: 'Full Name' },
                  { name: 'email', type: 'email', placeholder: 'Email Address' },
                  { name: 'phone', type: 'tel', placeholder: 'Phone Number' },
                  { name: 'country', type: 'text', placeholder: 'Country' }
                ].map((field, index) => (
                  <motion.div 
                    key={field.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="glass-input"
                      required
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="glass-input resize-none"
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full py-3 px-6 bg-yellow-600/80 hover:bg-yellow-600 
                         backdrop-blur-sm rounded-lg transition-all duration-300 
                         text-white font-semibold shadow-lg hover:shadow-yellow-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Footer Bottom */}
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
