import React from 'react';
import { motion } from 'framer-motion';
import { img } from '../assets copy/image';

// Framer Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { transition: { staggerChildren: 0.2 } },
};

const CardSection = () => {
  return (
    <div className="p-4 sm:p-8 text-gray-800 bg-gradient-to-b from-[#f9f9f9]">
      
      {/* Global Reach Section */}
      <motion.section
        className="mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div className="flex items-center justify-center gap-3 mb-6" variants={fadeInUp}>
          <img
            src={img.leaveimage} // Ensure correct path
            alt="Global Presence Icon"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-[#4B4E6D] text-center">
            Our Global Presence
          </h2>
        </motion.div>

        <motion.p className="text-sm sm:text-base md:text-lg text-center text-gray-600 mb-8" variants={fadeInUp}>
          Explore our global footprint as we deliver premium rice products to customers worldwide.
        </motion.p>
        
        <motion.div className="max-w-4xl mx-auto" variants={fadeInUp}>
          <img
            src={img.GlobalMap} // Ensure correct path
            alt="Global Presence Map"
            className=""
          />
        </motion.div>
      </motion.section>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
          Join us in our mission to deliver premium, sustainable rice products to the world.
        </p>
      </motion.div>
    </div>
  );
};

export default CardSection;
