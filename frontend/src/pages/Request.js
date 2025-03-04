import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { IoMail } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from '../api/config';

export default function RequestPage() {
    const TABLE_HEAD = [
        "Request ID",
        "Request Date",
        "Requester Name",
        "Blood Group",
        "Hospital Name",
        "Location",
        "Reason",
        "",
        "Actions",
    ];

    const [requests, setRequests] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const requestsPerPage = 3;

    useEffect(() => {
        getAllRequests();
    }, []);

    const getAllRequests = async () => {
        try {
            const response = await axios.get(`${API_URL}/requests`);
            setRequests(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching request data:", error);
        }
    };

    const handleSendEmail = async (bloodGroup) => {
        try {
            await axios.post(`${API_URL}/send-matching-donors`, null, {
                params: {
                    bloodGroup: bloodGroup,
                    subject: "Urgent Blood Request",
                    text: `We have an urgent requirement for ${bloodGroup} blood. If you are available to donate, please contact us immediately through the BloodServe platform.`
                }
            });
            toast.success(`Emails sent successfully to ${bloodGroup} blood group donors!`);
        } catch (error) {
            toast.error("Error sending emails.");
            console.error("Error sending emails:", error);
        }
    };

    const handleSendToAllDonors = async () => {
        try {
            await axios.post(`${API_URL}/send-all`, null, {
                params: {
                    subject: "Urgent Blood Donation Request",
                    text: "We are in urgent need of blood donors. Please check our platform for current blood requests."
                }
            });
            toast.success("Emails sent to all donors successfully!");
        } catch (error) {
            toast.error("Error sending emails to all donors.");
            console.error("Error sending emails:", error);
        }
    };

    const indexOfLastRequest = currentPage * requestsPerPage;
    const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
    const currentRequests = requests.slice(indexOfFirstRequest, indexOfLastRequest);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Navbar />
            <div className="h-full w-full p-6">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <h2 className="text-3xl font-semibold text-red-700">
                            Blood Request Records
                        </h2>
                        <p className="text-gray-500 mt-1 text-sm">
                            See information about all blood requests
                        </p>
                    </div>
                    <button
                        onClick={handleSendToAllDonors}
                        className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                    >
                        <IoMail className="text-lg" />
                        <span>Send to All Donors</span>
                    </button>
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
                            {currentRequests.map((request, index) => (
                                <tr key={request.id}>
                                    <td className="p-4 py-6 border-b border-gray-200">
                                        <p className="text-sm text-gray-500">{request.id}</p>
                                    </td>
                                    <td className="p-4  border-b border-gray-200">
                                        <p className="text-sm text-gray-500">
                                            {request.requiredDate}
                                        </p>
                                    </td>
                                    <td className="p-4  border-b border-gray-200">
                                        <p className="text-sm text-gray-500">
                                            {request.requestorName}
                                        </p>
                                    </td>
                                    <td className="p-4  border-b border-gray-200">
                                        <p className="text-sm text-gray-500">{request.bloodGroup}</p>
                                    </td>
                                    <td className="p-4  border-b border-gray-200">
                                        <p className="text-sm text-gray-500">{request.hospitalName}</p>
                                    </td>
                                    <td className="p-4  border-b border-gray-200">
                                        <p className="text-sm text-gray-500">{request.location}</p>
                                    </td>
                                    <td className="p-4  border-b border-gray-200">
                                        <p className="text-sm text-gray-500">{request.reason}</p>
                                    </td>
                                    <td className="p-4  border-b border-gray-200">
                                        <p className="text-sm text-gray-500">{request.status}</p>
                                    </td>
                                    <td className="p-2 border-b border-gray-200">
                                        <button
                                            className="text-black bg-white hover:text-gray-800 border hover:border-gray-900 p-1 rounded"
                                            onClick={() => handleSendEmail(request.bloodGroup)}
                                        >
                                            <IoMail />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 p-4">
                    <p className="text-sm text-gray-600">
                        Page {currentPage} of {Math.ceil(requests.length / requestsPerPage)}
                    </p>
                    <div className="flex gap-2">
                        <button
                            className="border border-gray-300 rounded px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <button
                            className="border border-gray-300 rounded px-4 py-2 text-sm text-gray-700 hover:bg-black hover:text-white"
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === Math.ceil(requests.length / requestsPerPage)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}