// PendingProducts.js
import React, { useState } from 'react';

const PendingProducts = () => {
  const [rationNumber, setRationNumber] = useState('');
  const [pendingProducts, setPendingProducts] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const rationData = {
    "12345": {
      "January": [{ product: "Rice", status: "Pending" }, { product: "Sugar", status: "Received" }],
      "February": [{ product: "Wheat", status: "Pending" }, { product: "Oil", status: "Pending" }]
    },
    "67890": {
      "January": [{ product: "Rice", status: "Pending" }, { product: "Oil", status: "Received" }],
      "March": [{ product: "Sugar", status: "Pending" }, { product: "Dal", status: "Pending" }]
    }
  };

  const getPendingProducts = () => {
    const products = [];
    if (rationData[rationNumber]) {
      const months = rationData[rationNumber];
      for (let month in months) {
        months[month].forEach((item, index) => {
          if (item.status === "Pending") {
            products.push({ month, product: item.product, status: item.status, index });
          }
        });
      }
      setPendingProducts(products);
      setShowTable(true);
    } else {
      alert('No data found for this ration card number.');
    }
  };

  const markAsReceived = (month, index) => {
    rationData[rationNumber][month][index].status = "Received";
    alert("Product marked as received.");
    getPendingProducts(); // Refresh table
  };

  return (
    <div className="container mx-auto bg-white p-4 shadow-lg rounded">
      <h2 className="text-center text-2xl text-gray-800">Ration Shop Tracker</h2>
      
      <div className="input-group mb-4">
        <label htmlFor="rationNumber" className="font-bold">Enter Ration Card Number</label>
        <input
          type="text"
          id="rationNumber"
          className="border border-gray-300 rounded p-2 w-full"
          placeholder="Enter your ration card number"
          value={rationNumber}
          onChange={(e) => setRationNumber(e.target.value)}
        />
      </div>

      <button className="btn w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={getPendingProducts}>
        Check Pending Products
      </button>

      {showTable && (
        <div className="table-container mt-4">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 bg-blue-600 text-white p-2">Month</th>
                <th className="border border-gray-300 bg-blue-600 text-white p-2">Product</th>
                <th className="border border-gray-300 bg-blue-600 text-white p-2">Status</th>
                <th className="border border-gray-300 bg-blue-600 text-white p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingProducts.map(({ month, product, status, index }) => (
                <tr key={`${month}-${product}`}>
                  <td className="border border-gray-300 p-2 text-center">{month}</td>
                  <td className="border border-gray-300 p-2 text-center">{product}</td>
                  <td className="border border-gray-300 p-2 text-center">{status}</td>
                  <td className="border border-gray-300 p-2 text-center">
                    <button
                      className="bg-green-600 text-white rounded px-2 py-1 hover:bg-green-700"
                      onClick={() => markAsReceived(month, index)}
                    >
                      Mark as Received
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PendingProducts;
