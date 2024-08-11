import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Admin from './pages/Admin';
import User from './pages/User';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';
import Edit from './pages/Edit';
import Add from './pages/Add';

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
        path="/edit/:id"
        element={
          <PrivateRoute roles={['ADMIN']}>
            <Edit />
          </PrivateRoute>
        }
      />
      <Route
        path="/add"
        element={
          <PrivateRoute roles={['ADMIN']}>
            <Add />
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

const NotFound = () => (
  <div className="flex justify-center items-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-gray-700">404 - Page Not Found</h1>
  </div>
);

export default App;