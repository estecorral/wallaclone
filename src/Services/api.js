import axios from 'axios';
const API_URL = 'http://localhost:3001/apiv1';

const setNewUser = async (user) => {
    try {
        return await axios.post(`${API_URL}/register`, user).then((res) => {
            if (!res.data.success) {
                console.log(res.data.success);
                return res.data.success;
            } else if (res.data.success) {
                console.log(res.data.success);
                return res.data.success;
            }
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

const filterAds = async (filters) => {
    console.log(filters);
    try {
        if (filters.tag && !filters.venta && !filters.price && !filters.name) {
            return await axios.get(`${API_URL}/anuncios?tag=${filters.tag}`).then(res => res.data.result);
        } else if (filters.tipo.value === true || filters.tipo.value === false) {
            return await axios.get(`${API_URL}/anuncios?tag=${filters.tag}&precio=${filters.precios.value}&venta=${filters.tipo.value}&nombre=${filters.name}`)
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

const getSession = async (user) => {
    try {
        return await axios.post(`${API_URL}/login`, user).then(res => {
            console.log(res.data);
            return res.data;
        })
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
}