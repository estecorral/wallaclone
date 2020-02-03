import * as types from './types';
import { combineReducers } from 'redux';

const defaultState = {
    regUser: true,
    ads: [],
    tags: [],
    ui: {
        loading: false,
        error: null,
    }
};

export const registUser = (state = defaultState.regUser, action) => {
    switch (action.type) {
        case types.REGISTER_USER_SUCCESFULL:
            return action.regUser;
        case types.REGISTER_USER_FAILURE:
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
   registUser,
    ads,
    tags,
});

export default reducer;