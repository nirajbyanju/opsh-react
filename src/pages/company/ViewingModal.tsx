import { FC, useEffect, useState } from "react";
import useCompanyProfileStore from "@/stores/company/companyStore";
import CkEditors from "@/components/ckEditors/CkEditors";
import { teamSize } from "@/data/teamSize";

interface ViewModalProps {
  isOpen: boolean;
  onClose: () => void; // Ensure this is present
  profileId: number | null;
  onDelete: (id: number) => Promise<void>;
  profileToDelete: number | null;
}

const ViewModal: FC<ViewModalProps> = ({ isOpen, onClose, profileId }) => {
  const { getCompanyProfile } = useCompanyProfileStore();
  const [profileData, setProfileData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const profile = await getCompanyProfile(profileId ?? 0);
        setProfileData(profile);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchProfile();
    }
  }, [isOpen, profileId, getCompanyProfile]);

  if (!isOpen || loading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl p-6 rounded-lg max-h-[90vh] overflow-y-auto overflow-auto custom-scrollbar">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-xl font-semibold text-opsh-black">
            {profileData.companyName} Profile
          </h4>
          <button
            onClick={onClose}
            className="bg-opsh-danger font-medium text-white text-sm py-1 px-3 rounded-md border-2 border-white hover:bg-white hover:text-opsh-danger hover:border-opsh-danger"
          >
            Close (x)
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm text-opsh-primary font-medium">
              Company Photo
            </label>
            <img src={profileData.logo} alt="Company Logo" className="w-28 h-28 object-cover rounded-lg border-2 border-opsh-primary/25" />
          </div>
        </div>

        <div className="grid gap-y-2 mt-2">
          <div className="grid grid-cols-1 gap-y-2 gap-x-3 sm:grid-cols-1 md:grid-cols-3">
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <label
                htmlFor="awardName"
                className="block text-sm mb-1 text-opsh-primary font-medium"
              >
                Company Name
              </label>
              <input
                type="text"
                id="awardName"
                name="awardName"
                disabled
                className="w-full border-opsh-grey rounded px-2 py-[0.275rem] border  text-sm"
                value={profileData.companyName}
                required
              />
            </div>
            <div>
              <label
                htmlFor="joinedYearDate"
                className="block text-sm mb-1 text-opsh-primary font-medium"
              >
                Category
              </label>
              <input
                type="text"
                id="awardName"
                name="awardName"
                disabled
                 className="w-full border-opsh-grey rounded px-2 py-[0.275rem] border  text-sm"
                value={profileData.category?.name}
                required
              />
            </div>
            <div>
              <label
                htmlFor="joinedYearDate"
                className="block text-sm mb-1 text-opsh-primary font-medium"
              >
                Email
              </label>
              <input
                type="text"
                id="awardName"
                name="awardName"
                disabled
                 className="w-full border-opsh-grey rounded px-2 py-[0.275rem] border  text-sm"
                value={profileData.email}
                required
              />
            </div>
            <div>
              <label
                htmlFor="joinedYearDate"
                className="block text-sm mb-1 text-opsh-primary font-medium"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="awardName"
                name="awardName"
                disabled
                 className="w-full border-opsh-grey rounded px-2 py-[0.275rem] border  text-sm"
                value={profileData.phoneNumber}
                required
              />
            </div>
            <div>
              <label
                htmlFor="joinedYearDate"
                className="block text-sm mb-1 text-opsh-primary font-medium"
              >
                Website
              </label>
              <input
                type="text"
                id="awardName"
                name="awardName"
                disabled
                 className="w-full border-opsh-grey rounded px-2 py-[0.275rem] border  text-sm"
                value={profileData.website}
                required
              />
            </div>
            <div>
              <label
                htmlFor="joinedYearDate"
                className="block text-sm mb-1 text-opsh-primary font-medium"
              >
                Location
              </label>
              <input
                type="text"
                id="awardName"
                name="awardName"
                disabled
                 className="w-full border-opsh-grey rounded px-2 py-[0.275rem] border  text-sm"
                value={profileData.location}
                required
              />
            </div>
            <div>
              <label
                htmlFor="joinedYearDate"
                className="block text-sm mb-1 text-opsh-primary font-medium"
              >
               Est. Since
              </label>
              <input
                type="text"
                id="awardName"
                name="awardName"
                disabled
                 className="w-full border-opsh-grey rounded px-2 py-[0.275rem] border  text-sm"
                value={profileData.established}
                required
              />
            </div>
            <div>
              <label
                htmlFor="joinedYearDate"
                className="block text-sm mb-1 text-opsh-primary font-medium"
              >
               Team Size
              </label>
              <input
                type="text"
                id="awardName"
                name="awardName"
                disabled
                 className="w-full border-opsh-grey rounded px-2 py-[0.275rem] border  text-sm"
                value={teamSize.find(size => size.id == profileData.teamSize)?.label}
                required
              />
            </div>
            <div className="col-span-full mb-1">
            <label
              className="block text-gray-700 text-sm font-medium mb-1"
              htmlFor="description"
            >
              Description
            </label>
            <CkEditors data={profileData.description} />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
