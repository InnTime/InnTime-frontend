import {makeAutoObservable, runInAction} from "mobx";
import {IEvent} from "../models/IEvent";
import {ICourse} from "../models/ICourse";
import ElectiveService from "../services/ElectiveService";
import CourseService from "../services/CourseService";


export default class EventStore {
    events = new Set();
    electives: IEvent[] = [];
    courses: IEvent[] = [];

    constructor() {
        makeAutoObservable(this);
    }


    async updateElectives() {
        const userElectivesResponse = await ElectiveService.fetchUserElectives();
        const electives = userElectivesResponse.data;
        runInAction(() => {
            const electiveEvents = [];
            for (const elective of electives) {
                const newEvent = {
                    title: elective.name,
                    start: elective.start_time.replace(' ', 'T'),
                    end: elective.end_time.replace(' ', 'T')
                } as IEvent;
                if (!this.events.has(newEvent)) {
                    this.events.add(newEvent)
                    electiveEvents.push(newEvent)
                }
            }
            this.electives = electiveEvents;
        })

    }

    async updateCourses() {
        const userCoursesResponse = await CourseService.fetchUserCourses();
        const courses: ICourse[] = userCoursesResponse.data
        const weekDayConverted = {
            'Monday': ['1'], 'Tuesday': ['2'], 'Wednesday': ['3'], 'Thursday': ['4'],
            'Friday': ['5'], 'Saturday': ['6'], 'Sunday': ['7']
        }

        runInAction(() => {
            const courseEvents = [];
            for (const course of courses) {
                const newEvent = {
                    title: course.name,
                    startTime: course.start_time,
                    endTime: course.end_time,
                    daysOfWeek: weekDayConverted[course.day_of_week]
                } as IEvent;
                if (!this.events.has(newEvent)) {
                    this.events.add(newEvent)
                    courseEvents.push(newEvent)
                }
            }
            this.courses = courseEvents;
        })
    }


}