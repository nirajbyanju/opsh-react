import { useEffect, useState, FC } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlineViewGrid } from "react-icons/hi";
import { PiListBulletsBold } from "react-icons/pi";
import { LuEye } from "react-icons/lu";
import useCompanyProfileStore from "@/stores/company/companyStore";
import { toast } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';
import { CompanyProfiles } from "@/types/company/compnayProfile";
import ViewModal from "./ViewingModal";
import { MdOutlineEdit } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { teamSize } from "@/data/teamSize";
import Category from "@/components/category/category";
import Select from "@/components/select/select";

const ProfileList: FC = () => {
  const navigate = useNavigate();
  const [Listing, setIsListing] = useState<number>(1);
  const { getAllCompanyProfiles, deleteCompanyProfile, updateStatusCompanyProfile, current_page, last_page } = useCompanyProfileStore();
  const [profileList, setProfileList] = useState<CompanyProfiles[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [profileToDelete, setProfileToDelete] = useState<number | null>(null);
  const [selectedProfileId, setSelectedProfileId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedTeamSize, setSelectedTeamSize] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSearchQuery(e.target.value);
};


const fetchCompanyProfiles = async (page: number = 1, search: string = "") => {
    try {
      const response = await getAllCompanyProfiles(page, search);
      setProfileList((response as any).data);
    } catch (error) {
      console.error("Error fetching company profiles:", error);
    }
  };

  const showListing = (view: number) => {
    setIsListing(view);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteCompanyProfile(id);
      toast.success("Company profile deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete company profile!");
    } finally {
      fetchCompanyProfiles(current_page);
      closeModal(); // Close the modal after action
    }
  };
  const openViewModal = (id: number) => {
    setSelectedProfileId(id);
    setIsModalOpen(true);
  };

  const openDeleteModal = (id: number) => {
    setProfileToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsDeleteModalOpen(false);
    setIsSearchModalOpen(false);
    setProfileToDelete(null);
  };

  // Pagination Handlers
  const handleNextPage = () => {
    if (current_page < last_page) {
      fetchCompanyProfiles(current_page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (current_page > 1) {
      fetchCompanyProfiles(current_page - 1);
    }
  };

  const handlePageClick = (page: number) => {
    if (page !== current_page && page !== null) {
      fetchCompanyProfiles(page);
    }
  };

  const getVisiblePages = (currentPage: number, lastPage: number) => {
    const pageNumbers = [];
    const delta = 2;
    for (let i = 1; i <= lastPage; i++) {
      if (i === 1 || i === lastPage || (i >= currentPage - delta && i <= currentPage + delta)) {
        pageNumbers.push(i);
      } else if (pageNumbers[pageNumbers.length - 1] !== "...") {
        pageNumbers.push("...");
      }
    }

    return pageNumbers;
  };

  const handleStatusChange = async (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newStatus = e.target.checked ? 1 : 0;
    const formData = new FormData();
    formData.append("status", newStatus.toString());

    try {
      await updateStatusCompanyProfile(id, formData);
      toast.success(`Company profile status changed to ${newStatus === 1 ? 'active' : 'inactive'} successfully!`);

      // Update the profileList locally to reflect the change
      setProfileList((prevProfiles) =>
        prevProfiles.map((profile) =>
          profile.id === id ? { ...profile, status: newStatus } : profile
        )
      );
    } catch (error) {
      toast.error("Company profile status change unsuccessful!");
    } finally {
    }
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

        <form
  className="col-span-12 sm:col-span-4 flex items-center w-full mt-2 sm:mt-0"
  onSubmit={(e) => {
    e.preventDefault();
    fetchCompanyProfiles(1, searchQuery); // Pass searchQuery when fetching profiles
  }}
>
  <label htmlFor="simple-search" className="sr-only">Search</label>
  <div className="relative w-full">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <IoSearch className="w-4 h-4 text-gray-500" />
    </div>
    <input
      type="text"
      id="simple-search"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
      placeholder="Search company name..."
      value={searchQuery}
      onChange={handleSearchChange}
    />
  </div>
  <button
    type="submit"
    className="p-2 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
  >
    <IoSearch className="w-4 h-4" />
  </button>
</form>


        <div className="col-span-12 sm:col-span-6 flex flex-wrap justify-between gap-4">
          <div className="flex flex-wrap gap-2 sm:gap-4">
            <button className="text-opsh-primary border-2 py-1 px-3 border-opsh-primary text-sm rounded-lg hover:bg-opsh-light-blue">
              Bulk Action
            </button>
            <button
              onClick={() => openSearchModal()}
              className="text-white bg-opsh-primary border-2 border-opsh-primary py-1 px-3 text-sm rounded-lg hover:bg-opacity-90"
            >
              Advance Filters
            </button>
            <button className="text-opsh-primary border-2 py-1 px-3 border-opsh-primary text-sm rounded-lg hover:bg-opsh-light-blue">
              All View
            </button>
            <Link to='/companyProfile/create' className="text-white bg-opsh-primary border-2 border-opsh-primary py-1 px-3 text-sm rounded-lg hover:bg-opacity-90">
              Add  Company Profile
            </Link>
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
            <div className="overflow-x-auto">
              <div className="overflow-x-auto">
                <div className="min-w-full bg-opsh-primary/25 rounded-lg">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-12 text-xs sm:text-sm text-center text-opsh-darkgrey">

                    <div className="py-2 font-medium col-span-2">Name</div>
                    <div className="py-2 font-medium col-span-2 ">Category</div>
                    <div className="py-2 font-medium col-span-2 ">Location</div>
                    <div className="py-2 font-medium col-span-2">Phone Number</div>
                    <div className="py-2 font-medium">Team Size</div>
                    <div className="py-2 font-medium ">Establish Date</div>
                    <div className="py-2 font-medium">Status</div>
                    <div className="py-2 font-medium">Action</div>
                  </div>

                  <div className="bg-white divide-y divide-gray-200">
                    {profileList.length > 0 ? (
                      profileList.map((compy, index) => (
                        <div key={index} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-12 items-center text-center py-4 text-xs sm:text-sm">
                          <div className="px-2 sm:px-6 whitespace-nowrap flex items-center col-span-2">
                            <img className="h-8 sm:h-10 w-8 sm:w-10 rounded-full" src={compy.logo} alt="Company logo" />
                            <div className="ml-2 sm:ml-4 text-xs sm:text-sm font-medium text-gray-900 w-32 sm:w-40">
                              {compy.companyName}
                            </div>
                          </div>
                          <div className="px-2 sm:px-6 whitespace-nowrap col-span-2">{compy.category?.name}</div>
                          <div className="px-2 sm:px-6 whitespace-nowrap col-span-2">{compy.location}</div>
                          <div className="px-2 sm:px-6 whitespace-nowrap col-span-2">{compy.phoneNumber}</div>
                          <div className="px-2 sm:px-6 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {teamSize.find(size => size.id == compy.teamSize)?.label}
                            </span>
                          </div>
                          <div className="px-2 sm:px-6 whitespace-nowrap hidden md:block">{compy.formatted_date}</div>
                          <div className="px-2 sm:px-6 whitespace-nowrap">
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" checked={compy.status === 1} onChange={(e) => handleStatusChange(compy.id, e)} />
                              <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#52BD94]" />
                            </label>
                          </div>
                          <div className="px-2 sm:px-6 whitespace-nowrap">
                            <div className="flex gap-1 justify-center items-center">
                              <button className="w-5 sm:w-6 h-5 sm:h-6 text-opsh-darkgrey" onClick={() => openViewModal(compy.id)}>
                                <LuEye />
                              </button>
                              <button className="w-5 sm:w-6 h-5 sm:h-6 text-opsh-darkgrey" onClick={() => navigate(`/companyProfile/Edit/${compy.id}`)}>
                                <MdOutlineEdit />
                              </button>
                              <button className="w-5 sm:w-6 h-5 sm:h-6 text-opsh-darkgrey" onClick={() => openDeleteModal(compy.id)}>
                                <RiDeleteBinLine />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-4 col-span-full">No profiles found.</div>
                    )}
                  </div>
                </div>
              </div>

            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-4">
              <button
                onClick={handlePreviousPage}
                disabled={current_page === 1}
                className="bg-gray-200 px-3 py-1 rounded-md disabled:opacity-50"
              >
                &lt;
              </button>

              {getVisiblePages(current_page, last_page).map((page, index) => (
                <button
                  key={index}
                  onClick={() => handlePageClick(Number(page))}
                  className={`mx-1 px-3 py-1 rounded-md ${page === current_page
                    ? "bg-blue-500 text-white"
                    : page === "..."
                      ? "cursor-default"
                      : "bg-gray-200"
                    }`}
                  disabled={page === "..."}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={handleNextPage}
                disabled={current_page === last_page}
                className="bg-gray-200 px-3 py-1 rounded-md disabled:opacity-50"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
      {isDeleteModalOpen && (
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

{isSearchModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
        <div className="bg-white w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl p-6 rounded-lg max-h-[90vh] overflow-y-auto overflow-auto custom-scrollbar">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-xl font-medium text-opsh-primary">
              Advance Filters
            </h4>
            <button
              onClick={closeModal}
              className="bg-opsh-danger font-medium text-white text-sm py-1 px-3 rounded-md border-2 border-white hover:bg-white hover:text-opsh-danger hover:border-opsh-danger"
            >
              Close (x)
            </button>
          </div>
  
          <div className="grid gap-y-2 mt-2">
            <div className="grid grid-cols-1 gap-y-2 gap-x-3 sm:grid-cols-1 md:grid-cols-3">
              <div className="col-span-1 sm:col-span-2 md:col-span-1">
                <label
                  htmlFor="awardName"
                  className="block text-sm mb-1 font-medium"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="awardName"
                  name="awardName"
                  className="w-full border-opsh-grey rounded px-2 py-[0.275rem] border  text-sm"
                
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="joinedYearDate"
                  className="block text-sm mb-1 font-medium"
                >
                  Category
                </label>
                <Category
              name={"categoryId"}
              onChange={setSelectedCategory}
            />
              </div>
              <div>
                <label
                  htmlFor="joinedYearDate"
                  className="block text-sm mb-1 font-medium"
                >
                  Team Size
                </label>
                <Select
              name="teamSize"
              onChange={setSelectedTeamSize}
              data={teamSize}
            />
              </div>
              
              <div>
                <label
                  htmlFor="joinedYearDate"
                  className="block text-sm mb-1 font-medium"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="awardName"
                  name="awardName"
                   className="w-full border-opsh-grey rounded px-2 py-[0.275rem] border  text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="joinedYearDate"
                  className="block text-sm mb-1 font-medium"
                >
                 Phone Number
                </label>
                <input
                  type="text"
                  id="awardName"
                  name="awardName"
                  className="w-full border-opsh-grey rounded px-2 py-[0.275rem] border  text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="joinedYearDate"
                  className="block text-sm mb-1 font-medium"
                >
                 Est. Since
                </label>
                <input
                  type="date"
                  id="awardName"
                  name="awardName"
                   className="w-full border-opsh-grey rounded px-2 py-[0.275rem] border  text-sm"
                />
              </div>
            </div>
            <div className="flex justify-end mb-2">
            <button
              onClick={closeModal}
              className="bg-opsh-success text-white py-1 px-6 mt-1  rounded-md border-2 border-white  hover:bg-opsh-primary flex items-center gap-1 "
            >
             <IoSearch />
              search
            </button>
          </div>
          </div>
        </div>
      </div>
      )}

      {/* Modal for viewing profiles */}
      {isModalOpen && (
        <ViewModal
          isOpen={isModalOpen}
          onClose={closeModal}
          profileId={selectedProfileId}
          onDelete={handleDelete}
          profileToDelete={profileToDelete}
        />
      )}
    </div>
  );
};

export default ProfileList;
