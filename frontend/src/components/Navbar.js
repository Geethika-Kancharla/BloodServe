import React, { useState, useRef, useEffect } from 'react';
import { IoLogOutOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ scrollToAbout, scrollToLearn }) => {
    const navigate = useNavigate();
    const loggedIn = localStorage.getItem("isLoggedIn");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const menuRef = useRef(null);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const role = localStorage.getItem('role');
    console.log(loggedIn);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('role');
        setIsMenuOpen(false);
        navigate('/');
    };

    return (
        <nav className="flex flex-col lg:flex-row justify-between items-center w-full p-4 bg-white border-b border-gray-300 shadow-md">
            <div className="flex items-center justify-between w-full lg:w-auto">
                <img src="/assets/logo.jpg" alt="BloodServe Logo" className="h-12" />
                <button
                    onClick={toggleNav}
                    className="lg:hidden text-red-600 hover:text-red-400 focus:outline-none"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            <ul className={`flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0 lg:mr-10 ${isNavOpen ? 'block' : 'hidden'} lg:flex`}>
                <li>
                    <Link to="/" className="text-red-600 font-bold text-2xl hover:text-red-400 transition">Home</Link>
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
                <li className="relative">
                    {
                        !loggedIn && <a href="/login" className="text-red-600 font-bold text-2xl hover:text-red-400 transition">Login</a>
                    }
                    {loggedIn && (
                        <div className='flex items-center'>
                            <div className='w-12 h-12 rounded-full flex items-center justify-center bg-green-700 hover:bg-blue-400 cursor-pointer' onClick={handleClick}>
                                <img src='/assets/profile.jpg' alt="Profile" />
                            </div>
                            {isMenuOpen && (
                                <div ref={menuRef} className="absolute bg-white rounded shadow-lg z-50 p-4 mt-36 -ml-8 lg:-ml-20 w-48">
                                    <div className="flex flex-col items-start gap-4">
                                        <div className='flex flex-row space-x-2'>
                                            <button 
                                                onClick={handleLogout}
                                                className="flex items-center space-x-2 text-green-500 pl-6 hover:bg-white hover:text-red-600"
                                            >
                                                <span>Logout</span>
                                                <IoLogOutOutline className="text-lg" />
                                            </button>
                                        </div>
                                        <div className="pl-6">
                                            {role === 'ADMIN' && (
                                                <Link to="/admin-page" className="block py-2 text-black hover:font-semibold">
                                                    ADMIN
                                                </Link>
                                            )}
                                            {role === 'USER' && (
                                                <Link to="/user-page" className="block py-2 text-black hover:font-semibold">
                                                    USER
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </li>
            </ul>
        </nav >
    );
};

export default Navbar;