import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck } from 'react-icons/fi';
import { BsFillBuildingsFill } from 'react-icons/bs';
import { FaIndustry, FaLeaf, FaTractor } from 'react-icons/fa';
import { GiWheat, GiFactory, GiWaterDrop } from 'react-icons/gi';
import { MdCleaningServices, MdOutlineHighQuality } from 'react-icons/md';
import { BiPackage } from 'react-icons/bi';

const ProductionProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Add your mill images here
  const millImages = [
    "/alhahaya_mils1.webp",
    "/alhahaya_mils2.webp",
    "/alhahaya_mils3.webp",
    "/alhahaya_mils4.webp",
  ];

  // Auto slide images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % millImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const processSteps = [
    { title: "Cultivation", description: "Farmers cultivate rice in fertile fields, primarily in waterlogged areas, where the crop thrives under specific conditions." },
    { title: "Harvesting", description: "Once the rice plants mature, they are harvested using traditional methods or modern machinery. The harvested rice is called paddy." },
    { title: "Threshing", description: "The harvested paddy is threshed to separate the grains from the stalks. This can be done manually or using mechanical threshers." },
    { title: "Drying", description: "The grains are dried to reduce their moisture content, ensuring longer shelf life and preventing spoilage." },
    { title: "Cleaning", description: "The dried paddy is cleaned to remove impurities like stones, husks, and other debris." },
    { title: "Dehusking", description: "The outer husk of the rice grain is removed through hulling machines, leaving behind brown rice." },
    { title: "Polishing/Milling", description: "The brown rice is further processed to remove the bran layer, resulting in white rice with a smooth texture." },
    { title: "Sorting & Grading", description: "The milled rice is sorted and graded based on size, quality, and type, separating broken or inferior grains." },
    { title: "Quality Testing", description: "The final product is tested to ensure it is airtight, tamper-proof, and maintains freshness." },
    { title: "Packaging & Distribution", description: "The rice is packed in high-quality bags and transported to distributors and consumers worldwide." },
  ];

  // Add these variants near the top
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Auto progress steps
  useEffect(() => {
    const stepInterval = setInterval(() => {
      if (!isPaused) {
        setActiveStep((prevStep) => 
          prevStep === processSteps.length - 1 ? 0 : prevStep + 1
        );
      }
    }, 10000); // 10 seconds interval

    return () => clearInterval(stepInterval);
  }, [isPaused, processSteps.length]);

  // Update the step container to include hover pause functionality
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Step icons mapping
  const stepIcons = {
    "Cultivation": <FaLeaf className="w-6 h-6" />,
    "Harvesting": <FaTractor className="w-6 h-6" />,
    "Threshing": <GiWheat className="w-6 h-6" />,
    "Drying": <GiWaterDrop className="w-6 h-6" />,
    "Cleaning": <MdCleaningServices className="w-6 h-6" />,
    "Dehusking": <GiFactory className="w-6 h-6" />,
    "Polishing/Milling": <FaIndustry className="w-6 h-6" />,
    "Sorting & Grading": <MdOutlineHighQuality className="w-6 h-6" />,
    "Quality Testing": <MdOutlineHighQuality className="w-6 h-6" />,
    "Packaging & Distribution": <BiPackage className="w-6 h-6" />
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf3ee] via-white to-[#faf3ee] py-12">
      {/* Header Section */}
      <motion.div 
        className="text-center py-8 md:py-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Our Production Process
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto px-6">
          Experience our state-of-the-art rice processing facilities and quality-focused production steps
        </p>
      </motion.div>

      {/* Main Content Container - Updated for seamless look */}
      <div className="relative max-w-8xl mx-auto">
        {/* Background Blur Effect */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-3xl"></div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 p-6 md:p-8">
          {/* Left Section - Process Steps */}
          <div 
            className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8 md:p-10 relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Add auto-progress indicator */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className={`text-sm px-3 py-1 rounded-full transition-colors
                  ${isPaused 
                    ? 'bg-yellow-100 text-yellow-600' 
                    : 'bg-green-100 text-green-600'
                  }`}
              >
                {isPaused ? 'Paused' : 'Auto-playing'}
              </button>
            </div>

            {/* Add progress timer bar */}
            {!isPaused && (
              <motion.div
                className="absolute top-0 left-0 h-1 bg-yellow-600"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop"
                }}
              />
            )}

            <div className="flex items-center gap-2 mb-8">
              <FaIndustry className="text-yellow-600 text-2xl" />
              <h3 className="text-xl font-semibold">Processing Steps</h3>
            </div>

            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-50 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-50 rounded-full -ml-16 -mb-16" />

            <motion.div className="relative">
              {/* Vertical Progress Line - Adjusted position */}
              <div className="absolute left-[23px] top-0 bottom-0 w-1 bg-gray-100 rounded-full">
                <motion.div 
                  className="w-full bg-yellow-600 rounded-full"
                  style={{ 
                    height: `${(activeStep / (processSteps.length - 1)) * 100}%`,
                    transition: 'height 0.5s ease'
                  }}
                />
              </div>

              {/* Steps with improved spacing and perfectly round circles */}
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`
                    relative flex items-start mb-10 cursor-pointer group
                    ${index === activeStep ? 'z-10' : 'z-0'}
                  `}
                  onClick={() => setActiveStep(index)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Fixed circular shape with aspect ratio */}
                  <div 
                    className={`
                      relative flex items-center justify-center
                      w-12 h-12 aspect-square rounded-full
                      flex-shrink-0 transition-all duration-500 transform
                      ${index === activeStep 
                        ? 'bg-yellow-600 text-white scale-110 shadow-lg ring-4 ring-yellow-100' 
                        : index < activeStep 
                          ? 'bg-green-500 text-white'
                          : 'bg-white text-gray-400 border-2 border-gray-200'
                      }
                      group-hover:shadow-xl group-hover:scale-105
                    `}
                  >
                    {/* Icon container with fixed size */}
                    <div className="w-6 h-6 flex items-center justify-center">
                      {index < activeStep ? (
                        <FiCheck className="w-5 h-5" />
                      ) : (
                        stepIcons[step.title]
                      )}
                    </div>
                  </div>

                  {/* Step Content Card with improved spacing */}
                  <div 
                    className={`
                      ml-6 p-4 rounded-lg transition-all duration-300 flex-grow
                      ${index === activeStep 
                        ? 'bg-yellow-50 shadow-md transform -translate-y-1' 
                        : 'bg-transparent'
                      }
                      group-hover:bg-yellow-50
                    `}
                  >
                    <h3 className={`
                      font-semibold text-lg mb-2 transition-colors duration-300
                      ${index === activeStep ? 'text-yellow-600' : 'text-gray-600'}
                    `}>
                      {step.title}
                    </h3>
                    <AnimatePresence mode="wait">
                      {activeStep === index && (
                        <motion.p
                          className="text-sm text-gray-500 leading-relaxed"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {step.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Section - Mill Images - Updated sizing and styling */}
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <BsFillBuildingsFill className="text-yellow-600 text-2xl" />
              <h3 className="text-xl font-semibold">Our Facilities</h3>
            </div>

            <div className="relative flex-1 min-h-[500px] md:min-h-[600px] rounded-xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  src={millImages[currentImage]}
                  alt={`Mill facility ${currentImage + 1}`}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 1 }}
                />
              </AnimatePresence>

              {/* Enhanced Image Navigation Dots */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                {millImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 
                      ${currentImage === index 
                        ? 'bg-white w-8 shadow-lg' 
                        : 'bg-white/50 hover:bg-white/80'}`}
                  />
                ))}
              </div>

              {/* Enhanced Overlay with Facility Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
                <div className="p-8 text-white w-full">
                  <h4 className="text-2xl font-semibold mb-3">
                    Modern Processing Facility
                  </h4>
                  <p className="text-sm opacity-90 max-w-xl">
                    State-of-the-art equipment ensuring highest quality standards with cutting-edge technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements for Seamless Look */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-100/30 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-100/30 rounded-full blur-2xl"></div>
      </div>

      {/* Progress Indicator - Updated styling */}
      <motion.div 
        className="fixed top-6 right-6 w-14 h-14 rounded-full bg-yellow-600/90 backdrop-blur
                  flex items-center justify-center text-white font-bold shadow-lg"
        animate={{
          scale: [1, 1.1, 1],
          transition: { duration: 1, repeat: Infinity }
        }}
      >
        {Math.round((activeStep / (processSteps.length - 1)) * 100)}%
      </motion.div>
    </div>
  );
};

export default ProductionProcess;
