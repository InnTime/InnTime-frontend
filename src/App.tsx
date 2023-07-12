import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {Context} from "./index";


const App = () => {
    const {auth} = useContext(Context);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            auth.setAuth(true);
        }
    }, [])

    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default observer(App);