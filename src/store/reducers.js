import * as types from './types';
import { combineReducers } from 'redux';

const defaultState = {
    regUser: true,
    ui: {
        loading: false,
        error: null,
    }
};

export const registUser = (state = defaultState.regUser, action) => {
    switch (action.type) {
        case types.REGISTER_USER_SUCCESFULL:
            return action.user;
        case types.REGISTER_USER_FAILURE:
            return action.error;
        default:
            return state;
    }
}

const reducer = combineReducers({
   registUser,
});

export default reducer;