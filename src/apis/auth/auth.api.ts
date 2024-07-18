import { Response, api } from '../http.api';
import { Registration } from '../../types/auth/registration';

export const registration = (payload: Registration): Promise<Response> =>
  api.post<Response>("/register", {
    ...payload,
  }).then(({ data }) => data)
  .catch((error) => {
    if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  });