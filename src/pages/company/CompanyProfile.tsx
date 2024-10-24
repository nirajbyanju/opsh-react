import { FC, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import from react-router-dom
import Select from "@/components/select/select";
import { useForm } from "react-hook-form";
import useCompanyProfileStore from "@/stores/company/companyStore";
import { CompanyProfiles } from "@/types/company/compnayProfile";
import UploadPhoto from "../../components/uploadPhoto/UploadPhoto";
import CkEditors from "@/components/ckEditors/CkEditors";
import Category from "@/components/category/category";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { companyProfileValidationSchema } from "@/validations/vacancy/companyProfile";
import useAuthStore from '../../stores/auth/AuthStore';
import { teamSize } from "@/data/teamSize";

interface CompanyProfileProps { }
const CompanyProfile: FC<CompanyProfileProps> = () => {
  const navigate = useNavigate();
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const { createCompanyProfile } = useCompanyProfileStore();
  const {register, handleSubmit, reset, setValue, formState: { errors }, } = useForm<CompanyProfiles>({
    resolver: yupResolver(companyProfileValidationSchema),
  });
  const userData = useAuthStore((state) => state.userData.user);

  const onSubmit = async (data: any) => {
    try {
      // Assign the createdBy field to the data object
      data.createdBy = userData.id;
  
      await createCompanyProfile(data);
      toast.success("Company profile saved successfully!");
  
      if (isCreatingNew) {
        reset();
      } else {
        navigate("/companyProfile");
      }
    } catch (error) {
      toast.error("Company profile save failed!");
    }
  };
  const handleReset = () => {
    reset();
  };
  
  return (
    <div className="px-3 py-1">
      <div className="flex flex-col gap-1 md:gap-4 sm:flex-row items-center mb-1">
        <h5 className="text-primary font-medium text-xl">Company Profile</h5>
        <hr className="border-t-1 border-gray-300 flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto" />
        <h5 className="text-sm hidden md:block">Working Dashboard</h5>
        <h5 className="text-opsh-grey  text-sm hidden md:block">Statistics Dashboard</h5>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label
            className="text-gray-700 text-sm font-medium mb-1 flex gap-6"
            htmlFor="company-name"
          >
            Company Logo{" "}
            {errors.companyName && (
              <p className="text-opsh-danger text-sm">
                {errors.companyName.message as string}
              </p>
            )}
          </label>
          <UploadPhoto onUpload={(val: File | any) => setValue("logo", val)} preview={""} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="companyName"
            >
              Company Name
            </label>
            <input
              className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-700 focus:ring-primary focus:ring-1 placeholder:text-opsh-muted/50 placeholder:text-sm"
              id="companyName"
              type="text"
              placeholder="Company Name"
              {...register("companyName")}
            />
            {errors.companyName && (
              <p className="text-opsh-danger text-sm">
                {errors.companyName.message}
              </p>
            )}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="category"
            >
              Category
            </label>
            <Category
              name={"categoryId"}
              onChange={(val: string) => setValue("categoryId", val)}
            />

            {errors.categoryId && (
              <p className="text-opsh-danger text-sm">
                {errors.categoryId.message}
              </p>
            )}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-700 focus:ring-primary focus:ring-1 placeholder:text-opsh-muted/50 placeholder:text-sm"
              id="email"
              type="email"
              placeholder="Email Address"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-opsh-danger text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-700 focus:ring-primary focus:ring-1 placeholder:text-opsh-muted/50 placeholder:text-sm"
              id="phone"
              type="text"
              placeholder="Phone Number"
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
            />
            {errors.phoneNumber && (
              <p className="text-opsh-danger text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="website"
            >
              Website
            </label>
            <input
              className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-700 focus:ring-primary focus:ring-1 placeholder:text-opsh-muted/50 placeholder:text-sm"
              id="website"
              type="text"
              placeholder="Website"
              {...register("website", { required: "Website is required" })}
            />
            {errors.website && (
              <p className="text-opsh-danger text-sm">
                {errors.website.message}
              </p>
            )}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-700 focus:ring-primary focus:ring-1 placeholder:text-opsh-muted/50 placeholder:text-sm"
              id="location"
              type="text"
              placeholder="Location"
              {...register("location", { required: "Location is required" })}
            />
            {errors.location && (
              <p className="text-opsh-danger text-sm">
                {errors.location.message}
              </p>
            )}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="estSince"
            >
              Est. Since
            </label>
            <input
              className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-700 focus:ring-primary focus:ring-1 placeholder:text-opsh-muted/50 placeholder:text-sm"
              id="estSince"
              type="date"
              {...register("established", {
                required: "Est. Since is required",
              })}
            />
            {errors.established && (
              <p className="text-opsh-danger text-sm">
                {errors.established.message}
              </p>
            )}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="teamSize"
            >
              Team Size
            </label>
            <Select
              name="teamSize"
              onChange={(val: number) => setValue("teamSize", val)}
              data={teamSize}
            />

            {errors.teamSize && (
              <p className="text-opsh-danger text-sm">
                {errors.teamSize.message}
              </p>
            )}
          </div>
          <div className="col-span-full mb-1">
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="description"
            >
              Description
            </label>
            <CkEditors onChange={(val: any) => setValue("description", val)} />
            {errors.description && (
              <p className="text-opsh-danger text-sm">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <div className="flex justify-end gap-5 mt-2">
            <button
              type="button"
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              type="submit"
              onClick={() => setIsCreatingNew(true)}
              className="px-5 py-2 bg-green-500 text-white rounded"
            >
              Add & Create New
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-green-500 text-white rounded"
            >
              Add Profile
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CompanyProfile;

