
import { useState } from 'react';

const rolesPermission = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('User Groups');

  // Dummy data to represent the users (Replace this with your actual data)
  const users = [
    { id: 1, name: 'Niraj Byanju', userCode: 'Opsh-2024-1', email: 'nirajbyanju1234@gmail.com', role: 'Administration', status: 'Deactivate', joinDate: '4th Jan 2024' },
    { id: 2, name: 'John Doe', userCode: 'Opsh-2024-2', email: 'johndoe@example.com', role: 'Manager', status: 'Active', joinDate: '5th Jan 2024' },
    { id: 3, name: 'Jane Smith', userCode: 'Opsh-2024-3', email: 'janesmith@example.com', role: 'Administrator', status: 'Inactive', joinDate: '6th Jan 2024' },
    // Add more users as needed
  ];

  // Filter users based on the active tab
  const filteredUsers = users.filter(user => {
    if (activeTab === 'User Groups') return true;
    return user.role === activeTab;
  });

  return (
    <div className="p-6 min-h-screen">
      {/* Header Section */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <h1 className="text-xl font-bold">User Groups</h1>
        <p className="text-sm text-gray-600">
          You can manage all permissions and settings here for internal users of labourlink
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setActiveTab('User Groups')}
          className={`px-4 py-2 rounded ${activeTab === 'User Groups' ? 'bg-gray-200' : 'bg-white border shadow'}`}
        >
          User Groups
        </button>
        <button
          onClick={() => setActiveTab('Administrator')}
          className={`px-4 py-2 rounded ${activeTab === 'Administrator' ? 'bg-gray-200' : 'bg-white border shadow'}`}
        >
          Administrator
        </button>
        <button
          onClick={() => setActiveTab('Manager')}
          className={`px-4 py-2 rounded ${activeTab === 'Manager' ? 'bg-gray-200' : 'bg-white border shadow'}`}
        >
          Manager
        </button>
      </div>

      {/* Search and Sort Section */}
      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search User"
            className="p-2 border rounded w-1/3"
          />
          <button className="flex items-center space-x-2 border p-2 rounded">
            <span>Sort by</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.292 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="p-2 border-b">Name</th>
              <th className="p-2 border-b">UserCode</th>
              <th className="p-2 border-b">Email</th>
              <th className="p-2 border-b">Role</th>
              <th className="p-2 border-b">Status</th>
              <th className="p-2 border-b">Join date</th>
              <th className="p-2 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="p-2 border-b flex items-center">
                  <img
                    className="w-8 h-8 rounded-full mr-2"
                    src="https://via.placeholder.com/150"
                    alt="User"
                  />
                  {user.name}
                </td>
                <td className="p-2 border-b">{user.userCode}</td>
                <td className="p-2 border-b">{user.email}</td>
                <td className="p-2 border-b">{user.role}</td>
                <td className="p-2 border-b">
                  <span className={user.status === 'Active' ? 'text-green-500' : user.status === 'Deactivate' ? 'text-red-500' : 'text-gray-500'}>
                    {user.status}
                  </span>
                </td>
                <td className="p-2 border-b">{user.joinDate}</td>
                <td className="p-2 border-b flex space-x-2">
                  <button>
                    <svg
                      className="w-5 h-5 text-gray-600 hover:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.74 6.74a.75.75 0 111.06-1.06l6.48 6.48a.75.75 0 11-1.06 1.06L5.74 6.74z" />
                    </svg>
                  </button>
                  <button>
                    <svg
                      className="w-5 h-5 text-gray-600 hover:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 8.25A2.25 2.25 0 008.25 6h3.5A2.25 2.25 0 0114 8.25v5.5A2.25 2.25 0 0111.75 16h-3.5A2.25 2.25 0 016 13.75v-5.5zm4.5 0h-2v1.5h2v-1.5zm.75 4.5h-3.5v1.5h3.5v-1.5zM8.25 8.25v5.5h3.5v-5.5h-3.5z" />
                    </svg>
                  </button>
                  <button>
                    <svg
                      className="w-5 h-5 text-gray-600 hover:text-red-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M7.172 7.172a.75.75 0 111.06-1.06L10 7.88l1.768-1.768a.75.75 0 111.06 1.06L11.06 10l1.768 1.768a.75.75 0 11-1.06 1.06L10 11.06l-1.768 1.768a.75.75 0 11-1.06-1.06L8.94 10 7.172 8.232z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default rolesPermission;
