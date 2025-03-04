import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_URL } from '../api/config';

const Edit = () => {
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

    const { id } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            axios.get(`${API_URL}/getById/${id}`)
                .then(response => {
                    const data = response.data;
                    setFormData({
                        fullname: data.fullname || '',
                        email: data.email || '',
                        password: data.password || '',
                        gender: data.gender || '',
                        phonenumber: data.phonenumber || '',
                        age: data.age || '',
                        bloodgroup: data.bloodgroup || '',
                        address: data.address || ''
                    });
                })
                .catch(error => console.error(error));
        }
    }, [id]);

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${API_URL}/update/${id}`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // Handle the plain text response correctly
            if (response.status === 200) {
                setMessage(response.data); // This will be "Edited"
                toast.success('Updated successfully.');
                navigate("/admin-page");
            } else {
                throw new Error('Update failed. Please try again.');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setMessage(error.response.data.message || 'Update failed. Please try again.');
            } else {
                setMessage('Update failed. Please try again.');
            }
            toast.error('Update failed. Please try again.'); // Show error toast
        }
    };



    return (
        <div className="flex justify-center items-center min-h-screen bg-red-50 p-4">
            <div className="w-full max-w-5xl bg-white p-6 md:p-8 rounded-lg shadow-md border border-red-200">
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-red-500">Edit Donor</h2>
                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1">Full Name:</label>
                            <input
                                type="text"
                                name="fullname"
                                placeholder="Enter your full name"
                                value={formData.fullname}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-600 focus:bg-gray-50"
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
                                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:bg-gray-50 cursor-not-allowed"
                                disabled
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
                                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:bg-gray-50 cursor-not-allowed"
                                disabled
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
                                        checked={formData.gender === 'Male'}
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
                                        checked={formData.gender === 'Female'}
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
                                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:bg-gray-50"
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
                                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:bg-gray-50"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-1">Blood Group:</label>
                            <select
                                name="bloodgroup"
                                value={formData.bloodgroup}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:bg-gray-50"
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
                                placeholder="Enter your city"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border-b border-gray-300 focus:outline-none focus:bg-gray-50"
                                required
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-fit bg-red-500 text-white py-3 px-4 rounded-md hover:bg-red-600 transition duration-200"
                    >
                        Update
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        Back to admin page{' '}
                        <Link to="/admin-page" className="text-red-500 hover:underline">
                            Click here
                        </Link>
                    </p>
                </div>
                {message && (
                    <div className="mt-4 text-center text-red-500">
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Edit;
