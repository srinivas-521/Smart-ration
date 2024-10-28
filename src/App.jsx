// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Home from './pages/Home';
import DistributionCenterDetails from './pages/DistributionCenterDetails';
import StockAvailability from './pages/StockAvailabilty';
import PendingProducts from './pages/Pending';
import EligibilityCheck from './pages/Eligibility';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className='bg-[#f0f0f0] min-h-screen'>
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/home" /> : <Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" />} />
        <Route path="/distribution" element={<DistributionCenterDetails />} />
        <Route path="/stockavailability" element={<StockAvailability />} />
        <Route path="/pending" element={<PendingProducts />} />
        <Route path="/rceligible" element={<EligibilityCheck />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
