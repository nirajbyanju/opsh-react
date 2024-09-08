import { RiPencilLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

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
    <div className="w-full mx-auto bg-white sm:py-4 sm:px-4 lg:px-10 rounded-lg shadow">
      <div className="flex flex-col sm:flex-row items-center mb-4 gap-4">
        <h2 className="font-medium text-opsh-primary">Education Table</h2>
        <hr className="border-t-1 border-opsh-primary flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto" />
        <button className="border-opsh-primary rounded-full border text-opsh-primary px-4 py-2">+ Add Data in Table</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-opsh-primary/5">
              <th className="p-4 font-medium text-sm text-center">Board Name</th>
              <th className="p-4 font-medium text-sm text-center">Level</th>
              <th className="p-4 font-medium text-sm text-center">Faculty</th>
              <th className="p-4 font-medium text-sm text-center">Joined Year</th>
              <th className="p-4 font-medium text-sm text-center">Passed Year</th>
              <th className="p-4 font-medium text-sm text-center">GPA/Percentage</th>
              <th className="p-4 font-medium text-sm text-center">Attachment</th>
              <th className="p-4 font-medium text-sm text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50">
                <td className="p-4 text-center text-sm border-b">{item.boardName}</td>
                <td className="p-4 text-center text-sm border-b">{item.level}</td>
                <td className="p-4 text-center text-sm border-b">{item.faculty}</td>
                <td className="p-4 text-center text-sm border-b">{item.joinedYear}</td>
                <td className="p-4 text-center text-sm border-b">{item.passedYear}</td>
                <td className="p-4 text-center text-sm border-b">{item.gpa}</td>
                <td className="p-4 text-center text-sm border-b">
                  <button className="bg-gray-200 text-center rounded-full px-4 py-1">View</button>
                </td>
                <td className="p-4 border-b text-center">
                  <div className="flex space-x-2 justify-center">
                    <button className="p-2 rounded text-xl"><RiPencilLine /></button>
                    <button className="p-2 rounded text-xl"><MdOutlineRemoveRedEye /></button>
                    <button className="p-2 rounded text-xl"><RiDeleteBin5Line /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button className="bg-red-500 text-white px-4 py-2 rounded">Cancel & Skip</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Next</button>
      </div>
    </div>
  );
}

export default Education;
