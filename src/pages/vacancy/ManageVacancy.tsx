import { HiOutlineViewGrid } from "react-icons/hi";
import { PiListBulletsBold } from "react-icons/pi";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsBuildings } from "react-icons/bs";
import { GrPersonalComputer } from "react-icons/gr";
import { MdOutlineAccountBalance } from "react-icons/md";
import profile from '../../assets/auth/profile.jpg';
import { MdOutlineMedicalServices } from "react-icons/md";
import { RiRestaurant2Fill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TbClockX } from "react-icons/tb";
import { TbCategoryPlus } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { RiGraduationCapLine } from "react-icons/ri";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from 'react';
import { MdOutlineWatchLater, MdOutlineEdit } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";


const ManageVacancy = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [Listing, setIsListing] = useState(1);
    const showlisting = (view: any) => {
        setIsListing(Listing === view ? Listing : view);
    }

    const toggleExpanded = (index: any) => {
        setExpandedIndex(expandedIndex === index ? null : index);
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

    const vacancies = [
        { company: "Triveni Food and Beverage", position: "Manager", type: "Full Time", startDate: "24 Aug 2024", endDate: "24 Aug 2024", location: "Kathmandu-baneshwor Branch", education: "Under Graduate (Bach)" },
        { company: "Triveni Food and Beverage", position: "Manager", type: "Full Time", startDate: "24 Aug 2024", endDate: "24 Aug 2024", location: "Kathmandu-baneshwor Branch", education: "Under Graduate (Bach)" },
        { company: "Triveni Food and Beverage", position: "Manager", type: "Full Time", startDate: "24 Aug 2024", endDate: "24 Aug 2024", location: "Kathmandu-baneshwor Branch", education: "Under Graduate (Bach)" },
        // Add more items if needed
        { company: "Triveni Food and Beverage", position: "Manager", type: "Full Time", startDate: "24 Aug 2024", endDate: "24 Aug 2024", location: "Kathmandu-baneshwor Branch", education: "Under Graduate (Bach)" },
        // Add more items if needed
        { company: "Triveni Food and Beverage", position: "Manager", type: "Full Time", startDate: "24 Aug 2024", endDate: "24 Aug 2024", location: "Kathmandu-baneshwor Branch", education: "Under Graduate (Bach)" },
        // Add more items if needed
        { company: "Triveni Food and Beverage", position: "Manager", type: "Full Time", startDate: "24 Aug 2024", endDate: "24 Aug 2024", location: "Kathmandu-baneshwor Branch", education: "Under Graduate (Bach)" },
        // Add more items if needed
        { company: "Triveni Food and Beverage", position: "Manager", type: "Full Time", startDate: "24 Aug 2024", endDate: "24 Aug 2024", location: "Kathmandu-baneshwor Branch", education: "Under Graduate (Bach)" },
        // Add more items if needed
        { company: "Triveni Food and Beverage", position: "Manager", type: "Full Time", startDate: "24 Aug 2024", endDate: "24 Aug 2024", location: "Kathmandu-baneshwor Branch", education: "Under Graduate (Bach)" },
        // Add more items if needed
        { company: "Triveni Food and Beverage", position: "Manager", type: "Full Time", startDate: "24 Aug 2024", endDate: "24 Aug 2024", location: "Kathmandu-baneshwor Branch", education: "Under Graduate (Bach)" },
        // Add more items if needed
        // Add more items if needed
    ];

    return (
        <div className="px-4">
            {/* Header Section */}
            <div className="flex flex-col gap-4 sm:flex-row items-center mb-2">
                <h5 className="text-opsh-primary font-medium text-md">Manage Jobs!</h5>
                <hr className="border-t-1 border-opsh-grey flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto" />
                <h5 className="text-opsh-muted font-medium text-md">Working Dashboard</h5>
                <h5 className="text-opsh-muted font-medium text-md">Statistics Dashboard</h5>
            </div>

            {/* Main Actions Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between sm:gap-8 items-center mb-2">
                <span className="text-lg font-normal text-opsh-primary">Vacancy Listing</span>
                <form action="" className="relative max-w-md w-full px-4">
                    <input
                        type="text"
                        name="q"
                        className="w-full border h-10 shadow p-4 rounded-full"
                        placeholder="Search"
                    />
                    <button type="submit" className="absolute top-2 right-2">

                    </button>
                </form>
                <div className="flex gap-4">
                    <div className="flex flex-wrap gap-2 sm:gap-4">
                        <button className="text-opsh-primary border-2 py-1 px-3 border-opsh-primary text-sm rounded-lg hover:bg-opsh-light-blue">
                            Bulk Action
                        </button>
                        <button onClick={openModal} className="text-white bg-opsh-primary border-2 border-opsh-primary py-1 px-3 text-sm rounded-lg hover:bg-opacity-90">
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
            <div className="bg-opsh-primary/5 mt-5 rounded-lg">
                <ul className="flex flex-wrap gap-1 text-sm font-medium text-center text-opsh-darkgrey">
                    <li className="border-b-2 border-opsh-secondary">
                        <button
                            className={`inline-flex items-center justify-center py-3 px-5 gap-3 group hover:text-opsh-secondary hover:border-opsh-secondary`}
                        >
                            <GiSettingsKnobs className="text-lg text-opsh-primary" />
                            All
                        </button>
                    </li>
                    <li className="">
                        <button
                            className={`inline-flex items-center justify-center py-3 px-5 gap-3 group border-transparent hover:text-opsh-secondary hover:border-opsh-secondary`}
                        >
                            <BsBuildings className="text-lg text-opsh-primary" />
                            Engineering-Architecture
                        </button>
                    </li>
                    <li className="">
                        <button
                            className={`inline-flex items-center justify-center py-3 px-5 gap-3 group hover:text-opsh-secondary hover:border-opsh-secondary`}
                        >
                            <GrPersonalComputer className="text-lg text-opsh-primary" />
                            IT-Telecommunication
                        </button>
                    </li>
                    <li className="">
                        <button
                            className={`inline-flex items-center justify-center py-3 px-5 gap-3 group hover:text-opsh-secondary hover:border-opsh-secondary`}
                        >
                            <MdOutlineAccountBalance className="text-lg text-opsh-primary" />
                            Accounting-Finance
                        </button>
                    </li>
                    <li className="">
                        <button
                            className={`inline-flex items-center justify-center py-3 px-5 gap-3 group hover:text-opsh-secondary hover:border-opsh-secondary`}
                        >
                            <MdOutlineMedicalServices className="text-lg text-opsh-primary" />
                            Medical-Pharmaceutical
                        </button>
                    </li>
                    <li className="">
                        <button
                            className={`inline-flex items-center justify-center py-3 px-5 gap-3 group hover:text-opsh-secondary hover:border-opsh-secondary`}
                        >
                            <RiRestaurant2Fill className="text-lg text-opsh-primary" />
                            Hospitalit-Travel-Tourism
                        </button>
                    </li>
                </ul>
            </div>
            {Listing === 1 && (
                <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {vacancies.map((vacancy, index) => (
                        <div key={index} >
                            <div className="p-2 border-2 rounded-lg shadow-sm">
                                <div className="flex gap-3 my-3 relative">
                                    <div>
                                        <img src={profile} className="border-2 border-opsh-primary w-12 h-12 rounded-full" />
                                    </div>
                                    <div className="flex-grow">
                                        <h5 className="text-opsh-primary font-medium">{vacancy.company}</h5>
                                        <div className="flex justify-between w-full">
                                            <span className="text-sm text-opsh-grey">{vacancy.position}</span>
                                            <span className="text-sm font-medium text-opsh-primary">{vacancy.type}</span>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0">
                                        <BsThreeDotsVertical />
                                    </div>
                                </div>
                                <hr className="border-t-2 border-opsh-grey/4 mt-2" />
                                <div className="flex justify-between my-2">
                                    <div className="flex text-sm text-opsh-success gap-1 items-center">
                                        <span className="bg-opsh-success/15 p-1 rounded-3xl"><MdOutlineWatchLater /></span>
                                        {vacancy.startDate}
                                    </div>
                                    <div className="flex text-sm text-opsh-danger gap-1 items-center">
                                        <span className="bg-opsh-danger/15 p-1 rounded-3xl"><TbClockX /></span>
                                        {vacancy.endDate}
                                    </div>
                                </div>
                                {expandedIndex === index && (
                                    <div id="expanded">
                                        <hr className="border-t-2 border-opsh-grey/4 mt-2" />
                                        <div className="flex text-sm text-opsh-primary justify-between my-2">
                                            <div className="flex gap-1 items-center">
                                                <span className="bg-opsh-primary/15 p-1 rounded-3xl"><TbCategoryPlus /></span>
                                                Hospitality
                                            </div>
                                            <div className="flex gap-1 items-center">
                                                <span>
                                                    <MdOutlineEdit className="h-6 w-5" />
                                                </span>
                                                Edit
                                            </div>
                                        </div>
                                        <hr className="border-t-2 border-opsh-grey/4 mt-2" />
                                        <div className="flex text-sm text-opsh-primary gap-1 items-center my-2">
                                            <span className="bg-opsh-primary/15 p-1 rounded-3xl"><CiLocationOn /></span>
                                            {vacancy.location}
                                        </div>
                                        <hr className="border-t-2 border-opsh-grey/4 mt-2" />
                                        <div className="flex text-sm text-opsh-primary gap-1 items-center my-2">
                                            <span className="bg-opsh-primary/15 p-1 rounded-3xl"><RiGraduationCapLine /></span>
                                            {vacancy.education}
                                        </div>
                                    </div>
                                )}
                                <div className="flex justify-center mt-4 cursor-pointer" onClick={() => toggleExpanded(index)}>
                                    {expandedIndex === index ? (
                                        <FaAngleUp className="text-opsh-primary" />
                                    ) : (
                                        <span className="flex gap-3 items-center">
                                            View Expanded Mode
                                            <FaAngleDown className="text-opsh-primary" />
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>)}
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
                                    <th className="py-2 font-medium">Category</th>
                                    <th className="py-2 font-medium">Application</th>
                                    <th className="py-2 font-medium">Created & Expired</th>
                                    <th className="py-2 font-medium">Status</th>
                                    <th className="py-2 font-medium">Action</th>
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200">
                                {/* Repeatable Row */}
                                {[...Array(6)].map((_, idx) => (
                                    <tr key={idx}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    src="https://via.placeholder.com/40"
                                                    alt="Company logo"
                                                />
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900 w-40 text-wrap">Triveni Food and Beverage</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">Project Management</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">Kathmandu, Nepal</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">Manager-Assistant Manager</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                           3+ Applied
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            2024-05-07<br></br>
                                            2024-05-07
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input type="checkbox" value="" className="sr-only peer" />
                                                <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-opsh-success "></div>
                                            </label>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <button className="text-blue-600 hover:text-blue-900 mr-4">
                                                <LuEye />
                                            </button>
                                            <button className="text-blue-600 hover:text-blue-900 mr-4">
                                                <GrEdit />
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
                            <h2 className="text-xl md:text-2xl font-semibold">Add Experience Data</h2>
                            <button onClick={closeModal} className="text-red-500 text-sm md:text-base font-medium">
                                Close (X)
                            </button>
                        </div>
                        <form className="">
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-y-2 gap-x-4 md:gap-4">
                                <div className="mb-2 col-span-2">
                                    <label className="block text-gray-700 text-sm mb-1" htmlFor="company-name">
                                        Company Name
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline" id="company-name" type="text" placeholder="Search by Company Name" />
                                </div>
                                <div className="mb-2 col-span-2">
                                    <label className="block text-gray-700 text-sm mb-1" htmlFor="location">
                                        Location
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 text-sm leading-tight focus:outline-none focus:shadow-outline" id="location" type="text" placeholder="Search by Location" />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm mb-1" htmlFor="state">
                                        State
                                    </label>
                                    <div className="relative">
                                        <select className="shadow appearance-none border rounded w-full text-sm py-2 px-4 text-gray-600 leading-tight focus:outline-none focus:shadow-outline" id="state">
                                            <option>New Mexico</option>
                                            <option>Missouri</option>
                                            <option>Texas</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-y-2 gap-x-4 md:gap-4">
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm mb-1" htmlFor="state">
                                    Year
                                    </label>
                                    <div className="relative">
                                        <select className="shadow appearance-none border rounded w-full text-sm py-2 px-4 text-gray-600 leading-tight focus:outline-none focus:shadow-outline" id="state">
                                            <option>Select Year</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm mb-1" htmlFor="state">
                                    From Date
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            className="shadow appearance-none border rounded w-full text-sm py-2 px-4 placeholder text-gray-600 leading-tight focus:outline-none focus:shadow-outline "
                                            id="date" placeholder=""
                                        />
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm mb-1" htmlFor="state">
                                    ToDate
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            className="shadow appearance-none border rounded w-full text-sm py-2 px-4 placeholder text-gray-600 leading-tight focus:outline-none focus:shadow-outline "
                                            id="date" placeholder=""
                                        />
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm mb-1" htmlFor="state">
                                    Job Type
                                    </label>
                                    <div className="relative">
                                        <select className="shadow appearance-none border rounded w-full text-sm py-2 px-4 text-gray-600 leading-tight focus:outline-none focus:shadow-outline" id="state">
                                            <option>Select Type</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-sm mb-1" htmlFor="state">
                                   Job Level
                                    </label>
                                    <div className="relative">
                                        <select className="shadow appearance-none border rounded w-full text-sm py-2 px-4 text-gray-600 leading-tight focus:outline-none focus:shadow-outline" id="state">
                                            <option>Select Level</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
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
}

export default ManageVacancy;
