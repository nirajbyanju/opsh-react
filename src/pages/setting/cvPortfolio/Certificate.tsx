import { FC } from "react";
import { RiPencilLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";

interface CertificateProps {
  
}

const Certificate: FC<CertificateProps> = ({}) => {
  return (
    <div className="w-full mx-auto bg-white sm:py-4 sm:px-4 lg:px-10 rounded-lg shadow">
      <div className="flex flex-col sm:flex-row items-center mb-4 gap-4">
        <h2 className="font-medium text-opsh-primary">Education Table</h2>
        <hr className="border-t-1 border-opsh-primary flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto" />
        <button className="border-opsh-primary rounded-full border text-opsh-primary px-4 py-2">
          + Add Data in Table
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-opsh-primary/5">
              <th className="p-4 font-medium text-sm text-center">
                Certificates
              </th>
              <th className="p-4 font-medium text-sm text-center">Category</th>
              <th className="p-4 font-medium text-sm text-center">Description</th>
              <th className="p-4 font-medium text-sm text-center">
                Achievement Date
              </th>
              <th className="p-4 font-medium text-sm text-center">
                Attachment
              </th>
              <th className="p-4 font-medium text-sm text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-4 text-center text-sm border-b">
                Emplolye Of Month
              </td>
              <td className="p-4 text-center text-sm border-b">It and Technology</td>
              <td className="p-4 text-center text-sm border-b">Due my excellency of dedication</td>
              <td className="p-4 text-center text-sm border-b">4th July 2024</td>
              <td className="p-4 text-center text-sm border-b">
                <button className="bg-gray-200 text-center rounded-full px-4 py-1">
                  View
                </button>
              </td>
              <td className="p-4 border-b text-center">
                <div className="flex space-x-2 justify-center">
                  <button className="p-2 rounded text-xl">
                    <RiPencilLine />
                  </button>
                  <button className="p-2 rounded text-xl">
                    <MdOutlineRemoveRedEye />
                  </button>
                  <button className="p-2 rounded text-xl">
                    <RiDeleteBin5Line />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Certificate