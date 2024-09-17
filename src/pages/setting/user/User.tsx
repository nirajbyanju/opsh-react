import { useState } from "react";
import "./User.scss";
import { MdOutlineMail } from "react-icons/md";
import profile from "../../../assets/auth/profile.jpg";
import { LuPhoneCall } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { FaGraduationCap } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import Profile from "./Profile";
import Education from "./Education";
import PersonalSkill from "./PersonalSkill";
import Document from "./Document";

const User = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 w-full">
      <div className="bg-opsh-primary/25 py-5">
        <div className="grid grid-cols-12 gap-9 ms-9 items-center justify-center">
          <div className="flex items-center gap-4 col-span-12 md:col-span-4">
            <img
              src={profile}
              alt="Profile"
              className="w-24 h-24 rounded-full mr-4"
            />
            <div>
              <h2 className="text-sm font-semibold">Niraj Byanju</h2>
              <p className="text-xs text-opsh-secondary">Super Admin</p>
              <div className="flex gap-2 mt-3">
                <MdOutlineMail className="text-opsh-primary text-sm" />
                <span className="leading-4 text-sm">
                  nirajbyanju1234@gmail.com
                </span>
              </div>
              <div className="flex gap-2 mt-2">
                <LuPhoneCall className="text-opsh-primary text-sm" />
                <span className="leading-4 text-sm">+977- 9843906039</span>
              </div>
              <div className="flex gap-2 mt-2">
                <GrLocation className="text-opsh-primary text-sm" />
                <span className="leading-4 text-sm">Bhaktapur, Nepal</span>
              </div>
            </div>
          </div>
          {/* Middle div spanning 6 columns */}
          <div className="col-span-12 md:col-span-5">
          <div className="flex flex-col mt-5 items-center gap-4">
            <div className="flex flex-row gap-4 justify-center">
              <div className="flex flex-col items-center">
                <div className="bg-opsh-primary/25 p-3 rounded-full">
                  <FaGraduationCap className="text-opsh-primary" />
                </div>
                <span className="text-sm mt-2">Learn</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-opsh-primary/25 p-3 rounded-full">
                  <MdCalendarMonth className="text-opsh-primary" />
                </div>
                <span className="text-sm mt-2">Practice</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-opsh-primary/25 p-3 rounded-full">
                  <MdCalendarMonth className="text-opsh-primary" />
                </div>
                <span className="text-sm mt-2">Vacancy</span>
              </div>
            </div>
            <div className="flex flex-row gap-4 justify-center">
              <div className="flex flex-col items-center">
                <div className="bg-opsh-primary/25 p-3 rounded-full">
                  <MdCalendarMonth className="text-opsh-primary" />
                </div>
                <span className="text-sm mt-2">Opportunity</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-opsh-primary/25 p-3 rounded-full">
                  <MdCalendarMonth className="text-opsh-primary" />
                </div>
                <span className="text-sm mt-2">Blogs</span>
              </div>
            </div>
          </div>
          </div>
          <div className="flex items-center gap-3 justify-center col-span-12 md:col-span-3">
          </div>
        </div>
      </div>
      <div className="w-full bg-white px-3 rounded-lg shadow-md">
        

        <div className="bg-opsh-primary/25 mt-3 rounded-lg">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-opsh-darkgrey">
            <li className="me-2">
              <button
                className={`inline-flex items-center justify-center p-4 group border-b-2 ${
                  activeTab === "Profile"
                    ? "border-opsh-secondary text-opsh-secondary"
                    : "border-transparent hover:text-opsh-secondary hover:border-opsh-secondary"
                }`}
                onClick={() => handleTabClick("Profile")}
              >
                <svg
                  className="w-4 h-4 me-2 text-opsh-primary group-hover:text-opsh-secondary"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
                Profile
              </button>
            </li>
            <li className="me-2">
              <button
                className={`inline-flex items-center justify-center p-4 group border-b-2 ${
                  activeTab === "Education"
                    ? "border-opsh-secondary text-opsh-secondary"
                    : "border-transparent hover:text-opsh-secondary hover:border-opsh-secondary"
                }`}
                onClick={() => handleTabClick("Education")}
              >
                <svg
                  className="w-4 h-4 me-2 text-opsh-primary group-hover:text-opsh-secondary"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                Education
              </button>
            </li>
            <li className="me-2">
              <button
                className={`inline-flex items-center justify-center p-4 group border-b-2 ${
                  activeTab === "PersonalSkills"
                    ? "border-opsh-secondary text-opsh-secondary"
                    : "border-transparent hover:text-opsh-secondary hover:border-opsh-secondary"
                }`}
                onClick={() => handleTabClick("PersonalSkills")}
              >
                <svg
                  className="w-4 h-4 me-2 text-opsh-primary group-hover:text-opsh-secondary"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z" />
                </svg>
                Personal Skills
              </button>
            </li>
            <li className="me-2">
              <button
                className={`inline-flex items-center justify-center p-4 group border-b-2 ${
                  activeTab === "Documents"
                    ? "border-opsh-secondary text-opsh-secondary"
                    : "border-transparent hover:text-opsh-secondary hover:border-opsh-secondary"
                }`}
                onClick={() => handleTabClick("Documents")}
              >
                <svg
                  className="w-4 h-4 me-2 text-opsh-primary group-hover:text-opsh-secondary"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                </svg>
                Documents
              </button>
            </li>
          </ul>
        </div>

        <div className="mb-6 mt-2">
          {activeTab === "Profile" && (
            <div
              id="tabs-profile"
              role="tabpanel"
              aria-labelledby="tabs-profile-tab"
            >
              <Profile />
            </div>
          )}
          {activeTab === "Education" && (
            <div
              id="tabs-education"
              role="tabpanel"
              aria-labelledby="tabs-education-tab"
            >
              <Education />
            </div>
          )}
          {activeTab === "PersonalSkills" && (
            <div
              id="tabs-personal-skills"
              role="tabpanel"
              aria-labelledby="tabs-personal-skills-tab"
            >
              <PersonalSkill />
            </div>
          )}
          {activeTab === "Documents" && (
            <div
              id="tabs-documents"
              role="tabpanel"
              aria-labelledby="tabs-documents-tab"
            >
              <Document />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
