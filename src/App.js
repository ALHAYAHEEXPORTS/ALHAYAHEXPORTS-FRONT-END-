import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./conponents/Navbar";
import About from "./pages/About";
import Product from "./pages/Product";
import BulkOrderEnquiry from "./pages/BulkOrderEnquiry";
import ContactUs from "./pages/ContactUs";
import HomePage from "./conponents/HomePage";
import Footer from "./conponents/Footer";
import AdminPage from "./pages/Admin"; 
import AdminLogin from "./conponents/AdminLogin"; // Import the Admin Login Page
import BasmatiRice from "./conponents/Basmati";
import PrivateRoute from "./conponents/PrivateRoute"; // Protect admin route
import ContactQRCode from "./conponents/QuickQR";
import ProductionProcess from "./conponents/ProductionProcess"

const App = () => {
  return (
    <div className="from-orange-50">

    <Router>
      <Navbar />
      <div>
        <Routes>
          
      
         <Route element={<PrivateRoute/>}>

            <Route path="/admin" element={<AdminPage />} />

         </Route>

       <Route path="/ProcessStep" element={<ProductionProcess/>}/>
       <Route path="/Qrcode" element={<ContactQRCode/>} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/bulk-order-enquiry" element={<BulkOrderEnquiry />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/admin-login" element={<AdminLogin />} /> {/* Admin Login Page */}

          
          <Route path="/" element={<HomePage />} />
          <Route path="/basmati" element={<BasmatiRice />} /> {/* Fixed spelling */}
        </Routes>
      </div>
      <Footer />
    </Router>
    </div>
  );
};

export default App;
