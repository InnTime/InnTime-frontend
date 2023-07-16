import React, {useContext, useEffect} from 'react';
import homepageDecorLeft from "../../assets/homepage-decor-left.svg";
import logo from "../../assets/logo.svg";
import homepageDecorRight from "../../assets/homepage-decor-right.svg";
import MyButton from "../UI/MyButton/MyButton";
import cl from './HomeSection.module.css';
import MyIcon from "../UI/MyIcon/MyIcon";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../../utils/consts";

const HomeSection = () => {

    const {auth} = useContext(Context);

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
                    onClick={async () => {
                        await auth.logout()
                    }}
                />
                <MyButton
                    text="Add events to my calendar"
                    icon={<MyIcon type='add'/>}
                    backgroundColor='black'
                    color='white'
                />
                <MyButton
                    text="See my schedule"
                    icon={<MyIcon type='calendar' color='black'/>}
                    backgroundColor='yellow'
                    color='black'
                />
            </div>
        </div>
    );
};

export default observer(HomeSection);