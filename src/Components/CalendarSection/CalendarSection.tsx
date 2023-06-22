import React from 'react';
import cl from './CalendarSection.module.css'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from '@fullcalendar/list';

const CalendarSection = () => {
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
                events={[
                    {title: 'event 1', date: '2023-06-22T10:00:00'},
                    {title: 'event 2', date: '2023-06-22'}
                ]}
            />
        </div>
    );
};

export default CalendarSection;