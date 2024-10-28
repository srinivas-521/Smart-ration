// Home.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');

  const services = [
    {
      name: 'Ration Card Eligibility',
      imgSrc: 'https://assets.onecompiler.app/42wdykg42/42wdzf5p3/eligibility-icon-monochrome-simple-sign-from-common-tax-collection-eligibility-icon-for-logo-templates-web-design-and-infographics-2MT3NH6.jpg',
      link: '/rceligible',
    },
    {
      name: 'Distribution Center Details',
      imgSrc: 'https://assets.onecompiler.app/42sfsbbsv/42w66y443/download.png',
      link: '/distribution',
    },
    {
      name: 'Stock Availability',
      imgSrc: 'https://assets.onecompiler.app/42sfsbbsv/42w66y443/images%20(29).jpeg',
      link: '/stockavailability',
    },
    {
      name: 'Your Cart',
      imgSrc: 'https://assets.onecompiler.app/42wdykg42/42wdzf5p3/istockphoto-1328208418-612x612.jpg',
      link: '/pending',
    },
  ];

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover" style={{ backgroundImage: 'url(https://assets.onecompiler.app/42sfsbbsv/42szdj7c2/images%20(31).jpeg)' }}>
      {/* Header with Account Icon */}
      <div className="absolute top-5 right-5">
        <i
          className="fas fa-user-circle text-2xl cursor-pointer text-gray-700 hover:scale-110 transition-transform"
          onClick={() => navigate('/account')}
        />
      </div>

      <div className="w-full max-w-2xl p-6 bg-white bg-opacity-90 rounded-lg shadow-lg text-center">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">Smart Ration</h1>

        {/* Search Bar */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search for services..."
            className="p-2 w-full max-w-md border border-gray-300 rounded-lg"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="cursor-pointer text-center transition-transform transform hover:scale-105"
              onClick={() => navigate(service.link)}
            >
              <img
                src={service.imgSrc}
                alt={service.name}
                className="w-full h-auto rounded-lg"
              />
              <p className="mt-2 text-gray-700">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
