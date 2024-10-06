// // src/stores/company/companyStore.ts

// import { getAllCompanyProfiles, getComapnyProfileByID, createCompanyProfile, updateCompanyProfile, deleteCompanyProfile } from '@/apis/company/companyProfile.api'; // Corrected import path and function names
// import _ from "lodash";
// import { create } from "zustand";

// interface CompanyProfile {
//   id: number;
//   company: string;
//   position: string;
//   type: string;
//   startDate: string;
//   endDate: string;
//   location: string;
//   category?: string;
//   status: string;
// }

// interface CompanyProfileState {
//   companyProfiles: CompanyProfile[];
//   companyProfile: CompanyProfile | null;
//   getAllCompanyProfiles: () => Promise<void>;
//   createCompanyProfile: (companyProfile: CompanyProfile) => Promise<void>;
//   getCompanyProfile: (id: number) => Promise<CompanyProfile | undefined>;
//   updateCompanyProfile: (companyProfile: CompanyProfile) => Promise<void>;
//   deleteCompanyProfile: (id: number) => Promise<void>;
// }

// export const useCompanyProfileStore = create<CompanyProfileState>((set, get) => ({
//   companyProfiles: [],
//   companyProfile: null,
  
//   getAllCompanyProfiles: async () => {
//     try {
//       if (_.isEmpty(get().companyProfiles)) {
//         const response = await getAllCompanyProfiles(); // Corrected function call
//         set({ companyProfiles: response });
//       }
//     } catch (error) {
//       console.error("Failed to fetch company profiles:", error);
//       throw error;
//     }
//   },
  
//   createCompanyProfile: async (companyProfile: CompanyProfile) => {
//     try {
//       const newProfile = await createCompanyProfileAPI(companyProfile); // Corrected API function
//       set((state) => ({
//         companyProfiles: [...state.companyProfiles, newProfile],
//       }));
//     } catch (error) {
//       console.error("Failed to create company profile:", error);
//       throw error;
//     }
//   },
  
//   getCompanyProfile: async (id: number) => {
//     try {
//       if (_.isEmpty(get().companyProfiles)) {
//         const response = await getCompanyProfileByID(id); // Corrected function name
//         set({ companyProfile: response });
//         return response;
//       } else {
//         const companyProfile = get().companyProfiles.find((profile) => profile.id === id);
//         return companyProfile;
//       }
//     } catch (error) {
//       console.error(`Failed to fetch company profile with id ${id}:`, error);
//       throw error;
//     }
//   },
  
//   updateCompanyProfile: async (companyProfile: CompanyProfile) => {
//     try {
//       const updatedProfile = await updateCompanyProfileAPI(companyProfile); // Corrected API function
//       set((state) => ({
//         companyProfiles: state.companyProfiles.map((profile) =>
//           profile.id === updatedProfile.id ? updatedProfile : profile
//         ),
//       }));
//     } catch (error) {
//       console.error("Failed to update company profile:", error);
//       throw error;
//     }
//   },
  
//   deleteCompanyProfile: async (id: number) => { // Changed parameter to id
//     try {
//       await deleteCompanyProfileAPI(id); // Corrected API function
//       set({
//         companyProfiles: get().companyProfiles.filter(profile => profile.id !== id)
//       });
//     } catch (error) {
//       console.error(`Failed to delete company profile with id ${id}:`, error);
//       throw error;
//     }
//   }
// }));

// export default useCompanyProfileStore; // Corrected export name


// src/stores/company/companyStore.ts

import {
    getAllCompanyProfiles,
    getCompanyProfileByID,
    createCompanyProfile,
    updateCompanyProfile,
    deleteCompanyProfile
  } from '@/apis/company/companyProfile.api';
  import _ from 'lodash';
  import { create } from 'zustand';
  
  
  interface CompanyProfileState {
    companyProfiles: CompanyProfile[];
    companyProfile: CompanyProfile | null;
    getAllCompanyProfiles: () => Promise<CompanyProfile[]>;
    createCompanyProfile: (companyProfile: CompanyProfile) => Promise<void>;
    getCompanyProfile: (id: number) => Promise<CompanyProfile | undefined>;
    updateCompanyProfile: (companyProfile: CompanyProfile) => Promise<void>;
    deleteCompanyProfile: (id: number) => Promise<void>;
  }
  
  export const useCompanyProfileStore = create<CompanyProfileState>((set, get) => ({
    companyProfiles: [],
    companyProfile: null,
  
    getAllCompanyProfiles: async () => {
      try {
        if (_.isEmpty(get().companyProfiles)) {
          const profiles = await getAllCompanyProfiles();
          set({ companyProfiles: profiles });
          return profiles;
        }
        return get().companyProfiles;
      } catch (error) {
        console.error('Failed to fetch company profiles:', error);
        throw error;
      }
    },
  
    /**
     * Creates a new company profile and updates the state.
     * @param companyProfile - The CompanyProfile to create.
     */
    createCompanyProfile: async (companyProfile: CompanyProfile) => {
      try {
        const newProfile = await createCompanyProfile(companyProfile);
        set((state) => ({
          companyProfiles: [...state.companyProfiles, newProfile],
        }));
      } catch (error) {
        console.error('Failed to create company profile:', error);
        throw error;
      }
    },
  
    /**
     * Fetches a single company profile by ID.
     * @param id - The ID of the company profile.
     * @returns The CompanyProfile or undefined if not found.
     */
    getCompanyProfile: async (id: number) => {
      try {
        if (_.isEmpty(get().companyProfiles)) {
          const profile = await getCompanyProfileByID(id);
          set({ companyProfile: profile });
          return profile;
        } else {
          const profile = get().companyProfiles.find((p) => p.id === id);
          return profile;
        }
      } catch (error) {
        console.error(`Failed to fetch company profile with id ${id}:`, error);
        throw error;
      }
    },
  
    /**
     * Updates an existing company profile and updates the state.
     * @param companyProfile - The CompanyProfile with updated data.
     */
    updateCompanyProfile: async (companyProfile: CompanyProfile) => {
      try {
        const updatedProfile = await updateCompanyProfile(companyProfile);
        set((state) => ({
          companyProfiles: state.companyProfiles.map((profile) =>
            profile.id === updatedProfile.id ? updatedProfile : profile
          ),
        }));
      } catch (error) {
        console.error('Failed to update company profile:', error);
        throw error;
      }
    },
  
    /**
     * Deletes a company profile by ID and updates the state.
     * @param id - The ID of the company profile to delete.
     */
    deleteCompanyProfile: async (id: number) => {
        try {
          // Call the API to delete the company profile by ID
          await deleteCompanyProfile(id);
      
          // Get the current company profiles from the state
          const currentProfiles = get().companyProfiles;
      
          // Check if currentProfiles is an array before attempting to filter
          if (Array.isArray(currentProfiles)) {
            // Filter out the deleted profile and update the state
            set({
              companyProfiles: currentProfiles.filter((profile) => profile.id !== id),
            });
          } else {
            console.error('Error: companyProfiles is not an array.');
          }
        } catch (error) {
          console.error(`Failed to delete company profile with id ${id}:`, error);
          throw error;
        }
      }
      
      
  }));
  
  export default useCompanyProfileStore;
  
