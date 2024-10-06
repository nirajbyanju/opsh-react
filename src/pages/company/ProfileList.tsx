import React, { useEffect, useState, FC } from "react";
import { HiOutlineViewGrid } from "react-icons/hi";
import { PiListBulletsBold } from "react-icons/pi";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuEye } from "react-icons/lu";
import useCompanyProfileStore from "@/stores/company/companyStore";
import { toast } from "react-toastify";

const ProfileList: FC = () => {
  // const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [Listing, setIsListing] = useState<number>(1);
  const { getAllCompanyProfiles, deleteCompanyProfile } = useCompanyProfileStore();
  const [profiles, setProfiles] = useState<CompanyProfile[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [profileToDelete, setProfileToDelete] = useState<number | null>(null);

  const showListing = (view: number) => {
    setIsListing(view);
  };

  const fetchCompanyProfiles = async () => {
    try {
      const response = await getAllCompanyProfiles(); // Correct the response structure
      setProfiles(response);
    } catch (error) {
      console.error("Error fetching company profiles:", error);
    }
  };
  const handleDelete = async (id: number) => {
    try {
      await deleteCompanyProfile(id);
      toast.success("Company profile saved successfully!");
      fetchCompanyProfiles();
      setIsModalOpen(false);
      setProfileToDelete(null);
      
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };
  
  const openDeleteModal = (id: number) => {
    setProfileToDelete(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setProfileToDelete(null);
  };

  useEffect(() => {
    fetchCompanyProfiles();
  }, []);

  return (
    <div className="px-3 py-1">
      <div className="flex flex-col gap-4 sm:flex-row items-center mb-1">
        <h5 className="text-primary font-medium text-xl">Profile List</h5>
        <hr className="border-t-1 border-gray-300 flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto" />
        <h5 className="text-muted text-sm">Working Dashboard</h5>
        <h5 className="text-muted text-sm">Statistics Dashboard</h5>
      </div>

      <div className="grid grid-cols-12 gap-3 sm:flex-row sm:gap-4 items-center mb-2">
        <span className="col-span-12 sm:col-span-2 text-lg font-normal text-opsh-primary">
          Vacancy List
        </span>

        <form className="col-span-12 sm:col-span-4 flex items-center w-full mt-2 sm:mt-0">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">  
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
              placeholder="Search branch name..."
              required
            />
          </div>
          <button
            type="submit"
            className="p-2 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </form>

        <div className="col-span-12 sm:col-span-6 flex flex-wrap justify-between gap-4">
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <button className="text-opsh-primary border-2 py-1 px-3 border-opsh-primary text-sm rounded-lg hover:bg-opsh-light-blue">
              Bulk Action
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
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

          <div className="flex mt-4 sm:mt-0 gap-2">
            <button onClick={() => showListing(1)}>
              <PiListBulletsBold className="text-3xl cursor-pointer hover:text-opsh-secondary" />
            </button>
            <button onClick={() => showListing(2)}>
              <HiOutlineViewGrid className="text-3xl cursor-pointer hover:text-opsh-secondary" />
            </button>
          </div>
        </div>
      </div>

      {Listing === 1 && (
        <div className="gap-4">
          <div className="mt-3">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-opsh-primary/25 mt-5 rounded-lg">
                  <tr className="text-xs sm:text-sm text-center text-opsh-darkgrey">
                    <th className="py-2 font-medium">Name</th>
                    <th className="py-2 font-medium hidden sm:table-cell">Category</th>
                    <th className="py-2 font-medium hidden md:table-cell">Location</th>
                    <th className="py-2 font-medium hidden lg:table-cell">Phone Number</th>
                    <th className="py-2 font-medium">Team Size</th>
                    <th className="py-2 font-medium hidden md:table-cell">Establish Date</th>
                    <th className="py-2 font-medium">Status</th>
                    <th className="py-2 font-medium">Action</th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {profiles.map((compy, index) => (
                    <tr key={index}>
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            className="h-8 sm:h-10 w-8 sm:w-10 rounded-full"
                            src={compy.logo}
                            alt="Company logo"
                          />
                          <div className="ml-2 sm:ml-4">
                            <div className="text-xs sm:text-sm font-medium text-gray-900 w-32 sm:w-40 text-wrap">
                              {compy.companyName}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                        <div className="text-xs sm:text-sm text-gray-900">
                          {compy.category.name}
                        </div>
                      </td>
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap hidden md:table-cell">
                        <div className="text-xs sm:text-sm text-gray-900">{compy.location}</div>
                      </td>
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                        <div className="text-xs sm:text-sm text-gray-900">{compy.phoneNumber}</div>
                      </td>
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {compy.teamSize}
                        </span>
                      </td>
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap hidden md:table-cell text-xs sm:text-sm text-gray-500">
                        {compy.established}
                      </td>
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#52BD94]" />
                        </label>
                      </td>
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-row gap-3 justify-center items-center">
                          <button
                            className="w-5 sm:w-6 h-5 sm:h-6 text-opsh-darkgrey"
                            onClick={() => navigate(`/profiledetails/${compy.id}`)}
                          >
                            <LuEye />
                          </button>
                          <button
                            className="w-5 sm:w-6 h-5 sm:h-6 text-opsh-darkgrey"
                            onClick={() => openDeleteModal(compy.id)}
                          >
                            <RiDeleteBinLine />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            <div
              className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
            >
              <div className="sm:flex sm:items-start">
                <div
                  className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                >
                  <svg
                    className="h-6 w-6 text-red-600"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Delete Confirmation
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to delete this profile? This action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => profileToDelete && handleDelete(profileToDelete)}
                  className="w-full inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-red-600 text-base font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Delete
                </button>
                <button
                  onClick={closeModal}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default ProfileList;
