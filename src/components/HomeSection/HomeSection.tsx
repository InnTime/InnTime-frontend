import React, {useContext} from 'react';
import homepageDecorLeft from "/homepage-decor-left.svg";
import logo from "/logo.svg";
import homepageDecorRight from "/homepage-decor-right.svg";
import MyButton from "../UI/MyButton/MyButton";
import cl from './HomeSection.module.css';
import MyIcon from "../UI/MyIcon/MyIcon";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";
import {LOGIN_ROUTE} from "../../utils/routesPaths";
import {HashLink} from "react-router-hash-link";

const HomeSection = () => {

    const {auth} = useContext(Context);
    const navigate = useNavigate();

    return (
        <div className={cl.homeSection}>
            <img src={homepageDecorLeft} className={cl.backgroundImgLeft} alt="alt"/>
            <img src={logo} alt="alt" className={cl.logo}/>
            <img src={homepageDecorRight} className={cl.backgroundImgRight} alt="alt"/>
            <div className={cl.buttons}>
                <MyButton
                    text="Logout"
                    icon={<MyIcon type='logout' color='black'/>}
                    backgroundColor='white'
                    color='black'
                    onClick={() => {
                        auth.logout().then(() => navigate(LOGIN_ROUTE))
                    }}
                />
                <HashLink to={'#add-section'}>
                    <MyButton
                        text="Add events"
                        icon={<MyIcon type='add'/>}
                        backgroundColor='black'
                        color='white'
                    />
                </HashLink>
                <HashLink to={'#calendar-section'}>
                <MyButton
                    text="See my schedule"
                    icon={<MyIcon type='calendar' color='black'/>}
                    backgroundColor='yellow'
                    color='black'
                />
                </HashLink>
            </div>
        </div>
    );
};

export default observer(HomeSection);