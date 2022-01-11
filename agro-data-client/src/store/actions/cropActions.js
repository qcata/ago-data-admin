/* eslint-disable func-names */
import { beginApiCall, apiCallError } from './apiStatusActions';
import * as types from './actionTypes';
import * as cropApi from '../../api/cropApi';

export function getCropDetailsSuccess(payload) {
    return { type: types.GET_CROP_DETAILS_SUCCESS, payload };
}

export function getCropDetails(landId) {
    return async function (dispatch) {
        dispatch(beginApiCall());
        try {
            const data = await cropApi.getCropDetails(landId);
            return data;
        } catch (error) {
            dispatch(apiCallError(error));
            throw error;
        }
    };
}
