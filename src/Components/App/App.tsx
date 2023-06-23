import React, {useState} from 'react';
import HomeSection from "../HomeSection/HomeSection";
import AddSection from "../AddSection/AddSection";
import CalendarSection from "../CalendarSection/CalendarSection";


export interface EventProps {
    title: string,
    start?: string,
    end?: string,
    startTime?: string,
    endTime?: string,
    daysOfWeek?: string[]
}


const App = () => {

    const [events, setEvents] = useState<EventProps[]>([]);

    return (
        <div>
            <HomeSection/>
            <AddSection events={events} setEvents={setEvents}/>
            <CalendarSection events={events}/>
        </div>
    );
};

export default App;