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

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullname) newErrors.fullname = 'Full Name is required.';
        if (!formData.email) newErrors.email = 'Email is required.';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid.';
        if (!formData.password) newErrors.password = 'Password is required.';
        if (!formData.gender) newErrors.gender = 'Gender is required.';
        if (!formData.phonenumber) newErrors.phonenumber = 'Phone Number is required.';
        else if (!/^\d{10}$/.test(formData.phonenumber)) newErrors.phonenumber = 'Phone Number must be 10 digits.';
        if (!formData.age) newErrors.age = 'Age is required.';
        else if (isNaN(formData.age) || formData.age <= 0) newErrors.age = 'Age must be a positive number.';
        if (!formData.bloodgroup) newErrors.bloodgroup = 'Blood Group is required.';
        if (!formData.address) newErrors.address = 'Address is required.';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
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
        }
    };

    return (
        <>
            <Navbar scrollToAbout={scrollToAbout} scrollToLearn={scrollToLearn}/>
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
                                    className={`w-full px-4 py-2 border-b-2 focus:outline-none ${errors.fullname ? 'border-red-500' : 'border-gray-300'}`}
                                    required
                                />
                                {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border-b-2 focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                    required
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Password:</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border-b-2 focus:outline-none ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                                    required
                                />
                                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
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
                                {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Phone Number:</label>
                                <input
                                    type="tel"
                                    name="phonenumber"
                                    placeholder="Enter your phone number"
                                    value={formData.phonenumber}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border-b-2 focus:outline-none ${errors.phonenumber ? 'border-red-500' : 'border-gray-300'}`}
                                    required
                                />
                                {errors.phonenumber && <p className="text-red-500 text-sm">{errors.phonenumber}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Age:</label>
                                <input
                                    type="number"
                                    name="age"
                                    placeholder="Enter your age"
                                    value={formData.age}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border-b-2 focus:outline-none ${errors.age ? 'border-red-500' : 'border-gray-300'}`}
                                    required
                                />
                                {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Blood Group:</label>
                                <select
                                    name="bloodgroup"
                                    value={formData.bloodgroup}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border-b-2 focus:outline-none ${errors.bloodgroup ? 'border-red-500' : 'border-gray-300'}`}
                                    required
                                >
                                    <option value="">Select your blood group</option>
                                    <option value="A+">A+</option>
                                    <option value="B+">B+</option>
                                    <option value="AB+">AB+</option>
                                    <option value="O+">O+</option>
                                    <option value="A-">A-</option>
                                    <option value="B-">B-</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O-">O-</option>
                                </select>
                                {errors.bloodgroup && <p className="text-red-500 text-sm">{errors.bloodgroup}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-1">Address:</label>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Enter your address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border-b-2 focus:outline-none ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                                    required
                                />
                                {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white p-2 rounded-md font-medium"
                        >
                            Register
                        </button>
                        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
