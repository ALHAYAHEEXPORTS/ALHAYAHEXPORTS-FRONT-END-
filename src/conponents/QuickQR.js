import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { motion } from 'framer-motion';

const ContactQRCode = () => {
  const [qrCodeUrls, setQrCodeUrls] = useState({ ankush: '', sagar: '' });

  const contactDetails = {
    ankush: {
      name: "Ankush Dahiya",
      tel: "+919996442528",
      email: "Ankushdahiya222@gmail.com",
      adr: "Vill. Gangar, Taraori, Karnal, Haryana 132116"
    },
    sagar: {
      name: "Sagar Rana",
      tel: "+917988267986",
      email: "Sagarrana081@gmail.com",
      adr: "Vill. Gangar, Taraori - karnal, Haryana 132116"
    }
  };

  useEffect(() => {
    // Generate QR codes for both contacts using VCARD format
    Object.entries(contactDetails).forEach(([key, details]) => {
      // Create a valid VCARD format (which works better for addresses)
      const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${details.name}
TEL:${details.tel}
EMAIL:${details.email}
ADR:;;${details.adr.replace(/,/g, '\\,')}
END:VCARD`;

      // Generate QR code
      QRCode.toDataURL(vCard, { 
        width: 400, // Increase width for better scannability
        margin: 1,  // Reduce margin for more data space
        color: {
          dark: '#000000', // High contrast
          light: '#FFFFFF'  // Light background for readability
        }
      }, (err, url) => {
        if (err) {
          console.error(err);
        } else {
          setQrCodeUrls(prev => ({ ...prev, [key]: url }));
        }
      });
    });
  }, []);

  const QRCodeCard = ({ details, qrUrl, index }) => (
    <motion.div 
      className="w-full md:w-[calc(50%-1rem)] bg-white rounded-2xl shadow-xl p-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2 * index
      }}
    >
      {/* Background Decoration */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-100 rounded-full opacity-50" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-yellow-50 rounded-full opacity-50" />

      {/* Contact Info */}
      <motion.div 
        className="text-center mb-4"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-xl font-bold text-yellow-900 mb-2">{details.name}</h3>
      </motion.div>

      {/* QR Code */}
      {qrUrl && (
        <motion.div 
          className="relative bg-white p-4 rounded-xl shadow-inner mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", delay: 0.4 }}
        >
          <img 
            src={qrUrl} 
            alt={`QR Code for ${details.name}`} 
            className="w-full max-w-[200px] mx-auto rounded-lg"
          />
        </motion.div>
      )}

      {/* Contact Details */}
      <motion.div 
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a 
          href={`tel:${details.tel}`} 
          className="text-sm text-yellow-900 font-semibold hover:text-yellow-700 transition-colors block"
        >
          {details.tel}
        </a>
        <a 
          href={`mailto:${details.email}`}
          className="text-sm text-gray-600 hover:text-yellow-700 transition-colors block mt-1"
        >
          {details.email}
        </a>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.div 
      className="min-h-[400px] flex flex-col items-center justify-center p-8 mt-28 bg-gradient-to-b from-gray-50 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-5xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
        >
          <h2 className="text-3xl font-bold text-yellow-900 mb-4">Connect With Us</h2>
          <p className="text-gray-600">Scan to add our contact information</p>
        </motion.div>

        {/* QR Codes Container */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {Object.entries(contactDetails).map(([key, details], index) => (
            <QRCodeCard 
              key={key}
              details={details}
              qrUrl={qrCodeUrls[key]}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactQRCode;
