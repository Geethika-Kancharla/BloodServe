import React from 'react';
import Navbar from '../components/Navbar';
import PieChart from '../components/PieChart';

const User = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center p-4">
        <div className="w-full max-w-5xl">
          <PieChart />
        </div>
      </div>
    </>
  );
};

export default User;