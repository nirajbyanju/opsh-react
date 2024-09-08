import { MdOutlineMail } from "react-icons/md";
import profile from "../../assets/auth/profile.jpg";
import { LuPhoneCall } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { MdCalendarMonth } from "react-icons/md";
import { BsBookmarks } from "react-icons/bs";
import { PiClockUser } from "react-icons/pi";
import { RiGraduationCapLine } from "react-icons/ri";
import { LiaUserClockSolid } from "react-icons/lia";
import { PiMoneyWavy } from "react-icons/pi";
import { PiGenderFemale } from "react-icons/pi";
import { IoLanguage } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FC } from "react";
import { FiFacebook } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { PiTiktokLogo } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";
import { Timeline } from "rsuite";
import "rsuite/dist/rsuite.min.css";

interface CvInfoProps {}

const CvInfo: FC<CvInfoProps> = ({}) => {
  return (
    <div>
      <div className="bg-opsh-primary/25 py-5">
        <div className="grid grid-cols-12 gap-9 ms-9 items-center justify-center">
          {/* First div spanning 3 columns */}
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
            <p className="text-xs text-justify mb-3">
              Hello, my name is Nicole Wells, a web developer from Portland. In
              pharetra orci dignissim, blandit mi semper, ultricies diam.
              Suspendisse malesuada suscipit nunc non volutpat. Sed porta nulla
              id orci laoreet tempor non consequat enim. Sed vitae aliquam
              velit. Aliquam ante erat, blandit at pretium.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex gap-1 items-center">
                <MdCalendarMonth className="text-opsh-primary" />
                <p className="text-sm">Experience: 0-2 Years</p>
              </div>
              <div className="flex gap-1 items-center">
                <RiGraduationCapLine className="text-opsh-primary" />
                <p className="text-sm">Education Level: Master Level</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex gap-1 items-center">
                <PiClockUser className="text-opsh-primary" />
                <p className="text-sm">Age: 33 Year</p>
              </div>
              <div className="flex gap-1 items-center">
                <LiaUserClockSolid className="text-opsh-primary" />
                <p className="text-sm">Experience: 4 year</p>
              </div>
            </div>
            <div>
              <div className="flex gap-1 items-center">
                <PiClockUser className="text-opsh-primary" />
                <p className="text-sm">Skill</p>
              </div>
              <div className="mt-2 flex gap-2">
                <span className="px-3 rounded-md text-sm text-opsh-muted bg-white">
                  php
                </span>
                <span className="px-3 rounded-md text-sm text-opsh-muted bg-white">
                  Laravel
                </span>
              </div>
            </div>
          </div>
          {/* Last div spanning 3 columns */}
          <div className="flex items-center gap-3 justify-center col-span-12 md:col-span-3">
            <button className="bg-opsh-primary text-opsh-background px-4 py-2 rounded-lg">
              Download CV
            </button>
            <button className="bg-opsh-primary/25 text-opsh-primary p-2 rounded-lg text-xl ">
              <BsBookmarks />
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 my-3 mx-3 gap-3">
        <div className="col-span-9">
          <div>
            <h5 className="text-opsh-primary font-semibold text-xl">
              Candidates About
            </h5>
            <div className=" aspect-video ">
              <iframe
                className=" h-72 w-full rounded-lg"
                src="https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528"
                width="100%"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
              <div className="relative space-y-2">
                <div className="mt-2">
                  <h5 className="text-opsh-primary font-semibold text-xl">
                    Education
                  </h5>
                </div>
                <Timeline className="custom-timeline ml-5 pl-4 relative">
                  <Timeline.Item
                    dot={
                      <div
                        className="flex-shrink-0 absolute"
                        style={{ right: "-30px" }}
                      >
                        <div className="bg-blue-500 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold">
                          M
                        </div>
                      </div>
                    }
                  >
                    <div className="flex-grow pl-5">
                      <div className="flex gap-9">
                        <span className="text-2xl font-bold">
                          Bachelors in Fine Arts
                        </span>
                        <div className="bg-opsh-primary/25 py-1 px-4 rounded-full text-opsh-secondary font-bold">
                          2013-2016
                        </div>
                      </div>
                      <p className="text-opsh-primary font-bold">
                        Modern College
                      </p>
                      <p className="text-gray-700 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus.
                      </p>
                    </div>
                  </Timeline.Item>
                  <Timeline.Item
                    dot={
                      <div
                        className="flex-shrink-0 absolute"
                        style={{ right: "-30px" }}
                      >
                        <div className="bg-blue-500 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold">
                          M
                        </div>
                      </div>
                    }
                  >
                    <div className="flex-grow pl-5">
                      <h3 className="text-xl font-bold">
                        Bachelors in Fine Arts
                      </h3>
                      <p className="text-blue-600">Modern College</p>
                      <p className="text-gray-700 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus.
                      </p>
                    </div>
                  </Timeline.Item>
                </Timeline>
              </div>
              <div className="relative space-y-2">
                <div className="mt-1">
                  <h5 className="text-opsh-primary font-semibold text-xl">
                    Education
                  </h5>
                </div>
                <Timeline className="custom-timeline ml-5 pl-4 relative">
                  <Timeline.Item
                    dot={
                      <div
                        className="flex-shrink-0 absolute"
                        style={{ right: "-30px" }}
                      >
                        <div className="bg-blue-500 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold">
                          M
                        </div>
                      </div>
                    }
                  >
                    <div className="flex-grow pl-5">
                      <div className="flex gap-9">
                        <span className="text-2xl font-bold">
                          Bachelors in Fine Arts
                        </span>
                        <div className="bg-opsh-primary/25 py-1 px-4 rounded-full text-opsh-secondary font-bold">
                          2013-2016
                        </div>
                      </div>
                      <p className="text-opsh-primary font-bold">
                        Modern College
                      </p>
                      <p className="text-gray-700 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus.
                      </p>
                    </div>
                  </Timeline.Item>
                  <Timeline.Item
                    dot={
                      <div
                        className="flex-shrink-0 absolute"
                        style={{ right: "-30px" }}
                      >
                        <div className="bg-blue-500 h-12 w-12 rounded-full flex items-center justify-center text-white font-bold">
                          M
                        </div>
                      </div>
                    }
                  >
                    <div className="flex-grow pl-5">
                      <h3 className="text-xl font-bold">
                        Bachelors in Fine Arts
                      </h3>
                      <p className="text-blue-600">Modern College</p>
                      <p className="text-gray-700 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus.
                      </p>
                    </div>
                  </Timeline.Item>
                </Timeline>
              </div>
              <div className="relative space-y-2">
                <div className="mt-1">
                  <h5 className="text-opsh-primary font-semibold text-xl">
                    Certificate
                  </h5>
                </div>
                <div className="grid grid-cols-12 gap-2">
                  <div className="col-span-3">
                    <img src={profile} alt="Profile" />
                    <p>Certificate for Training of First new corners</p>
                  </div>
                  <div className="col-span-3">
                    <img src={profile} alt="Profile" />
                    <p>Certificate for Training of First new corners</p>
                  </div>
                  <div className="col-span-3">
                    <img src={profile} alt="Profile" />
                    <p>Certificate for Training of First new corners</p>
                  </div>
                  <div className="col-span-3">
                    <img src={profile} alt="Profile" />
                    <p>Certificate for Training of First new corners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="bg-opsh-primary/25 py-3 mt-6 px-4 rounded-lg">
            <div className="flex gap-2">
              <div className="">
                <LiaUserClockSolid className="text-opsh-primary text-lg" />
              </div>
              <div>
                <p className="text-sm font-bold">Experience:</p>
                <span className="text-sm font-medium"> 4 year</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="">
                <PiClockUser className="text-opsh-primary text-lg" />
              </div>
              <div>
                <p className="text-sm font-bold">Age:</p>
                <span className="text-sm font-medium"> 28 Years</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="">
                <PiMoneyWavy className="text-opsh-primary text-lg" />
              </div>
              <div>
                <p className="text-sm font-bold">Expected Salary:</p>
                <span className="text-sm font-medium"> 36k - 40K</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="">
                <PiGenderFemale className="text-opsh-primary text-lg" />
              </div>
              <div>
                <p className="text-sm font-bold">Gender:</p>
                <span className="text-sm font-medium">Female</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="">
                <RiGraduationCapLine className="text-opsh-primary text-lg" />
              </div>
              <div>
                <p className="text-sm font-bold">Education Level:</p>
                <span className="text-sm font-medium">Master Degree</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="">
                <IoLanguage className="text-opsh-primary text-lg" />
              </div>
              <div>
                <p className="text-sm font-bold">Language:</p>
                <span className="text-sm font-medium"> English</span>
              </div>
            </div>
          </div>
          <div className="bg-opsh-primary/25 py-3 px-4 mt-4 rounded-lg">
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold text-lg">Professional Skills</h5>
              <div className="flex gap-3 flex-wrap">
                <span className="bg-white text-opsh-grey text-sm px-3 py-1 rounded-lg">
                  Php
                </span>
                <span className="bg-white text-opsh-grey text-sm px-3 py-1 rounded-lg">
                  Laravel
                </span>
                <span className="bg-white text-opsh-grey text-sm px-3 py-1 rounded-lg">
                  Mysql
                </span>
                <span className="bg-white text-opsh-grey text-sm px-3 py-1 rounded-lg">
                  Php
                </span>
                <span className="bg-white text-opsh-grey text-sm px-3 py-1 rounded-lg">
                  Laravel
                </span>
                <span className="bg-white text-opsh-grey text-sm px-3 py-1 rounded-lg">
                  Mysql
                </span>
              </div>
            </div>
          </div>

          <div className="bg-opsh-primary/25 py-3 px-4 mt-4 rounded-lg">
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold text-lg">Social Media</h5>
              <div className="flex gap-3 flex-wrap">
                <Link to="/niraj" className="text-2xl">
                  <FaInstagram />
                </Link>
                <Link to="/niraj" className="text-2xl">
                  <FiFacebook />
                </Link>
                <Link to="/niraj" className="text-2xl">
                  <BsWhatsapp />
                </Link>
                <Link to="/niraj" className="text-2xl">
                  <PiTiktokLogo />
                </Link>
                <Link to="/niraj" className="text-2xl">
                  <BsTwitterX />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvInfo;
