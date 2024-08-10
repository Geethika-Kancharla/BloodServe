import React from 'react';
import AdminTable from "../components/AdminTable";
import { Link } from 'react-router-dom';


const Admin = () => {

    const clearFilter = () => {
        window.location = '/admin-page';
    };

    return (
        <div className="admin-dashboard">
            <div className="header bg-info text-center text-white p-3">
                <h1>Admin Dashboard</h1>
            </div>
            <div className="container my-4 p-3 bg-light shadow-sm rounded">
                <form action="/admin-page" method="get" className="d-flex justify-content-end mb-3">
                    <div className="btn-group">
                        <select id="textsearch" name="keyword" className="btn btn-dropdown-toggle form-select">
                            <option value="">Search By Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="B+">B+</option>
                            <option value="AB+">AB+</option>
                            <option value="O+">O+</option>
                            <option value="A-">A-</option>
                            <option value="B-">B-</option>
                            <option value="AB-">AB-</option>
                            <option value="O-">O-</option>
                        </select>
                        <button type="submit" className="btn btn-outline-warning text-dark mx-2">
                            <ion-icon name="search"></ion-icon>
                        </button>
                        <button type="reset" onClick={clearFilter} className="btn btn-outline-primary text-dark">
                            <ion-icon name="refresh-outline"></ion-icon>
                        </button>
                    </div>
                </form>

                <AdminTable />

                <Link to="/new" className="btn btn-primary mt-3">Add Donor</Link>
                <br /><br />
                <span>
                    <Link to="/logout" className="btn btn-danger">Logout</Link>
                </span>
            </div>
        </div>
    );
};

export default Admin;
