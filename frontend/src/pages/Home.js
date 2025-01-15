import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Table from '../components/Table';

const Home = () => {
    const [showImage, setShowImage] = useState(false);
    const learnRef = useRef(null);
    const aboutRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImage(true);
        }, 1000); 

        return () => clearTimeout(timer);
    }, []);

    const scrollToLearn = () => {
        learnRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col items-center bg-white">
            
            <Navbar scrollToAbout={scrollToAbout} scrollToLearn={scrollToLearn} />

            <section className="relative w-full h-screen bg-white flex items-center justify-center overflow-x-hidden">
                <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-4">
                
                    <div className={`text-center md:text-left md:w-1/2 md:pr-8 ${showImage ? 'animate-flow-left' : 'opacity-0'}`}>
                        <h1 className="text-5xl font-bold text-red-600 mb-3 ml-4">BloodServe</h1>
                        <p className="text-2xl text-gray-800 mb-4 ml-4">Save Lives, Donate Blood</p>
                        <p className="text-lg text-gray-600 mb-4 ml-4">
                            We are dedicated to making the process of donating blood easy and impactful. Join us in saving lives through our simple and effective donation system.
                        </p>
                        
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
                    
                        <div className="mt-6 ml-4">
                            <p className="text-lg text-gray-600">
                                <strong>1 pint</strong> of blood can save <strong>3 lives</strong>.
                            </p>
                            <p className="text-lg text-gray-600">
                                <strong>Every 2 seconds</strong>, someone needs blood.
                            </p>
                        </div>
                    </div>

                    
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

        
            <section ref={learnRef} className="w-11/12 max-w-screen-xl my-36 text-center">
                <h2 className="text-4xl text-red-500 mb-6">Learn About Blood Donation</h2>
                <div className="flex flex-wrap justify-center items-center mt-6 ">
                    {/* <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                        <img src="/assets/blood-donation.jpg" alt="Blood donation process" className="w-72 h-auto" />
                    </div> */}
                    <div className="w-full md:w-1/2 text-gray-800">
                        <p className="text-lg mb-4">One Blood Donation can save up to Three Lives</p>
                        <Table />
                    </div>
                </div>
            </section>

    
            <section ref={aboutRef} className="w-11/12 max-w-screen-xl my-8 text-center">
                <h2 className="text-4xl text-red-500 mb-6">Join Us in Saving Lives</h2>
                <div className="flex flex-col md:flex md:flex-row md:space-x-2 lg:space-x-6 justify-between items-center mt-6">

                    <div className="w-full md:w-1/3 flex-grow flex flex-col items-center text-center mb-6 md:mb-0 px-4 bg-white shadow-lg rounded-lg p-8">
                        <img src="/assets/i1.png" alt="Blood test" className="w-full h-40 object-cover mb-4" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-red-500 mb-4">Become a donor</h3>
                            <p className="text-lg text-gray-800">
                                By donating blood, you can help ensure a stable supply for those in need. Your donation can be a lifeline for someone in an emergency.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 flex-grow flex flex-col items-center text-center mb-6 md:mb-0 px-4 bg-white shadow-lg rounded-lg p-8">
                        <img src="/assets/i2.png" alt="Blood test" className="w-full h-40 object-cover mb-4" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-red-500 mb-4">Why give blood?</h3>
                            <p className="text-lg text-gray-800">
                                Regular blood donations are crucial in maintaining a healthy and reliable blood supply. Your consistent support can make a big difference.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 flex-grow flex flex-col items-center text-center mb-6 md:mb-0 px-4 bg-white shadow-lg rounded-lg p-8">
                        <img src="/assets/i3.png" alt="Blood test" className="w-full h-40 object-cover mb-4" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-red-500 mb-4">How donation helps?</h3>
                            <p className="text-lg text-gray-800">
                                Every blood type is needed to meet the diverse needs of patients. Donating blood can help people of all ages and conditions.
                            </p>
                        </div>
                    </div>

                </div>

            </section>

        
            <footer className="w-full p-4 bg-gray-800 text-white text-center">
                &copy; {new Date().getFullYear()} BloodServe. All rights reserved.
            </footer>
        </div>
    );
};

export default Home;