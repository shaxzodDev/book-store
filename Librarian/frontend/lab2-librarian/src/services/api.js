import axios from "axios";
import get from "lodash/get";
import storage from './storage';

const request = axios.create({
    baseURL: "http://backend:9595"
});

request.defaults.params = {};
request.defaults.headers.common['Content-Type'] = "application/json"
request.defaults.headers.common['Access-Control-Allow-Origin'] = "*"

let token = storage.get('token');
const subscribe = store => {
    let state = store.getState();
    if(state.auth.token) token = get(state, 'auth.token');

    if(token){
        request.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
};



export default {
    request
};