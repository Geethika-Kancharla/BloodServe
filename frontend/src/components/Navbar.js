import React, { useState, useRef, useEffect } from 'react';
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = ({ scrollToAbout, scrollToLearn }) => {

    const loggedIn = localStorage.getItem("isLoggedIn");

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const role = localStorage.getItem('role');

    // Close dropdown if clicked outside
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
                <li className="relative">
                    {
                        !loggedIn && <a href="/login" className="text-red-600 font-bold text-2xl hover:text-red-400 transition">Login</a>
                    }
                    {loggedIn && (
                        <div className='flex items-center'>
                            <div className='w-12 h-12 rounded-full flex items-center justify-center bg-green-700 hover:bg-blue-400  cursor-pointer' onClick={handleClick}>
                                <img src='/assets/profile.jpg' />
                            </div>
                            {isMenuOpen && (
                                <div ref={menuRef} className="absolute bg-white rounded shadow-lg z-50 p-4 mt-40 -ml-5 w-48 mr-28 lg:mt-40 lg:mr-24 lg:-ml-20">
                                    <div className="flex flex-col items-start gap-8 mt-2">
                                        <div className='flex flex-row space-x-2'>
                                            <Link to="/logout">
                                                <button className="text-green-500 pl-6 hover:bg-white hover:text-red-600">Logout</button>
                                            </Link>
                                            <Link to="/logout">
                                                <button className="text-green-500 pl-2 hover:bg-white hover:text-red-600 text-lg">
                                                    <IoLogOutOutline />
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="pl-6">
                                            {role === 'ADMIN' && (
                                                <Link to="/admin-page" className="block  py-2 text-black focus:outline-none focus:font-bold hover:font-semibold">
                                                    ADMIN
                                                </Link>
                                            )}
                                            {role === 'USER' && (
                                                <Link to="/user-page" className="block  py-2 text-black focus:outline-none focus:font-bold hover:font-semibold">
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
        </nav>
    );
};

export default Navbar;
