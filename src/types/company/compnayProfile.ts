export interface CompanyProfiles {
  id: any;
  companyName: string;
  categoryId: string;
  email: string;
  phoneNumber: string;
  website: string;
  location: string;
  established: string;
  teamSize: string; // Ensure this exists
  logo: any; 
  description: string;
  status?: string; // Optional fields
  verifiedAt?: Date;
  category?: any;
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