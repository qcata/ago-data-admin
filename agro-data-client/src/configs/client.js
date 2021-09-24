import axios from 'axios';
import { getAppBaseUrl } from './environment';
// eslint-disable-next-line import/no-cycle
import { store } from '../store/index';
import * as types from '../store/actions/actionTypes';

const client = axios.create({
    baseURL: getAppBaseUrl(),
    // timeout: 10000,
    headers: { Accept: 'application/json' }
});

client.interceptors.response.use(
    (response) =>
        // Do something with response data
        response,
    (error) => {
        // Do something with response error
        if (error?.response?.status === 401) {
            store.dispatch({
                type: types.UNAUTHORIZED,
                payload: error
            });
        }
        return Promise.reject(error);
    }
);

export const setAuthorizationHeader = (token) => {
    if (token) {
        client.defaults.headers.common.authorization = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common.authorization;
    }
};

export default client;
