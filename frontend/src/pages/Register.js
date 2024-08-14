import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Register = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        gender: '',
        phonenumber: '',
        age: '',
        bloodgroup: '',
        address: ''
    });

    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/register', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            setMessage(response.data.message);
            navigate("/user-page");

        } catch (error) {
            if (error.response && error.response.data) {
                setMessage(error.response.data.message || 'Registration failed. Please try again.');
            } else {
                setMessage('Registration failed. Please try again.');
            }
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen bg-red-50 p-2">
                <div className="w-full max-w-5xl bg-white p-6 md:p-8 rounded-lg shadow-md border border-red-200">
                    <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-red-500">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Full Name:</label>
                                <input
                                    type="text"
                                    name="fullname"
                                    placeholder="Enter your full name"
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:bg-gray-100"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:bg-gray-100"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:bg-gray-100"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Gender:</label>
                                <div className="flex space-x-4">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                            onChange={handleChange}
                                            className="mr-1"
                                        />
                                        Male
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="Female"
                                            onChange={handleChange}
                                            className="mr-1"
                                        />
                                        Female
                                    </label>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Phone Number:</label>
                                <input
                                    type="text"
                                    name="phonenumber"
                                    placeholder="Enter your phone number"
                                    value={formData.phonenumber}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:bg-gray-100"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Age:</label>
                                <input
                                    type="number"
                                    name="age"
                                    placeholder="Enter your age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:bg-gray-100"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Blood Group:</label>
                                <select
                                    name="bloodgroup"
                                    value={formData.bloodgroup}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none"
                                    required
                                >
                                    <option value="" disabled>Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">City:</label>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Enter your City"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:bg-gray-100"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-200"
                        >
                            Register
                        </button>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <a href="/login" className="text-red-500 hover:underline">
                                Login
                            </a>
                        </p>
                    </div>
                    {message && (
                        <div className="mt-4 text-center text-red-500">
                            {message}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Register;
