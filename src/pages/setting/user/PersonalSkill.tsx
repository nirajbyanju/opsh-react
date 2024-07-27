const PersonalSkill = () => {
  return (
    <div className="p-8">
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">EXPERIENCE TABLE</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">+ Add Data in Table</button>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Organization Name</th>
            <th className="border px-4 py-2">Position</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Start Date</th>
            <th className="border px-4 py-2">End Date</th>
            <th className="border px-4 py-2">Attachment</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">Opportunities Sharing</td>
              <td className="border px-4 py-2">UI/UX Designer</td>
              <td className="border px-4 py-2">Lorem ipsum dolor ddel sdlks akss</td>
              <td className="border px-4 py-2">10/10/2080</td>
              <td className="border px-4 py-2">10/10/2080</td>
              <td className="border px-4 py-2"><button className="bg-gray-300 px-2 py-1 rounded">View</button></td>
              <td className="border px-4 py-2">
                <button className="text-blue-500 px-2">👁️</button>
                <button className="text-yellow-500 px-2">✏️</button>
                <button className="text-red-500 px-2">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Skill TABLE</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">+ Add Data in Table</button>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Skill Name</th>
            <th className="border px-4 py-2">Skill Level</th>
            <th className="border px-4 py-2">Description</th>
            <th className="border px-4 py-2">Year of Experience</th>
            <th className="border px-4 py-2">Attachment</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2].map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">Microsoft Office</td>
              <td className="border px-4 py-2">Beginner</td>
              <td className="border px-4 py-2">Lorem ipsum dolor ddel sdlks akss the world of</td>
              <td className="border px-4 py-2">10/10/2080</td>
              <td className="border px-4 py-2"><button className="bg-gray-300 px-2 py-1 rounded">View</button></td>
              <td className="border px-4 py-2">
                <button className="text-blue-500 px-2">👁️</button>
                <button className="text-yellow-500 px-2">✏️</button>
                <button className="text-red-500 px-2">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="flex justify-end space-x-4">
      <button className="bg-red-500 text-white px-4 py-2 rounded">Cancel & Skip</button>
      <button className="bg-green-500 text-white px-4 py-2 rounded">Next</button>
    </div>
  </div>
  )
}

export default PersonalSkill