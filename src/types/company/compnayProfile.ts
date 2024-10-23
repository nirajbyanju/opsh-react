export interface CompanyProfile {
  status: boolean;
  messaage: string;
  data: CompanyProfiles[];
  pagination: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
  };

}
export interface CompanyProfiles {
  id: any;
  companyName: string;
  categoryId: string;
  email: string;
  phoneNumber: string;
  website: string;
  location: string;
  established: string;
  teamSize: number; 
  logo: any;
  description: string;
  status: number; // Optional fields
  verifiedAt?: Date;
  category?: any;
  formatted_date?: string;
  createdBy: number;
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