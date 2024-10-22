// src/apis/company/companyProfile.api.ts

import { Response, api } from '@/apis/http.api';
import { CompanyProfiles, CompanyProfile } from "@/types/company/compnayProfile"; // Corrected the typo in the path

// Fetch all company profiles
export const getAllCompanyProfiles = (page: number, search: string = ''): Promise<CompanyProfile> => 
  api.get<Response<CompanyProfile>>(`/companyProfile?limit=10&page=${page}&search=${encodeURIComponent(search)}`)
    .then(({ data }) => {
      console.log('Fetched Company Profile:', data);
      return data as any;
    });

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
      return data.data;        // Return the actual data
    });

// Fetch a single company profile by ID
export const getCompanyProfileByID = (
  id: number
): Promise<CompanyProfiles> =>
  api.get<Response<CompanyProfiles>>(`/companyProfile/${id}`,
  )
    .then(({ data }) => {
      return data.data;
    });

// Update an existing company profile using FormData
export const updateCompanyProfile = (id: number, payload: FormData): Promise<CompanyProfiles> => {
  // Convert FormData to URLSearchParams
  const params = new URLSearchParams();
  payload.forEach((value, key) => {
    params.append(key, value.toString());
  });

  return api.patch<Response<CompanyProfiles>>(`/companyProfile/${id}?${params.toString()}`, null, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then(({ data }) => data.data);
};

// Update an existing company profile using FormData
export const updateStatusCompanyProfile = (id: number, payload: FormData): Promise<CompanyProfiles> => {
  const params = new URLSearchParams();
  payload.forEach((value, key) => {
    params.append(key, value.toString());
  });

  return api.patch<Response<CompanyProfiles>>(`/companyProfile/status/${id}?${params.toString()}`, null, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then(({ data }) => data.data);
};


// Delete a company profile by ID
export const deleteCompanyProfile = (
  id: number
): Promise<void> => 
  api.delete(`/companyProfile/${id}`)
    .then(({ data }) => data);
