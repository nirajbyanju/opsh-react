import { FC, useState } from "react";
import ExperienceModal from "../common/modal/ExperienceModal";
import {
  RiDeleteBinLine,
  MdOutlineRemoveRedEye,
  BiEdit,
  FaPlus,
} from "@/assets/icons/Icons";
interface ExperienceProps {}
const Experience: FC<ExperienceProps> = ({}) => {
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);

  const handleAddExperience = () =>{

  };

  return (
    <div className="w-full mx-auto bg-white sm:py-4 sm:px-4 lg:px-4 rounded-lg shadow mb-5">
      <div className="flex flex-col sm:flex-row items-center mb-4 gap-4">
        <h2 className="font-medium text-xl text-opsh-primary">
          Education Table
        </h2>
        <hr className="border-t-2 border-opsh-primary flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto" />
        <button
          className="border-opsh-primary border-2 rounded-full font-semibold text-opsh-primary px-4 py-2 flex gap-2 items-center hover:text-opsh-success hover:border-opsh-success"
          onClick={() => setIsExperienceModalOpen(true)}
        >
          <FaPlus size={18} /> Add Education
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-opsh-primary/25">
              <th className="p-4 font-medium text-sm text-cente text-opsh-primary">
                Designation
              </th>
              <th className="p-4 font-medium text-sm text-center text-opsh-primary">
                Company
              </th>
              <th className="p-4 font-medium text-sm text-center text-opsh-primary">
                Start Year
              </th>
              <th className="p-4 font-medium text-sm text-center text-opsh-primary">
                End Year
              </th>
              <th className="p-4 font-medium text-sm text-center text-opsh-primary">
                Year of Experience
              </th>
              <th className="p-4 font-medium text-sm text-center text-opsh-primary">
                Attachment
              </th>
              <th className="p-4 font-medium text-sm text-center text-opsh-primary">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50">
              <td className="p-4 text-center text-sm border-b">
                Laravel Developer
              </td>
              <td className="p-4 text-center text-sm border-b">
                Seshra Inovation
              </td>
              <td className="p-4 text-center text-sm border-b">
                4th April 2024
              </td>
              <td className="p-4 text-center text-sm border-b">5th Jun 2025</td>
              <td className="p-4 text-center text-sm border-b">
                6 Month 2 Year
              </td>

              <td className="p-4 text-center text-sm border-b">
                <button className="bg-gray-200 text-center rounded-full px-4 py-1">
                  View
                </button>
              </td>
              <td className="p-4 border-b text-center">
                <div className="flex space-x-2 justify-center">
                  <button className="p-2 rounded text-xl text-opsh-primary hover:text-opsh-success">
                    <MdOutlineRemoveRedEye />
                  </button>
                  <button className="p-2 rounded text-xl text-opsh-primary hover:text-opsh-warning">
                    <BiEdit />
                  </button>
                  <button className="p-2 rounded text-xl text-opsh-primary hover:text-opsh-danger">
                    <RiDeleteBinLine />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ExperienceModal 
        isOpen={isExperienceModalOpen}
        onClose={() => setIsExperienceModalOpen(false)}
        onSubmit={handleAddExperience}
      />
    </div>
  );
};

export default Experience;
