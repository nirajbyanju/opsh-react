export interface Login {
    email: string;
    password: string;
    general?: string;
}
export interface LoginRequest {
  email: string;
  password: string;
}
export interface LoginResponse {
    error?: {
      validationErrors?: Record<string, string[]>;
      message?: string;
    };

    success?:{
      
    }
    data: {
      token: string;
      id: number;
  };
    // other fields as needed
  }