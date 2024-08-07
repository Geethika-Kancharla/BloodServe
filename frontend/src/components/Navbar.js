import React from 'react'

const Navbar = ({ scrollToAbout, scrollToLearn }) => {
    return (
        <nav className="flex justify-between items-center w-full p-4 bg-white border-b border-gray-300 shadow-md">
            <div className="flex items-center">
                <img src="/assets/logo.jpg" alt="BloodServe Logo" className="h-12" />
            </div>
            <ul className="flex space-x-6 pr-20">
                <li>
                    <a href="/" className="text-red-600 font-bold text-2xl hover:text-red-400 transition">Home</a>
                </li>
                <li>
                    <button onClick={scrollToLearn} className="text-red-600 font-bold text-2xl hover:text-red-400 transition">
                        Learn
                    </button>
                </li>
                <li>
                    <button onClick={scrollToAbout} className="text-red-600 font-bold text-2xl hover:text-red-400 transition">
                        Our Mission
                    </button>
                </li>
                <li>
                    <a href="/login" className="text-red-600 font-bold text-2xl hover:text-red-400 transition">Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar