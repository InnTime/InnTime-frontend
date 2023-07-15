import {makeAutoObservable} from "mobx";
import {IEvent} from "../models/IEvent";
import {ICourse} from "../models/ICourse";
import ElectiveService from "../services/ElectiveService";


export default class EventStore {
    events: IEvent[] = [];
    electives: IEvent[] = [];
    courses: IEvent[] = [];

    constructor() {
        makeAutoObservable(this);
    }


    async addElectives() {
        const userElectivesResponse = await ElectiveService.fetchUserElectives();
        const electives = userElectivesResponse.data;

        const electiveEvents = [];
        for (const elective of electives) {
            const newEvent = {
                title: elective.name,
                start: elective.start_time.replace(' ', 'T'),
                end: elective.end_time.replace(' ', 'T')
            } as IEvent;
            if (!this.events.includes(newEvent)) {
                this.events = [...this.events, newEvent]
                electiveEvents.push(newEvent)
            }
        }
        this.electives = electiveEvents;

    }

    addCourses(courses: ICourse[]) {
        const weekDayConverted = {
            'Monday': ['1'], 'Tuesday': ['2'], 'Wednesday': ['3'], 'Thursday': ['4'],
            'Friday': ['5'], 'Saturday': ['6'], 'Sunday': ['7']
        }

        const courseEvents = [];

        for (const course of courses) {
            const newEvent = {
                title: course.name,
                startTime: course.start_time,
                endTime: course.end_time,
                daysOfWeek: weekDayConverted[course.day_of_week]
            } as IEvent;
            if (!this.events.includes(newEvent)) courseEvents.push(newEvent)
        }
        this.courses = courseEvents;
    }


}