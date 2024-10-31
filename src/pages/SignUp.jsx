// Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [ration, setRation] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    if (!name || !mobile || !email || !otp) {
      setError('All fields except Ration Card Number are required.');
      return false;
    }
    if (!/^\d{10}$/.test(mobile)) {
      setError('Please enter a valid 10-digit mobile number.');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    setError('');
    return true;
  };

  const sendOtp = () => {
    if (!mobile) {
      setError('Please enter a mobile number to receive an OTP.');
      return;
    }
    // Simulate sending OTP
    setOtpSent(true);
    alert(`OTP sent to ${mobile}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      alert('Signup successful!');
      navigate('/');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xs p-6 bg-white rounded shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-center">Signup</h2>
        {error && <p className="mb-4 text-sm text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="block mb-2 font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="ration" className="block mb-2 font-bold">
            Ration Card Number (optional)
          </label>
          <input
            type="text"
            id="ration"
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none"
            value={ration}
            onChange={(e) => setRation(e.target.value)}
          />
          <label htmlFor="mobile" className="block mb-2 font-bold">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobile"
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <label htmlFor="email" className="block mb-2 font-bold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={sendOtp}
            className="w-full p-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Send OTP
          </button>
          <label htmlFor="otp" className="block mb-2 font-bold">
            OTP
          </label>
          <input
            type="text"
            id="otp"
            className="w-full p-2 mb-6 border border-gray-300 rounded focus:outline-none"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full p-2 text-white bg-green-500 rounded hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
