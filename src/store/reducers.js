import * as types from './types';
import { combineReducers } from 'redux';

const defaultState = {
    regUser: true,
    ads: [],
    tags: [],
    session: { success: true },
    ui: {
        loading: false,
        error: null,
    }
};

export const regUser = (state = defaultState.regUser, action) => {
    switch (action.type) {
        case types.REGISTER_USER_SUCCESFULL:
            return action.regUser;
        case types.REGISTER_USER_FAILURE:
            return action.error;
        default:
            return state;
    }
};

export const session = (state = defaultState.session, action) => {
    switch (action.type) {
        case types.SESSION_USER_SUCCESFULL:
            return action.session;
        case types.SESSION_USER_FAILURE:
            return action.error;
        default:
            return state;
    }
};

export const ads = (state = defaultState.ads, action) => {
    switch (action.type) {
        case types.GET_ADS_SUCCESFULL:
            return action.ads;
        case types.GET_ADS_FAILURE:
            return action.error;
        default:
            return state;
    }
};

export const tags = (state = defaultState.tags, action) => {
    switch (action.type) {
        case types.GET_TAGS_SUCCESFULL:
            return action.tags;
        case types.GET_TAGS_FAILURE:
            return action.error;
        default:
            return state;
    }
};

const reducer = combineReducers({
   regUser,
    ads,
    tags,
    session,
});

export default reducer;