import {
  getAllCompanyProfiles,
  getCompanyProfileByID,
  createCompanyProfile,
  updateCompanyProfile,
  deleteCompanyProfile
} from '@/apis/company/companyProfile.api';
import { CompanyProfiles, CompanyProfile } from '@/types/company/compnayProfile'; // Corrected the typo in the path
import _ from 'lodash';
import { create } from 'zustand';

interface CompanyProfileState {
  companyProfiles: CompanyProfiles[] | null;
  companyProfile: CompanyProfile | null;
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  getAllCompanyProfiles: (page: number) => Promise<CompanyProfile | null>; 
  createCompanyProfile: (companyProfile: FormData) => Promise<void>; 
  getCompanyProfile: (id: number) => Promise<CompanyProfile | null>;
  updateCompanyProfile: (companyProfile: FormData) => Promise<void>;
  deleteCompanyProfile: (id: number) => Promise<void>;
}

export const useCompanyProfileStore = create<CompanyProfileState>((set, get) => ({
  companyProfiles: null,
  companyProfile: null,
  total: 0,
  per_page: 10,
  current_page: 1,
  last_page: 0,

  getAllCompanyProfiles: async (page: number) => {
    try {
      const profiles = await getAllCompanyProfiles(page);
      if (profiles) {
        set({ 
          companyProfiles: profiles.data, 
          total: profiles.pagination.total, 
          last_page: profiles.pagination.last_page,
          current_page: profiles.pagination.current_page
        });
      }
      return profiles; 
    } catch (error) {
      console.error('Failed to fetch company profiles:', error);
      throw error; 
    }
  },




  /**
   * Creates a new company profile and updates the state.
   * @param companyProfile - The FormData containing the CompanyProfile to create.
   */
  createCompanyProfile: async (formData: FormData) => {
    try {
      const newProfile = await createCompanyProfile(formData);
      set((state) => ({
        companyProfiles: [...state.companyProfiles??[], newProfile],
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
        const response = await getCompanyProfileByID(id);
        const profile = (response as any);
        set({ companyProfile: profile });
        return profile;
      } else {
        const profile = get().companyProfiles?.find((p) => p.id === id);
        return profile ?? null;
      }
    } catch (error) {
      console.error(`Failed to fetch company profile with id ${id}:`, error);
      throw error;
    }
  },
  
  


  /**
   * Updates an existing company profile and updates the state.
   * @param companyProfile - The FormData containing the updated CompanyProfile.
   */
  updateCompanyProfile: async (formData: FormData) => {
    try {
      const updatedProfile = await updateCompanyProfile(formData);
      set((state) => ({
        companyProfiles: state.companyProfiles?.map((profile) =>
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
      await deleteCompanyProfile(id);
      const currentProfiles = get().companyProfiles;
      if (Array.isArray(currentProfiles)) {
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