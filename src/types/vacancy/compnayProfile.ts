export interface CompanyProfiles {
  id: number;
  companyName: string;
  categoryId: string;
  email: string;
  phoneNumber: string;
  website: string;
  location: string;
  established: string;
  teamSize: string; 
  logo: any ;
  description: string;
  status?: string;
  verifiedAt?: Date;
  category?: {
    name: string;
  };
  formData?: any;
  FormData?: any;
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
