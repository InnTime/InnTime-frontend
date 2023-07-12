import React, {useContext, useState} from 'react';
import cl from './CalendarSection.module.css'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from '@fullcalendar/list';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const CalendarSection = () => {
    const {event} = useContext(Context);
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
                events={event.events}
            />
        </div>
    );
};

export default observer(CalendarSection);