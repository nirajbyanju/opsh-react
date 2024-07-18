import axios, { AxiosError } from 'axios';

export const api = axios.create({
    baseURL: 'https://back.opportunitiessharing.com',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000,
});

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ErrorResponse>) => {
      if (error.response && error.response.status === 401) {
        window.location.href = "/login";
        return Promise.reject("Unauthorized");
      }
  
      if (error.response && error.response.data) {
        const errorResponse: ErrorResponse = {
          success: false,
          error: error.response.data.error,
        };
  
        return Promise.reject(errorResponse);
      }
      // Handle other errors here
      return Promise.reject(error);
    }
  );
  
  export interface Response<T = any> {
    success: boolean;
    result: T;
  }
  
  export interface ApiErrorData {
    code: number;
    details: string;
    message: string;
    validationErrors: null | Record<string, string[]>;
  }
  
  export interface ErrorResponse {
    success: boolean;
    error: ApiErrorData;
  }
  