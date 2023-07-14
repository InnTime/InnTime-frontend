import {makeAutoObservable} from "mobx";
import {IEvent} from "../models/IEvent";
import {IElective} from "../models/IElective";
import {ICourse} from "../models/ICourse";


export default class EventStore {
    events: IEvent[] = [];
    selectedEvents: IEvent[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addEvent(newEvents: IEvent) {
        this.events = [...this.events, newEvents]
    }

    addElectives(electives: IElective[]) {
        for (const elective of electives) {
            const newEvent = {
                title: elective.name,
                start: elective.start_time.replace(' ', 'T'),
                end: elective.end_time.replace(' ', 'T')
            } as IEvent;
            if (!this.events.includes(newEvent)) this.addEvent(newEvent)
        }

    }

    addCourses(courses: ICourse[]) {

        const weekDayConverted = {
            'Monday': ['1'], 'Tuesday': ['2'], 'Wednesday': ['3'], 'Thursday': ['4'],
            'Friday': ['5'], 'Saturday': ['6'], 'Sunday': ['7']
        }
        for (const course of courses) {
            const newEvent = {
                title: course.name,
                startTime: course.start_time,
                endTime: course.end_time,
                // @ts-ignore
                daysOfWeek: weekDayConverted[course.day_of_week]
            } as IEvent;
            if (!this.events.includes(newEvent)) this.addEvent(newEvent)
        }
    }

    removeFromSelectedEvents(toRemoveEvents: IEvent[]) {
        this.events = this.events.filter(x => !toRemoveEvents.includes(x));
    }
}