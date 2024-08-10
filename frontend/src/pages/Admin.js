import React, { useState, useEffect } from "react";
import { MagnifyingGlassIcon, PencilIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import Navbar from "../components/Navbar";
import axios from "axios";

const TABLE_HEAD = ["Name", "Email", "Gender", "Phone Number", "Age", "Blood Group", "Address", "Actions"];

export default function Admin() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAll();
    }, []);


    const getAll = async () => {
        try {
            const response = await axios.get("http://localhost:8080/get");
            setUsers(response.data);
            console.log(response.data);
            document.querySelector('select').value = '';
        } catch (error) {
            console.error("Error fetching donor data:", error);
        }
    };

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            getByKeyword(selectedValue);
        }
    }


    const getByKeyword = async (keyword) => {
        try {
            const response = await axios.get(`http://localhost:8080/get/${keyword}`);
            setUsers(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching donor data:", error);
        }
    }

    return (
        <>
            <Navbar />
            <div className="h-full w-full p-6">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <h2 className="text-2xl font-semibold text-red-700">Donor Records</h2>
                        <p className="text-gray-500 mt-1 text-sm">See information about all donors</p>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row">
                        <button className="border border-gray-300 rounded px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white" onClick={getAll}>
                            View all
                        </button>
                        <button className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white">
                            <UserPlusIcon className="h-4 w-4" /> Add donor
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="w-full md:w-72">
                        <div className="relative flex gap-4 items-center">
                            <div className="relative">
                                <select
                                    className="w-full px-10 py-2 border border-gray-300 rounded-md text-sm"
                                    defaultValue="" onChange={handleSelectChange}
                                >
                                    <option value="" disabled className="text-gray-900">Select Blood Group</option>
                                    <option value="A+">A+</option>
                                    <option value="B+">B+</option>
                                    <option value="AB+">AB+</option>
                                    <option value="O+">O+</option>
                                    <option value="A-">A-</option>
                                    <option value="B-">B-</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O-">O-</option>
                                </select>
                                <MagnifyingGlassIcon className="absolute top-3 left-3 h-5 w-5 text-gray-500 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 overflow-x-auto">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-b border-gray-200 bg-gray-50 p-4 text-sm font-medium text-gray-600"
                                    >
                                        {head}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.email}>
                                    <td className="p-4 border-b border-gray-200">
                                        <p className="text-sm text-gray-500">{user.fullname}</p>
                                    </td>
                                    <td className="p-4 border-b border-gray-200">
                                        <p className="text-sm text-gray-500">{user.email}</p>
                                    </td>
                                    <td className="p-4 border-b border-gray-200">
                                        <p className="text-sm text-gray-500">{user.gender}</p>
                                    </td>
                                    <td className="p-4 border-b border-gray-200">
                                        <p className="text-sm text-gray-500">{user.phonenumber}</p>
                                    </td>
                                    <td className="p-4 border-b border-gray-200">
                                        <p className="text-sm text-gray-500">{user.age}</p>
                                    </td>
                                    <td className="p-4 border-b border-gray-200">
                                        <p className="text-sm text-gray-500">{user.bloodgroup}</p>
                                    </td>
                                    <td className="p-4 border-b border-gray-200">
                                        <p className="text-sm text-gray-500">{user.address}</p>
                                    </td>
                                    <td className="p-4 border-b border-gray-200">
                                        <button className="text-gray-600 hover:text-gray-800">
                                            <PencilIcon className="h-4 w-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 p-4">
                    <p className="text-sm text-gray-600">Page 1 of 10</p>
                    <div className="flex gap-2">
                        <button className="border border-gray-300 rounded px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white">
                            Previous
                        </button>
                        <button className="border border-gray-300 rounded px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
