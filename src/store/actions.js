import * as types from './types';
import {setNewUser, getAds} from "../Services/api";
import { push } from 'connected-react-router';

/**
    Gestión de registro de nuevo usuario
 **/
export const fetchNewUser = (user) => {
    return async function (dispatch, getState) {
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
}

export const registerUserRequest = () => ({
    type: types.REGISTER_USER_REQUEST,
});

export const registerUserSuccesfull = user => ({
    type: types.REGISTER_USER_SUCCESFULL,
    user,
});

export const registerUserFailure = error => ({
    type: types.REGISTER_USER_FAILURE,
    error,
});

/**
 Gestión recuperar los anuncios
 **/
export const fetchAds = (tag, price, name, type) => {
    return async function (dispatch, getState) {
        dispatch(getAdsRequest());
        try {
            const ads = await getAds(tag, price, name, type);
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