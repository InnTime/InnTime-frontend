import React, {useContext} from 'react';
import {HOME_ROUTE, REGISTER_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";
import {Context} from "../../index";

const ErrorPage = () => {
    const {auth} = useContext(Context);
    const navigate = useNavigate();
    return (
        <div>
            <h2>404 Page not found</h2>
            {auth.isAuth ? <p onClick={() => navigate(HOME_ROUTE)}>go to main page</p> :
                <p onClick={() => navigate(REGISTER_ROUTE)}>go to register</p>}
        </div>
    );
};

export default ErrorPage;