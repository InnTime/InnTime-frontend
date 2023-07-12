import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {IGroup} from "../../models/IGroup";
import GroupService from "../../services/GroupService";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../../utils/consts";

const LoginForm = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {auth} = useContext(Context);
    const [groups, setGroups] = useState<IGroup[]>([]);
    const [groupId, setGroupId] = useState<number>(1);

    const navigate = useNavigate();

    if (auth.isAuth) {
        navigate(HOME_ROUTE);
    }

    async function getGroups() {
        try {
            const response = await GroupService.fetchGroups();
            setGroups(() => response.data);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getGroups();
    }, [])

    useEffect(() => {
        if (!groupId) setGroupId(groups[0].id)
    }, [groups])

    return (groupId !== undefined ?
            <div>
                <h1>{auth.isAuth ? "Пользователь авторизован" : "Авторизуйтесь"}</h1>
                <input
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder='email...'
                />
                <input
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder='password...'
                />
                <select name="" id="" onChange={(e) => setGroupId(groups.filter(g => g.name === e.target.value)[0].id)}>
                    {groups.map(g => <option key={g.id}>{g.name}</option>)}
                </select>
                <button onClick={() => {
                    auth.registration(email, password, groupId);
                }}>Register
                </button>
                <button onClick={() => {
                    auth.login(email, password)
                }}>Login
                </button>
            </div> : <div>loading...</div>
    );
};

export default observer(LoginForm);