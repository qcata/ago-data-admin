import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function lands(state = initialState.lands, action = {}) {
    switch (action.type) {
        case types.GET_LANDS_SUCCESS:
            // eslint-disable-next-line no-case-declarations
            const lands = action.payload;
            return lands;
        case types.SAVE_LAND_TILE_SUCCESS:
            return state;
        default:
            return state;
    }
}
