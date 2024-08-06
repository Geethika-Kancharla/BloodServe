import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showImage, setShowImage] = useState(false);
  const learnRef = useRef(null);
  const testimonialsRef = useRef(null); // Ref for Testimonials section

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  const scrollToLearn = () => {
    learnRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTestimonials = () => {
    testimonialsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center bg-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center w-full p-4 bg-white border-b border-gray-300 shadow-md">
        <div className="flex items-center">
          <img src="/assets/logo.jpg" alt="Logo" className="h-12" />
        </div>
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-red-600 font-bold text-lg hover:text-red-400 transition">Home</a>
          </li>
          <li>
            <button onClick={scrollToLearn} className="text-red-600 font-bold text-lg hover:text-red-400 transition">
              Learn
            </button>
          </li>
          <li>
            <button onClick={scrollToTestimonials} className="text-red-600 font-bold text-lg hover:text-red-400 transition">
              Testimonials
            </button>
          </li>
          <li>
            <a href="/login" className="text-red-600 font-bold text-lg hover:text-red-400 transition">Login</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen bg-white flex items-center justify-center">
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-4">
          {/* Left Side */}
          <div className={`text-center md:text-left md:w-1/2 md:pr-8 ${showImage ? 'animate-flow-left' : 'opacity-0'}`}>
            <h1 className="text-5xl font-bold text-red-600 mb-3 ml-4">BloodServe</h1>
            <p className="text-2xl text-gray-800 mb-4 ml-4">Save Lives, Donate Blood</p>
            <p className="text-lg text-gray-600 mb-4 ml-4">
              We are dedicated to making the process of donating blood easy and impactful. Join us in saving lives through our simple and effective donation system.
            </p>
            {/* Call-to-Action Buttons */}
            <div className="ml-4">
              <Link to="/register">
                <button className="bg-red-600 text-white px-4 py-2 rounded-md mr-4 hover:bg-red-700 transition">
                  Register Now
                </button>
              </Link>
              <button onClick={scrollToLearn} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition">
                Learn More
              </button>
            </div>
            {/* Key Statistics */}
            <div className="mt-6 ml-4">
              <p className="text-lg text-gray-600">
                <strong>1 pint</strong> of blood can save <strong>3 lives</strong>.
              </p>
              <p className="text-lg text-gray-600">
                <strong>Every 2 seconds</strong>, someone needs blood.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className={`md:w-1/2 flex justify-center md:pl-8 ${showImage ? 'animate-flow-right' : 'opacity-0'}`}>
            <img
              src="/assets/hero1.png"
              alt="Hero"
              className="w-[430px] h-[250px] object-cover"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* About Donation Section */}
      <section ref={learnRef} className="w-11/12 max-w-screen-xl my-8 text-center">
        <h2 className="text-4xl text-red-500 mb-6">Learn About Blood Donation</h2>
        <div className="flex flex-wrap justify-between items-center mt-6">
          <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
            <img src="/assets/blood-donation.jpg" alt="Blood Donation" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 text-gray-800">
            <p className="text-lg mb-4">One Blood Donation can save up to Three Lives</p>
            <table className="w-full border-collapse mb-4">
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

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="w-11/12 max-w-screen-xl my-8 text-center">
        <h2 className="text-4xl text-red-500 mb-6">What Our Donors Say</h2>
        <div className="flex flex-wrap justify-around">
          <div className="p-6 bg-white rounded-lg shadow-md max-w-xs m-4 border border-red-400">
            <img src="/assets/image2.png" alt="Donor 1" className="w-32 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold text-red-500">Geethika K</h3>
            <p className="text-gray-600">Social Media Influencer</p>
            <p className="text-gray-700 mt-4">
              "Donating blood has been an incredibly rewarding experience. Knowing that a simple act can save lives makes it all worthwhile. The process is smooth, and the staff is always supportive and professional."
            </p>
            <div className="flex justify-center mt-4">
              {/* Stars */}
              <span className="text-red-500">★★★★★</span>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md max-w-xs m-4 border border-red-400">
            <img src="/assets/image2.png" alt="Donor 2" className="w-32 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold text-red-500">Hamsapriya</h3>
            <p className="text-gray-600">Social Worker</p>
            <p className="text-gray-700 mt-4">
              "I've been donating blood for several years, and every time I'm reminded of the importance of giving back to the community. It's a small effort with a huge impact, and I'm proud to be a part of this life-saving mission."
            </p>
            <div className="flex justify-center mt-4">
              {/* Stars */}
              <span className="text-red-500">★★★★★</span>
            </div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md max-w-xs m-4 border border-red-400">
            <img src="/assets/image2.png" alt="Donor 3" className="w-32 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold text-red-500">Deepa Rani</h3>
            <p className="text-gray-600">Sports Person</p>
            <p className="text-gray-700 mt-4">
              "The experience of donating blood is always smooth and hassle-free. The staff is compassionate and makes sure you're comfortable throughout the process. It's amazing to think that my donation can help someone in need."
            </p>
            <div className="flex justify-center mt-4">
              {/* Stars */}
              <span className="text-red-500">★★★★★</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full p-4 bg-gray-800 text-white text-center">
        &copy; {new Date().getFullYear()} BloodServe. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
