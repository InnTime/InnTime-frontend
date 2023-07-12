import React from 'react';
import HomeSection from "../../components/HomeSection/HomeSection";
import AddSection from "../../components/AddSection/AddSection";
import CalendarSection from "../../components/CalendarSection/CalendarSection";
import {observer} from "mobx-react-lite";



const HomePage = () => {

    return (
        <div>
            <HomeSection/>
            <AddSection/>
            <CalendarSection/>
        </div>
    );
};

export default observer(HomePage);