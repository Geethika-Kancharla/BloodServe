import React from 'react'

const Table = () => {
    return (
        <table className="w-full border-collapse mb-4">
            <thead>
                <tr>
                    <th className="border border-gray-300 p-2">Blood Type</th>
                    <th className="border border-gray-300 p-2">Donate Blood To</th>
                    <th className="border border-gray-300 p-2">Receive Blood From</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-gray-300 p-2">A+</td>
                    <td className="border border-gray-300 p-2">A+ AB+</td>
                    <td className="border border-gray-300 p-2">A+ A- O+ O-</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">A-</td>
                    <td className="border border-gray-300 p-2">A+ A- AB+ AB-</td>
                    <td className="border border-gray-300 p-2">A- O-</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">O+</td>
                    <td className="border border-gray-300 p-2">O+ A+ B+ AB+</td>
                    <td className="border border-gray-300 p-2">O+ O-</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">O-</td>
                    <td className="border border-gray-300 p-2">O+ O- A+ A- B+ B- AB+ AB-</td>
                    <td className="border border-gray-300 p-2">O-</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">B+</td>
                    <td className="border border-gray-300 p-2">B+ AB+</td>
                    <td className="border border-gray-300 p-2">B+ B- O+ O-</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">B-</td>
                    <td className="border border-gray-300 p-2">B+ B- AB+ AB-</td>
                    <td className="border border-gray-300 p-2">B- O-</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">AB+</td>
                    <td className="border border-gray-300 p-2">AB+</td>
                    <td className="border border-gray-300 p-2">EVERYONE</td>
                </tr>
                <tr>
                    <td className="border border-gray-300 p-2">AB-</td>
                    <td className="border border-gray-300 p-2">AB+ AB-</td>
                    <td className="border border-gray-300 p-2">AB- A- B- O-</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table