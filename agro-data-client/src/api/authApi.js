import client from '../configs/client';
import { handleResponse, handleError } from './apiUtils';

export function login(credentials) {
    return client({ url: 'user/login', method: 'POST', data: credentials }).then(handleResponse).catch(handleError);
}

export function register(dto) {
    return client({ url: 'user/register', method: 'POST', data: dto }).then(handleResponse).catch(handleError);
}

export function logout() {
    return client({ url: 'user/logout', method: 'GET' }).then(handleResponse).catch(handleError);
}

export function activateAccount(dto) {
    return client({
        url: 'users/activate',
        method: 'POST',
        data: { activationLink: dto }
    })
        .then(handleResponse)
        .catch(handleError);
}
