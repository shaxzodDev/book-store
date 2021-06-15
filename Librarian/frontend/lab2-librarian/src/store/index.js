/**
 * Redux Store
 */
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import rootSaga from "./saga";
import middlewares, { sagaMiddleware } from "./middlewares";

export function configureStore(initialState = {}) {
    let store;

    if (process.env.NODE_ENV === "production") {
        store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
    } else {
        store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
    }

    sagaMiddleware.run(rootSaga);


    return store;
}
