import React from "react";
import { motion } from "framer-motion";
import { img } from "../assets copy/image";

// Define animation variants
const stepVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 15 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

// Steps Data with Corresponding Images
const steps = [
  { title: "Cultivation", description: "Farmers grow crops in optimal conditions.", image: img.farmer },
  { title: "Harvesting", description: "Mature crops are carefully harvested.", image: img.farmer2 },
  { title: "Processing", description: "Raw materials are refined and processed.", image: img.farmer3 },
  { title: "Packaging", description: "Final products are packed for distribution.", image: img.farmer },
  { title: "Distribution", description: "Goods are shipped to markets worldwide.", image: img.farmer2 }
];

const Step = ({ step, index, totalSteps }) => {
  return (
    <motion.div
      className="relative flex flex-col md:flex-row items-center md:items-start mb-14 w-full"
      variants={stepVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Continuous Vertical Line - Always on Left */}
      {index < totalSteps - 1 && (
        <div className="absolute left-6 md:left-16 top-6 w-1 h-full bg-yellow-900" />
      )}

      {/* Circle Indicator - Always on Left */}
      <div className="absolute left-6 md:left-16 w-5 h-5 md:w-8 md:h-8 border-4 border-yellow-900 bg-white rounded-full" />

      {/* Step Content - Always Positioned to the Right */}
      <div className="flex flex-col md:flex-row items-center gap-6 w-full ml-16 md:ml-36">
        {/* Step Card */}
        <motion.div className="w-full md:w-7/12 bg-white p-4 md:p-6 shadow-lg rounded-lg">
          <h3 className="text-lg md:text-2xl font-bold text-yellow-900 mb-2 md:mb-3">{step.title}</h3>
          <p className="text-gray-600 text-sm md:text-lg">{step.description}</p>
        </motion.div>

        {/* Image */}
        <motion.img
          src={step.image}
          alt={step.title}
          className="w-24 h-24 md:w-36 md:h-36 object-cover rounded-lg shadow-lg"
          variants={fadeInUp}
        />
      </div>
    </motion.div>
  );
};

const ProductionProcess = () => {
  return (
    <div className="py-12 px-4 md:py-16 md:px-20 mt-16">
      <motion.div
        className="max-w-5xl mx-auto text-center mb-12 md:mb-16"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-5xl font-bold text-yellow-900">Our Production Process</h2>
        <p className="text-gray-600 mt-3 md:mt-6 max-w-3xl mx-auto text-sm md:text-lg">
          A step-by-step journey of how we ensure quality from cultivation to distribution.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto flex flex-col items-start relative">
        {/* Full-length vertical line to connect all circles */}
        <div className="absolute left-6 md:left-16 top-0 bottom-0 w-1 bg-yellow-900" />

        {steps.map((step, index) => (
          <Step key={index} step={step} index={index} totalSteps={steps.length} />
        ))}
      </div>
    </div>
  );
};

export default ProductionProcess;
