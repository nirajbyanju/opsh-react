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
import AdvanceSearch from "./AdvanceSearch";
import { useForm } from "react-hook-form";
import profile from "../../assets/auth/profile.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiGroupLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { LuFilter } from "react-icons/lu";
import { RiUserAddLine } from "react-icons/ri";

const ProfileList: FC = () => {
  const navigate = useNavigate();
  const [Listing, setIsListing] = useState<number>(1);
  const { getAllCompanyProfiles, deleteCompanyProfile, updateStatusCompanyProfile, current_page, last_page } = useCompanyProfileStore();
  const [profileList, setProfileList] = useState<CompanyProfiles[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [profileToDelete, setProfileToDelete] = useState<number | null>(null);
  const [selectedProfileId, setSelectedProfileId] = useState<number | null>(null);
  const [isAdvanceSearchModalOpen, setIsAdvanceSearchModalOpen] = useState(false);
  const { register, handleSubmit, watch } = useForm();
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpanded = (index: any) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };


  const fetchCompanyProfiles = async (page: number = 1, formData: any = "") => {
    try {
      const response = await getAllCompanyProfiles(page, formData);
      setProfileList((response as any).data);
      setIsAdvanceSearchModalOpen(false);
    } catch (error) {
      console.error("Error fetching company profiles:", error);
      setIsAdvanceSearchModalOpen(false);
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
      onClose(); // Close the modal after action
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

  const onClose = () => {
    setIsModalOpen(false);
    setIsDeleteModalOpen(false);
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

      setProfileList((prevProfiles) =>
        prevProfiles.map((profile) =>
          profile.id === id ? { ...profile, status: newStatus } : profile
        )
      );
    } catch (error) {
      toast.error("Company profile status change unsuccessful!");
    }
  };
  const handleSearchChange = (data: any) => {
    fetchCompanyProfiles(1, data);
  };
  const handleSearchName = (data: any) => {
    fetchCompanyProfiles(1, data);
  };
  const selectedStatus = watch("status");
  const statusList = async (data: any) => {
    console.log(data);
    fetchCompanyProfiles(1, data);
  };

  const selectedLimit = watch("limit");
  const limitList = async (data: any) => {
    console.log(data);
    fetchCompanyProfiles(1, data);
  };

  useEffect(() => {
    fetchCompanyProfiles();
  }, []);

  useEffect(() => {
    handleSubmit(limitList)();
  }, [selectedStatus]);

  useEffect(() => {
    handleSubmit(statusList)();
  }, [selectedLimit]);
  return (
    <div className="px-3 py-1">
      <div className="flex flex-col gap-1 md:gap-4 sm:flex-row items-center mb-1">
        <h5 className="text-primary font-medium text-xl">Company Profile</h5>
        <hr className="border-t-1 border-gray-300 flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto" />
        <h5 className="text-sm hidden md:block">Working Dashboard</h5>
        <h5 className="text-opsh-grey  text-sm hidden md:block">Statistics Dashboard</h5>
      </div>
      <div className="grid  grid-cols-12 gap-3 sm:flex-col sm:gap-4 items-center mb-2">
        <div className="sm:col-span-2 text-xl font-medium text-opsh-primary hidden md:block">
          Profile List
        </div>
        <form
          className="col-span-12 md:col-span-4 flex items-center w-full mt-2 sm:mt-0"
          onSubmit={handleSubmit(handleSearchName)}
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
              {...register("companyName")}
            />
          </div>
          <button
            type="submit"
            className="p-2 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            <IoSearch className="w-4 h-4" />
          </button>
        </form>
        <div className="col-span-12 md:col-span-6 flex flex-wrap justify-between md:gap-4">
          <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
            {/* Status Select Form */}
            <form className="flex items-center space-x-2 sm:space-x-4" onSubmit={handleSubmit(statusList)}>
              <select
                {...register("status")}
                className="border-2 py-2 px-3 text-sm rounded-md border-opsh-primary text-opsh-primary hover:bg-opsh-light-blue focus:outline-none focus:ring-opsh-primary"
              >
                <option value="">All</option>
                <option value="1">Active</option>
                <option value="0">Offline</option>
              </select>
            </form>

            {/* Advance Filters Button */}
            <button
              onClick={() => setIsAdvanceSearchModalOpen(true)}
              className="flex items-center justify-center text-white bg-opsh-primary border-2 border-opsh-primary py-2 px-4 text-sm rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-opsh-primary transition-all"
            >
              <span className="hidden sm:block">Advance Filters</span>
              <LuFilter className="block sm:hidden" />
            </button>

            {/* Limit Select Form */}
            <form className="flex items-center space-x-2 sm:space-x-4" onSubmit={handleSubmit(limitList)}>
              <select
                {...register("limit")}
                className="border-2 py-2 px-3 text-sm rounded-md border-opsh-primary text-opsh-primary hover:bg-opsh-light-blue focus:outline-none focus:ring-2 focus:ring-opsh-primary"
              >
                <option value="">Page</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </form>

            {/* Add Company Profile Link */}
            <Link
              to='/companyProfile/create'
              className="flex items-center justify-center text-white bg-opsh-primary border-2 border-opsh-primary py-2 px-4 text-sm rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-opsh-primary transition-all"
            >
              <span className="hidden sm:block">Add Company Profile</span>
              <RiUserAddLine className="block sm:hidden" />
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
        <div className="gap-2">
          <div className="mt-1">
            <div className="overflow-x-auto">
              <div className="min-w-full bg-opsh-primary/25 rounded-md">
                <table className="min-w-full table-auto">
                  {/* Table Headers */}
                  <thead className="bg-opsh-primary/10">
                    <tr className="text-xs text-center text-opsh-darkgrey">
                      <th className="py-2 font-medium w-1/6">Name</th>
                      <th className="py-2 font-medium w-1/6">Category</th>
                      <th className="py-2 font-medium w-1/6">Location</th>
                      <th className="py-2 font-medium w-1/6">Phone Number</th>
                      <th className="py-2 font-medium w-1/12">Team Size</th>
                      <th className="py-2 font-medium w-1/12">Establish Date</th>
                      <th className="py-2 font-medium w-1/12">Status</th>
                      <th className="py-2 font-medium w-1/12">Action</th>
                    </tr>
                  </thead>

                  {/* Table Rows */}
                  <tbody className="bg-white divide-y divide-gray-200">
                    {profileList.length > 0 ? (
                      profileList.map((compy, index) => (
                        <tr key={index} className={`${index % 2 !== 0 ? 'bg-gray-100' : 'bg-white'} text-center text-xs`}>
                          {/* Name and Image */}
                          <td className="px-2 py-2 flex items-center justify-center whitespace-nowrap">
                            <div className="w-8 h-8 rounded-full">
                              <img
                                className="rounded-full object-cover border-2 border-opsh-primary/50"
                                src={compy.logo ? compy.logo : 'https://back.opportunitiessharing.com/logos/1729412162.JPG'}
                                alt="Company logo"
                              />
                            </div>
                            <div className="ml-2 text-xs font-medium text-gray-900 w-32 whitespace-nowrap">
                              {compy.companyName.slice(0, 12)}
                            </div>
                          </td>

                          {/* Category */}
                          <td className="px-2 whitespace-nowrap">{compy.category?.name}</td>

                          {/* Location */}
                          <td className="px-2 whitespace-nowrap">{compy.location.slice(0, 25)}</td>

                          {/* Phone Number */}
                          <td className="px-2 whitespace-nowrap">{compy.phoneNumber}</td>

                          {/* Team Size */}
                          <td className="px-2 whitespace-nowrap">
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {teamSize.find(size => size.id == compy.teamSize)?.label}
                            </span>
                          </td>

                          {/* Establish Date */}
                          <td className="px-2 whitespace-nowrap">{compy.formatted_date}</td>

                          {/* Status */}
                          <td className="px-2 whitespace-nowrap">
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" checked={compy.status === 1} onChange={(e) => handleStatusChange(compy.id, e)} />
                              <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#52BD94]" />
                            </label>
                          </td>

                          {/* Actions */}
                          <td className="px-2 whitespace-nowrap">
                            <div className="flex gap-1.5 justify-center items-center">
                              <button className="text-opsh-darkgrey hover:text-opsh-primary p-1" onClick={() => openViewModal(compy.id)}>
                                <LuEye className="w-4 h-4" />
                              </button>
                              <button className="text-opsh-darkgrey hover:text-opsh-primary p-1" onClick={() => navigate(`/companyProfile/Edit/${compy.id}`)}>
                                <MdOutlineEdit className="w-4 h-4" />
                              </button>
                              <button className="text-opsh-darkgrey hover:text-opsh-primary p-1" onClick={() => openDeleteModal(compy.id)}>
                                <RiDeleteBinLine className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td className="text-center py-4">No profiles found.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>


            {/* Pagination */}
            <div className="flex justify-center items-center mt-6 space-x-2">
              <button
                onClick={handlePreviousPage}
                disabled={current_page === 1}
                className="text-gray-800 font-semibold px-2 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              {getVisiblePages(current_page, last_page).map((page, index) => (
                <button
                  key={index}
                  onClick={() => handlePageClick(Number(page))}
                  className={`px-2 py-2 rounded-lg font-bold transition-all duration-200 ease-in-out 
                  ${page === current_page
                      ? "text-opsh-secondary font-bold"
                      : page === "..."
                        ? "cursor-default text-gray-500"
                        : "font-bold"
                    }`}
                  disabled={page === "..."}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={handleNextPage}
                disabled={current_page === last_page}
                className="text-gray-800 font-semibold px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      )}
      {Listing === 2 && (
        <div>
          <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {profileList.length > 0 ? (
              profileList.map((compy, index) => (
                <div key={index}>
                  <div className="p-2 border-2 rounded-lg shadow-sm">
                    <div className="flex gap-3 my-3 relative">
                      <div>
                        <img
                          src={profile}
                          className="border-2 border-opsh-primary w-12 h-12 rounded-full"
                        />
                      </div>
                      <div className="flex-grow pr-2">
                        <h5 className="text-opsh-primary font-medium">
                          {compy.companyName.slice(0, 15)}
                        </h5>
                        <div className="flex justify-between w-full">
                          <span className="text-xs text-opsh-muted">
                            {compy.category?.name}
                          </span>
                          <span
                            className={`text-xs font-semibold ${compy.status === 1 ? 'text-opsh-success' : 'text-opsh-danger'}`}
                          >
                            {compy.status === 1 ? 'Active' : 'Offline'}
                          </span>

                        </div>
                      </div>
                      <div className="absolute top-0 right-0">
                        <BsThreeDotsVertical />
                      </div>
                    </div>
                    <hr className="border-t-2 border-opsh-grey/4 mt-2" />
                    {expandedIndex === index && (
                      <div id="expanded">
                        <div className="flex justify-between my-2">
                          <div className="flex text-sm text-opsh-success gap-1 items-center">
                            <span className="bg-opsh-success/15 p-1 rounded-3xl">
                              <MdOutlineWatchLater />
                            </span>
                            {compy.formatted_date}
                          </div>
                          <div className="flex text-sm text-opsh-danger gap-1 items-center">
                            <span className="bg-opsh-danger/15 p-1 rounded-3xl">
                              <RiGroupLine />
                            </span>
                            {teamSize.find(size => size.id == compy.teamSize)?.label}
                          </div>
                        </div>
                        <hr className="border-t-2 border-opsh-grey/4 mt-2" />
                        <div className="flex text-sm text-opsh-primary justify-between my-2">
                          <div className="flex gap-1 items-center">
                            <span className="bg-opsh-primary/15 p-1 rounded-3xl">
                              <FiPhoneCall />
                            </span>
                            {compy.phoneNumber}
                          </div>
                          <div className="flex gap-1 items-center group">
                            {/* Hidden buttons that appear on hover */}
                            <div className="flex gap-1.5 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <button className="text-opsh-darkgrey hover:text-opsh-primary p-1" onClick={() => openViewModal(compy.id)}>
                                <LuEye className="w-4 h-4" />
                              </button>
                              <button className="text-opsh-darkgrey hover:text-opsh-primary p-1" onClick={() => navigate(`/companyProfile/Edit/${compy.id}`)}>
                                <MdOutlineEdit className="w-4 h-4" />
                              </button>
                              <button className="text-opsh-darkgrey hover:text-opsh-primary p-1" onClick={() => openDeleteModal(compy.id)}>
                                <RiDeleteBinLine className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <hr className="border-t-2 border-opsh-grey/4 mt-2" />
                        <div className="flex text-sm text-opsh-primary gap-1 items-center my-2">
                          <span className="bg-opsh-primary/15 p-1 rounded-3xl">
                            <CiLocationOn />
                          </span>
                          {compy.location.slice(0, 25)}
                        </div>
                      </div>
                    )}
                    <div
                      className="flex justify-center mt-4 cursor-pointer"
                      onClick={() => toggleExpanded(index)}
                    >
                      {expandedIndex === index ? (
                        <div>
                          <hr className="border-t-2 border-opsh-grey/4 mt-2" />
                          <FaAngleUp className="text-opsh-primary" />
                        </div>
                      ) : (
                        <span className="flex gap-3 items-center text-opsh-grey font-sm">
                          View in Expanded Mode
                          <FaAngleDown className="text-opsh-grey font-semibold" />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-4 col-span-full">No profiles found.</div>
            )}
          </div>
          <div className="flex justify-center items-center mt-6 space-x-2">
            <button
              onClick={handlePreviousPage}
              disabled={current_page === 1}
              className="text-gray-800 font-semibold px-2 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            {getVisiblePages(current_page, last_page).map((page, index) => (
              <button
                key={index}
                onClick={() => handlePageClick(Number(page))}
                className={`px-2 py-2 rounded-lg font-bold transition-all duration-200 ease-in-out 
        ${page === current_page
                    ? "text-opsh-secondary font-bold"
                    : page === "..."
                      ? "cursor-default text-gray-500"
                      : "font-bold"
                  }`}
                disabled={page === "..."}
              >
                {page}
              </button>
            ))}
            <button
              onClick={handleNextPage}
              disabled={current_page === last_page}
              className="text-gray-800 font-semibold px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
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
                  onClick={onClose}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <AdvanceSearch
        isOpen={isAdvanceSearchModalOpen}
        onClose={() => setIsAdvanceSearchModalOpen(false)}
        onSubmit={handleSearchChange}
      />

      {isModalOpen && (
        <ViewModal
          isOpen={isModalOpen}
          onClose={onClose}
          profileId={selectedProfileId}
          onDelete={handleDelete}
          profileToDelete={profileToDelete}
        />
      )}
    </div>
  );
};

export default ProfileList;
