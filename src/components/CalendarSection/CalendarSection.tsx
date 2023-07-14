import React, {useContext} from 'react';
import cl from './CalendarSection.module.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import {observer} from 'mobx-react-lite';
import {Context} from '../../index';
import MyButton from '../UI/MyButton/MyButton';
import {IEvent} from '../../models/IEvent';
import {gapi} from "gapi-script";

const CalendarSection = () => {
    const {event} = useContext(Context);

    const importAllToGoogleCalendar = (events: IEvent[]) => {
        const gapiClient = gapi.client;

        if (!gapiClient) {
            console.error('Google API client not loaded.');
            return;
        }

        const handleAuthorization = async () => {
            try {
                await gapiClient.calendar.events.list({
                    calendarId: 'primary',
                    timeMin: new Date().toISOString(),
                    showDeleted: false,
                    singleEvents: true,
                    maxResults: 100,
                    orderBy: 'startTime',
                });

                const batch = gapiClient.newBatch();

                console.log(batch)

                events.forEach((event) => {
                    const request = gapiClient.calendar.events.insert({
                        calendarId: 'primary',
                        resource: {
                            summary: event.title,
                            start: {
                                dateTime: event.start,
                            },
                            end: {
                                dateTime: event.end,
                            },
                        },
                    });

                    batch.add(request, {});
                });

                await batch;

                alert('Events imported successfully to Google Calendar!');
            } catch (error) {
                console.error('Error importing events to Google Calendar:', error);
                alert('Failed to import events to Google Calendar.');
            }
        };

        gapiClient.load('client', () => {
            gapiClient.init({
                apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
                clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
                scope: 'https://www.googleapis.com/auth/calendar.events',
            }).then(handleAuthorization)
                .catch((e:any)=>console.log(e));
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
                    events={event.events}
                />
            </div>
            <div style={{display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
                <MyButton backgroundColor={'yellow'} color={'black'} text={'Import my calendar'}
                          onClick={() => importAllToGoogleCalendar(event.events)}/>
            </div>
        </div>
    );
};

export default observer(CalendarSection);
