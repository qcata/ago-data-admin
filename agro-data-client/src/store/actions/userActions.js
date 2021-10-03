/* eslint-disable func-names */
import { beginApiCall, apiCallError } from './apiStatusActions';
import * as types from './actionTypes';
import * as authApi from '../../api/authApi';

export function apiTypeCallSuccess(callType, payload) {
    return { type: callType, payload };
}

export function loginSuccess(payload) {
    return { type: types.LOGIN_SUCCESS, payload };
}

export function logoutSuccess() {
    return { type: types.LOGOUT_SUCCESS };
}

export function login(credentials) {
    return async function (dispatch) {
        dispatch(beginApiCall());
        try {
            const data = await authApi.login(credentials);
            dispatch(loginSuccess(data));
        } catch (error) {
            dispatch(apiCallError(error));
            throw error;
        }
    };
}

export function register(dto) {
    return async function (dispatch) {
        dispatch(beginApiCall());
        try {
            const data = await authApi.register(dto);
            return data;
        } catch (error) {
            dispatch(apiCallError(error));
            throw error;
        }
    };
}

export function logout() {
    return async function (dispatch) {
        dispatch(beginApiCall());
        try {
            await authApi.logout();
            dispatch(logoutSuccess());
        } catch (error) {
            dispatch(apiCallError(error));
            throw error;
        }
    };
}
