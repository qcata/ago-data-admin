import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
// eslint-disable-next-line import/no-cycle
import user from './userReducer';
// eslint-disable-next-line import/no-cycle
import lands from './landReducer';
import apiCallsInProgress from './apiStatusReducer';

// ===========================|| COMBINE REDUCER ||=========================== //

const reducer = combineReducers({
    customization: customizationReducer,
    user,
    lands,
    apiCallsInProgress
});

export default reducer;
