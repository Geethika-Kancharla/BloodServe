// import React from 'react';
// import AdminTable from "../components/AdminTable";
// import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';

// const Admin = () => {

//     const clearFilter = () => {
//         window.location = '/admin-page';
//     };

//     return (
//         <>
//             <Navbar />
//             {/* <div className="admin-dashboard">
//                 <div className="header bg-blue-500 text-center text-white p-3">
//                     <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//                 </div>
//                 <div className="container my-4 p-3 bg-gray-100 shadow-md rounded-lg">
//                     <form action="/admin-page" method="get" className="flex justify-end mb-3">
//                         <div className="flex items-center space-x-2">
//                             <select id="textsearch" name="keyword" className="form-select block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
//                                 <option value="">Search By Blood Group</option>
//                                 <option value="A+">A+</option>
//                                 <option value="B+">B+</option>
//                                 <option value="AB+">AB+</option>
//                                 <option value="O+">O+</option>
//                                 <option value="A-">A-</option>
//                                 <option value="B-">B-</option>
//                                 <option value="AB-">AB-</option>
//                                 <option value="O-">O-</option>
//                             </select>
//                             <button type="submit" className="px-4 py-2 bg-yellow-500 text-gray-800 rounded-md shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
//                                 <ion-icon name="search"></ion-icon>
//                             </button>
//                             <button type="reset" onClick={clearFilter} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//                                 <ion-icon name="refresh-outline"></ion-icon>
//                             </button>
//                         </div>
//                     </form>

//                     <AdminTable />

//                     <Link to="/new" className="mt-3 inline-block px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
//                         Add Donor
//                     </Link>
//                     <br /><br />
//                     <span>
//                         <Link to="/logout" className="inline-block px-4 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
//                             Logout
//                         </Link>
//                     </span>
//                 </div>
//             </div> */}

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";

const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""];

const TABLE_ROWS = [
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        name: "John Michael",
        email: "john@creative-tim.com",
        job: "Manager",
        org: "Organization",
        online: true,
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Alexa Liras",
        email: "alexa@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: false,
        date: "23/04/18",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        name: "Laurent Perrier",
        email: "laurent@creative-tim.com",
        job: "Executive",
        org: "Projects",
        online: false,
        date: "19/09/17",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
        name: "Michael Levi",
        email: "michael@creative-tim.com",
        job: "Programator",
        org: "Developer",
        online: true,
        date: "24/12/08",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        email: "richard@creative-tim.com",
        job: "Manager",
        org: "Executive",
        online: false,
        date: "04/10/21",
    },
];

export default function Admin() {
    return (
        <div className="h-full w-full p-6">
            <div className="mb-8 flex items-center justify-between gap-8">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800">Members List</h2>
                    <p className="text-gray-500 mt-1 text-sm">See information about all members</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                    <button className="border border-gray-300 rounded px-4 py-2 text-sm text-gray-700">
                        View all
                    </button>
                    <button className="flex items-center gap-2 border border-gray-300 rounded px-4 py-2 text-sm text-gray-700">
                        <UserPlusIcon className="h-4 w-4" /> Add member
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
                <div className="w-full md:w-72">
                    <div className="relative">
                        <MagnifyingGlassIcon className="absolute top-3 left-3 h-5 w-5 text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full px-10 py-2 border border-gray-300 rounded-md text-sm"
                        />
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
                        {TABLE_ROWS.map(
                            ({ img, name, email, job, org, online, date }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-gray-200";

                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={img}
                                                    alt={name}
                                                    className="h-12 w-12 rounded-full"
                                                />
                                                <div className="flex flex-col">
                                                    <p className="text-sm font-medium text-gray-700">
                                                        {name}
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        {email}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <p className="text-sm font-medium text-gray-700">
                                                    {job}
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    {org}
                                                </p>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <span
                                                className={`inline-block px-2 py-1 text-xs font-medium ${online
                                                    ? "bg-green-100 text-green-600"
                                                    : "bg-gray-100 text-gray-600"
                                                    } rounded-full`}
                                            >
                                                {online ? "Online" : "Offline"}
                                            </span>
                                        </td>
                                        <td className={classes}>
                                            <p className="text-sm text-gray-600">{date}</p>
                                        </td>
                                        <td className={classes}>
                                            <button
                                                className="text-gray-600 hover:text-gray-800"
                                                aria-label="Edit User"
                                            >
                                                <PencilIcon className="h-4 w-4" />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            }
                        )}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 p-4">
                <p className="text-sm text-gray-600">Page 1 of 10</p>
                <div className="flex gap-2">
                    <button className="border border-gray-300 rounded px-4 py-2 text-sm text-gray-700">
                        Previous
                    </button>
                    <button className="border border-gray-300 rounded px-4 py-2 text-sm text-gray-700">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
