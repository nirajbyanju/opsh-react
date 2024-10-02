import { FC, useState } from "react";
// import Select from "react-select";
import { useForm, SubmitHandler } from "react-hook-form";
import { companyProfile } from "@/apis/vacancy/companyProfile.api";
import { CompanyProfiles } from "@/types/vacancy/compnayProfile"; // Fix typo here
import UploadPhoto from "../../components/uploadPhoto/UploadPhoto";
import CkEditors from "@/components/ckEditors/CkEditors"; // Fix path to CkEditors
import Category from "@/components/category/category";
import { toast } from "react-toastify";

interface CompanyProfileProps {}

const CompanyProfile: FC<CompanyProfileProps> = () => {
  // const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<CompanyProfiles>();
  const [editorContent, setEditorContent] = useState<string>("");
  const [uploadedPhoto, setUploadedPhoto] = useState<File | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const onSubmit: SubmitHandler<CompanyProfiles> = async (data) => {
    if (!editorContent || editorContent.trim() === "") {
      setError("description", {
        type: "manual",
        message: "Description is required",
      });
      return;
    }

    if (!selectedCategory) {
      setError("categoryId", {
        type: "manual",
        message: "Category is required",
      });
      return;
    }

    const formData = new FormData();
    formData.append("description", editorContent);
    formData.append("categoryId", selectedCategory || "");
    if (uploadedPhoto) {
      formData.append("logo", uploadedPhoto); // handle file upload
    }
    formData.append("companyName", data.companyName);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("website", data.website);
    formData.append("location", data.location);
    formData.append("established", data.established);
    // Add any other fields that you have in the form

    try {
      const response = await companyProfile(formData);
    
      if (!response.success && response.error) {
        const errorData = response.error || response.error; // Safely access the error
    
        if (errorData?.validationErrors) {
          if (errorData.validationErrors.description) {
            setError("description", {
              type: "manual",
              message: errorData.validationErrors.description[0],
            });
          }
        }
      } else {
        toast.success('Company profile saved successfully!');
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error('Failed to save the company profile.');
    }
  };

  const handleEditorChange = (data: string) => {
    setEditorContent(data);
  };

  const handlePhotoUpload = (file: File | null) => {
    setUploadedPhoto(file);
  };

  const handleCategoryChange = (data: string) => {
    setSelectedCategory(data);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col gap-4 sm:flex-row items-center mb-4">
        <h5 className="text-primary font-medium text-xl">Company Profile</h5>
        <hr className="border-t-1 border-gray-300 flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto" />
        <h5 className="text-muted text-sm">Working Dashboard</h5>
        <h5 className="text-muted text-sm">Statistics Dashboard</h5>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UploadPhoto onUpload={handlePhotoUpload} />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="company-name"
            >
              Company Name
            </label>
            <input
              className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:border-blue-700 focus:ring-primary focus:ring-1 placeholder:text-opsh-muted/50 placeholder:text-sm"
              id="company-name"
              type="text"
              placeholder="Company Name"
              {...register("companyName", {
                required: "Company name is required",
              })}
            />
            {errors.companyName && (
              <p className="text-red-600">{errors.companyName.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="category"
            >
              Category
            </label>
            <Category onChange={handleCategoryChange} />
            {errors.categoryId && (
              <p className="text-red-600">{errors.categoryId.message}</p>
            )}
          </div>
          <div className="mb-4">
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
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4">
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
              <p className="text-red-600">{errors.phoneNumber.message}</p>
            )}
          </div>
          <div className="mb-4">
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
              <p className="text-red-600">{errors.website.message}</p>
            )}
          </div>
          <div className="mb-4">
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
              <p className="text-red-600">{errors.location.message}</p>
            )}
          </div>
          <div className="mb-4">
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
              <p className="text-red-600">{errors.established.message}</p>
            )}
          </div>
          <div className="col-span-full mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="description"
            >
              Company Description
            </label>
            <CkEditors onChange={handleEditorChange} />
            {errors.description && (
              <p className="text-red-600">{errors.description.message}</p>
            )}
          </div>
        </div>
        <div className="mb-4 flex justify-end">
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded"
          >
            Save Company
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyProfile;
