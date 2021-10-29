import * as types from '../actions/actionTypes';
// eslint-disable-next-line import/no-cycle
import { setAuthorizationHeader } from '../../configs/client';
import initialState from './initialState';

export default function user(state = initialState.user, action = {}) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            // eslint-disable-next-line no-case-declarations
            const user = action.payload;
            setAuthorizationHeader(user.token);
            return user.token;
        case types.LOGOUT_SUCCESS:
        case types.UNAUTHORIZED:
            setAuthorizationHeader();
            return {};
        default:
            return state;
    }
}
