export interface Login {
    email: string;
    password: string;
    general?: string;
}
export interface LoginResponse {
    error?: {
      validationErrors?: Record<string, string[]>;
      message?: string;
    };
    // other fields as needed
  }