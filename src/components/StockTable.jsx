import React, { useState } from "react";

const stockData = {
  Salem: [
    { shop: "Salem Ration Shop", rice: 200, wheat: 150, sugar: 100, oil: 50, salt: 30 },
    { shop: "Mettur Ration Shop", rice: 180, wheat: 130, sugar: 90, oil: 40, salt: 25 },
  ],
  Dharmapuri: [
    { shop: "Dharmapuri Ration Shop", rice: 210, wheat: 160, sugar: 110, oil: 60, salt: 35 },
  ],
};

const StockTable = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [shops, setShops] = useState([]);

  const handleDistrictChange = (e) => {
    const district = e.target.value;
    setSelectedDistrict(district);
    setShops(stockData[district] || []);
  };

  return (
    <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">Ration Shop Stock Availability</h1>

      <label htmlFor="district" className="block text-lg font-medium mb-2">
        Select District:
      </label>
      <select
        id="district"
        value={selectedDistrict}
        onChange={handleDistrictChange}
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
      >
        <option value="">-- Select District --</option>
        {Object.keys(stockData).map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
      </select>

      {shops.length > 0 && (
        <table className="w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 bg-green-500 text-white">Shop Name</th>
              <th className="border border-gray-300 p-2 bg-green-500 text-white">Rice (kg)</th>
              <th className="border border-gray-300 p-2 bg-green-500 text-white">Wheat (kg)</th>
              <th className="border border-gray-300 p-2 bg-green-500 text-white">Sugar (kg)</th>
              <th className="border border-gray-300 p-2 bg-green-500 text-white">Oil (litre)</th>
              <th className="border border-gray-300 p-2 bg-green-500 text-white">Salt (kg)</th>
            </tr>
          </thead>
          <tbody>
            {shops.map((shop, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{shop.shop}</td>
                <td className="border border-gray-300 p-2">{shop.rice}</td>
                <td className="border border-gray-300 p-2">{shop.wheat}</td>
                <td className="border border-gray-300 p-2">{shop.sugar}</td>
                <td className="border border-gray-300 p-2">{shop.oil}</td>
                <td className="border border-gray-300 p-2">{shop.salt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StockTable;
