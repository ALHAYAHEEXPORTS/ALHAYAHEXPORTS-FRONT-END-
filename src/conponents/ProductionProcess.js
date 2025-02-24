import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Circle } from "lucide-react";

// Importing images properly
import farmer from "../assets copy/Image-folder/farmer.jpg";
import farmer2 from "../assets copy/Image-folder/farmer2.jpg";
import farmer3 from "../assets copy/Image-folder/farmer3.jpg";
import farmer4 from "../assets copy/Image-folder/farmer4.jpg";

// Steps Data with Correct Image Paths
const steps = [
  { title: "Cultivation", description: "Farmers grow crops in optimal conditions.", src: farmer },
  { title: "Harvesting", description: "Mature crops are carefully harvested.", src: farmer2 },
  { title: "Processing", description: "Raw materials are refined and processed.", src: farmer3 },
  { title: "Packaging", description: "Final products are packed for distribution.", src: farmer4 },
  { title: "Distribution", description: "Goods are shipped to markets worldwide.", src: farmer }
];

// Animation Variants
const stepVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 15 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const lineVariants = {
  hidden: { height: 0 },
  visible: { height: "100%", transition: { duration: 0.5, ease: "easeInOut" } }
};

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 200, 
      damping: 10,
      delay: 0.2 
    }
  }
};

// Step Component with Responsive Design
const Step = ({ step, index, totalSteps }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative flex flex-col md:flex-row items-center justify-center w-full md:space-x-6 p-4"
      variants={stepVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Timeline Connector Line */}
      {index < totalSteps - 1 && (
        <motion.div 
          className="absolute left-1/2 transform -translate-x-1/2 top-6 w-[3px] bg-yellow-950 hidden md:block"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      )}

      {/* Step Content & Image Section */}
      <div
        className={`relative flex flex-col md:flex-row items-center w-full max-w-4xl ${
          isEven ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Step Image */}
        <motion.img
          src={step.src}
          alt={step.title}
          className="w-20 h-20 md:w-36 md:h-36 object-cover rounded-lg shadow-lg mb-4 md:mb-0"
          variants={fadeInUp}
        />

        {/* Step Text Card */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg border text-center md:text-left">
          <h3 className="text-lg md:text-xl font-bold text-gray-800">{step.title}</h3>
          <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
        </div>
      </div>

      {/* Step Icon */}
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full border-4 border-gray-300 bg-white flex items-center justify-center"
        variants={iconVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {index === 0 ? 
          <CheckCircle className="text-green-600 w-5 h-5 md:w-6 md:h-6" /> : 
          <Circle className="text-gray-400 w-5 h-5 md:w-6 md:h-6" />
        }
      </motion.div>
    </motion.div>
  );
};

// Main Component
const ProductionProcess = () => {
  return (
    <div className="py-12 px-4 md:py-16 md:px-20">
      {/* Header */}
      <motion.div
        className="max-w-5xl mx-auto text-center mb-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-14">Our Production Process</h2>
        <p className="text-gray-600 mt-4 text-sm md:text-lg">
          A step-by-step journey of how we ensure quality from cultivation to distribution.
        </p>
      </motion.div>

      {/* Timeline Section */}
      <div className="max-w-5xl mx-auto flex flex-col items-start relative">
        {steps.map((step, index) => (
          <Step key={index} step={step} index={index} totalSteps={steps.length} />
        ))}
      </div>
    </div>
  );
};

export default ProductionProcess;