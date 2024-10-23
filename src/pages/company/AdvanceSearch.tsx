import { IoSearch } from "react-icons/io5";
import { useForm } from "react-hook-form";
import Category from "@/components/category/category";
import Select from "@/components/select/select";
import { teamSize } from "@/data/teamSize";

interface AdvanceSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const AdvanceSearch: React.FC<AdvanceSearchProps> = ({ isOpen, onClose, onSubmit }) => {
  const { register, handleSubmit, setValue } = useForm();
  
  const handleSearch = (data: any) => {
    onSubmit(data);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl p-6 rounded-lg max-h-[90vh] overflow-y-auto overflow-auto custom-scrollbar">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-xl font-medium text-opsh-primary">
            Advance Filters
          </h4>
          <button
            onClick={onClose}
            className="bg-opsh-danger font-medium text-white text-sm py-1 px-3 rounded-md border-2 border-white hover:bg-white hover:text-opsh-danger hover:border-opsh-danger"
          >
            Close (x)
          </button>
        </div>

        <form onSubmit={handleSubmit(handleSearch)}>
          <div className="grid gap-y-2 mt-2">
            <div className="grid grid-cols-1 gap-y-2 gap-x-3 sm:grid-cols-1 md:grid-cols-3">
              <div className="col-span-1 sm:col-span-2 md:col-span-1">
                <label htmlFor="companyName" className="block text-sm mb-1 font-medium">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="w-full border-opsh-grey rounded px-2 py-[0.275rem] border text-sm"
                  {...register("companyName")} // register input with react-hook-form
                />
              </div>

              <div>
                <label htmlFor="categoryId" className="block text-sm mb-1 font-medium">
                  Category
                </label>
                <Category
                  name="categoryId"
                  onChange={(val: string) => setValue("categoryId", val)} // update category state in form
                />
              </div>

              <div>
                <label htmlFor="teamSize" className="block text-sm mb-1 font-medium">
                  Team Size
                </label>
                <Select
                  name="teamSize"
                  data={teamSize}
                  onChange={(val: string) => setValue("teamSize", val)} // update team size state in form
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm mb-1 font-medium">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  className="w-full border-opsh-grey rounded px-2 py-[0.275rem] border text-sm"
                  {...register("location")} // register input with react-hook-form
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm mb-1 font-medium">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  className="w-full border-opsh-grey rounded px-2 py-[0.275rem] border text-sm"
                  {...register("phoneNumber")} // register input with react-hook-form
                />
              </div>

              <div>
                <label htmlFor="estSince" className="block text-sm mb-1 font-medium">
                  Est. Since
                </label>
                <input
                  type="date"
                  id="estSince"
                  className="w-full border-opsh-grey rounded px-2 py-[0.275rem] border text-sm"
                  {...register("established")} // register input with react-hook-form
                />
              </div>
            </div>

            <div className="flex justify-end mb-2">
              <button
                type="submit"
                className="bg-opsh-success text-white py-1 px-6 mt-1 rounded-md border-2 border-white hover:bg-opsh-primary flex items-center gap-1"
              >
                <IoSearch />
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdvanceSearch;
