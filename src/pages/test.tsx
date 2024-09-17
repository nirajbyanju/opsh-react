import { useState } from "react";
import { FaMapMarkerAlt, FaClock, FaPhone, FaFacebookF, FaInstagram, FaTiktok, FaTelegram, FaUser } from "react-icons/fa";

const HeaderTop = () => {
  const [isLogoutMenuVisible, setLogoutMenuVisible] = useState(false);

  const toggleLogoutMenu = () => {
    setLogoutMenuVisible(!isLogoutMenuVisible);
  };

  const auth = false; // Simulate whether the user is authenticated or not

  return (
    <div>
      <section>
        <div className="bg-gray-800 text-white">
          <div className="container mx-auto py-2 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row sm:space-x-6 mb-2 sm:mb-0">
                <div className="flex items-center mb-1 sm:mb-0">
                  <FaMapMarkerAlt className="mr-2" />
                  <span className="text-sm">Nepal</span>
                </div>
                <div className="flex items-center mb-1 sm:mb-0">
                  <FaClock className="mr-2" />
                  <span className="text-sm">Sun - Friday 9.30 AM - 6.00 PM</span>
                </div>
                <div className="flex items-center mb-1 sm:mb-0">
                  <FaPhone className="mr-2" />
                  <a href="tel:+977-*********" className="hover:underline text-sm">+977-*********</a>
                </div>
              </div>

              {/* Social Media Icons and User Login */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-gray-300"><FaFacebookF /></a>
                  <a href="#" className="text-gray-400 hover:text-gray-300"><FaInstagram /></a>
                  <a href="#" className="text-gray-400 hover:text-gray-300"><FaTiktok /></a>
                  <a href="#" className="text-gray-400 hover:text-gray-300"><FaTelegram /></a>
                </div>

                {/* User Sign In/Logout */}
                <div className="relative">
                  <div className="cursor-pointer flex items-center" onClick={toggleLogoutMenu}>
                    {!auth ? (
                      <div className="flex items-center text-sm">
                        <FaUser className="mr-2" />
                        <a href="/login" className="hover:underline">Sign In</a>
                      </div>
                    ) : (
                      <div className="flex items-center text-sm">
                        <img src="/path-to-avatar.jpg" alt="user avatar" className="w-8 h-8 rounded-full mr-2" />
                        <span className="hover:underline">Username</span>
                      </div>
                    )}
                  </div>

                  {/* Logout Menu */}
                  {isLogoutMenuVisible && auth && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                      <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a>
                      <a href="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeaderTop;
