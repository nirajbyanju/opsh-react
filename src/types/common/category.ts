export interface Categories {
    name: string;
    status: boolean; 
    data: any;
}
export interface CategoryResponse {
  success: boolean;
  error?: {
    message?: string;
    error?: {
      validationErrors?: { [key: string]: string[] };
    };
  };
}