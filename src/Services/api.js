import axios from 'axios';
const API_URL = 'http://18.219.27.78/apiv1';

const setNewUser = async (user) => {
    try {
        return await axios.post(`${API_URL}/register`, user).then((res) => {
            if (!res.data.success) {
                return res.data.success;
            } else if (res.data.success) {
                return res.data.success;
            }
        });
    }catch (e) {
        console.log(e.message);
        throw new Error(e.message);
    }
};

const getSession = async (user) => {
    try {
        return await axios.post(`${API_URL}/login`, user).then(res => {
            return res.data;
        });
    }catch (e) {
        console.log(e.message);
        throw new Error(e.message);
    }
};

const deleteUser = async (id) => {
    try {
        return await axios.delete(`${API_URL}/register/${id}`).then(res => {
            return res.data;
        });
    }catch (e) {
        console.log(e.message);
        throw new Error(e.message);
    }
};

const updateUser = async (id, user) => {
    try {
        return await axios.put(`${API_URL}/register/${id}`, user).then(res => {
            return res.data.result;
        });
    }catch (e) {
        console.log(e.message);
        throw new Error(e.message);
    }
};

const restetPass = async (email) => {
    try {
        return await axios.post(`${API_URL}/resetpass`, email).then(res => {
            return res.data.result;
        });
    }catch (e) {
        console.log(e.message);
        throw new Error(e.message);
    }
};

const setNewPass = async (pass, email, token) => {
    try {
        return await axios.put(`${API_URL}/reset/${token}`, {password: pass, email: email}, {
            headers: { authorization: token },
        }).then(res => {
            return res.data.result;
        });
    }catch (e) {
        console.log(e.message);
        throw new Error(e.message);
    }
};

const getAds = async () => {
    try {
        return await axios.get(`${API_URL}/anuncios`).then(res => {
            return res.data.result;
        });
    }catch (e) {
        console.log(e.message);
        throw new Error(e.message);
    }
};

const getAd = async (id) => {
    try {
        return await axios.get(`${API_URL}/anuncios/${id}`).then(res => res.data.result);
    }catch (e) {
        console.log(e.message);
        throw new Error(e.message);
    }
};

const deleteAd = async (id, token) => {
    try {
        return await axios.delete(`${API_URL}/anuncios/delete/${id}`, {
            headers: { authorization: token },
        }).then(res => {
            return res.data;
        });
    }catch (e) {
        console.log(e.message);
        throw new Error(e.message);
    }
};

const updateAd = async (id, ad, token) => {
    try {
        return await axios.put(`${API_URL}/anuncios/update/${id}`, ad, {
            headers: { authorization: token },
        }).then(res => {
            return res.data.result;
        });
    }catch (e) {
        console.log(e.message);
        throw new Error(e.message);
    }
};

const filterAds = async (filters) => {
    try {
        if (filters.tag && !filters.venta && !filters.price && !filters.name) {
            return await axios.get(`${API_URL}/anuncios?tag=${filters.tag}`).then(res => res.data.result);
        } else if (filters.tipo.value === true || filters.tipo.value === false) {
            return await axios.get(`${API_URL}/anuncios?tag=${filters.tag}&precio=${filters.precios.value}&venta=${filters.tipo.value}&nombre=${filters.name}`)
                .then(res => res.data.result);
        } else if (filters.usuario) {
            return await axios.get(`${API_URL}/anuncios?usuario=${filters.usuario}`)
                .then(res => res.data.result);
        } else {
            return await axios.get(`${API_URL}/anuncios?tag=${filters.tag}&precio=${filters.precios.value}&nombre=${filters.name}`)
                .then(res => res.data.result);
        }

    }catch (e) {
        console.log(e.message);
        throw new Error(e.message);
    }
};

const newAd = async (token, ad) => {
    try {
        await axios.post(`${API_URL}/anuncios`, ad,{
            headers: { authorization: token },
        }).then(res => res.data.result);
    }catch (e) {
        console.log(e.message);
        throw new Error(e.message);
    }
};

const favoriteAd = async (id, ad, token) => {
    try {
        return await axios.put(`${API_URL}/register/favorite/${id}`, ad, {
            headers: { authorization: token },
        }).then(res => {
            return res.data.favorites.favoritos;
        });
    }catch (e) {
        console.log(e.message);
        throw new Error(e.message);
    }
};

const getFavs = async (id, token) => {
    try {
        return await axios.get(`${API_URL}/register/favorites/${id}`, {
            headers: { authorization: token },
        }).then(res => {
            return res.data.favorites.favoritos;
        });
    }catch (e) {
        console.log(e.message);
        throw new Error(e.message);
    }
};

const delelteFav = async (id, ad, token) => {
    try {
        return await axios.put(`${API_URL}/register/delete/${id}`, ad, {
            headers: { authorization: token },
        }).then(res => {
            return res.data.favorites.favoritos;
        });
    }catch (e) {
        console.log(e.message);
        throw new Error(e.message);
    }
};

const stateVendido = async (id, vendido, token) => {
    try {
        return await axios.put(`${API_URL}/anuncios/update/vendido/${id}`, {vendido: vendido},{
            headers: { authorization: token },
        }).then(res => {
            return res.data.ads;
        });
    }catch (e) {
        console.log(e.message);
        throw new Error(e.message);
    }
};

const stateReservado = async (id, reservado,token) => {
    try {
        return await axios.put(`${API_URL}/anuncios/update/reservado/${id}`, {reservado: reservado},{
            headers: { authorization: token },
        }).then(res => {
            return res.data.ads;
        });
    }catch (e) {
        console.log(e.message);
        throw new Error(e.message);
    }
};

const getTags = async () => {
    try {
        return await axios.get(`${API_URL}/anuncios/tags`).then(res => {
           return res.data.result;
        });
    }catch (e) {
        console.log(e.message);
        throw new Error(e.message);
    }
};

export {
    setNewUser,
    getAds,
    getTags,
    filterAds,
    getSession,
    getAd,
    deleteUser,
    updateUser,
    newAd,
    deleteAd,
    updateAd,
    favoriteAd,
    getFavs,
    delelteFav,
    restetPass,
    setNewPass,
    stateVendido,
    stateReservado,
}