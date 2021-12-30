import axios from "axios";

const instance = axios.create({
    baseURL: 'http://backend:9595',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default instance;