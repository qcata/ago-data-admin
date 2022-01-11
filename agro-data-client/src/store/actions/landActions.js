/* eslint-disable func-names */
import { beginApiCall, apiCallError } from './apiStatusActions';
import * as types from './actionTypes';
import * as landApi from '../../api/landApi';

export function apiTypeCallSuccess(callType, payload) {
    return { type: callType, payload };
}

export function saveLandTileSuccess(payload) {
    return { type: types.SAVE_LAND_TILE_SUCCESS, payload };
}

export function getLandsSuccess(payload) {
    return { type: types.GET_LANDS_SUCCESS, payload };
}

export function saveLandTile(userId, dto) {
    return async function (dispatch) {
        dispatch(beginApiCall());
        try {
            const data = await landApi.saveLandTile(userId, dto);
            dispatch(saveLandTileSuccess(data));
            return true;
        } catch (error) {
            dispatch(apiCallError(error));
            throw error;
        }
    };
}

export function getLands(userId) {
    return async function (dispatch) {
        dispatch(beginApiCall());
        try {
            const data = await landApi.getLands(userId);
            dispatch(getLandsSuccess(data));
            return true;
        } catch (error) {
            dispatch(apiCallError(error));
            throw error;
        }
    };
}
