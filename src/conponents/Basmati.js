"use client";
import React, { useEffect, useState } from "react";

const riceTypes = [
  "1121 Basmati Rice",
  "1509 Basmati Rice",
  "1401 Basmati Rice",
  "1718 Basmati Rice",
  "Pusa Basmati Rice",
  "PR 11 Non Basmati Rice",
  "PR 14 Non Basmati Rice",
  "Parmal Non Basmati Rice",
  "Sugandha Non Basmati Rice",
  "Sharbati Non Basmati Rice",
  "Taj Non Basmati Rice",
];

const RiceCalculator = () => {
  const [blendInputs, setBlendInputs] = useState([
    { type: "1121 Basmati Rice", percentage: 0, quantity: 0 },
  ]);
  const [freight, setFreight] = useState("");
  const [markup, setMarkup] = useState("");
  const [processingCharges, setProcessingCharges] = useState("");
  const [totalCost, setTotalCost] = useState({ USD: 0, INR: 0 });
  const [currency, setCurrency] = useState("USD");
  const [ricePrices, setRicePrices] = useState({});
  const [lastUpdated, setLastUpdated] = useState("");
  const [filter, setFilter] = useState("All"); // New filter state

  const filteredRiceTypes = filter === "All" ? riceTypes : riceTypes.filter(type =>
    filter === "Basmati" ? type.includes("Basmati") : !type.includes("Basmati")
  );

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await fetch("/api/rice-prices");
        const data = await res.json();
        setRicePrices(data.prices);
        setLastUpdated(data.lastUpdated);
      } catch (error) {
        console.error("Error fetching rice prices:", error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleBlendChange = (index, field, value) => {
    const updated = [...blendInputs];
    updated[index] = {
      ...updated[index],
      [field]: field === "type" ? value : parseFloat(value) || 0,
    };
    setBlendInputs(updated);
  };

  const addBlend = () => {
    setBlendInputs([...blendInputs, { type: "", percentage: 0, quantity: 0 }]);
  };

  const removeBlend = (index) => {
    const updated = [...blendInputs];
    updated.splice(index, 1);
    setBlendInputs(updated);
  };

  useEffect(() => {
    let costUSD = 0;
    let costINR = 0;
    const exchangeRate = 84.80; // As per the image

    blendInputs.forEach((blend) => {
      const basePrice = ricePrices[blend.type] || 0;
      const freightCost = parseFloat(freight) || 0;
      const markupCost = (basePrice * (parseFloat(markup) || 0)) / 100;
      const processingCost = parseFloat(processingCharges) || 0;

      const pricePerMT = basePrice + freightCost + markupCost + processingCost;
      costUSD += pricePerMT * (blend.quantity || 0) / exchangeRate;
      costINR += pricePerMT * (blend.quantity || 0);
    });

    setTotalCost({ USD: costUSD.toFixed(2), INR: costINR.toFixed(2) });
  }, [blendInputs, freight, markup, processingCharges, ricePrices]);

  return (
    <div className="max-w-4xl mt-10 mx-auto p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Rice Price Calculator</h1>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Filter by Rice Type</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 border rounded-md bg-gray-50 focus:ring-2 focus:ring-green-500"
        >
          <option value="All">All</option>
          <option value="Basmati">Basmati Only</option>
          <option value="NonBasmati">Non-Basmati Only</option>
        </select>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Rice Blends</h2>
        {blendInputs.map((blend, index) => (
          <div key={index} className="flex flex-wrap gap-4 mb-4 items-end bg-gray-50 p-4 rounded-md">
            <div className="flex-1 min-w-[200px]">
              <label className="block mb-1 font-medium text-gray-600">Rice Type</label>
              <select
                value={blend.type}
                onChange={(e) => handleBlendChange(index, "type", e.target.value)}
                className="w-full p-2 border rounded-md bg-white"
              >
                <option value="">Select Type</option>
                {filteredRiceTypes.map((type, idx) => (
                  <option key={idx} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-1/4 min-w-[120px]">
              <label className="block mb-1 font-medium text-gray-600">Blend %</label>
              <input
                type="number"
                value={blend.percentage}
                onChange={(e) => handleBlendChange(index, "percentage", e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="e.g. 50"
                min="0"
                max="100"
              />
            </div>

            <div className="w-1/4 min-w-[120px]">
              <label className="block mb-1 font-medium text-gray-600">Quantity (MT)</label>
              <input
                type="number"
                value={blend.quantity}
                onChange={(e) => handleBlendChange(index, "quantity", e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="e.g. 10"
                min="0"
              />
            </div>

            {blendInputs.length > 1 && (
              <button
                onClick={() => removeBlend(index)}
                className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          onClick={addBlend}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-2"
        >
          ➕ Add Another Rice Type
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">⚙️ Additional Costs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block mb-1 font-medium text-gray-600">Freight (Per MT)</label>
            <input
              type="number"
              value={freight}
              onChange={(e) => setFreight(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="e.g. 30"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-600">Markup (%)</label>
            <input
              type="number"
              value={markup}
              onChange={(e) => setMarkup(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="e.g. 10"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-600">Processing Charges (Per MT)</label>
            <input
              type="number"
              value={processingCharges}
              onChange={(e) => setProcessingCharges(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="e.g. 15"
            />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Currency</label>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 border rounded-md bg-gray-50 focus:ring-2 focus:ring-green-500"
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
        </select>
      </div>

      <div className="bg-green-50 p-6 rounded-lg text-center">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">💰 Total Estimated Cost</h2>
        <p className="text-3xl font-bold text-green-700">
          {currency === "USD" ? `$${totalCost.USD}` : `₹${totalCost.INR}`}
        </p>
        {lastUpdated && (
          <p className="text-sm text-gray-500 mt-2">
            (Prices last updated: {new Date(lastUpdated).toLocaleTimeString()})
          </p>
        )}
      </div>
    </div>
  );
};

export default RiceCalculator;