import React, { useState } from 'react';
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import helloImage from '../../assets/auth/hello.avif';
import { FaTachometerAlt, FaAngleRight } from 'react-icons/fa';
import { IoSettingsOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
interface SidebarProps {
    isExpand: boolean;
    setIsExpand: (isExpand: boolean) => void;
}
const Sidebar: React.FC<SidebarProps> = ({ isExpand }) => {
    const [submenuStates, setSubmenuStates] = useState<{ [key: string]: boolean }>({
    });
    const toggleSubmenu = (submenu: string) => {
        setSubmenuStates(prevStates => ({
            ...prevStates,
            [submenu]: !prevStates[submenu]
        }));
    };

    return (
        <nav role="navigation" className={`bg-dark border-r border-y-opsh-darkgrey-100 shadow-sm duration-300 ease-in-out md:translate-x-0 ${isExpand ? "bg-slate-50 w-72" : "bg-slate-50 w-20"}`}>
            <div className="relative h-screen">
                <SimpleBar style={{ height: "100%" }}>
                    <div className="text-slate-500">
                        <div className="mt-8 flex flex-col items-center overflow-x-hidden">
                            <a href="/" className={`text-center flex flex-col items-center justify-center`}>
                                <div className={`rounded-full border-4 border-white overflow-hidden duration-300 ${isExpand ? "h-28 w-28" : "h-12 w-12"}`}>
                                    <img src={helloImage} className="block" alt="profile" />
                                </div>
                                <div className={`text-base font-semibold text-slate-700 mt-3 truncate duration-300 ${isExpand ? "" : "w-0 h-0 opacity-0"}`} />
                                <div className={`duration-300 text-sm text-slate-500 truncate ${isExpand ? "" : "w-0 h-0 opacity-0"}`} />
                            </a>
                        </div>
                        <div className="mt-3 mb-5 p-0">
                            <ul className="list-none text-sm font-normal px-3">
                                <li>
                                    <a role="button" tabIndex={0} id="dashboard" className="group m-0 flex cursor-pointer rounded-lg items-center justify-between h-12 py-0 pr-3 mb-1 focus:outline-none pl-4 text-slate-500 hover:bg-slate-300/20">
                                        <div className="flex items-center gap-3">
                                            <FaTachometerAlt className="h-5 w-5 text-current" />
                                            {isExpand ? (<div className="truncate">Dashboard</div>) : null}
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a role="button" tabIndex={0} id="settings" className="group m-0 flex cursor-pointer rounded-lg items-center justify-between h-12 py-0 pr-3 mb-1 focus:outline-none pl-4 text-slate-500 hover:bg-slate-300/20" 
                                    onClick={() => toggleSubmenu('settings')}>
                                        <div className="flex items-center gap-3">
                                            <IoSettingsOutline className="h-5 w-5 text-current" />
                                            {isExpand ? <div className="truncate">Settings</div> : null}
                                        </div>
                                        {isExpand ? <FaAngleRight /> : null}
                                    </a>
                                    <ul className={`overflow-hidden duration-300 ease-in-out ${submenuStates.settings ? "max-h-40" : "max-h-0"}`}>
                                        <li>
                                            <a role="button" tabIndex={0} id="rfq" className={`group m-0 flex cursor-pointer rounded-lg items-center justify-between h-12 py-0 pr-3 mb-1 focus:outline-none ${isExpand ? 'pl-11' : 'pl-7'} text-slate-500 hover:bg-slate-300/20`}>
                                                <div className="flex items-center gap-3">
                                                    <ImProfile className="h-5 w-4 text-current" />
                                                    {isExpand ? <div className="truncate">Profile</div> : null}
                                                </div>
                                            </a>
                                        </li>
                                        {/* Add more submenu items here */}
                                    </ul>
                                </li>
                                {/* Add more main menu items here */}
                            </ul>
                        </div>
                    </div>
                </SimpleBar>
            </div>
        </nav>
    );
};

export default Sidebar;
