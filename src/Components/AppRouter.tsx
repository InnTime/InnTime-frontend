import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {authRoutes, publicRoutes} from "../routes";
import {HOME_ROUTE, LOGIN_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const {store} = useContext(Context);

    return (
        <Routes>
            {store.isAuth && authRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}
            {publicRoutes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}
            <Route path='*' element={<Navigate to={HOME_ROUTE}/>}/>
        </Routes>
    );
};

export default observer(AppRouter);