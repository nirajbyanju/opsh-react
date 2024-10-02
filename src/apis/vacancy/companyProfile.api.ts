import { Response, api } from '@/apis/http.api';

export const companyProfile = (payload: FormData): Promise<Response> => {
    return api.post<Response>("/companyProfile", payload, {
    })
    .then(({ data }) => data)
    .catch((error) => {
      if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error);
    });
  };
  


