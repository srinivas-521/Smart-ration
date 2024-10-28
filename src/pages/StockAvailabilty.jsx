// StockAvailability.jsx
import React, { useState } from 'react';

const StockAvailability = () => {
  const stockData = {
    "Salem": [
      { shop: "Salem Ration Shop", rice: 200, wheat: 150, sugar: 100, oil: 50, salt: 30 },
      { shop: "Mettur Ration Shop", rice: 180, wheat: 130, sugar: 90, oil: 40, salt: 25 },
    ],
    "Dharmapuri": [
      { shop: "Dharmapuri Ration Shop", rice: 210, wheat: 160, sugar: 110, oil: 60, salt: 35 },
      { shop: "Anasagaram Ration Shop", rice: 190, wheat: 140, sugar: 95, oil: 45, salt: 28 },
    ],
    "Krishnagiri": [
      { shop: "Rasuveethi Ration Shop", rice: 220, wheat: 170, sugar: 120, oil: 70, salt: 40 },
      { shop: "Lakshmipuram Ration Shop", rice: 200, wheat: 150, sugar: 100, oil: 55, salt: 32 },
      { shop: "Bargur Ration Shop", rice: 205, wheat: 160, sugar: 110, oil: 52, salt: 29 },
      { shop: "Berigai Ration Shop", rice: 210, wheat: 155, sugar: 105, oil: 50, salt: 28 },
      { shop: "Hosur Ration Shop", rice: 215, wheat: 165, sugar: 115, oil: 54, salt: 30 },
      { shop: "Rayakottai Road Ration Shop", rice: 200, wheat: 150, sugar: 100, oil: 55, salt: 32 },
      { shop: "Sholagiri Ration Shop", rice: 220, wheat: 160, sugar: 115, oil: 60, salt: 35 },
    ],
    "Vellore": [
      { shop: "Thiruvallore Ration Shop", rice: 190, wheat: 140, sugar: 90, oil: 50, salt: 30 },
      { shop: "Shop 8", rice: 180, wheat: 130, sugar: 80, oil: 45, salt: 25 },
    ],
    "Chennai": [
      { shop: "Shop 9", rice: 210, wheat: 160, sugar: 110, oil: 60, salt: 35 },
      { shop: "Shop 10", rice: 200, wheat: 150, sugar: 100, oil: 55, salt: 32 },
    ],
    "Karur": [
      { shop: "Shop 11", rice: 220, wheat: 170, sugar: 120, oil: 70, salt: 40 },
      { shop: "Shop 12", rice: 210, wheat: 160, sugar: 110, oil: 60, salt: 35 },
    ],
    "Coimbatore": [
      { shop: "Shop 13", rice: 200, wheat: 150, sugar: 100, oil: 55, salt: 32 },
      { shop: "Shop 14", rice: 190, wheat: 140, sugar: 90, oil: 50, salt: 30 },
    ],
    "Ariyalur": [
      { shop: "Shop 15", rice: 180, wheat: 130, sugar: 80, oil: 45, salt: 25 },
      { shop: "Shop 16", rice: 170, wheat: 120, sugar: 70, oil: 40, salt: 20 },
    ],
    "Cuddalore": [
      { shop: "Shop 17", rice: 210, wheat: 160, sugar: 110, oil: 60, salt: 35 },
      { shop: "Shop 18", rice: 200, wheat: 150, sugar: 100, oil: 55, salt: 32 },
    ],
    "Tiruvannamalai": [  // New Location
      { shop: "Tiruvannamalai Main Shop", rice: 200, wheat: 150, sugar: 100, oil: 60, salt: 30 },
      { shop: "Tiruvannamalai Sub Shop", rice: 180, wheat: 130, sugar: 90, oil: 45, salt: 25 },
    ],
    "Kanchipuram": [  // New Location
      { shop: "Kanchipuram Ration Shop", rice: 220, wheat: 170, sugar: 120, oil: 70, salt: 40 },
      { shop: "Kanchipuram Town Shop", rice: 210, wheat: 160, sugar: 110, oil: 55, salt: 32 },
    ],
  };

  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [filteredShops, setFilteredShops] = useState([]);

  const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
    setFilteredShops(district ? stockData[district] : []);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto max-w-md bg-white rounded-lg shadow-md p-5">
        <h1 className="text-xl font-bold text-center">Ration Shop Stock Availability</h1>
        <label htmlFor="district" className="block mt-4">Select District:</label>
        <select
          id="district"
          value={selectedDistrict}
          onChange={handleDistrictChange}
          className="w-full p-2 border border-gray-300 rounded mt-2"
        >
          <option value="">-- Select District --</option>
          {Object.keys(stockData).map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>

        {filteredShops.length > 0 && (
          <table className="mt-4 w-full border-collapse">
            <thead>
              <tr>
                <th className="p-2 border border-gray-300 bg-green-500 text-white">Shop Name</th>
                <th className="p-2 border border-gray-300 bg-green-500 text-white">Rice (kg)</th>
                <th className="p-2 border border-gray-300 bg-green-500 text-white">Wheat (kg)</th>
                <th className="p-2 border border-gray-300 bg-green-500 text-white">Sugar (kg)</th>
                <th className="p-2 border border-gray-300 bg-green-500 text-white">Oil (litre)</th>
                <th className="p-2 border border-gray-300 bg-green-500 text-white">Salt (kg)</th>
              </tr>
            </thead>
            <tbody>
              {filteredShops.map((shop) => (
                <tr key={shop.shop}>
                  <td className="p-2 border border-gray-300">{shop.shop}</td>
                  <td className="p-2 border border-gray-300">{shop.rice}</td>
                  <td className="p-2 border border-gray-300">{shop.wheat}</td>
                  <td className="p-2 border border-gray-300">{shop.sugar}</td>
                  <td className="p-2 border border-gray-300">{shop.oil}</td>
                  <td className="p-2 border border-gray-300">{shop.salt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default StockAvailability;
