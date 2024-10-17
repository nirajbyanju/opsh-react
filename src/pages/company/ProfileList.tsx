import { useEffect, useState, FC } from "react";
import { HiOutlineViewGrid } from "react-icons/hi";
import { PiListBulletsBold } from "react-icons/pi";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuEye } from "react-icons/lu";
import useCompanyProfileStore from "@/stores/company/companyStore";
import { toast } from "react-toastify";
import {

  CompanyProfiles,
} from "@/types/company/compnayProfile";
import ViewModal from "./ViewingModal";

const ProfileList: FC = () => {
  // const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [Listing, setIsListing] = useState<number>(1);
  const { getAllCompanyProfiles, deleteCompanyProfile } =
    useCompanyProfileStore();
  const [dataResponse, setDataResponse] = useState<CompanyProfiles[]>([]);
  const [profileList, setProfileList] = useState<CompanyProfiles[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [profileToDelete, setProfileToDelete] = useState<number | null>(null);
  const [selectedProfileId, setSelectedProfileId] = useState<number | null>(
    null
  );

  const showListing = (view: number) => {
    setIsListing(view);
  };

  const fetchCompanyProfiles = async () => {
    try {
      const response = await getAllCompanyProfiles();
      setDataResponse(response as any);
      setProfileList((response as any).data);
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

  const [status, setStatus] = useState();

  const updateCompyStatus = (newStatus: any) => {
    setStatus(newStatus);
  };

  const openViewModal = (id: number) => {
    setSelectedProfileId(id); // Pass the id
    setIsModalOpen(true);
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
      {Listing === 1 && (
        <div className="gap-4">
          <div className="mt-3">
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-opsh-primary/25 mt-5 rounded-lg">
                  <tr className="text-xs sm:text-sm text-center text-opsh-darkgrey">
                    <th className="py-2 font-medium">Name</th>
                    <th className="py-2 font-medium hidden sm:table-cell">
                      Category
                    </th>
                    <th className="py-2 font-medium hidden md:table-cell">
                      Location
                    </th>
                    <th className="py-2 font-medium hidden lg:table-cell">
                      Phone Number
                    </th>
                    <th className="py-2 font-medium">Team Size</th>
                    <th className="py-2 font-medium hidden md:table-cell">
                      Establish Date
                    </th>
                    <th className="py-2 font-medium">Status</th>
                    <th className="py-2 font-medium">Action</th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {profileList.map((compy, index) => (
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
                          {compy.category!.name}
                        </div>
                      </td>
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap hidden md:table-cell">
                        <div className="text-xs sm:text-sm text-gray-900">
                          {compy.location}
                        </div>
                      </td>
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                        <div className="text-xs sm:text-sm text-gray-900">
                          {compy.phoneNumber}
                        </div>
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
                            className="sr-only peer"
                            checked={status === 1} // Conditionally set the checkbox to checked if status is 1
                            onChange={(e) => {
                              // Toggle the status value when checkbox is changed
                              updateCompyStatus(e.target.checked ? 1 : 0);
                            }}
                          />
                          <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#52BD94]" />
                        </label>
                      </td>
                      <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-row gap-3 justify-center items-center">
                          <button
                            className="w-5 sm:w-6 h-5 sm:h-6 text-opsh-darkgrey"
                            onClick={() => openViewModal(compy.id)}
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
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
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
                      Are you sure you want to delete this profile? This action
                      cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() =>
                    profileToDelete && handleDelete(profileToDelete)
                  }
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
      {selectedProfileId && (
        <ViewModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          profileId={selectedProfileId}
        />
      )}
    </div>
  );
};

export default ProfileList;
