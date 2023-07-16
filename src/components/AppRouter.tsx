import React, {useContext} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {authRoutes, publicRoutes} from "../routes";
import ErrorPage from "../pages/errorpage/ErrorPage";

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
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    );
};

export default observer(AppRouter);