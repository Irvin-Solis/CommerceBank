import React, {useGlobal} from 'reactn';
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({component: Component, ...props}) => {
    const [auth] = useGlobal('signedIn');

    return (
        <Route {...props} render={(props) => auth ? <Component {...props} /> : <Redirect to="/" /> } />
    )
}

export default ProtectedRoute;