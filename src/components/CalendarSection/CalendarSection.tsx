import React, {useContext} from 'react';
import cl from './CalendarSection.module.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import {observer} from 'mobx-react-lite';
import {Context} from '../../index';
import MyButton from '../UI/MyButton/MyButton';
import {createEvents, DateArray, EventAttributes} from 'ics';
import {saveAs} from 'file-saver';

const CalendarSection = () => {
    const context = useContext(Context);
    const eventStore = context.event;

    function convertToICSDateWithTime(eventDateWithTime: string): DateArray {
        const convertedStart = eventDateWithTime.replace('T', ' ').split(/[-: ]/g).map(Number)
        const [year, month, day, hour, minutes] = convertedStart;
        return [year, month, day, hour, minutes] as DateArray;
    }

    function convertToICSTime(eventTime: string): DateArray {
        const convertedStart = eventTime.replace('T', ' ').split(/[-: ]/g).map(Number).slice(0, -1)
        const [hour, minutes] = convertedStart;
        console.log(convertedStart)
        return [2023, 6, 5, hour, minutes] as DateArray;
    }

    function convertToICSRR(recurrenceNumber: string): string {
        const ICSConverted: { [index: string]: string } = {
            '1': 'MO', '2': 'TU', '3': 'WE', '4': 'TH',
            '5': 'FR', '6': 'SA', '7': 'SU'
        }
        return `FREQ=WEEKLY;BYDAY=${ICSConverted[recurrenceNumber]};INTERVAL=1;`;
    }

    // Event handlers
    const handleExportClick = () => {

        let events = eventStore.courses.concat(eventStore.electives);
        let eventAttributes: EventAttributes[] = []

        // convert to ics format

        for (const event of events) {
            if (event.start && event.end) {
                const newEvent = {
                    start: convertToICSDateWithTime(event.start),
                    end: convertToICSDateWithTime(event.end),
                    title: event.title,
                } as EventAttributes
                // console.log(newEvent)
                eventAttributes.push(newEvent)
            } else if (event.startTime && event.endTime && event.daysOfWeek) {
                const newEvent = {
                    start: convertToICSTime(event.startTime),
                    end: convertToICSTime(event.endTime),
                    title: event.title,
                    recurrenceRule: convertToICSRR(event.daysOfWeek[0])
                } as EventAttributes
                // console.log(newEvent)
                eventAttributes.push(newEvent)
            }
        }


        return createEvents(eventAttributes, (error, value) => {
            const blob = new Blob([value], {type: "calendar/plain;charset=utf-8"});
            saveAs(blob, "event-schedule.ics");
        });
    };

    return (
        <div>
            <div className={cl.calendarSection}>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                    headerToolbar={{
                        left: 'listWeek,timeGridWeek,timeGridDay',
                        center: 'title',
                        right: 'today prev,next',
                    }}
                    initialView={'listWeek'}
                    height={'100vh'}
                    nowIndicator={true}
                    slotMinTime={'09:00:00'}
                    slotMaxTime={'21:00:00'}
                    events={eventStore.courses.concat(eventStore.electives)}
                />
            </div>
            <div style={{display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
                <MyButton backgroundColor={'yellow'} color={'black'} text={'Export as calendar format'}
                          onClick={() => handleExportClick()}
                />
            </div>
        </div>
    );
};

export default observer(CalendarSection);
