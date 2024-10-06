// import { Response, api } from '@/apis/http.api';
// import { CompanyProfile } from '@/types/company/companyProfile'
  
//   export const getAllCompanyProfiles = (): Promise<ComapnyProfile[]> =>
//       api.get<Response<ComapnyProfile[]>>("/companyProfile")
//   .then(({ data }) => {
//     return data;
// });
  
//   export const createCompanyProfile = (
//       payload: ComapnyProfile
//   ): Promise<Response> =>
//       api.post<Response>("/companyProfile", {
//           ...payload,
//       }).then(({ data }) => data);
  
//   export const getComapnyProfileByID = (
//       payload: number
//   ): Promise<Response<ComapnyProfile>> =>
//       api.get<Response<ComapnyProfile>>("/companyProfile", {
//           params: {
//               id: payload
//           }
//       }) .then(({ data }) => {
//         console.log(data); // log the response data
//         return data;
//     });
  
//   export const updateComapnyProfile = (
//       payload: ComapnyProfile
//   ): Promise<Response> =>
//       api.put<Response>("/companyProfile", {
//           ...payload,
//       }).then(({ data }) => data);
  
//   export const deleteCompanyProfile = (
//       payload: ComapnyProfile
//   ): Promise<Response> =>
//       api.delete<Response>("/companyProfile", {
//           params: {
//               id: payload.id
//           }
//       }).then(({ data }) => data);
  
  
  
  
  

  


// src/apis/company/companyProfile.api.ts

import { Response, api } from '@/apis/http.api';
import { CompanyProfile } from '@/types/company/companyProfile';

export const getAllCompanyProfiles = (): Promise<CompanyProfile[]> =>
  api.get<Response<CompanyProfile[]>>('/companyProfile')
    .then(({ data }) => data.data.Company);

export const createCompanyProfile = (
  payload: CompanyProfile
): Promise<CompanyProfile> =>
  api.post<Response<CompanyProfile>>('/companyProfile', payload)
    .then(({ data }) => data.data);

export const getCompanyProfileByID = (
  id: number
): Promise<CompanyProfile> =>
  api.get<Response<CompanyProfile>>('/companyProfile', {
    params: { id }
  })
    .then(({ data }) => {
      console.log('Fetched Company Profile:', data);
      return data.data;
    });

export const updateCompanyProfile = (
  payload: CompanyProfile
): Promise<CompanyProfile> =>
  api.put<Response<CompanyProfile>>('/companyProfile', payload)
    .then(({ data }) => data.data);

export const deleteCompanyProfile = (
  id: number): Promise<void> => 
  api.delete(`/companyProfile/${id}`)
    .then(({ data }) => data);

