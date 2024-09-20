import { HiOutlineViewGrid } from "react-icons/hi";
import { PiListBulletsBold } from "react-icons/pi";
import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { FC } from "react";
import { Link } from "react-router-dom";
import AddCvModal from "../common/modal/AddCvModal";
import {
  FaPlus,
} from "@/assets/icons/Icons";

interface CvPortfolioProps {}

const CvPortfolio: FC<CvPortfolioProps> = ({
  

}) => {
  const [Listing, setIsListing] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddCvModalOpen, setIsAddCvModalOpen] = useState(false);

  const handleAddCv = () =>{

  };

  const showlisting = (view: any) => {
    setIsListing(Listing === view ? Listing : view);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="px-4">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center mb-2 gap-4">
        <h5 className="text-opsh-primary font-medium text-md">
          Basic Information
        </h5>
        <hr className="border-t-1 border-opsh-grey flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto" />
        <h5 className="text-opsh-muted font-medium text-md">
          Working Dashboard
        </h5>
        <h5 className="text-opsh-muted font-medium text-md">
          Statistics Dashboard
        </h5>
      </div>

      {/* Main Actions Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-8 mb-2">
        <span className="text-lg font-normal text-opsh-primary">
          Cv Portfolio
        </span>
        <form className="relative max-w-md w-full px-4">
          <input
            type="text"
            name="q"
            className="w-full border h-10 shadow p-4 rounded-full"
            placeholder="Search"
          />
          <button type="submit" className="absolute top-2 right-2"></button>
        </form>
        <div className="flex gap-4">
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <button
              onClick={openModal}
              className="text-white bg-opsh-primary border-2 border-opsh-primary py-1 px-3 text-sm rounded-lg hover:bg-opacity-90"
            >
              Advance Filters
            </button>
            <button className="text-opsh-primary border-2 py-1 px-3 border-opsh-primary text-sm rounded-lg hover:bg-opsh-light-blue">
              All View
            </button>
            <button
              // onClick={openAdd}
              className="text-white bg-opsh-primary border-2 border-opsh-primary py-1 px-3 text-sm rounded-lg hover:bg-opacity-90"
            >
              Add Cv
            </button>
          </div>
          {/* Icons Section */}
          <div className="flex gap-4 mt-4 sm:mt-0">
            <button onClick={() => showlisting(1)}>
              <HiOutlineViewGrid className="text-3xl cursor-pointer hover:text-opsh-secondary" />
            </button>
            <button onClick={() => showlisting(2)}>
              <PiListBulletsBold className="text-3xl cursor-pointer hover:text-opsh-secondary" />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
      <div className="flex flex-col sm:flex-row items-center mb-4 gap-4">
        <h2 className="font-medium text-xl text-opsh-primary">
          Education Table
        </h2>
        <hr className="border-t-2 border-opsh-primary flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto" />
        <button
          className="border-opsh-primary border-2 rounded-full font-semibold text-opsh-primary px-4 py-2 flex gap-2 items-center hover:text-opsh-success hover:border-opsh-success"
          onClick={() => setIsAddCvModalOpen(true)}
        >
          <FaPlus size={18} /> Add Education
        </button>
      </div>
      <div className="rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-opsh-primary/25 rounded-lg">
            <tr className="text-sm text-center">
              <th className="py-3 font-medium text-opsh-primary">Name</th>
              <th className="py-2 font-medium text-opsh-primary">Position</th>
              <th className="py-2 font-medium text-opsh-primary">Description</th>
              <th className="py-2 font-medium text-opsh-primary">Created</th>
              <th className="py-2 font-medium text-opsh-primary">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-gray-200">
            <tr className="text-sm text-center text-gray-900">
              <td className="px-6 py-4 whitespace-nowrap">
                Project Management
              </td>
              <td className="px-6 py-4 whitespace-nowrap">Kathmandu, Nepal</td>
              <td className="px-6 py-4 whitespace-nowrap">
                Manager-Assistant Manager
              </td>
              <td className="px-6 py-4 whitespace-nowrap">2024-05-07</td>
              <td className="px-6 py-4 whitespace-nowrap font-medium flex gap-3">
                <Link to="#" className="text-blue-600 hover:text-blue-900">
                  <LuEye />
                </Link>
                <Link to="/cvInfoAdding"  className="text-blue-600 hover:text-blue-900">
                  <GrEdit />
                </Link>
                <Link to="#" className="text-red-600 hover:text-red-900">
                  <RiDeleteBinLine />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg w-11/12 md:w-2/3 lg:w-1/2 p-5">
            <div className="flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-semibold">
                Add Experience Data
              </h2>
              <button
                onClick={closeModal}
                className="text-red-500 text-sm md:text-base font-medium"
              >
                Close (X)
              </button>
            </div>
            <form className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-5 lg:grid-cols-5">
              <div className="col-span-2">
                <label
                  htmlFor="company-name"
                  className="block text-gray-700 text-sm mb-1"
                >
                  Company Name
                </label>
                <input
                  id="company-name"
                  type="text"
                  placeholder="Search by Company Name"
                  className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="location"
                  className="block text-gray-700 text-sm mb-1"
                >
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="Search by Location"
                  className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block text-gray-700 text-sm mb-1"
                >
                  State
                </label>
                <select
                  id="state"
                  className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-600 text-sm leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="year"
                  className="block text-gray-700 text-sm mb-1"
                >
                  Year
                </label>
                <select
                  id="year"
                  className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-600 text-sm leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option>Select Year</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="from-date"
                  className="block text-gray-700 text-sm mb-1"
                >
                  From Date
                </label>
                <input
                  type="date"
                  id="from-date"
                  className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-600 text-sm leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label
                  htmlFor="to-date"
                  className="block text-gray-700 text-sm mb-1"
                >
                  To Date
                </label>
                <input
                  type="date"
                  id="to-date"
                  className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-600 text-sm leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>
                <label
                  htmlFor="job-type"
                  className="block text-gray-700 text-sm mb-1"
                >
                  Job Type
                </label>
                <select
                  id="job-type"
                  className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-600 text-sm leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option>Full-Time</option>
                  <option>Part-Time</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      )}
        <AddCvModal 
        isOpen={isAddCvModalOpen}
        onClose={() => setIsAddCvModalOpen(false)}
        onSubmit={ handleAddCv }
      />
     
    </div>
  );
};

export default CvPortfolio;
