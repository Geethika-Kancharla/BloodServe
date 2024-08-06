import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [records, setRecords] = useState([]); // State to store records
  const [selectedRecord, setSelectedRecord] = useState(null); // State to store the selected record for editing
  const [newRecord, setNewRecord] = useState({ title: '', description: '' }); // State to store new record data

  // Fetch records (Read)
  useEffect(() => {
    // Example: Fetch records from backend
    // Replace this with actual API call
    const fetchedRecords = [
      { id: 1, title: 'Record 1', description: 'Description 1' },
      { id: 2, title: 'Record 2', description: 'Description 2' },
      // Add more records as needed
    ];
    setRecords(fetchedRecords);
  }, []);

  // Handle form input changes for new record
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecord({ ...newRecord, [name]: value });
  };

  // Handle form submit for creating/updating a record
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedRecord) {
      // Update existing record (Update)
      setRecords(
        records.map((record) =>
          record.id === selectedRecord.id
            ? { ...record, ...newRecord }
            : record
        )
      );
    } else {
      // Create new record (Create)
      setRecords([...records, { id: records.length + 1, ...newRecord }]);
    }
    setSelectedRecord(null);
    setNewRecord({ title: '', description: '' });
  };

  // Handle edit button click
  const handleEdit = (record) => {
    setSelectedRecord(record);
    setNewRecord({ title: record.title, description: record.description });
  };

  // Handle delete button click
  const handleDelete = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  return (
    <div className="p-8">
      <header className="mb-8">
      <h1 className="text-3xl font-bold text-red-600">Admin Dashboard</h1>

      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Manage Records</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Description</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id} className="border-b">
                <td className="py-3 px-4">{record.id}</td>
                <td className="py-3 px-4">{record.title}</td>
                <td className="py-3 px-4">{record.description}</td>
                <td className="py-3 px-4 flex space-x-4">
                  <button
                    onClick={() => handleEdit(record)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(record.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          {selectedRecord ? 'Edit Record' : 'Create New Record'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newRecord.title}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newRecord.description}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            {selectedRecord ? 'Update Record' : 'Create Record'}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Admin;
