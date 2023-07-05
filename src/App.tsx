import React, {useContext, useEffect} from 'react';
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";


const App = () => {
    const {store} = useContext(Context);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.setAuth(true);
        }
    }, [])

    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default observer(App);