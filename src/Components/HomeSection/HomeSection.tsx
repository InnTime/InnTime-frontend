import React from 'react';
import homepageDecorLeft from "../../assets/homepage-decor-left.svg";
import logo from "../../assets/logo.svg";
import homepageDecorRight from "../../assets/homepage-decor-right.svg";
import MyButton from "../UI/button/MyButton";
import cl from './HomeSection.module.css';
import MyIcon from "../UI/icon/MyIcon";

const HomeSection = () => {
    return (
        <div className={cl.homeSection}>
            <img src={homepageDecorLeft} className={cl.backgroundImgLeft} alt="alt"/>
            <img src={logo} alt="alt" className={cl.logo}/>
            <img src={homepageDecorRight} className={cl.backgroundImgRight} alt="alt"/>
            <div className={cl.buttons}>
                <MyButton
                    text="add events to my calendar"
                    icon={<MyIcon type='plus'/>}
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

export default HomeSection;