import { useEffect, useState, FC } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import useCompanyProfileStore from "@/stores/company/companyStore";
import { toast } from "react-toastify";
import { CompanyProfiles } from "@/types/company/compnayProfile";
import { yupResolver } from "@hookform/resolvers/yup";
import { companyProfileValidationSchema } from "@/validations/vacancy/companyProfile";
import UploadPhoto from "../../components/uploadPhoto/UploadPhoto";
import CkEditors from "@/components/ckEditors/CkEditors";
import Category from "@/components/category/category";
import Select from "@/components/select/select";

interface EditProfileProps {}
interface TeamSize {
    id?: number;
    name: string;
  }
  
  const teamSize: TeamSize[] = [
    { id: 1, name: "0-10" },
    { id: 2, name: "10-20" },
    { id: 3, name: "20-50" },
  ];

const EditProfile: FC<EditProfileProps> = ({ }) => {
    const { id } = useParams<{ id: string }>();
    const numericId = Number(id);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { getCompanyProfile,  updateCompanyProfile } = useCompanyProfileStore();
    const [ProfileData, setProfileData] = useState<CompanyProfiles | null>(null);
    const [editorContent, setEditorContent] = useState<string>("");
    const [uploadedPhoto, setUploadedPhoto] = useState<File | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<CompanyProfiles>({
        resolver: yupResolver(companyProfileValidationSchema),
      });

    const fetchCompanyProfile = async () => {
        try {
            setLoading(true);
            const profile = await getCompanyProfile(numericId);
            setProfileData(profile as any);
            setLoading(false);

        } catch (error) {
            toast.error("Failed to fetch company profile");
            navigate('/companyProfile');
            setLoading(false);
        }
    }
    const reseting = () => {
        reset();
        setEditorContent("");
        setUploadedPhoto(null);
        setSelectedCategory(null);
      };
    const onSubmit = async (data: CompanyProfiles) => {
        setLoading(true);
        const formData = new FormData();
        formData.append("description", editorContent);
        formData.append("categoryId", selectedCategory || "");
        if (uploadedPhoto) {
          formData.append("logo", uploadedPhoto);
          data.logo = uploadedPhoto;
        }
        formData.append("companyName", data.companyName);
        formData.append("email", data.email);
        formData.append("phoneNumber", data.phoneNumber);
        formData.append("website", data.website);
        formData.append("location", data.location);
        formData.append("established", data.established);
        formData.append("teamSize", data.teamSize);
    
        try {
          await updateCompanyProfile(formData);
            toast.success("Company profile saved successfully!");
            navigate("/companyProfile");
  
        } catch (error) {
          toast.error("Company profile save failed!");
        } finally {
          setLoading(false);
        }
      };

    useEffect(() => {
        fetchCompanyProfile();
    }, [id]);

    return <div className="px-3 py-1">
    <div className="flex flex-col gap-4 sm:flex-row items-center mb-1">
      <h5 className="text-primary font-medium text-xl">Company Profile</h5>
      <hr className="border-t-1 border-gray-300 flex-grow sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto" />
      <h5 className="text-muted text-sm">Working Dashboard</h5>
      <h5 className="text-muted text-sm">Statistics Dashboard</h5>
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
        <UploadPhoto onUpload={setUploadedPhoto} />
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
            value={ProfileData?.companyName}
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
            {...register("categoryId")}
            onChange={setSelectedCategory}
            selectedCategory={ProfileData?.categoryId}
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
            value={ProfileData?.email}
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
            value={ProfileData?.phoneNumber}
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
            value={ProfileData?.website}
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
            value={ProfileData?.location}
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
            value={ProfileData?.established}
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
            name="teamSize" // This should match exactly with the CompanyProfiles interface
            control={control}
            options={teamSize.map((pos) => ({
              value: pos.name?.toString() || "",
              label: pos.name,
            }))}
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
          <CkEditors
           data={ProfileData?.description}
           onChange={setEditorContent} />
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
            onClick={() => reseting()}
          >
            Cancel 
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-green-500 text-white rounded"
            disabled={loading}
          >
            Reset
          </button>
          <button
            type="submit"
            className="px-5 py-2 bg-green-500 text-white rounded"
            disabled={loading}
          >
            {loading ? <span className="loader light"></span> : "Update"}
          </button>
        </div>
      </div>
    </form>
  </div>
}

export default EditProfile