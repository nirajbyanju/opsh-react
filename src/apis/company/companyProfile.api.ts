// src/apis/company/companyProfile.api.ts

import { Response, api } from '@/apis/http.api';
import { CompanyProfiles, CompanyProfile } from "@/types/company/compnayProfile";

// Fetch all company profiles
export const getAllCompanyProfiles = (page: number, payload: FormData | Record<string, any>): Promise<CompanyProfile> => {
  const params = new URLSearchParams();
  
  // Check if payload is an instance of FormData
  if (payload instanceof FormData) {
    payload.forEach((value, key) => {
      params.append(key, value.toString());
    });
  } else {
    // If payload is a regular object, iterate over its entries
    Object.entries(payload).forEach(([key, value]) => {
      params.append(key, value.toString());
    });
  }

  return api.get<Response<CompanyProfile>>(`/companyProfile?limit=10&page=${page}&${params.toString()}`)
    .then(({ data }) => {
      console.log('Fetched Company Profile:', data);
      return data as any;
    });
};



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
      return data.data;        
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
  console.log(payload);
  const params = new URLSearchParams();
  if (payload instanceof FormData) {
    payload.forEach((value, key) => {
      params.append(key, String(value)); // Convert value to string
    });
  } else {
    Object.entries(payload).forEach(([key, value]) => {
      params.append(key, String(value)); // Convert value to string
    });
  }
  

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
