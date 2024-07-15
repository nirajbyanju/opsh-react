import { Response, api } from '../http.api';
export interface Registration {
    firstName?: string;
    lastName?: string;
    userName?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
    c_password?: string;
}

export const registration = (registrationPayload: Registration): Promise<Response<Registration>> =>
    api
        .post<Response<Registration>>('/register', {
            ...registrationPayload,
        })
        .then(({ data }) => data);

