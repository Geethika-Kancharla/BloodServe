import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Admin from './pages/Admin';
import User from './pages/User';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/admin-page"
        element={
          <PrivateRoute roles={['ADMIN']}>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route
        path="/user-page"
        element={
          <PrivateRoute roles={['USER']}>
            <User />
          </PrivateRoute>
        }
      />
      <Route
        path="/logout"
        element={
          <PrivateRoute roles={['USER', 'ADMIN']}>
            <Logout />
          </PrivateRoute>
        }
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>

  );
}


//Could fetch the role from endpoint "get-role" by disabling form-login in SecurityConfig and fix the post mapping for "login-user" to check of quthentication also it is not redirecting based on role returning to home route 

const NotFound = () => (
  <div className="flex justify-center items-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-gray-700">404 - Page Not Found</h1>
  </div>
);

export default App;