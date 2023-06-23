import React, {useState} from 'react';
import cl from './CalendarSection.module.css'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from '@fullcalendar/list';
import {EventProps} from "../App/App";

interface CalendarProps {
    events: EventProps[]
}

const CalendarSection = ({events} : CalendarProps) => {
    return (
        <div className={cl.calendarSection}>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                headerToolbar={{
                    left: "listWeek,timeGridWeek,timeGridDay",
                    center: "title",
                    right: "today prev,next"
                }}
                initialView={"listWeek"}
                height={"100vh"}
                nowIndicator={true}
                slotMinTime={"09:00:00"}
                slotMaxTime={"21:00:00"}
                events={events}
            />
        </div>
    );
};

export default CalendarSection;