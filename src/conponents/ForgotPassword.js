import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API_BASE_URL = "https://alhayaheexports-backend.onrender.com/api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/forgot-password`, { email });
      toast.success("Password reset link sent to your email.");
    } catch (error) {
      toast.error("Error sending reset link.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
