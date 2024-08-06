import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home'; // Import the Home component

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} /> {/* Display Home component at root */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
      </Routes>
    </div>
  );
}

// A simple 404 component
const NotFound = () => (
  <div className="flex justify-center items-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-gray-700">404 - Page Not Found</h1>
  </div>
);

export default App;
