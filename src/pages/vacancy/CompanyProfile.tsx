import { FC } from "react";
import Select from "react-select";
import UploadPhoto from "../../components/uploadPhoto/UploadPhoto";
import CkEditors from "../../components/ckEditors.tsx/CkEditors";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

interface CompanyProfileProps {}

const CompanyProfile: FC<CompanyProfileProps> = ({}) => {
  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h5 className="text-primary font-semibold text-2xl">Vacancy</h5>
          <hr className="border-t-2 border-gray-300 flex-grow hidden sm:block sm:ml-4 mt-2 sm:mt-0" />
        </div>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <h5 className="text-gray-500 text-sm">Working Dashboard</h5>
          <h5 className="text-gray-500 text-sm">Statistics Dashboard</h5>
        </div>
      </div>

      <UploadPhoto />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-1"
            htmlFor="company-name"
          >
            Company Name
          </label>
          <input
            className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-700 focus:ring-primary focus:ring-1"
            id="company-name"
            type="text"
            placeholder="Company Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-1"
            htmlFor="category"
          >
            Category
          </label>
          <Select options={options} id="category" />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-1"
            htmlFor="company-name"
          >
            Email Address
          </label>
          <input
            className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-700 focus:ring-primary focus:ring-1"
            id="company-name"
            type="text"
            placeholder="Company Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-1"
            htmlFor="company-name"
          >
            Phone Number
          </label>
          <input
            className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-700 focus:ring-primary focus:ring-1"
            id="company-name"
            type="text"
            placeholder="Company Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-1"
            htmlFor="company-name"
          >
            Website
          </label>
          <input
            className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-700 focus:ring-primary focus:ring-1"
            id="company-name"
            type="text"
            placeholder="Company Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-1"
            htmlFor="company-name"
          >
            Location
          </label>
          <input
            className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-700 focus:ring-primary focus:ring-1"
            id="company-name"
            type="text"
            placeholder="Company Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-1"
            htmlFor="company-name"
          >
            Est. Since
          </label>
          <input
            className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-700 focus:ring-primary focus:ring-1"
            id="company-name"
            type="date"
            placeholder="Company Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-1"
            htmlFor="category"
          >
            Team Size
          </label>
          <Select options={options} id="category" />
        </div>
      </div>
      <CkEditors />
    </div>
  );
};

export default CompanyProfile;
