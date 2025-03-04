import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { API_URL } from '../api/config';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false, // Add rememberMe to the state
  });

  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/get-role`, loginData, { withCredentials: true });

      // Extract role and id from the response
      const { role, id } = response.data;

      setMessage(response.data.message);
      if (role && id) {
        // Store role and id in localStorage
        localStorage.setItem('role', role);
        localStorage.setItem('userId', id); // Store the user ID
        localStorage.setItem('isLoggedIn', 'true'); // Set login state

        console.log(localStorage.getItem('isLoggedIn'));
        console.log(localStorage.getItem('userId'));


        if (role === 'ADMIN') {
          navigate('/admin-page');
        } else if (role === 'USER') {
          navigate('/user-page');
        }
      } else {
        console.error('Role or ID is undefined or missing from the response.');
      }
    } catch (error) {
      console.error('Login failed', error);
      setMessage("Invalid Username or password");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow justify-center items-center bg-red-50 px-4">
        <div className="w-full max-w-md bg-red-100 p-8 rounded-lg shadow-md border border-red-200">
          <h2 className="text-2xl font-bold mb-6 text-center text-red-500">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={loginData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                checked={loginData.rememberMe}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-gray-700">Remember Me</label>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-200"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a href="/register" className="text-red-500 hover:underline">
                Register
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
    </div>
  );
};

export default Login;