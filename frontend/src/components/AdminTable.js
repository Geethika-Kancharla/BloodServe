import React from 'react';
import { Link } from 'react-router-dom';

const AdminTable = () => {

    const users = [
        // Replace this array with your actual data from the backend.
        { id: 1, fullname: "John Doe", email: "john@example.com", gender: "Male", phonenumber: "123456789", age: 30, bloodgroup: "A+", address: "123 Street" },
        // Add more user objects here...
    ];

    return (
        <table className="table table-striped table-responsive-md">
            <thead className="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Phone Number</th>
                    <th>Age</th>
                    <th>Blood Group</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.fullname}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.phonenumber}</td>
                        <td>{user.age}</td>
                        <td>{user.bloodgroup}</td>
                        <td>{user.address}</td>
                        <td>
                            <Link to={`/delete/${user.id}`} className="btn btn-danger">
                                <ion-icon name="trash-outline"></ion-icon>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AdminTable;
