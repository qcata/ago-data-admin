import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function crops(state = initialState.crops, action = {}) {
    switch (action.type) {
        case types.GET_CROP_DETAILS_SUCCESS:
        default:
            return state;
    }
}
