import React from 'react';
import { motion } from 'framer-motion';
import { img } from '../assets copy/image';

// Animation variants
const pathVariants = {
  hidden: { pathLength: 0 },
  visible: { 
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" }
  }
};

const ProcessStep = ({ step, index, totalSteps }) => {
  const isEven = index % 2 === 0;

  // Improved path calculation for better connections
  const getPath = () => {
    const startX = isEven ? 0 : 1200;
    const endX = isEven ? 1200 : 0;
    const midX = 600;
    const startY = 50;
    const endY = 400; // Increased height for better connection
    const controlY = 250; // Adjusted control point

    return `M${startX},${startY} 
            C${startX + (midX - startX) / 2},${startY} 
             ${startX + (midX - startX) / 2},${controlY} 
             ${midX},${controlY} 
            C${endX - (endX - midX) / 2},${controlY} 
             ${endX - (endX - midX) / 2},${endY} 
             ${endX},${endY}`;
  };

  return (
    <div className={`relative flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center gap-8 mb-48`}>
      {/* Step Number Circle */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-yellow-900 rounded-full flex items-center justify-center z-20"
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <span className="text-white font-bold">{index + 1}</span>
      </motion.div>

      {/* Content Card */}
      <motion.div
        className={`w-5/12 bg-white rounded-xl p-6 shadow-lg relative z-10`}
        initial={{ 
          opacity: 0, 
          x: isEven ? -100 : 100,
          rotateY: isEven ? 45 : -45 
        }}
        whileInView={{ 
          opacity: 1, 
          x: 0,
          rotateY: 0
        }}
        viewport={{ once: true }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 12,
          delay: index * 0.1
        }}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 20px 30px rgba(0,0,0,0.15)"
        }}
      >
        {/* Connection points */}
        <motion.div 
          className={`absolute ${isEven ? '-right-3' : '-left-3'} bottom-0 w-6 h-6 bg-yellow-900 rounded-full border-4 border-white shadow-lg`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        />

        <div className="relative">
          {/* Icon */}
          <motion.div 
            className="absolute -top-10 right-0 w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center"
            animate={{
              y: [-5, 5],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <img src={step.icon || img.leaveimage} alt="" className="w-8 h-8" />
          </motion.div>

          <h3 className="text-xl font-bold text-yellow-900 mb-3">{step.title}</h3>
          <p className="text-gray-600">{step.description}</p>
        </div>
      </motion.div>

      {/* Improved Connecting Lines */}
      {index < totalSteps - 1 && (
        <div className="absolute w-full h-96 left-0 top-full -mt-48 pointer-events-none">
          <svg
            className="absolute w-full h-full"
            viewBox="0 0 1200 500"
            preserveAspectRatio="none"
            style={{ zIndex: 5 }}
          >
            {/* Background glow */}
            <motion.path
              d={getPath()}
              stroke="rgba(146, 64, 14, 0.1)"
              strokeWidth="20"
              fill="none"
              filter="url(#glow)"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={pathVariants}
            />

            {/* Main connecting line */}
            <motion.path
              d={getPath()}
              stroke="#92400E"
              strokeWidth="4"
              fill="none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={pathVariants}
            />

            {/* Flowing dots animation */}
            <motion.path
              d={getPath()}
              stroke="#F59E0B"
              strokeWidth="4"
              strokeDasharray="5,30"
              fill="none"
              initial={{ pathOffset: 0 }}
              animate={{ 
                pathOffset: 1,
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            />

            {/* Glow filter */}
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>
        </div>
      )}
    </div>
  );
};

const ProductionProcess = () => {
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

  return (
    <div className="bg-gradient-to-b mt-16  from-orange-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <img src={img.leaveimage} alt="leaf" className="w-16 h-16" />
          </motion.div>
          <h2 className="text-4xl font-bold text-yellow-900 mb-4">
            Our Production Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          From cultivation to distribution, our rice undergoes a meticulous process to ensure unmatched quality and taste.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {processSteps.map((step, index) => (
            <ProcessStep 
              key={index}
              step={step}
              index={index}
              totalSteps={processSteps.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductionProcess;
