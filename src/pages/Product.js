import React from "react";
import { motion } from "framer-motion";
import { img } from "../assets copy/image"; // Ensure correct image paths

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const hoverEffect = {
  hover: { scale: 1.05, rotate: 1, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" },
};

const floatingEffect = {
  animate: { y: [0, -5, 0], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } },
};

const SeeMoreProduct = () => {
  const premiumBasmati = [
    { image: img.rice1, title: "1121 Steamed Basmati Rice", description: "Extra-long grains, ideal for biryanis." },
    { image: img.rice13, title: "1401 Sella Basmati Rice", description: "Golden-hued rice, perfect for pilafs and special occasions." },
    { image: img.rice3, title: "1718 Steamed Basmati Rice", description: "Aromatic variety with a soft texture, great for daily use." },
    { image: img.rice4, title: "PUSA Steamed Basmati Rice", description: "Shorter grains with a traditional aroma, ideal for quick recipes." },
  ];

  const nonBasmati = [
    { image: img.rice11, title: "PR 11 Non-Basmati Rice", description: "Known for its soft texture, ideal for daily meals and festive dishes." },
    { image: img.rice6, title: "PR 14 Non-Basmati Rice", description: "Offers long grains and a delightful aroma, perfect for gourmet cooking." },
    { image: img.rice7, title: "Parmal Non-Basmati Rice", description: "Medium-grain rice with a soft texture, suitable for everyday cooking." },
    { image: img.rice8, title: "Sugandha Non-Basmati Rice", description: "Naturally aromatic, with long grains and rich flavor, great for biryanis and pilafs." },
  ];

  return (
    <motion.div
      className="mt-32 px-6 lg:px-12"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Hero Image Section */}
      <motion.div
        className="shadow-lg overflow-hidden w-full sm:w-auto"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src={img.riceImage}
          alt="Terraced Fields"
          className="w-full h-80 object-cover rounded-lg"
        />
        <motion.div className="p-8 text-center" variants={fadeInUp}>
          <h1 className="mt-6 text-4xl sm:text-2xl font-bold text-gray-900 mb-2">
            Global Grain Pioneers
          </h1>
          <p className="text-lg sm:text-base text-gray-600">
            Crafted by Nature, Perfected by Tradition
          </p>
        </motion.div>
      </motion.div>

      {/* Premium Basmati Rice Collection */}
      <motion.div className="mt-20" variants={fadeInUp}>
        <h2 className="text-3xl sm:text-2xl font-bold text-gray-900 text-center mb-10">
          Our Premium Basmati Rice Collection
        </h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" variants={staggerContainer}>
          {premiumBasmati.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden border cursor-pointer mb-11"
              variants={fadeInUp}
              whileHover="hover"
              animate="animate"
              transition={{ type: "spring", stiffness: 120 }}
              whileHover1={hoverEffect}
              animate1={floatingEffect}
            >
              <img src={product.image} alt={product.title} className="w-full h-56 object-cover rounded-t-xl mb-10" />
              <div className="p-5 text-center mb-10">
                <h3 className="text-xl sm:text-lg font-semibold text-gray-900">{product.title}</h3>
                <p className="text-md text-gray-600 mt-2">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Non-Basmati Rice Collection */}
      <motion.div className="mt-20" variants={fadeInUp}>
        <h2 className="text-3xl sm:text-2xl font-bold text-gray-900 text-center mb-10">
          Our Non-Basmati Rice Collection
        </h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-11" variants={staggerContainer}>
          {nonBasmati.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden border cursor-pointer"
              variants={fadeInUp}
              whileHover="hover"
              animate="animate"
              transition={{ type: "spring", stiffness: 120 }}
              whileHover1={hoverEffect}
              animate1={floatingEffect}
            >
              <img src={product.image} alt={product.title} className="w-full h-56 object-cover rounded-t-xl mb-10" />
              <div className="p-5 text-center mb-11">
                <h3 className="text-xl sm:text-lg font-semibold text-gray-900">{product.title}</h3>
                <p className="text-md text-gray-600 mt-2">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SeeMoreProduct;
