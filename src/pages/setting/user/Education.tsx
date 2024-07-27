const Education = () => {
    const data = [
        {
          boardName: 'Bsc. CSIT',
          level: "Bachelor's",
          faculty: 'Computer',
          joinedYear: '2016 A.D.',
          passedYear: '2020 A.D.',
          gpa: '3.75 GPA',
        },
        // Add more rows as needed
      ];
    
      return (
        <div className="container mx-auto py-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Education Table</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">+ Add Data in Table</button>
          </div>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-4 border-b">Board Name</th>
                <th className="text-left p-4 border-b">Level</th>
                <th className="text-left p-4 border-b">Faculty</th>
                <th className="text-left p-4 border-b">Joined Year</th>
                <th className="text-left p-4 border-b">Passed Year</th>
                <th className="text-left p-4 border-b">GPA/Percentage</th>
                <th className="text-left p-4 border-b">Attachment</th>
                <th className="text-left p-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="p-4 border-b">{item.boardName}</td>
                  <td className="p-4 border-b">{item.level}</td>
                  <td className="p-4 border-b">{item.faculty}</td>
                  <td className="p-4 border-b">{item.joinedYear}</td>
                  <td className="p-4 border-b">{item.passedYear}</td>
                  <td className="p-4 border-b">{item.gpa}</td>
                  <td className="p-4 border-b">
                    <button className="bg-gray-200 px-3 py-1 rounded">View</button>
                  </td>
                  <td className="p-4 border-b flex space-x-2">
                    <button className="bg-gray-200 p-2 rounded">✏️</button>
                    <button className="bg-gray-200 p-2 rounded">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-4 space-x-2">
            <button className="bg-red-500 text-white px-4 py-2 rounded">Cancel & Skip</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Next</button>
          </div>
        </div>
      );
}

export default Education
