import React from "react";
import { motion } from "framer-motion";
import { img } from "../assets copy/image";

const AboutUs = () => {
  return (
    <div className="  mt-24 from-orange-50">
      {/* Section 1: About Us Intro */}
      <motion.section
        className="max-w-7xl mx-auto p-6   mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
   
   <section className=" py-1 px-6 md:px-16 from-orange-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Top Icons */}
        <div className="flex justify-between items-center mb-4 ">
          <img src={img.leaveimage} alt="Left Wheat Icon" className="w-12 md:w-16" />
          <h2 className="text-sm font-semibold text-blue-900 tracking-widest">ABOUT US</h2>
          <img src={img.leaveimage} alt="Right Wheat Icon" className="w-12 md:w-16" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl from-orange-50 md:text-4xl font-bold text-gray-900 mb-6">
          Authentic Indian Basmati Rice <br /> Manufacturer & Exporter
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          The global rice market is one of the most significant and influential agricultural sectors, 
          with Basmati rice holding a premium position due to its long grains, unique aroma, and exquisite taste. 
          Among the industry leaders, <span className="font-semibold">AL HAYAH EXPORTS</span> has emerged as a pioneer 
          in ethical sourcing, high-quality production, and seamless international trade.
        </p>

        <br />

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          <span className="font-semibold">AL HAYAH EXPORTS</span> is more than just a manufacturer and supplier; 
          it is an institution that upholds integrity, transparency, and excellence in rice exports. 
          Founded in 2012 alongside <span className="font-semibold">Sagar Industries</span>, a leader in rice mill infrastructure, 
          and later expanding operations through <span className="font-semibold">Mansi Overseas</span>, 
          the company has successfully equipped over 100 rice mills across India and Nepal. 

          <br /><br />

          Today, <span className="font-semibold">AL HAYAH EXPORTS</span> is positioned as a global leader in Basmati rice exports, 
          setting new standards in quality assurance. Our commitment to stringent quality control 
          ensures that every grain of rice we produce meets the highest standards of taste, texture, and nutritional value.
        </p>

        <br />

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          With a monthly export production capacity of <span className="font-semibold">10,000 MT</span>, 
          we have the capability to meet the demands of our customers worldwide.  
          
          Whether you are looking for Basmati Rice varieties such as:
          <br />
          <span className="font-semibold">
            - Pusa Basmati Rice  
            - 1121 Basmati Rice  
            - Raw Milled Basmati Rice  
            - Parboiled Basmati Rice  
            - Cargo (Brown) Basmati Rice  
          </span>  
          or <span className="font-semibold">Non-Basmati Rice</span>, AL HAYAH EXPORTS is your trusted partner for premium rice products.
        </p>
      </div>
    </section>

       
      </motion.section>

      {/* Section 2: Brand Story */}
      <motion.section
      className="max-w-7xl mx-auto px-6 py-12  mb-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Section Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center leading-snug"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
         Connecting Global Palates 
      </motion.h2>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ol className="list-decimal text-gray-800 space-y-6 pl-6 text-lg leading-relaxed">
            <li className="relative pl-4">
              <span className="text-yellow-700 font-semibold">Our journey</span> sprouted from a deep, generational reverence for rice – an art form passed down through centuries of agricultural wisdom.
            </li>
            <li className="relative pl-4">
              We've cultivated profound, meaningful partnerships with farmers who are not just suppliers, but true stewards of sustainable agricultural heritage.
            </li>
            <li className="relative pl-4">
              Today, we bridge continents and cultures, transforming humble grains into culinary experiences that tell stories of tradition, respect, and shared human connection.
            </li>
          </ol>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="overflow-hidden shadow-xl transform transition duration-500 hover:scale-105">
            <img
              src={img.OPI}
              alt="Brand Story"
              className="w-full h-auto "
            />
          </div>
        </motion.div>
      </div>
    </motion.section>

      {/* Section 4: Certifications */}
      <motion.section
      className="max-w-7xl mx-auto px-6 py-12 from-orange-50 rounded-lg  mb-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {/* Section Title */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
       Certified for Excellence
      </motion.h2>

      {/* Section Description */}
      <motion.p
        className="text-center text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        At <span className="font-semibold">AL HAYAH EXPORTS</span>, our commitment to quality transcends borders.  
        We continuously validate our excellence through international certifications, ensuring that every grain meets  
        the highest standards of safety, sustainability, and customer satisfaction.
      </motion.p>

      {/* Certification Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Certificate Cards */}
        {[
          { img: img.cirtificate1, title: "FSSAI Certification", desc: "Validates Indian food safety standards and quality control." },
          { img: img.cirtificate2, title: "ISO 22000:2018", desc: "International food safety management standard for hazard prevention." },
          { img: img.cirtificate3, title: "GMP Certification", desc: "Ensures consistent product safety through proactive risk management." },
          { img: img.cirtificate4, title: "HACCP Certification", desc: "Systematic approach to quality control and hazard prevention." },
          { img: img.cirtificate5, title: "ISO 9001:2015 Certification", desc: "Global quality management benchmark for operational excellence." },
          { img: img.cirtificate6, title: "APEDA Certification", desc: "Confirms premium rice quality for international agricultural exports." },
        ].map((cert, index) => (
          <motion.div
            key={index}
            className=" p-6   text-center transition transform hover:scale-105 hover:shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={cert.img} alt={cert.title} className="w-full rounded-lg mb-4 shadow-sm" />
            <h3 className="text-xl font-semibold text-gray-800">{cert.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{cert.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Additional Certification Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10">
        <motion.img
          src={img.cirtificate7}
          alt="Certification 7"
          className="rounded-lg shadow-md hover:scale-105 transition-transform"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        <motion.img
          src={img.cirtificate8}
          alt="Certification 8"
          className="rounded-lg shadow-md hover:scale-105 transition-transform"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />
      </div>
    </motion.section>
    </div>
  );
};

export default AboutUs;