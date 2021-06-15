import { createRoutine } from "redux-saga-routines";

const Login = createRoutine("LOGIN");
const Logout = createRoutine("LOGOUT");

export default {
    Login,
    Logout
};