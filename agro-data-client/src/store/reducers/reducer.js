import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
// eslint-disable-next-line import/no-cycle
import user from './userReducer';
import apiCallsInProgress from './apiStatusReducer';

// ===========================|| COMBINE REDUCER ||=========================== //

const reducer = combineReducers({
    customization: customizationReducer,
    user,
    apiCallsInProgress
});

export default reducer;
