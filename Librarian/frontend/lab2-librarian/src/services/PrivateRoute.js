import { Route, Redirect } from 'react-router-dom';
import {useSelector} from "react-redux";

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = useSelector(state => state.auth);
    const { isAuthenticated, user} = auth;

    return <Route {...rest} render={(props) => (
        isAuthenticated
            ? <Component {...props} user={user} />
            : <Redirect to='/sign_in' />
    )}
    />
}