import { HiOutlineViewGrid } from "react-icons/hi";
import { PiListBulletsBold } from "react-icons/pi";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsBuildings } from "react-icons/bs";
import { GrPersonalComputer } from "react-icons/gr";
import { MdOutlineAccountBalance } from "react-icons/md";
import profile from "../../assets/auth/profile.jpg";
import { useState } from "react";
import { LuEye } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FC } from "react";
import { SlLocationPin } from "react-icons/sl";
import { BiUserPlus } from "react-icons/bi";
import { PiGraduationCap } from "react-icons/pi";
import { LiaUserEditSolid } from "react-icons/lia";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdDone } from "react-icons/md";

interface AllApplicantsProps {}
const AllApplicants: FC<AllApplicantsProps> = ({}) => {
  const [Listing, setIsListing] = useState(1);
  const showlisting = (view: any) => {
    setIsListing(Listing === view ? Listing : view);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="px-4">
      {/* Header Section */}
      <div className="flex flex-col gap-4 sm:flex-row items-center mb-2">
        <h5 className="text-opsh-primary font-medium text-md">
          All Applicants !
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
      <div className="flex flex-col sm:flex-row gap-4 justify-between sm:gap-8 items-center mb-2">
        <span className="text-lg font-normal text-opsh-primary">Applicant</span>
        <form action="" className="relative max-w-md w-full px-4">
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
            <button className="text-opsh-primary border-2 py-1 px-3 border-opsh-primary text-sm rounded-lg hover:bg-opsh-light-blue">
              Bulk Action
            </button>
            <button
              onClick={openModal}
              className="text-white bg-opsh-primary border-2 border-opsh-primary py-1 px-3 text-sm rounded-lg hover:bg-opacity-90"
            >
              Advance Filters
            </button>
            <button className="text-opsh-primary border-2 py-1 px-3 border-opsh-primary text-sm rounded-lg hover:bg-opsh-light-blue">
              All View
            </button>
            <button className="text-white bg-opsh-primary border-2 border-opsh-primary py-1 px-3 text-sm rounded-lg hover:bg-opacity-90">
              Add Vacancy
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
      <div className="bg-opsh-primary/25 mt-5 rounded-lg">
        <ul className="flex flex-wrap gap-1 justify-between text-sm font-medium text-center text-opsh-darkgrey">
          <li className="border-b-2 border-opsh-secondary">
            <button
              className={`inline-flex items-center justify-center py-3 px-5 gap-3 group hover:text-opsh-secondary hover:border-opsh-secondary`}
            >
              <GiSettingsKnobs className="text-lg text-opsh-primary" />
              Apply Candiate
            </button>
          </li>
          <li className="">
            <button
              className={`inline-flex items-center justify-center py-3 px-5 gap-3 group border-transparent hover:text-opsh-secondary hover:border-opsh-secondary`}
            >
              <BsBuildings className="text-lg text-opsh-se" />
              Total: 6
            </button>
          </li>
          <li className="">
            <button
              className={`inline-flex items-center justify-center py-3 px-5 gap-3 group text-opsh-success hover:text-opsh-secondary hover:border-opsh-secondary`}
            >
              <GrPersonalComputer className="text-lg text-opsh-success" />
              Approved: 2
            </button>
          </li>
          <li className="">
            <button
              className={`inline-flex items-center justify-center py-3 px-5 gap-3 group text-opsh-danger hover:text-opsh-secondary hover:border-opsh-secondary`}
            >
              <MdOutlineAccountBalance className="text-lg text-opsh-danger" />
              Rejected: 4
            </button>
          </li>
        </ul>
      </div>
      {Listing === 1 && (
        <div className="grid grid-cols-1 mt-2 md:grid-cols- lg:grid-cols-4 gap-6">
        <div>
          <div className="border rounded-lg shadow-md bg-white">
            <div className="flex gap-4 px-5 pt-4 pb-2 items-center">
              <img
                src={profile}
                className="border-2 border-opsh-primary w-14 h-14 rounded-full"
              />
              <div className="flex-grow">
                <h5 className="text-opsh-primary font-semibold text-base">
                  Niraj Byanju
                </h5>
                <span className="text-sm text-opsh-grey">
                  Laravel Developer
                </span>
              </div>
            </div>
            <div className="bg-opsh-secondary/10 px-5 py-2">
              <div className="flex items-center gap-2 mb-2">
                <SlLocationPin className="text-opsh-muted text-sm" />
                <span className="text-sm text-opsh-muted">Suryabinyak, Nepal</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <LiaUserEditSolid className="text-opsh-muted text-sm" />
                <span className="text-sm text-opsh-muted">4 years experience</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <PiGraduationCap className="text-opsh-muted text-sm" />
                <span className="text-sm text-opsh-muted">Bachelor in Information Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <BiUserPlus className="text-opsh-muted text-sm" />
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded bg-opsh-primary/10 text-sm text-opsh-primary">PHP</span>
                  <span className="px-3 py-1 rounded bg-opsh-primary/10 text-sm text-opsh-primary">Laravel</span>
                  <span className="px-3 py-1 rounded bg-opsh-primary/10 text-sm text-opsh-primary">MySQL</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between border-t px-5 py-3 bg-gray-50">
              <button className="flex items-center gap-2 text-sm text-opsh-primary hover:text-opsh-primary/80">
                <MdOutlineRemoveRedEye className="text-base" />
                View
              </button>
              <button className="flex items-center gap-2 text-sm text-green-600 hover:text-green-500">
                <MdDone className="text-base" />
                Done
              </button>
              <button className="flex items-center gap-2 text-sm text-red-600 hover:text-red-500">
                <RiDeleteBinLine className="text-base" />
                Rejected
              </button>
            </div>
          </div>
        </div>
      </div>
      
      )}
      {Listing === 2 && (
        <div className="">
          {/* Table */}
          <div className=" overflow-x-auto mt-4">
            <table>
              <thead className="bg-opsh-primary/5 mt-5 rounded-lg">
                <tr className="text-sm text-center text-opsh-darkgrey">
                  <th className="py-2 font-medium">Name</th>
                  <th className="py-2 font-medium">Position</th>
                  <th className="py-2 font-medium">Location</th>
                  <th className="py-2 font-medium">Experience</th>
                  <th className="py-2 font-medium">Education</th>
                  <th className="py-2 font-medium">Skills</th>
                  <th className="py-2 font-medium">Action</th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {/* Repeatable Row */}
                {[...Array(2)].map((_, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://via.placeholder.com/40"
                          alt="Company logo"
                        />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 w-40 text-wrap">
                            Triveni Food and Beverage
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        Project Management
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        Kathmandu, Nepal
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        Manager-Assistant Manager
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link to="/manageVacancy/AllApplicants">3+ Applied</Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2024-05-07<br></br>
                      2024-05-07
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-4">
                        <LuEye />
                      </button>
                      <button className="text-blue-600 hover:text-blue-900 mr-4">
                        <MdDone />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <RiDeleteBinLine />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
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
            <form className="">
              <div className="mt-4 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-y-2 gap-x-4 md:gap-4">
                <div className="mb-2 col-span-2">
                  <label
                    className="block text-gray-700 text-sm mb-1"
                    htmlFor="company-name"
                  >
                    Company Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
                    id="company-name"
                    type="text"
                    placeholder="Search by Company Name"
                  />
                </div>
                <div className="mb-2 col-span-2">
                  <label
                    className="block text-gray-700 text-sm mb-1"
                    htmlFor="location"
                  >
                    Location
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline"
                    id="location"
                    type="text"
                    placeholder="Search by Location"
                  />
                </div>
                <div className="mb-2">
                  <label
                    className="block text-gray-700 text-sm mb-1"
                    htmlFor="state"
                  >
                    State
                  </label>
                  <div className="relative">
                    <select
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-4 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                      id="state"
                    >
                      <option>New Mexico</option>
                      <option>Missouri</option>
                      <option>Texas</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-y-2 gap-x-4 md:gap-4">
                <div className="mb-2">
                  <label
                    className="block text-gray-700 text-sm mb-1"
                    htmlFor="state"
                  >
                    Year
                  </label>
                  <div className="relative">
                    <select
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-4 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                      id="state"
                    >
                      <option>Select Year</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <label
                    className="block text-gray-700 text-sm mb-1"
                    htmlFor="state"
                  >
                    From Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-4 placeholder text-gray-600 leading-tight focus:outline-none focus:shadow-outline "
                      id="date"
                      placeholder=""
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      ></svg>
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <label
                    className="block text-gray-700 text-sm mb-1"
                    htmlFor="state"
                  >
                    ToDate
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-4 placeholder text-gray-600 leading-tight focus:outline-none focus:shadow-outline "
                      id="date"
                      placeholder=""
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      ></svg>
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <label
                    className="block text-gray-700 text-sm mb-1"
                    htmlFor="state"
                  >
                    Job Type
                  </label>
                  <div className="relative">
                    <select
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-4 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                      id="state"
                    >
                      <option>Select Type</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <label
                    className="block text-gray-700 text-sm mb-1"
                    htmlFor="state"
                  >
                    Job Level
                  </label>
                  <div className="relative">
                    <select
                      className="shadow appearance-none border rounded w-full text-sm py-2 px-4 text-gray-600 leading-tight focus:outline-none focus:shadow-outline"
                      id="state"
                    >
                      <option>Select Level</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-2 mr-1">
                <button
                  type="submit"
                  className=" bg-opsh-success text-sm text-white rounded-lg px-5 py-2"
                >
                  Apply Filters
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllApplicants;
