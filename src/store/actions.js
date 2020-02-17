import * as types from './types';
import {
    setNewUser, getAds, getTags, filterAds,
    getSession, getAd, deleteUser, updateUser, newAd,
    deleteAd, updateAd, favoriteAd, getFavs, delelteFav,
    restetPass } from "../Services/api";
import { push } from 'connected-react-router';
import {deleteStorage, saveUser} from '../storage/storage';

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
            saveUser(session);
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
 *  Logout
 */

export const logout = () => (dispatch) => {
    deleteStorage();
    dispatch(setLogout());
    dispatch(push('/'));
};

export const setLogout = () => ({
    type: types.LOGOUT,
});

/**
 *  Delete user
 */
export const fetchDeleteUser = (id) => {
    return async function (dispatch) {
        try {
            await deleteUser(id);
            deleteStorage();
            dispatch(deleteUSuccess());
            dispatch(push('/'));
        } catch (e) {
            dispatch(deleteUFail(e));
        }
    }
};

export const deleteUSuccess = () => ({
    type: types.DELETE_PROFILE,
});

export const deleteUFail = (error) => ({
    type: types.DELETE_PROFILE_FAIL,
    error,
});

/**
 *  UPDATE User profile
 */
export const fetchUpdateUser = (id, user) => {
    return async function (dispatch){
        try {
            await updateUser(id, user);
            dispatch(updateUserSuccess());
        } catch (e) {
            dispatch(updateUserFailure(e));
        }
    }
};

export const updateUserSuccess = () => ({
    type: types.UPDATE_PROFILE_SUCCESS,
});

export const updateUserFailure = (e) => ({
    type: types.UPDATE_PROFILE_FAIL,
    e,
});

/**
 *  Reset de contraseña de usuario
 */
export const fetchResetPass = (email) => {
    return async function (dispatch) {
        try {
            await restetPass(email);
            dispatch(resetPassSuccess());
        }catch (e) {
            dispatch(resetPassFail(e));
        }
    }
};

export const resetPassSuccess = () => ({
    type: types.RESET_PASS_SUCCESS,
});

export const resetPassFail = (e) => ({
    type: types.RESET_PASS_FAILURE,
    e,
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
 * Recupera un ad por su id
 */
export const fetchAd = (id) => {
    return async function (dispatch) {
        dispatch(getAdRequest());
        try {
            const ad = await getAd(id);
            dispatch(getAdSuccesfull(ad));
        } catch (e) {
            dispatch(getAdFailure(e));
        }
    }
};

export const getAdRequest = () => ({
    type: types.GET_AD_REQUEST,
});

export const getAdSuccesfull = ad => ({
    type: types.GET_AD_SUCCESFULL,
    ad,
});

export const getAdFailure = error => ({
    type: types.GET_AD_FAILURE,
    error,
});

/**
 *  Crea un nuevo anuncio
 */

export const fetchNewAd = (token, ad) => {
  return async function (dispatch) {
      try {
          await newAd(token, ad);
          dispatch(createNewAd());
          dispatch(push('/'));
      }catch (e) {
          dispatch(createNewAdFail(e));
      }

  }
};

/**
 *  Delete ad
 */
export const fetchDeleteAd = (id, name, token) => {
        return async function (dispatch) {
            try {
                await deleteAd(id, token);
                dispatch(deleteAdSuccess());
                dispatch(push('/'));
            } catch (e) {
                dispatch(deleteAdFail(e));
            }
        }
    };

export const deleteAdSuccess = () => ({
    type: types.DELETE_AD_SUCCESFULL,
});

export const deleteAdFail = (error) => ({
    type: types.DELETE_AD_FAILURE,
    error,
});

/**
 *  Update ad
 */
export const fetchUpdateAd = (id, ad, token) => {
    return async function (dispatch) {
        try {
            await updateAd(id, ad, token);
            dispatch(updateAdSuccess());
            dispatch(push('/'));
        } catch (e) {
            dispatch(updateAdFail(e));
        }
    }
};

export const updateAdSuccess = () => ({
    type: types.UPDATE_AD_SUCCESFULL,
});

export const updateAdFail = (error) => ({
    type: types.UPDATE_AD_FAILURE,
    error,
});


export const createNewAd = () => ({
    type: types.NEW_AD_SUCCESFULL,
});

export const createNewAdFail = error => ({
    type: types.NEW_AD_FAILURE,
    error,
});

/**
 *  Revierte el orden de los anuncios
 */
export const revertAds = (ads) => ({
    type: types.REVERT_ADS,
    ads,
});

/**
 * Añade un anuncio a favoritos
 */
export const addFavorite = (id, ad, token) => {
    return async function (dispatch) {
        try {
            const favs = await favoriteAd(id, ad, token);
            dispatch(addFavoriteSuccesfull(favs));
        } catch (e) {
            dispatch(addFavoriteFailure(e));
        }
    }
};

export const addFavoriteSuccesfull = favs => ({
    type: types.ADD_FAVORITE_SUCCESFULL,
    favs,
});

export const addFavoriteFailure = error => ({
    type: types.ADD_FAVORITE_FAILURE,
    error,
});

/**
 * Recupera los anuncios favoritos de un usuario
 */
export const getAllFavs = (id, token) => {
    return async function (dispatch) {
        try {
            const favs = await getFavs(id, token);
            dispatch(getFavoriteSuccesfull(favs));
        } catch (e) {
            dispatch(getFavoriteFailure(e));
        }
    }
};

export const getFavoriteSuccesfull = favs => ({
    type: types.GET_FAVORITES_SUCCESFULL,
    favs,
});

export const getFavoriteFailure = error => ({
    type: types.GET_FAVORITES_FAILURE,
    error,
});

/**
 *  Delete de favoritos
 */
export const delFav = (id, ad, token) => {
    return async function (dispatch) {
        try {
            const favs = await delelteFav(id, ad, token);
            console.log(favs);
            dispatch(delFavoriteSuccesfull(favs));
        } catch (e) {
            dispatch(delFavoriteFailure(e));
        }
    }
};

export const delFavoriteSuccesfull = favs => ({
    type: types.DELETE_FAVORITE_SUCCESFULL,
    favs,
});

export const delFavoriteFailure = error => ({
    type: types.DELETE_FAVORITE_FAILURE,
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
            dispatch(getAdsSuccesfull(ads));
        }catch (e) {
            dispatch(getAdsFailure(e));
        }
    }
};