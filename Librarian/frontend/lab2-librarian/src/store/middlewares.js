import createSagaMiddleware from "redux-saga";
import {createLogger} from "redux-logger";

export const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    sagaMiddleware
];

if(process.env.NODE_ENV === "development"){
    middlewares.push(createLogger());
}

export default middlewares;
