export interface CompanyProfiles {
  companyName: string;
  categoryId: string;
  email: string;
  phoneNumber: string;
  website: string;
  location: string;
  established: string;
  teamSize: string; // Ensure this exists
  logo: File | null; // Or whatever type is appropriate
  description: string;
  status?: string; // Optional fields
  verifiedAt?: Date; // Optional fields
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