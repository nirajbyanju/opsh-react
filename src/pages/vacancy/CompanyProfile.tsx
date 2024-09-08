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
      <div className="flex flex-col gap-4 sm:flex-row items-center mb-4">
        <h5 className="text-primary font-medium text-xl">Company Profile</h5>
        <hr className="border-t-1 border-gray-300 flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto" />
        <h5 className="text-muted text-sm">Working Dashboard</h5>
        <h5 className="text-muted text-sm">Statistics Dashboard</h5>
      </div>
      <form action="">
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
        <div className="flex justify-end gap-5 mt-4">
            <button
              type="button"
              className="px-4 py-2 bg-opsh-danger text-white rounded hover:bg-red-700"
            >
              Cancel & Close
            </button>
            <button
              type="submit"
              className="px-5 py-2 flex items-center gap-1 bg-opsh-success text-white rounded hover:bg-green-700"
            >
              Add & Create New
            </button>
            <button
              type="submit"
              className="px-5 py-2 flex items-center gap-1 bg-opsh-success text-white rounded hover:bg-green-700"
            >
              Add Post
            </button>
          </div>
      </form>
    </div>
  );
};

export default CompanyProfile;
