import * as types from '../actions/actionTypes';
// eslint-disable-next-line import/no-cycle
import { setAuthorizationHeader } from '../../configs/client';
import initialState from './initialState';

export default function land(state = initialState.landsInformation, action = {}) {
    switch (action.type) {
        case types.SAVE_LAND_TILE_SUCCESS:
            // eslint-disable-next-line no-case-declarations
            const lands = action.payload;
            return { ...state, lands };
        case types.LOGOUT_SUCCESS:
        case types.UNAUTHORIZED:
            setAuthorizationHeader();
            return {};
        default:
            return state;
    }
}
