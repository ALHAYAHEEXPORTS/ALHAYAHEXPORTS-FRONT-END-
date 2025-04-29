import React, { useState } from "react";
import { motion } from "framer-motion";
import com2 from '../assets copy/Image-folder/hi3.png';
import com3 from '../assets copy/Image-folder/hi4.jpg';
import com4 from '../assets copy/Image-folder/hi5.jpg';
import com5  from '../assets copy/Image-folder/hi2.webp';
import RiceCalculator from "../conponents/Basmati";
// import RiceCalculator from "../conponents/Calucature";
const InquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    country: "",
    state: "",
    companyName: "",
    website: "",
    businessType: "",
    productOfInterest: [],
    orderQuantity: "",
    yourBrand: "",
    packagingDetails: "",
    destinationPort: "",
    inquiry: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const updatedProducts = checked
        ? [...prevData.productOfInterest, value]
        : prevData.productOfInterest.filter((item) => item !== value);

      return { ...prevData, productOfInterest: updatedProducts };
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      console.log("📤 Sending Inquiry Data:", formData);

      const response = await fetch("https://alhayaheexports-backend.vercel.app/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("🔹 Server Response:", data);

      if (response.ok) {
        setResponseMessage("✅ Your inquiry has been submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          countryCode: "+91",
          country: "",
          state: "",
          companyName: "",
          website: "",
          businessType: "",
          productOfInterest: [],
          orderQuantity: "",
          yourBrand: "",
          packagingDetails: "",
          destinationPort: "",
          inquiry: "",
        });
      } else {
        setResponseMessage(`❌ Error: ${data.error || "Submission failed"}`);
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      setResponseMessage("⚠️ An unexpected error occurred. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const brands = [
    { name: "Chaman Lal Setia", description: "Renowned agricultural enterprise with extensive rice trading network across North India", img: "/chaman-logo.png" },
    { name: "Supple Tek (Zeeba Rice)", description: "Innovative food processing company specializing in premium rice packaging and distribution", img: "/supple-logo.png" },
    { name: "White Hill Agro", description: "Leading agricultural supplier with strong presence in Punjabi rice export markets", img: "/whiteHill-logo.png" },
    { name: "Reliance Retail & DMART", description: "India's largest retail chains leveraging our high-quality rice for nationwide consumer markets", img: com2 },
    { name: "Ebro India (Tilda Rice)", description: "Global rice major partnering with Hayah Foods for premium international rice sourcing", img: com5 },
  ];

  return (
    <>
    {/* <RiceCalculator /> */}
    <RiceCalculator/>
    <div className="mt-32 min-h-screen bg-gradient-to-b from-orange-50">
      {/* Header Section */}
      <div className="text-center mt-12 px-3 py-7">
        <h1 className="text-4xl font-bold text-[#4B4E6D] mb-4">Bulk Order Inquiry</h1>
        <p className="text-base text-gray-600">Let us know your requirements and we’ll get back to you shortly.</p>
      </div>

      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-5xl w-full mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          
          {/* Left - Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Submit Your Inquiry</h2>
            {responseMessage && <p className="text-center text-green-600 mb-4 font-semibold">{responseMessage}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name*" className="w-full p-2 border rounded-lg" required />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email*" className="w-full p-2 border rounded-lg" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="p-2 border rounded-lg">
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number*" className="w-full p-2 border rounded-lg" required />
              <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country*" className="w-full p-2 border rounded-lg" required />
            </div>

            <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" className="w-full p-2 border rounded-lg" />
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" className="w-full p-2 border rounded-lg" />
            <input type="text" name="website" value={formData.website} onChange={handleChange} placeholder="Website" className="w-full p-2 border rounded-lg" />
            <input type="text" name="businessType" value={formData.businessType} onChange={handleChange} placeholder="Business Type*" className="w-full p-2 border rounded-lg" required />

            <div>
              <p className="text-gray-700 mb-2">Product of Interest*</p>
              <div className="flex flex-wrap gap-2">
                {["Basmati Rice", "Non-Basmati Rice", "Pesticide Free Rice"].map((product) => (
                  <label key={product} className="flex items-center gap-2">
                    <input type="checkbox" value={product} onChange={handleCheckboxChange} checked={formData.productOfInterest.includes(product)} />
                    <span>{product}</span>
                  </label>
                ))}
              </div>
            </div>

            <input type="text" name="orderQuantity" value={formData.orderQuantity} onChange={handleChange} placeholder="Order Quantity*" className="w-full p-2 border rounded-lg" required />
            <input type="text" name="yourBrand" value={formData.yourBrand} onChange={handleChange} placeholder="Your Brand" className="w-full p-2 border rounded-lg" />
            <textarea name="packagingDetails" value={formData.packagingDetails} onChange={handleChange} rows="3" placeholder="Packaging Details*" className="w-full p-2 border rounded-lg" required></textarea>
            <input type="text" name="destinationPort" value={formData.destinationPort} onChange={handleChange} placeholder="Destination Port*" className="w-full p-2 border rounded-lg" required />
            <textarea name="inquiry" value={formData.inquiry} onChange={handleChange} rows="4" placeholder="Additional Inquiry*" className="w-full p-2 border rounded-lg" required></textarea>

            <button type="submit" className="w-full bg-yellow-900 text-white py-2 rounded-lg hover:bg-yellow-950transition" disabled={loading}>
              {loading ? "Submitting..." : "Submit Inquiry"}
            </button>
          </form>
          </motion.div>

          {/* Right - Trusted Brands */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Trusted by Leading Brands</h2>
            <div className="grid md:grid-cols-1 gap-4">
              {brands.map((brand, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center p-4 rounded-lg shadow-md bg-white cursor-pointer"
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={brand.img} alt={brand.name} className=" h-20 px-9 object-cover rounded-full mb-3" />
                  <h3 className="text-lg font-semibold text-gray-700">{brand.name}</h3>
                  <p className="text-gray-600">{brand.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
    </>
  );
};

export default InquiryForm;
