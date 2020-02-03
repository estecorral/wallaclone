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
}

const getAds = async () => {
    try {
        return await axios.get(`${API_URL}/anuncios`).then(res => {
            console.log(res.data.result);
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
}