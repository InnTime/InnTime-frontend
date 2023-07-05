import React, {useState} from 'react';
import HomeSection from "../../Components/HomeSection/HomeSection";
import AddSection from "../../Components/AddSection/AddSection";
import CalendarSection from "../../Components/CalendarSection/CalendarSection";
import {observer} from "mobx-react-lite";

export interface EventProps {
    title: string,
    start?: string,
    end?: string,
    startTime?: string,
    endTime?: string,
    daysOfWeek?: string[]
}


const HomePage = () => {

    const [events, setEvents] = useState<EventProps[]>([]);

    return (
        <div>
            <HomeSection/>
            <AddSection events={events} setEvents={setEvents}/>
            <CalendarSection events={events}/>
        </div>
    );
};

export default observer(HomePage);