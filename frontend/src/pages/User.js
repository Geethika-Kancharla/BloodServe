import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import PieChart from '../components/PieChart';
import axios from 'axios';
import { API_URL } from '../api/config';

const User = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    requestorName: '',
    phoneNumber: '',
    email: '',
    bloodGroup: '',
    quantity: '',
    requiredDate: '',
    location: '',
    reason: '',
    comments: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.requestorName) newErrors.requestorName = 'Requestor\'s Name is required.';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required.';
    else if (!/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = 'Phone Number must be 10 digits.';
    if (!formData.email) newErrors.email = 'Email Address is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email Address is invalid.';
    if (!formData.bloodGroup) newErrors.bloodGroup = 'Blood Group is required.';
    if (!formData.quantity) newErrors.quantity = 'Quantity is required.';
    if (!formData.requiredDate) newErrors.requiredDate = 'Required Date is required.';
    if (!formData.location) newErrors.location = 'Hospital/Location is required.';
    if (!formData.reason) newErrors.reason = 'Reason for Request is required.';
    if (!formData.agree) newErrors.agree = 'You must agree to share your information.';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const userId = localStorage.getItem("userId");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post(`${API_URL}/request-forms/${userId}`, formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log('Request submitted successfully');
        setFormData({  
          requestorName: '',
          phoneNumber: '',
          email: '',
          bloodGroup: '',
          quantity: '',
          requiredDate: '',
          location: '',
          reason: '',
          comments: '',
          agree: false
        });
        setShowForm(false);

      } catch (error) {
        console.error('Error:', error);
        if (error.response && error.response.data) {
          setErrors({ ...errors, general: error.response.data.message || 'Request failed. Please try again.' });
        } else {
          setErrors({ ...errors, general: 'Request failed. Please try again.' });
        }
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center p-4">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          {/* Pie Chart Section */}
          <div className="w-full lg:w-full">
            <PieChart />
          </div>

          {/* Blood Request Form Section */}
          <div
            className={`fixed top-0 right-0 h-full z-50 bg-white shadow-lg rounded-lg transition-transform duration-300 ease-in-out transform ${showForm ? 'translate-x-0' : 'translate-x-full'
              } lg:w-1/2 lg:max-w-xl overflow-y-auto`}
            style={{ maxHeight: '100vh' }}
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              ✕
            </button>
            <h2 className="text-2xl font-semibold mb-6 text-red-600">Blood Request Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4 p-4">
              <div>
                <label className="block text-gray-700 font-medium">Requester's Name</label>
                <input
                  type="text"
                  name="requestorName"
                  value={formData.requestorName}
                  onChange={handleChange}
                  className={`w-full mt-1 p-2 border rounded-md focus:outline-none ${errors.requestorName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Enter your full name"
                />
                {errors.requestorName && <p className="text-red-500 text-sm">{errors.requestorName}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`w-full mt-1 p-2 border rounded-md focus:outline-none ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Enter your phone number"
                />
                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full mt-1 p-2 border rounded-md focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Blood Group Needed</label>
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  className={`w-full mt-1 p-2 border rounded-md focus:outline-none ${errors.bloodGroup ? 'border-red-500' : 'border-gray-300'
                    }`}
                >
                  <option value="">Select blood group</option>
                  <option value="A+">A+</option>
                  <option value="B+">B+</option>
                  <option value="AB+">AB+</option>
                  <option value="O+">O+</option>
                  <option value="A-">A-</option>
                  <option value="B-">B-</option>
                  <option value="AB-">AB-</option>
                  <option value="O-">O-</option>
                </select>
                {errors.bloodGroup && <p className="text-red-500 text-sm">{errors.bloodGroup}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Quantity Required</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className={`w-full mt-1 p-2 border rounded-md focus:outline-none ${errors.quantity ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Enter the number of units needed"
                />
                {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Required Date</label>
                <input
                  type="date"
                  name="requiredDate"
                  value={formData.requiredDate}
                  onChange={handleChange}
                  className={`w-full mt-1 p-2 border rounded-md focus:outline-none ${errors.requiredDate ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                {errors.requiredDate && <p className="text-red-500 text-sm">{errors.requiredDate}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Hospital/Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={`w-full mt-1 p-2 border rounded-md focus:outline-none ${errors.location ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Enter the hospital or location"
                />
                {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Reason for Request</label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  className={`w-full mt-1 p-2 border rounded-md focus:outline-none ${errors.reason ? 'border-red-500' : 'border-gray-300'
                    }`}
                  placeholder="Describe the reason for the request"
                ></textarea>
                {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Additional Comments</label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="Any other relevant information or instructions"
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className={`form-checkbox h-4 w-4 mt-1 mr-2 ${errors.agree ? 'border-red-500' : 'border-gray-300'
                    }`}
                />
                <label className="block text-gray-700 font-medium">
                  I agree to share my information.
                </label>
              </div>
              {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

              <button
                type="submit"
                className="w-full bg-red-600 text-white p-2 rounded-md font-medium"
              >
                Submit Request
              </button>
            </form>
          </div>

          {!showForm && (
            <div className="">
              <button
                onClick={() => setShowForm(true)}
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 ml-0"
              >
                Request Blood
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default User;
