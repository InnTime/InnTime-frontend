import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {authRoutes, publicRoutes} from "../routes";
import {HOME_ROUTE, LOGIN_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const {auth} = useContext(Context);

    return (
        <Routes>
            {auth.isAuth && authRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}
            {publicRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}
            <Route path='*' element={auth.isAuth? <Navigate to={HOME_ROUTE}/> : <Navigate to={LOGIN_ROUTE}/>}/>
        </Routes>
    );
};

export default observer(AppRouter);