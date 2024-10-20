import Select from "@/components/select/select";
import { tittleName } from "@/data/tittleName";
import { useState } from "react";

const profile = () => {
const [profile, setProfile] = useState<any>(null);
console.log(profile);
  return (
    <div className="w-full mx-auto bg-white sm:py-4 sm:px-5 2xl:px-6 rounded-lg shadow">
      <div className="flex flex-col sm:flex-row items-center mb-2">
        <h2 className="text-sm 2xl:text-base font-medium text-opsh-primary">
          Basic Information
        </h2>
        <hr className="border-t-2 border-opsh-primary flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto placeholder:text-sm placeholder:font-thin" />
      </div>
      <form>
        <div className="mb-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs 2xl:text-sm font-medium text-opsh-darkgrey">
                User ID
              </label>
              <input
                type="text"
                placeholder="Placeholder"
                className="mt-1 block w-full p-1 border border-gray-300 rounded placeholder:text-sm placeholder:font-thin"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <Select
              name="teamSize"
              onChange={setProfile}
              data={tittleName}
            />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                placeholder="Placeholder"
                className="mt-1 block w-full p-1 border border-gray-300 rounded placeholder:text-sm placeholder:font-thin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Middle Name
              </label>
              <input
                type="text"
                placeholder="Placeholder"
                className="mt-1 block w-full p-1 border border-gray-300 rounded placeholder:text-sm placeholder:font-thin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Placeholder"
                className="mt-1 block w-full p-1 border border-gray-300 rounded placeholder:text-sm placeholder:font-thin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Date of Birth (A.D.)
              </label>
              <input
                type="date"
                className="mt-1 block w-full p-1 border border-gray-300 rounded placeholder:text-sm placeholder:font-thin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Marital Status
              </label>
              <select className="mt-1 block w-full p-1 border border-gray-300 rounded placeholder:text-sm placeholder:font-thin">
                <option>Select</option>
                <option>Single</option>
                <option>Married</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select className="mt-1 block w-full p-1 border border-gray-300 rounded placeholder:text-sm placeholder:font-thin">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Placeholder"
                className="mt-1 block w-full p-1 border border-gray-300 rounded placeholder:text-sm placeholder:font-thin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Placeholder"
                className="mt-1 block w-full p-1 border border-gray-300 rounded placeholder:text-sm placeholder:font-thin"
              />
            </div>
          </div>
        </div>
        <div className="mb-5">
          <div className="flex flex-col sm:flex-row items-center mb-4">
            <h2 className="ext-sm 2xl:text-base font-medium text-opsh-primary">
              Location Information
            </h2>
            <hr className="border-t-2 border-opsh-primary flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto placeholder:text-sm placeholder:font-thin" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <select className="mt-1 block w-full p-1 border border-gray-300 rounded placeholder:text-sm placeholder:font-thin">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                State / Province
              </label>
              <input
                type="text"
                placeholder="Placeholder"
                className="mt-1 block w-full p-1 border border-gray-300 rounded placeholder:text-sm placeholder:font-thin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                District
              </label>
              <input
                type="text"
                placeholder="Placeholder"
                className="mt-1 block w-full p-1 border border-gray-300 rounded placeholder:text-sm placeholder:font-thin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Local Bodies
              </label>
              <input
                type="text"
                placeholder="Placeholder"
                className="mt-1 block w-full p-1 border border-gray-300 rounded placeholder:text-sm placeholder:font-thin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Street Name
              </label>
              <input
                type="text"
                placeholder="Placeholder"
                className="mt-1 block w-full p-1 border border-gray-300 rounded placeholder:text-sm placeholder:font-thin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Postal / Zip Code
              </label>
              <input
                type="text"
                placeholder="Placeholder"
                className="mt-1 block w-full p-1 border border-gray-300 rounded placeholder:text-sm placeholder:font-thin"
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-center mb-4">
            <h2 className="ext-sm 2xl:text-base font-medium text-opsh-primary">
              Additional Information
            </h2>
            <hr className="border-t-2 border-opsh-primary flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto placeholder:text-sm placeholder:font-thin" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nationality
              </label>
              <input
                type="text"
                placeholder="Placeholder"
                className="mt-1 block w-full p-1 border border-gray-300 rounded placeholder:text-sm placeholder:font-thin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Religion
              </label>
              <input
                type="text"
                placeholder="Placeholder"
                className="mt-1 block w-full p-1 border border-gray-300 rounded placeholder:text-sm placeholder:font-thin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Language
              </label>
              <select className="mt-1 block w-full p-1 border border-gray-300 rounded placeholder:text-sm placeholder:font-thin ">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Driving License
              </label>
              <select className="mt-1 block w-full p-1 border border-gray-300 rounded">
                <option>Select</option>
              </select>
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex items-center space-x-4">
              <label className="block text-sm font-medium text-gray-700">
                Two Wheeler
              </label>
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <label className="block text-sm font-medium text-gray-700">
                Four Wheeler
              </label>
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-5">
          <button
            type="button"
            className="px-5 py-1 bg-opsh-danger text-white rounded hover:bg-red-700"
          >
           Reset & Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-1 flex items-center gap-1 bg-opsh-success text-white rounded hover:bg-green-700"
          >
            Save 
          </button>
        </div>
      </form>
    </div>
  );
};

export default profile;
