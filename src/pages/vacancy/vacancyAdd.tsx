import { FC } from "react";
import Tags from "../../components/Tags/Tags";
import CkEditors from "../../components/ckEditors.tsx/CkEditors";
import UploadPhoto from "../../components/uploadPhoto/UploadPhoto";
import "./vacancy.scss";

const VacancyAdd: FC = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col gap-4 sm:flex-row items-center mb-4">
        <h5 className="text-primary font-medium text-xl">Vacancy</h5>
        <hr className="border-t-1 border-gray-300 flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto" />
        <h5 className="text-muted text-sm">Working Dashboard</h5>
        <h5 className="text-muted text-sm">Statistics Dashboard</h5>
      </div>
      <UploadPhoto />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="mb-2">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="title">
            Vacancy Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter Vacancy Title"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
          >
            <option>Select Category</option>
            <option>IT</option>
            <option>Finance</option>
            <option>Marketing</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="company">
            Company
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="company"
          >
            <option>Select Company</option>
            <option>Company A</option>
            <option>Company B</option>
          </select>
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="vacancy-type"
          >
            Vacancy Type
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="vacancy-type"
          >
            <option>Select Type</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </select>
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="vacancy-level"
          >
            Vacancy Level
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="vacancy-level"
          >
            <option>Select Level</option>
            <option>Entry</option>
            <option>Mid</option>
            <option>Senior</option>
          </select>
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Enter Location"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="website">
            Website
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="website"
            type="url"
            placeholder="https://"
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter Email"
          />
        </div>
      </div>
      <div className="">
        <h2 className="block text-gray-700 text-sm mb-2">Vacancy Tags</h2>
        <Tags />
      </div>

      <div className="mt-4">
        <label
          className="block text-gray-700 text-sm mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <CkEditors />
      </div>
    </div>
  );
};

export default VacancyAdd;
