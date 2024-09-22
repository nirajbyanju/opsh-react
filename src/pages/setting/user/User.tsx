import { useState } from "react";
import "./User.scss";

import profile from "../../../assets/auth/profile.jpg";
import Profile from "./Profile";
import { MdMarkEmailRead } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import {
  PiCertificate,
  TbAward,
  PiUserList,
  RiUserFollowLine,
  FaRegUserCircle,
  MdCalendarMonth,
  RiGraduationCapLine,
  FaGraduationCap,
  LiaUserClockSolid,
  PiClockUser,
} from "@/assets/icons/Icons";
import Education from "../common/Education";
import Experience from "../common/Experience";
import Training from "../common/Training";
import Award from "../common/Award";
import Certificate from "../common/Certificate";

const User = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 w-full">
      <div className="bg-opsh-primary/25 py-1 2xl:py-3 w-full">
        <div className="grid grid-cols-12 gap-9 px-9 items-center justify-center">
          {/* Profile and contact info */}
          <div className="flex items-center justify-center gap-4 col-span-12 md:col-span-4">
            <img
              src={profile}
              alt="Profile"
              className="w-24 h-24 rounded-full mr-4 object-cover"
            />

            <div>
              <h2 className="text-sm 2xl:text-base font-semibold">
                Niraj Byanju
              </h2>
              <p className="text-xs 2xl:text-sm text-opsh-secondary">
                Super Admin
              </p>
              <div className="flex gap-1 mt-3">
                <MdMarkEmailRead className="text-opsh-primary" />
                <span className="leading-4 text-xs 2xl:text-sm">
                  nirajbyanju1234@gmail.com
                </span>
              </div>
              <div className="flex gap-1 mt-2">
                <MdCall className="text-opsh-primary" />
                <span className="leading-4 text-xs 2xl:text-sm">
                  +977- 9843906039
                </span>
              </div>
              <div className="flex gap-1 mt-2">
                <MdLocationOn className="text-opsh-primary" />
                <span className="leading-4 text-xs 2xl:text-sm">
                  Bhaktapur, Nepal
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="text-xxs 2xl:text-sm text-justify mb-1 2xl:mb-3 line-clamp-2 2xl:line-clamp-3">
              Hello, my name is Nicole Wells, a web developer from Portland. In
              pharetra orci dignissim, blandit mi semper, ultricies diam.
              Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla
              id orci laoreet tempor non consequat enim. Sed vitae aliquam
              velit. Aliquam ante erat, blandit at pretium.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex gap-1 items-center">
                <MdCalendarMonth className="text-opsh-primary" />
                <p className="text-xs 2xl:text-sm">Experience: 0-2 Years</p>
              </div>
              <div className="flex gap-1 items-center">
                <RiGraduationCapLine className="text-opsh-primary" />
                <p className="text-xs 2xl:text-sm">
                  Education Level: Master Level
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              <div className="flex gap-1 items-center">
                <PiClockUser className="text-opsh-primary" />
                <p className="text-xs 2xl:text-sm">Age: 33 Years</p>
              </div>
              <div className="flex gap-1 items-center">
                <LiaUserClockSolid className="text-opsh-primary" />
                <p className="text-xs 2xl:text-sm">Experience: 4 years</p>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex gap-1 items-center">
                <PiClockUser className="text-opsh-primary" />
                <p className="text-xs 2xl:text-sm">Skills</p>
              </div>
              <div className="mt-2 flex gap-2">
                <span className="2xl:px-3 px-2 rounded-md text-xs 2xl:text-sm font-bold text-opsh-grey bg-white">
                  PHP
                </span>
                <span className="2xl:px-3 px-2 rounded-md text-xs 2xl:text-sm text-opsh-grey font-bold bg-white">
                  Laravel
                </span>
              </div>
            </div>
          </div>

          {/* Bio and experience */}
          <div className="col-span-12 md:col-span-3">
            <div className="flex flex-col items-center gap-2 2xl:gap-3">
              <div className="flex flex-row gap-4 justify-center">
                <div className="flex flex-col items-center">
                  <div className="bg-opsh-primary/25 p-2 2xl:p-4 rounded-full">
                    <FaGraduationCap className="text-opsh-primary 2xl:text-xl" />
                  </div>
                  <span className="text-xs 2xl:text-sm mt-1">Learn</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-opsh-primary/25 p-2 2xl:p-4 rounded-full">
                    <MdCalendarMonth className="text-opsh-primary 2xl:text-xl" />
                  </div>
                  <span className="text-xs 2xl:text-sm mt-1">Practice</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-opsh-primary/25 p-2 2xl:p-4 rounded-full">
                    <MdCalendarMonth className="text-opsh-primary 2xl:text-xl" />
                  </div>
                  <span className="text-xs 2xl:text-sm mt-1">Vacancy</span>
                </div>
              </div>
              <div className="flex flex-row gap-4 justify-center">
                <div className="flex flex-col items-center">
                  <div className="bg-opsh-primary/25 p-2 2xl:p-4 rounded-full">
                    <MdCalendarMonth className="text-opsh-primary 2xl:text-xl" />
                  </div>
                  <span className="text-xs 2xl:text-sm mt-1">Opportunity</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-opsh-primary/25 p-2 2xl:p-4 rounded-full">
                    <MdCalendarMonth className="text-opsh-primary 2xl:text-xl" />
                  </div>
                  <span className="text-xs 2xl:text-sm mt-1">Blogs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  px-1 shadow-md mt-1 2xl:mt-2">
        <div className="bg-opsh-primary/25 rounded-md">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-opsh-darkgrey">
            <li className="me-2">
              <button
                className={`inline-flex items-center justify-center p-2 2xl:p-4 gap-2 group border-b-2 ${
                  activeTab === "Profile"
                    ? "border-opsh-secondary text-opsh-secondary"
                    : "border-transparent hover:text-opsh-secondary hover:border-opsh-secondary"
                }`}
                onClick={() => handleTabClick("Profile")}
              >
                <FaRegUserCircle className="text-xl" />
                Profile
              </button>
            </li>
            <li className="me-2">
              <button
                className={`inline-flex items-center justify-center p-2 2xl:p-4 gap-2 group border-b-2 ${
                  activeTab === "Education"
                    ? "border-opsh-secondary text-opsh-secondary"
                    : "border-transparent hover:text-opsh-secondary hover:border-opsh-secondary"
                }`}
                onClick={() => handleTabClick("Education")}
              >
                <RiGraduationCapLine className="text-xl" />
                Education
              </button>
            </li>
            <li className="me-2">
              <button
                className={`inline-flex items-center justify-center p-2 2xl:p-4 gap-2 group border-b-2 ${
                  activeTab === "Experience"
                    ? "border-opsh-secondary text-opsh-secondary"
                    : "border-transparent hover:text-opsh-secondary hover:border-opsh-secondary"
                }`}
                onClick={() => handleTabClick("Experience")}
              >
                <RiUserFollowLine className="text-xl" />
                Work & Experience
              </button>
            </li>
            <li className="me-2">
              <button
                className={`inline-flex items-center justify-center gap-2 p-2 2xl:p-4 group border-b-2 ${
                  activeTab === "Traings"
                    ? "border-opsh-secondary text-opsh-secondary"
                    : "border-transparent hover:text-opsh-secondary hover:border-opsh-secondary"
                }`}
                onClick={() => handleTabClick("Traings")}
              >
                <PiUserList className="text-xl" />
                Training & Skill
              </button>
            </li>
            <li className="me-2">
              <button
                className={`inline-flex items-center justify-center gap-2 p-2 2xl:p-4 group border-b-2 ${
                  activeTab === "Award"
                    ? "border-opsh-secondary text-opsh-secondary"
                    : "border-transparent hover:text-opsh-secondary hover:border-opsh-secondary"
                }`}
                onClick={() => handleTabClick("Award")}
              >
                <TbAward className="text-xl" />
                Award
              </button>
            </li>
            <li className="me-2">
              <button
                className={`inline-flex items-center justify-center gap-2 p-2 2xl:p-4 group border-b-2 ${
                  activeTab === "Certificate"
                    ? "border-opsh-secondary text-opsh-secondary"
                    : "border-transparent hover:text-opsh-secondary hover:border-opsh-secondary"
                }`}
                onClick={() => handleTabClick("Certificate")}
              >
                <PiCertificate className="text-xl" />
                Certification
              </button>
            </li>
          </ul>
        </div>

        {/* Tab content */}
        <div className="mt-2 2xl:mt-2">
          {activeTab === "Profile" && (
            <div>
              {" "}
              <Profile />
            </div>
          )}
          {activeTab === "Education" && <Education />}
          {activeTab === "Experience" && <Experience />}
          {activeTab === "Traings" && <Training />}
          {activeTab === "Award" && <Award />}
          {activeTab === "Certificate" && <Certificate />}
        </div>
      </div>
    </div>
  );
};

export default User;
