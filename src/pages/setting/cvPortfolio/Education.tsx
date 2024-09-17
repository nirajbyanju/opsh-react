import { useState, FC } from "react";
import Modal from "@/pages/setting/cvPortfolio/modal/EducationModal";
import {
  RiDeleteBinLine,
  MdOutlineRemoveRedEye,
  BiEdit,
  FaPlus,
} from "@/assets/icons/Icons";

interface EducationProps {}

const Education: FC<EducationProps> = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [educationList, setEducationList] = useState<any[]>([]);

  const handleAddEducation = (educationData: any) => {
    setEducationList([...educationList, educationData]);
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
          onClick={() => setIsModalOpen(true)}
        >
          <FaPlus size={18} /> Add Education
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-opsh-primary/25">
              <th className="p-4 font-medium text-sm text-center text-opsh-primary">
                Board Name
              </th>
              <th className="p-4 font-medium text-sm text-center text-opsh-primary">
                Level
              </th>
              <th className="p-4 font-medium text-sm text-center text-opsh-primary">
                Faculty
              </th>
              <th className="p-4 font-medium text-sm text-center text-opsh-primary">
                Joined Year
              </th>
              <th className="p-4 font-medium text-sm text-center text-opsh-primary">
                Passed Year
              </th>
              <th className="p-4 font-medium text-sm text-center text-opsh-primary">
                GPA/Percentage
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
            {educationList.map((edu, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50">
                <td className="p-4 text-center text-sm border-b">
                  {edu.boardName}
                </td>
                <td className="p-4 text-center text-sm border-b">
                  {edu.level}
                </td>
                <td className="p-4 text-center text-sm border-b">
                  {edu.faculty}
                </td>
                <td className="p-4 text-center text-sm border-b">
                  {edu.joinedYear}
                </td>
                <td className="p-4 text-center text-sm border-b">
                  {edu.passedYear}
                </td>
                <td className="p-4 text-center text-sm border-b">{edu.gpa}</td>
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
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for adding education */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddEducation}
      />
    </div>
  );
};

export default Education;
