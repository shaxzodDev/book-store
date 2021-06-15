import {takeEvery, call, put, all} from "redux-saga/effects";
import get from "lodash/get";
import {api, storage} from "services";

import authActions from "../actions";

export function* LoginRequest(action) {

    const {values: {username, password}, cb} = action.payload;
    try {
        const {data} = yield call(api.request.post, '/api/auth/sign_in', {password, username});

        yield call(storage.set, "token", data.token);
        yield call(storage.set, "user", JSON.stringify(get(data, 'user')));

        yield put(authActions.Login.success(data));

        yield call(cb.onSuccess);

    } catch (error) {

        yield put(authActions.Login.failure({
            error
        }));
        yield call(cb.onError, get(error, 'response.data'));

    } finally {

    }
}


export function* LogoutRequest() {
    yield call(storage.remove, "token");
    yield call(storage.remove, "user");
}

export default function* root() {
    yield all([
        takeEvery(authActions.Login.TRIGGER, LoginRequest),
        takeEvery(authActions.Logout.TRIGGER, LogoutRequest),
    ]);
}