export interface CompanyProfiles {
    companyName: string;
    categoryId: string;
    email: string;
    phoneNumber: string;
    website: string;
    location: string;
    established: string;
    teamSize: string;
    logo: any;
    description: string;
    status: string;
    verifiedAt: string;
}
export interface CompanyProfileResponse {
  success: boolean;
  error?: {
    message?: string;
    error?: {
      validationErrors?: { [key: string]: string[] };
    };
  };
}