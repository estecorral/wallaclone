import * as types from './types';
import {setNewUser, getAds, getTags, filterAds, getSession} from "../Services/api";
import { push } from 'connected-react-router';

/**
    Gestión de registro de nuevo usuario
 **/
export const fetchNewUser = (user) => {
    return async function (dispatch) {
        dispatch(registerUserRequest());
        try {
            const newUser = await setNewUser(user);
            dispatch(registerUserSuccesfull(newUser));
            if(newUser) {
                dispatch(push('/login'));
            }
        }catch (e) {
            dispatch(registerUserFailure(e));
        }
    }
};

export const registerUserRequest = () => ({
    type: types.REGISTER_USER_REQUEST,
});

export const registerUserSuccesfull = regUser => ({
    type: types.REGISTER_USER_SUCCESFULL,
    regUser,
});

export const registerUserFailure = error => ({
    type: types.REGISTER_USER_FAILURE,
    error,
});

/**
 *  Login, recuperar token de usuario que se ha logeado satisfatoriamente
 */
export const fetchSession = (user) => {
    return async function (dispatch) {
        try {
            const session = await getSession(user);
            console.log(session);
            dispatch(getSessionSuccesfull(session));
            if(session.success) {
                dispatch(push('/'));
            }
        }catch (e) {
            dispatch(getSessionFailure(e));
        }
    }
};

export const getSessionSuccesfull = session => ({
    type: types.SESSION_USER_SUCCESFULL,
    session,
});

export const getSessionFailure = error => ({
    type: types.SESSION_USER_FAILURE,
    error,
});

/**
 Gestión recuperar los anuncios
 **/
export const fetchAds = () => {
    return async function (dispatch) {
        dispatch(getAdsRequest());
        try {
            const ads = await getAds();
            dispatch(getAdsSuccesfull(ads));
        } catch (e) {
            dispatch(getAdsFailure(e));
        }
    }
};

export const getAdsRequest = () => ({
    type: types.GET_ADS_REQUEST,
});

export const getAdsSuccesfull = ads => ({
    type: types.GET_ADS_SUCCESFULL,
    ads,
});

export const getAdsFailure = error => ({
    type: types.GET_ADS_FAILURE,
    error,
});

/**
 *  Recoge los tags disponibles
 **/

export const fetchTags = () => {
    return async function (dispatch) {
        dispatch(getTagsRequest());
        try {
            const tags = await getTags();
            dispatch(getTagsSuccesfull(tags));
        }catch (e) {
            dispatch(getTagsFailure(e));
        }
    }
};

export const getTagsRequest = () => ({
    type: types.GET_TAGS_REQUEST,
});

export const getTagsSuccesfull = tags => ({
    type: types.GET_TAGS_SUCCESFULL,
    tags,
});

export const getTagsFailure = error => ({
    type: types.GET_TAGS_FAILURE,
    error,
});

/**
 *  Devuelve los anuncios filtrados
 **/

export const fetchFilterAds = (filters) => {
    return async function (dispatch) {
        dispatch(getAdsRequest());
        try {
            const ads = await filterAds(filters);
            console.log(ads, filters);
            dispatch(getAdsSuccesfull(ads));
        }catch (e) {
            dispatch(getAdsFailure(e));
        }
    }
};