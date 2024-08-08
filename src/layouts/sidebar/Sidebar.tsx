import React, { useState, useEffect } from 'react';
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Logo from '../../assets/auth/Logo.jpg';
import { FaTachometerAlt, FaChevronDown } from 'react-icons/fa';
import { IoSettingsOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { Link, useLocation } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { FiUsers } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { LuUserSquare2 } from "react-icons/lu";

interface SidebarProps {
    isExpand: boolean;
    setIsExpand: (isExpand: boolean) => void;
}

interface MenuItem {
    name: string;
    icon: JSX.Element;
    path: string;
    submenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
    {
        name: 'Dashboard',
        icon: <FaTachometerAlt className="h-5 w-5 text-current" />,
        path: '/dashboard',
    },
    {
        name: 'User',
        icon: <FiUsers className="h-5 w-5 text-current" />,
        path: '/settings',
        submenu: [
            {
                name: 'Analytics Dashboard',
                icon: <LuUserSquare2 className="h-5 w-4 text-current" />,
                path: '/analyticsDashboard',
            },
            {
                name: 'Roles & Permission',
                icon: <FaRegUserCircle className="h-5 w-4 text-current" />,
                path: '/rolesPermission',
            },
        ],
    },
    {
        name: 'Settings',
        icon: <IoSettingsOutline className="h-5 w-5 text-current" />,
        path: '/settings',
        submenu: [
            {
                name: 'Profile',
                icon: <ImProfile className="h-5 w-4 text-current" />,
                path: '/userProfile',
            },
            {
                name: 'Profile',
                icon: <ImProfile className="h-5 w-4 text-current" />,
                path: '/userProfiles',
            },
        ],
    },
];

const Sidebar: React.FC<SidebarProps> = ({ isExpand }) => {
    const location = useLocation();
    const [submenuStates, setSubmenuStates] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        const path = location.pathname;
        const newSubmenuStates: { [key: string]: boolean } = {};

        menuItems.forEach(item => {
            if (item.submenu) {
                item.submenu.forEach(subItem => {
                    if (path.includes(subItem.path)) {
                        newSubmenuStates[item.name] = true;
                    }
                });
            }
        });

        setSubmenuStates(newSubmenuStates);
    }, [location]);

    const toggleSubmenu = (name: string) => {
        setSubmenuStates(prevStates => ({
            ...prevStates,
            [name]: !prevStates[name],
        }));
    };

    

    return (
        <nav role="navigation" className={`bg-dark border-r border-y-opsh-darkgrey-100 shadow-sm duration-300 ease-in-out ${isExpand ? "bg-slate-50 w-60" : "bg-slate-50 w-16"}`}>
            <div className="relative h-screen flex flex-col">
                <SimpleBar style={{ height: "calc(100% - 56px)" }}>
                    <div className="text-slate-500">
                        <div className="mt-3 flex flex-col items-center overflow-x-hidden">
                            <a href="/" className="text-center flex flex-row items-center justify-center">
                                <div className={`overflow-hidden duration-300 ${isExpand ? "h-20 w-20" : "h-12 w-12"}`}>
                                    <img src={Logo} className="block w-full h-full object-cover" alt="profile" />
                                </div>
                                <div className={`text-3xl font-semibold text-opsh-primary mt-3 truncate duration-300 ${isExpand ? "" : "w-0 h-0 opacity-0"}`}>OpSh</div>
                            </a>
                        </div>
                        <div className="mt-3 mb-5 p-0">
                            <ul className="list-none text-sm font-normal px-1">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        {item.submenu ? (
                                            <>
                                                <button role="button" tabIndex={0} id={item.name} className={`group m-0 flex cursor-pointer rounded-lg items-center justify-between w-full h-12 py-0 pr-3 mb-1 focus:outline-none pl-3 text-slate-500 menuHover ${location.pathname.includes(item.path) ? 'menuActive' : ''}`} onClick={() => toggleSubmenu(item.name)} data-tip={item.name} data-for="tooltip">
                                                    <div className="flex items-center gap-3">
                                                        {item.icon}
                                                        {isExpand && <div className="truncate">{item.name}</div>}
                                                    </div>
                                                    {isExpand && <FaChevronDown className={`transition-transform ${submenuStates[item.name] ? 'rotate-180' : ''}`} />}
                                                </button>
                                                <ul className={`overflow-hidden duration-300 ease-in-out ${submenuStates[item.name] ? "max-h-40" : "max-h-0"}`}>
                                                    {item.submenu.map((subItem, subIndex) => (
                                                        <li key={subIndex}>
                                                            <Link to={subItem.path} role="button" tabIndex={0} id={subItem.name} className={`group flex cursor-pointer rounded-lg items-center justify-between h-12 py-0 pr-1 mb-1 focus:outline-none ${isExpand ? 'pl-4 ml-4' : 'pl-2 ml-2'} text-slate-500 menuHover ${location.pathname === subItem.path ? 'menuActive' : ''}`} data-tip={subItem.name} data-for="tooltip">
                                                                <div className="flex items-center gap-3">
                                                                    {subItem.icon}
                                                                    {isExpand && <div className="truncate">{subItem.name}</div>}
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        ) : (
                                            <Link to={item.path} role="button" tabIndex={0} id={item.name} className={`group m-0 flex cursor-pointer rounded-lg items-center justify-between h-12 py-0 pr-3 mb-1 focus:outline-none pl-3 text-slate-500 menuHover ${location.pathname === item.path ? 'menuActive' : ''}`} data-tip={item.name} data-for="tooltip">
                                                <div className="flex items-center gap-3">
                                                    {item.icon}
                                                    {isExpand && <div className="truncate">{item.name}</div>}
                                                </div>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </SimpleBar>
                <Tooltip id="tooltip" place="right"   delayShow={500} />
            </div>
        </nav>
    );
};

export default Sidebar;
