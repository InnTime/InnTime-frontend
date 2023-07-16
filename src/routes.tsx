import HomeSection from "./components/HomeSection/HomeSection";
import {HOME_ROUTE, LOGIN_ROUTE} from "./utils/routesPaths";
import LoginForm from "./components/LoginForm/LoginForm";
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