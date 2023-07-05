import HomeSection from "./Components/HomeSection/HomeSection";
import {HOME_ROUTE, LOGIN_ROUTE} from "./utils/consts";
import LoginForm from "./Components/LoginForm/LoginForm";
import React from "react";
import Homepage from "./pages/homepage/HomePage";

export const authRoutes = [
    {
        path: HOME_ROUTE,
        element: <Homepage/>
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        element: <LoginForm/>
    }
]