import React, { useState } from "react";
import { motion } from "framer-motion";
import riceseed from "../assets copy/Image-folder/ricrseed.png"; // Update the path to the rice seed image

// Fade-Up Animation on Scroll
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const GrainLength = () => {
  const [selectedRice, setSelectedRice] = useState("1121 Basmati Rice");

  const riceData = {
    "Basmati Rice": [
      { name: "1121 Basmati Rice", agl: "8.30 mm - 8.40 mm", size: "max-w-40" },
      { name: "1509 Basmati Rice", agl: "8.20 mm - 8.35 mm", size: "max-w-36" },
      { name: "1401 Basmati Rice", agl: "7.20 mm - 7.30 mm", size: "max-w-32" },
      { name: "1718 Basmati Rice", agl: "8.30 mm - 8.40 mm", size: "max-w-28" },
      { name: "Pusa Basmati Rice", agl: "7.40 mm - 7.55 mm", size: "max-w-28" }
    ],
    "Non Basmati Rice": [
      { name: "PR 11 Non Basmati Rice", agl: "6.80 mm - 7.00 mm", size: "max-w-24" },
      { name: "PR 14 Non Basmati Rice", agl: "7.10 mm - 7.30 mm", size: "max-w-20" },
      { name: "Parmal Non Basmati Rice", agl: "6.50 mm - 6.80 mm", size: "max-w-20" },
      { name: "Sugandha Non Basmati Rice", agl: "7.80 mm - 8.00 mm", size: "max-w-36" },
      { name: "Sharbati Non Basmati Rice", agl: "7.00 mm - 7.20 mm", size: "max-w-20" },
      { name: "Taj Non Basmati Rice", agl: "7.00 mm - 7.20 mm", size: "max-w-20" }
    ]
  };

  const selectedRiceData = Object.values(riceData)
    .flat()
    .find(rice => rice.name === selectedRice);

  return (
    <motion.div
      className="py-12 px-6 sm:px-12 lg:px-24 bg-[#faf3ee]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
        
        {/* Basmati Rice */}
        <motion.div
          className="p-4 bg-white shadow-lg rounded-lg w-full"
          variants={fadeInUp}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center md:text-left">
            Basmati Rice
          </h3>
          <ul className="list-disc pl-4 space-y-2 text-center md:text-left">
            {riceData["Basmati Rice"].map((rice, index) => (
              <li
                key={index}
                className="font-medium text-[#4B4E6D] hover:text-yellow-600 cursor-pointer"
                onClick={() => setSelectedRice(rice.name)}
              >
                {rice.name}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Grain Image and Info (Fixed Container Size) */}
        <motion.div
          className="flex flex-col items-center md:items-start md:border-x-2 md:border-gray-300 px-6"
          variants={fadeInUp}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="text-sm sm:text-base font-medium text-gray-600 text-center md:text-left mb-10">
            AGL <br /> {selectedRiceData ? selectedRiceData.agl : ""}
          </span>
          <div className="h-40 flex items-center justify-center">
            <motion.img
              src={riceseed}
              alt={selectedRice}
              className={`transition-all duration-300 ${selectedRiceData ? selectedRiceData.size : "max-w-32"}`}
            />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mt-4 text-center md:text-left">
            {selectedRice}
          </h3>
        </motion.div>

        {/* Non Basmati Rice */}
        <motion.div
          className="p-4 bg-white shadow-lg rounded-lg w-full"
          variants={fadeInUp}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center md:text-left">
            Non Basmati Rice
          </h3>
          <ul className="list-disc pl-4 space-y-2 text-center md:text-left">
            {riceData["Non Basmati Rice"].map((rice, index) => (
              <li
                key={index}
                className="hover:text-yellow-600 cursor-pointer"
                onClick={() => setSelectedRice(rice.name)}
              >
                {rice.name}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GrainLength;
