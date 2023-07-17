import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../../utils/routesPaths";
import MyButton from "../UI/MyButton/MyButton";

const LoginForm = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {auth} = useContext(Context);
    const [groupId, setGroupId] = useState<number>(1);

    const navigate = useNavigate();

    useEffect(() => {
        if (auth.isAuth) {
            navigate(HOME_ROUTE);
        }
    }, [])


    return (
        <div className={'flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50'}>
            <div className={'w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg'}>
                <h1 className={'m-2'}>{auth.isAuth ? "User logged in, wait, please" : "Login, please"}</h1>
                <input
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder='email...'
                    className={'block m-2 w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'}
                />
                <input
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder='password...'
                    className={'block m-2 w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'}
                />
                <div className={'flex'}>
                    <MyButton onClick={() => {
                        auth.registration(email, password)
                            .then(() => auth.login(email, password)
                                .then(() => navigate(HOME_ROUTE)))
                            .catch((e: Error) => alert(e.message))
                    }} backgroundColor={'black'} color={'white'} text={'Register'}/>
                    <MyButton onClick={() => {
                        auth.login(email, password).then(() => navigate(HOME_ROUTE))
                    }} backgroundColor={'white'} color={'black'} text={'Login'}/>
                </div>
            </div>
        </div>
    );
};

export default observer(LoginForm);