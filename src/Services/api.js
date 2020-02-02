import axios from 'axios';
const API_URL = 'http://localhost:3001/apiv1';

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
}

const getAds = async (tag, price, name, type) => {
    try {
        let venta = '';
        if(type) {
            venta = false;
            if (type === 'sell') {
                venta = true;
            }
        }
        if((tag === 'all' || !tag)  && !name) {
            return await axios.get(`${API_URL}/anuncios?price=${price}&venta=${venta}`).then(res => res.data.results);
        } else if ((tag === 'all' || !tag)  && name) {
            return await axios.get(`${API_URL}/anuncios?price=${price}&venta=${venta}&name=${name}`).then(res => res.data.results);
        } else if (tag !== 'all' && name) {
            return await axios.get(`${API_URL}/anuncios?tag=${tag}&price=${price}&venta=${venta}&name=${name}`).then(res => res.data.results);
        } else if (tag !== 'all' && !name) {
            return await axios.get(`${API_URL}/anuncios?tag=${tag}&price=${price}&venta=${venta}`).then(res => res.data.results);
        }
        return await axios.get(`${API_URL}/anuncios?tag=${tag}`).then(res => res.data.results);
    }catch (e) {
        console.log(e.message);
        throw new Error(e.message);
    }

};

export {
    setNewUser,
    getAds,
}