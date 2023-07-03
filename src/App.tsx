import React, {useContext, useEffect, useState} from 'react';
import HomeSection from "./Components/HomeSection/HomeSection";
import AddSection from "./Components/AddSection/AddSection";
import CalendarSection from "./Components/CalendarSection/CalendarSection";
import LoginForm from "./Components/LoginForm/LoginForm";
import {Context} from "./index";


export interface EventProps {
    title: string,
    start?: string,
    end?: string,
    startTime?: string,
    endTime?: string,
    daysOfWeek?: string[]
}


const App = () => {
    const {store} = useContext(Context);
    const [events, setEvents] = useState<EventProps[]>([]);

    return (
        <div>
            <HomeSection/>
            <AddSection events={events} setEvents={setEvents}/>
            <CalendarSection events={events}/>
            {/*<h1>{store.isAuth ? "Пользователь авторизован" : "Авторизуйтесь"}</h1>*/}
            {/*<LoginForm/>*/}
        </div>
    );
};

export default App;