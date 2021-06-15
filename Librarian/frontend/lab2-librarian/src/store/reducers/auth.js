import { storage } from "services";
import authActions from "../actions";

const token = storage.get('token');
const user = storage.get('user');

const initialState = {
    isFetched: true,
    isAuthenticated: !!token,
    user: user ? JSON.parse(user) : {},
    token: token ? token : ''
};

export default (state = initialState, action) => {

    switch (action.type) {



        case authActions.Login.SUCCESS:
            return {
                ...state,
                isFetched: true,
                isAuthenticated: true,
                token: action.payload.token,
                user: action.payload.user
            };

        case authActions.Logout.REQUEST:
        case authActions.Logout.FAILURE:
        case authActions.Login.FAILURE:
            return {
                ...state,
                isFetched: true,
                isAuthenticated: false,
                token: '',
                user: {}
            };

        default:
            return state;

    }

};