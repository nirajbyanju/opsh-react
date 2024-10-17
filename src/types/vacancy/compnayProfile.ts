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
  status?: any;
  verifiedAt?: Date;
  verified_by?: any;
  created_by?: any;
  category?: {
    name: string;
  };
  formData?: any;
  FormData?: any;
  data?: any;
  response?: {
    data?: any;
  }
}

export interface CompanyProfileResponse {
  success: boolean;
  data:any;
  error?: {
    message?: string;
    error?: {
      validationErrors?: { [key: string]: string[] };
    };
  };
}
