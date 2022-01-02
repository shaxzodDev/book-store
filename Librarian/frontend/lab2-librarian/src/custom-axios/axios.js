import axios from "axios";

const instance = axios.create({
    baseURL: 'http://3m17.l.time4vps.cloud:9595',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default instance;