import { Response, api } from '../http.api';
import { Registration } from '../../types/auth/registration';
import { Login } from '../../types/auth/login';

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

  export const login = (payload: Login): Promise<Response> =>
    api.post<Response>("/login", {
      ...payload,
    }).then(({ data }) => data)
    .catch((error) => {
      if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error);
    });