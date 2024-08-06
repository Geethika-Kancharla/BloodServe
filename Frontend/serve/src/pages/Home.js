import React, { useEffect, useState, useRef } from 'react';

const Home = () => {
  const [showImage, setShowImage] = useState(false);
  const learnRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  const scrollToLearn = () => {
    learnRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center w-full p-4 bg-white border-b border-gray-300 shadow-md">
        <div className="flex items-center">
          <img src="/assets/logo.jpg" alt="Logo" className="h-12" />
        </div>
        <ul className="flex space-x-4 md:space-x-6">
          <li><a href="/" className="text-red-600 font-bold text-sm md:text-lg hover:text-red-400 transition">Home</a></li>
          <li><button onClick={scrollToLearn} className="text-red-600 font-bold text-sm md:text-lg hover:text-red-400 transition">Learn</button></li>
          <li><a href="/register" className="text-red-600 font-bold text-sm md:text-lg hover:text-red-400 transition">Register</a></li>
          <li><a href="/login" className="text-red-600 font-bold text-sm md:text-lg hover:text-red-400 transition">Login</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen bg-white flex items-center justify-center px-4">
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
          {/* Left Side */}
          <div className={`text-center md:text-left md:w-1/2 ${showImage ? 'animate-flow-left' : 'opacity-0'}`}>
            <h1 className="text-3xl md:text-5xl font-bold text-red-400 mb-3">BloodServe</h1> 
            <p className="text-lg md:text-2xl text-gray-800 mb-4">Save Lives, Donate Blood</p>
            <p className="text-sm md:text-lg text-gray-600 mb-4">We are dedicated to making the process of donating blood easy and impactful. Join us in saving lives through our simple and effective donation system.</p>
          </div>

          {/* Right Side */}
          <div className={`md:w-1/2 flex justify-center ${showImage ? 'animate-flow-right' : 'opacity-0'}`}>
            <img 
              src="/assets/hero-image.png" 
              alt="Hero" 
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Donation Section */}
      <section ref={learnRef} className="w-11/12 max-w-screen-xl my-8 text-center px-4">
        <h2 className="text-3xl md:text-4xl text-red-400 mb-6">LEARN ABOUT DONATION</h2>
        <div className="flex flex-wrap justify-between items-center mt-6">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img src="/assets/blood-donation.jpg" alt="Blood Donation" className="w-full h-auto max-w-xs md:max-w-none" />
          </div>
          <div className="w-full md:w-1/2 text-gray-800">
            <p className="text-base md:text-lg mb-4">One Blood Donation can save up to Three Lives</p>
            <table className="w-full border-collapse mb-4 text-xs md:text-base">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Blood Type</th>
                  <th className="border border-gray-300 p-2">Donate Blood To</th>
                  <th className="border border-gray-300 p-2">Receive Blood From</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">A+</td>
                  <td className="border border-gray-300 p-2">A+ AB+</td>
                  <td className="border border-gray-300 p-2">A+ A- O+ O-</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">A-</td>
                  <td className="border border-gray-300 p-2">A+ A- AB+ AB-</td>
                  <td className="border border-gray-300 p-2">A- O-</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">O+</td>
                  <td className="border border-gray-300 p-2">O+ A+ B+ AB+</td>
                  <td className="border border-gray-300 p-2">O+ O-</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">O-</td>
                  <td className="border border-gray-300 p-2">O+ O- A+ A- B+ B- AB+ AB-</td>
                  <td className="border border-gray-300 p-2">O-</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">B+</td>
                  <td className="border border-gray-300 p-2">B+ AB+</td>
                  <td className="border border-gray-300 p-2">B+ B- O+ O-</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">B-</td>
                  <td className="border border-gray-300 p-2">B+ B- AB+ AB-</td>
                  <td className="border border-gray-300 p-2">B- O-</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">AB+</td>
                  <td className="border border-gray-300 p-2">AB+</td>
                  <td className="border border-gray-300 p-2">EVERYONE</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">AB-</td>
                  <td className="border border-gray-300 p-2">AB+ AB-</td>
                  <td className="border border-gray-300 p-2">AB- A- B- O-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 text-center bg-white border-t border-gray-300 mt-8">
        <p className="text-gray-600 text-sm md:text-base">© 2024 BloodServe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
