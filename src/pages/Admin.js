import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

const API_BASE_URL = "https://alhayaheexports-backend.vercel.app/api";

const AdminPage = () => {
  const [inquiries, setInquiries] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
  
      const token = localStorage.getItem("token"); // Get JWT token
  
      if (!token) {
        alert("Unauthorized! Redirecting to login.");
        navigate("/admin-login");
        return;
      }
  
      try {
        const inquiryRes = await fetch(`${API_BASE_URL}/inquiry`, {
          headers: { Authorization: `Bearer ${token}` }, // Attach token
        });
        const contactRes = await fetch(`${API_BASE_URL}/contact`, {
          headers: { Authorization: `Bearer ${token}` }, // Attach token
        });
  
        if (!inquiryRes.ok) throw new Error(`❌ Inquiries Error: ${inquiryRes.statusText}`);
        if (!contactRes.ok) throw new Error(`❌ Contacts Error: ${contactRes.statusText}`);
  
        const inquiriesData = await inquiryRes.json();
        const contactsData = await contactRes.json();
  
        console.log("📥 Loaded Inquiries:", inquiriesData);
        console.log("📥 Loaded Contacts:", contactsData);
  
        setInquiries(inquiriesData);
        setContacts(contactsData);
      } catch (err) {
        setError(`Failed to load data: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [navigate]);
  

  const downloadExcel = () => {
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(inquiries), "Inquiries");
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(contacts), "Contacts");
    XLSX.writeFile(workbook, "FormSubmissions.xlsx");
  };

  const downloadContactsExcel = () => {
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(contacts), "Contacts");
    XLSX.writeFile(workbook, "Contacts.xlsx");
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token on logout
    navigate("/admin-login");
  };

  return (
    <div className="p-3 mt-28 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <button onClick={handleLogout} className="bg-red-600 text-white px-3 py-1 rounded">
          Logout
        </button>
      </div>

      <button onClick={downloadExcel} className="mb-4 mr-5 bg-green-600 text-white px-3 py-1 rounded">
        Download All Excel
      </button>
      <button onClick={downloadContactsExcel} className="mb-4 bg-blue-600 text-white px-3 py-1 rounded">
        Download Contacts Excel
      </button>

      {loading ? (
        <p className="text-gray-600">Loading data...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <h2 className="text-base font-semibold">Inquiries</h2>
          {inquiries.length > 0 ? (
            <div>
              {inquiries.map((inquiry, index) => (
                <div key={index} className="bg-white p-2 mb-2 rounded text-xs">
                  <pre>{JSON.stringify(inquiry, null, 2)}</pre>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-sm">No inquiries found.</p>
          )}

          <h2 className="text-base font-semibold mt-4">Contacts</h2>
          {contacts.length > 0 ? (
            <div>
              {contacts.map((contact, index) => (
                <div key={index} className="bg-white p-2 mb-2 rounded text-xs">
                  <pre>{JSON.stringify(contact, null, 2)}</pre>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-sm">No contacts found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default AdminPage;
