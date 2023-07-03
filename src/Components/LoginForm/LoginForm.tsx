import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {IGroup} from "../../models/IGroup";
import GroupService from "../../services/GroupService";

const LoginForm = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {store} = useContext(Context);
    const [groups, setGroups] = useState<IGroup[]>([]);
    const [group, setGroup] = useState<IGroup>();

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

    useEffect(()=>{
        if (!group) setGroup(groups[0])
    }, [groups])

    return ( group !== undefined ?
        <div>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='email...'
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='password...'
            />
            <select name="" id="" onChange={(e) => setGroup(groups.filter(g => g.name === e.target.value)[0])}>
                {groups.map(g => <option key={g.id}>{g.name}</option>)}
            </select>
            <button onClick={() => store.login(email, password)}>Login</button>
            <button onClick={() => store.registration(email, password, group.id)}>Register</button>
        </div> : <div>loading...</div>
    );
};

export default LoginForm;