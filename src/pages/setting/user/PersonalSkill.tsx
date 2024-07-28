import { RiPencilLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useState } from "react";
import Modal from "../../../components/modal/Model";
const PersonalSkill = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="p-8">
    <div className="mb-8">
    <div className="flex flex-col sm:flex-row items-center mb-4 gap-4">
        <h2 className="font-medium text-opsh-primary">EXPERIENCE TABLE</h2>
        <hr className="border-t-1 border-opsh-primary flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto" />
        <button className="border-opsh-primary  rounded-full border border-spacing-2 text-opsh-primary px-4 py-2" onClick= {() => setShowModal(true)}>+ Add Data in Table</button>
    </div>
      <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-opsh-primary/5">
              <th className="p-4 font-medium text-sm text-center">Organization Name</th>
              <th className="p-4 font-medium text-sm text-center">Position</th>
              <th className="p-4 font-medium text-sm text-center">Description</th>
              <th className="p-4 font-medium text-sm text-center">Start Date</th>
              <th className="p-4 font-medium text-sm text-center">End Date</th>
              <th className="p-4 font-medium text-sm text-center">Attachment</th>
              <th className="p-4 font-medium text-sm text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="p-4 text-center text-sm border-b">Opportunities Sharing</td>
                <td className="p-4 text-center text-sm border-b">UI/UX Designer</td>
                <td className="p-4 text-center text-sm border-b">Lorem ipsum dolor ddel sdlks akss</td>
                <td className="p-4 text-center text-sm border-b">10/10/2020</td>
                <td className="p-4 text-center text-sm border-b">10/10/2020</td>
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
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="p-4 text-center text-sm border-b">Opportunities Sharing</td>
                <td className="p-4 text-center text-sm border-b">UI/UX Designer</td>
                <td className="p-4 text-center text-sm border-b">Lorem ipsum dolor ddel sdlks akss</td>
                <td className="p-4 text-center text-sm border-b">10/10/2020</td>
                <td className="p-4 text-center text-sm border-b">10/10/2020</td>
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
          </tbody>
      </table>
    </div>
    <div className="mb-8">
    <div className="flex flex-col sm:flex-row items-center mb-4 gap-4">
        <h2 className="font-medium text-opsh-primary">Skill TABLE</h2>
        <hr className="border-t-1 border-opsh-primary flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto" />
        <button className="border-opsh-primary  rounded-full border border-spacing-2 text-opsh-primary px-4 py-2">+ Add Data in Table</button>
    </div>
      <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-opsh-primary/5">
              <th className="p-4 font-medium text-sm text-center">Skill Name</th>
              <th className="p-4 font-medium text-sm text-center">Skill Level</th>
              <th className="p-4 font-medium text-sm text-center">Year of Experience</th>
              <th className="p-4 font-medium text-sm text-center">Attachment</th>
              <th className="p-4 font-medium text-sm text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
              <tr className="odd:bg-white even:bg-gray-50">
                <td className="p-4 text-center text-sm border-b">MicroSoft Office</td>
                <td className="p-4 text-center text-sm border-b">Beginner</td>
                <td className="p-4 text-center text-sm border-b">Lorem ipsum dolor ddel sdlks akss</td>
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
          </tbody>
      </table>
    </div>
    <div className="flex justify-end space-x-4">
      <button className="bg-red-500 text-white px-4 py-2 rounded">Cancel & Skip</button>
      <button className="bg-green-500 text-white px-4 py-2 rounded">Next</button>
    </div>
    {showModal && (
        <Modal closeModal={() => setShowModal(false)} />
      )}
  </div>
  )
}

export default PersonalSkill