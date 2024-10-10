// src/apis/company/companyProfile.api.ts

import { Response, api } from '@/apis/http.api';
import { CompanyProfiles } from "@/types/company/compnayProfile"; // Corrected the typo in the path

// Fetch all company profiles
export const getAllCompanyProfiles = (): Promise<CompanyProfiles[]> =>
  api.get<Response<CompanyProfiles[]>>('/companyProfile')
    .then(({ data }) => data.data);

// Create a new company profile using FormData
export const createCompanyProfile = (
  payload: FormData
): Promise<CompanyProfiles> =>
  api.post<Response<CompanyProfiles>>('/companyProfile', payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(({ data }) => {
      console.log(data.data); // Log the full response
      return data.data;        // Return the actual data
    });

// Fetch a single company profile by ID
export const getCompanyProfileByID = (
  id: number
): Promise<CompanyProfiles> =>
  api.get<Response<CompanyProfiles>>('/companyProfile', {
    params: { id }
  })
    .then(({ data }) => {
      console.log('Fetched Company Profile:', data);
      return data.data;
    });

// Update an existing company profile using FormData
export const updateCompanyProfile = (
  payload: FormData
): Promise<CompanyProfiles> =>
  api.put<Response<CompanyProfiles>>('/companyProfile', payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then(({ data }) => data.data);

// Delete a company profile by ID
export const deleteCompanyProfile = (
  id: number
): Promise<void> => 
  api.delete(`/companyProfile/${id}`)
    .then(({ data }) => data);
