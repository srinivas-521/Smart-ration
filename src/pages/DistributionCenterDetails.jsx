// DistributionCenterDetails.jsx
import React from 'react';

const DistributionCenterDetails = () => {
  const centerData = {
    Coimbatore: {
      distributionCenters: [
        {
          name: 'Coimbatore Central DC',
          address: 'Central Coimbatore, Coimbatore',
          products: [
            { item: 'Rice', price: '₹30/kg' },
            { item: 'Wheat', price: '₹25/kg' },
          ],
          openingDates: '1st to 15th of each month',
          image: 'https://assets.onecompiler.app/42wdykg42/42wdykkeq/lucknow-19-june-2022-india-260nw-2321502471.webp',
        },
        {
          name: 'Peelamedu DC',
          address: 'Peelamedu, Coimbatore',
          products: [
            { item: 'Sugar', price: '₹20/kg' },
            { item: 'Oil', price: '₹100/litre' },
          ],
          openingDates: '1st to 15th of each month',
          image: 'https://assets.onecompiler.app/42wdykg42/42wdykkeq/MinorMillets.webp',
        },
      ],
      rationCenters: [
        {
          name: 'Ration Centre A',
          address: 'Area A, Coimbatore',
          products: [
            { item: 'Salt', price: '₹10/kg' },
            { item: 'Dal', price: '₹60/kg' },
          ],
          openingDates: '5th to 20th of each month',
          image: 'https://assets.onecompiler.app/42wdykg42/42wdykkeq/61246807122f5c439d752ab349e9693b1668865526587575_original.webp',
        },
      ],
    },
    Krishnagiri: {
      distributionCenters: [
        {
          name: 'Krishnagiri Main DC',
          address: 'Main Road, Krishnagiri',
          products: [
            { item: 'Rice', price: '₹32/kg' },
            { item: 'Cooking Oil', price: '₹95/litre' },
          ],
          openingDates: '1st to 10th of each month',
          image: 'https://assets.onecompiler.app/42wdykg42/42wdykkeq/ration.jpg',
        },
      ],
      rationCenters: [
        {
          name: 'Ration Centre Hosur',
          address: 'Area C, Krishnagiri',
          products: [
            { item: 'Dal', price: '₹55/kg' },
            { item: 'Salt', price: '₹12/kg' },
          ],
          openingDates: '10th to 25th of each month',
          image: 'https://assets.onecompiler.app/42wdykg42/42wdykkeq/GettyImages_178241808__1_.avif',
        },
      ],
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Available Distribution and Ration Centres</h1>

      {/* Centered container for cards */}
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(centerData).map(([district, centers]) => (
            <div key={district} className="w-full">
              <h2 className="text-xl font-semibold mt-4">{district}</h2>
              {[...centers.distributionCenters, ...centers.rationCenters].map((center) => (
                <div key={center.name} className="bg-white rounded-lg shadow-md p-4 mb-4">
                  <img className="w-full h-48 object-cover rounded-md mb-2" src={center.image} alt={center.name} />
                  <h3 className="text-lg font-bold">{center.name}</h3>
                  <p>{center.address}</p>
                  <p className="mt-2">Opening Dates: {center.openingDates}</p>
                  <p className="mt-2">Products:</p>
                  <ul className="list-disc pl-5">
                    {center.products.map((product) => (
                      <li key={product.item}>
                        {product.item} - {product.price}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DistributionCenterDetails;
