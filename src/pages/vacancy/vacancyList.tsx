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


const VacancyList = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [Listing, setIsListing] = useState(1);
    const showlisting = (view:any) => {
        setIsListing(Listing === view ? Listing : view);
    }

    const toggleExpanded = (index:any) => {
        setExpandedIndex(expandedIndex === index ? null : index);
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
                <h5 className="text-opsh-primary font-medium text-md">Basic Information</h5>
                <hr className="border-t-1 border-opsh-grey flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto" />
                <h5 className="text-opsh-muted font-medium text-md">Working Dashboard</h5>
                <h5 className="text-opsh-muted font-medium text-md">Statistics Dashboard</h5>
            </div>

            {/* Main Actions Section */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between sm:gap-8 items-center mb-2">
                <span className="text-lg font-normal text-opsh-primary">Vacancy List</span>
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
                        <button className="text-white bg-opsh-primary border-2 border-opsh-primary py-1 px-3 text-sm rounded-lg hover:bg-opacity-90">
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
                        <button onClick={()=>showlisting(1)}>
                            <HiOutlineViewGrid className="text-3xl cursor-pointer hover:text-opsh-secondary" />
                        </button>
                        <button onClick={()=>showlisting(2)}>
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
            {Listing ===2 && (
            <div className="">


                {/* Table */}
                <div className=" overflow-x-auto">
                    <table>
                        <thead className="bg-opsh-primary/5 mt-5 rounded-lg">
                            <tr className="text-sm text-center text-opsh-darkgrey">
                                <th className="py-2 font-medium">Name</th>
                                <th className="py-2 font-medium">Position</th>
                                <th className="py-2 font-medium">Location</th>
                                <th className="py-2 font-medium">Category</th>
                                <th className="py-2 font-medium">Job Types</th>
                                <th className="py-2 font-medium">Dateline</th>
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
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Full Time
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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


        </div>
    );
}

export default VacancyList;
