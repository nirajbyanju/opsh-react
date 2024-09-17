import { FC, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import profile from "../../../assets/auth/profile.jpg";
import { LuPhoneCall } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { PiClockUser } from "react-icons/pi";
import { RiGraduationCapLine } from "react-icons/ri";
import { LiaUserClockSolid } from "react-icons/lia";
import { MdCalendarMonth } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { RiUserFollowLine } from "react-icons/ri";
import { PiUserList } from "react-icons/pi";
import { TbAward } from "react-icons/tb";
import { PiCertificate } from "react-icons/pi";
import Education from "./Education";
import Experience from "./Experience";
import Training from "./Training";
import Award from "./Award";
import Certificate from "./Certificate";
import Information from "./Information";

interface CvInfoProps {}

const CvInfo: FC<CvInfoProps> = () => {
  const [activeTab, setActiveTab] = useState("Information");
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };
  return (
    <div className="flex flex-col items-center bg-gray-100 w-full">
      <div className="bg-opsh-primary/25 py-3 w-full">
        <div className="grid grid-cols-12 gap-9 px-9 items-center justify-center">
          {/* Profile and contact info */}
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

          {/* Bio and experience */}
          <div className="col-span-12 md:col-span-5">
            <p className="text-xs text-justify mb-3">
              Hello, my name is Nicole Wells, a web developer from Portland. In
              pharetra orci dignissim, blandit mi semper, ultricies diam.
              Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla
              id orci laoreet tempor non consequat enim. Sed vitae aliquam
              velit. Aliquam ante erat, blandit at pretium.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex gap-1 items-center">
                <MdCalendarMonth className="text-opsh-primary" />
                <p className="text-sm">Experience: 0-2 Years</p>
              </div>
              <div className="flex gap-1 items-center">
                <RiGraduationCapLine className="text-opsh-primary" />
                <p className="text-sm">Education Level: Master Level</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              <div className="flex gap-1 items-center">
                <PiClockUser className="text-opsh-primary" />
                <p className="text-sm">Age: 33 Years</p>
              </div>
              <div className="flex gap-1 items-center">
                <LiaUserClockSolid className="text-opsh-primary" />
                <p className="text-sm">Experience: 4 years</p>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex gap-1 items-center">
                <PiClockUser className="text-opsh-primary" />
                <p className="text-sm">Skills</p>
              </div>
              <div className="mt-2 flex gap-2">
                <span className="px-3 rounded-md text-sm text-opsh-muted bg-white">
                  PHP
                </span>
                <span className="px-3 rounded-md text-sm text-opsh-muted bg-white">
                  Laravel
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  px-2 shadow-md mt-3">
        <div className="bg-opsh-primary/25 rounded-md">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-opsh-darkgrey">
            <li className="me-2">
              <button
                className={`inline-flex items-center justify-center p-4 gap-2 group border-b-2 ${
                  activeTab === "Information"
                    ? "border-opsh-secondary text-opsh-secondary"
                    : "border-transparent hover:text-opsh-secondary hover:border-opsh-secondary"
                }`}
                onClick={() => handleTabClick("Information")}
              >
                <FaRegUserCircle className="text-xl" />
                Information
              </button>
            </li>
            <li className="me-2">
              <button
                className={`inline-flex items-center justify-center p-4 gap-2 group border-b-2 ${
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
                className={`inline-flex items-center justify-center p-4 gap-2 group border-b-2 ${
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
                className={`inline-flex items-center justify-center gap-2 p-4 group border-b-2 ${
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
                className={`inline-flex items-center justify-center gap-2 p-4 group border-b-2 ${
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
                className={`inline-flex items-center justify-center gap-2 p-4 group border-b-2 ${
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
        <div className="mt-3">
          {activeTab === "Information" && (
            <div>
              {" "}
              <Information />
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

export default CvInfo;
