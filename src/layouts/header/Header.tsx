import React, { useState, useRef, useEffect } from "react";
import sildingImg from "../../assets/auth/sildingImg.png";
import { Link } from "react-router-dom";
import {
  FaCog,
  FaRegUser,
  FaSignOutAlt,
  IoNotificationsOutline,
  IoReorderThreeOutline,
  RiCustomerService2Fill,
} from "@/assets/icons/Icons";

interface HeaderProps {
  isExpand: boolean;
  setIsExpand: (isExpand: boolean) => void;
}

interface Notification {
  id: number;
  message: string;
  created_at: string;
}

const Header: React.FC<HeaderProps> = ({ isExpand, setIsExpand }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownNotificationRef = useRef<HTMLDivElement | null>(null);

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
    if (
      dropdownNotificationRef.current &&
      !dropdownNotificationRef.current.contains(event.target as Node)
    ) {
      setIsNotificationOpen(false);
    }
  };
  const [notifications] = useState<Notification[]>([]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between p-1">
        <div className="flex gap-3" style={{ width: "430px" }}>
          <button
            className="p-1 text-gray-600 hover:bg-gray-100 rounded-md"
            onClick={() => setIsExpand(!isExpand)}
          >
            <IoReorderThreeOutline className="text-3xl" />
          </button>
          <form className="flex items-center w-full">
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
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
        <div className="flex items-center space-x-4 mr-4">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md">
            <IoNotificationsOutline
              className="text-xl"
              onClick={handleNotification}
            />
          </button>
          {/* <button className='p-2 text-gray-600 hover:bg-gray-100 rounded-md'><GrChat className='text-xl' /></button> */}
          <div
            className="relative flex flex-row gap-4 cursor-pointer"
            onClick={handleProfileClick}
          >
            <div className="border-opsh-primary border-2 rounded-full w-8 h-8">
              <img
                src={sildingImg}
                alt="profile-image"
                className="rounded-full"
              />
            </div>
            {isDropdownOpen && (
              <div
              ref={dropdownRef}
              className="absolute right-0 mt-10 z-50 bg-white border border-gray-200 rounded-lg shadow-lg w-64"
            >
              <div className="px-2 py-3 border-b border-gray-100">
                <div className="flex gap-3 items-center">
                  <div className="border-opsh-primary border-2 rounded-full w-10 h-10">
                    <img
                      src={sildingImg}
                      alt="profile-image"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <span className="text-base font-medium text-gray-900 block">
                      Niraj Byanju
                    </span>
                    <span className="text-sm text-gray-500 overflow-hidden">
                      nirajbyanju1234@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            
              <div className="py-2">
                <Link
                  to="/userProfile"
                  className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                >
                  <FaRegUser className="mr-3 text-gray-500" />
                  My Profile
                </Link>
            
                <Link
                  to="/userProfile"
                  className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                >
                  <FaCog className="mr-3 text-gray-500" />
                  Settings
                </Link>
            
                <Link
                  to="/help-support"
                  className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition ease-in-out duration-150"
                >
                  <RiCustomerService2Fill className="mr-3 text-gray-500" />
                  Help & Support
                </Link>
            
                <Link
                  to="/logout"
                  className="flex items-center px-4 py-3 text-sm text-opsh-danger hover:bg-gray-100 transition ease-in-out duration-150"
                >
                  <FaSignOutAlt className="mr-3" />
                  Logout
                </Link>
              </div>
            </div>
            
            )}
            {isNotificationOpen && (
              <div
                ref={dropdownNotificationRef}
                className="absolute right-20 mt-10 w-36 bg-white border border-gray-200 rounded-md shadow-lg"
              >
                {notifications.map((notification) => (
                  <li key={notification.id}>{notification.message}</li>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
