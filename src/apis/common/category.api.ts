import { Response, api } from '@/apis/http.api';
import { Categories } from '@/types/common/category';


export const categoryApi = (payload: Categories): Promise<Response> =>
    api.get<Response>("/categories", {
      params: {
        ...payload,
      },
    })
    .then(({ data }) => data)
    .catch((error) => {
      if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error);
    });
  

