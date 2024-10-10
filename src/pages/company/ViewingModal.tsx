import { FC, useEffect, useState } from "react";
import useCompanyProfileStore from "@/stores/company/companyStore";

interface ViewModalProps {
  isOpen: boolean;
  closeModal: () => void;
  profileId: number;  // Pass the id instead of the whole profile
}

const ViewModal: FC<ViewModalProps> = ({ isOpen, closeModal, profileId }) => {
  const {  getCompanyProfile } = useCompanyProfileStore(); // Assume this is the method to fetch by ID
  const [profileData, setProfileData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const profile = await  getCompanyProfile(profileId); // Fetch profile data using the ID
        setProfileData(profile);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchProfile(); // Fetch data when modal opens
    }
  }, [isOpen, profileId,  getCompanyProfile]);

  if (!isOpen || loading) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div>
            {profileData ? (
              <div className="mt-3 text-center sm:mt-5">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {profileData.companyName}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {profileData.description}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Location: {profileData.location}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Team Size: {profileData.teamSize}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Established: {profileData.established}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Phone Number: {profileData.phoneNumber}
                  </p>
                </div>
              </div>
            ) : (
              <p>No data found</p>
            )}
          </div>
          <div className="mt-5 sm:mt-6">
            <button
              onClick={closeModal}
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
