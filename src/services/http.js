import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'http://restaurante.local/api/',
    headers:{
        'Content-Type':'application/json'
    }
});

export default axiosInstance;