import {EventProps} from "../Components/App/App";

export interface CoreCourseInfo {
    id: number;
    name: string;
    year: "bs-1" | "bs-2" | "bs-3" | "bs-4" | "ms-1" | string;
    events?: EventProps[];
}

class CoreCourseInfoApi {
    getCourses(): Promise<CoreCourseInfo[]> {
        const courses: CoreCourseInfo[] = [
            {
                id: 1,
                name: "B22-CS-01",
                year: "bs-1",
                events: [
                    {title: 'DSA 108 lec', startTime: '9:00:00', endTime: '10:30:00', daysOfWeek: ['1']},
                    {title: 'DSA 108 lec', startTime: '10:40:00', endTime: '12:10:00', daysOfWeek: ['1']},
                    {title: 'DSA 108 lec', startTime: '12:40:00', endTime: '14:10:00', daysOfWeek: ['1']},
                    {title: 'SSAD 108 lec', startTime: '9:00:00', endTime: '10:30:00', daysOfWeek: ['2']},
                    {title: 'SSAD ONLINE tut', startTime: '10:40:00', endTime: '12:10:00', daysOfWeek: ['2']},
                    {title: 'DSA 108 lec', startTime: '12:40:00', endTime: '14:10:00', daysOfWeek: ['2']},
                ]
            },
            {
                id: 2,
                name: "B22-CS-02",
                year: "bs-1",
            },
            {
                id: 3,
                name: "B22-CS-03",
                year: "bs-1",
            },
            {
                id: 4,
                name: "B22-DSAI-01",
                year: "bs-1",
            },
            {
                id: 5,
                name: "В21-SD-01",
                year: "bs-2",
            },
            {
                id: 6,
                name: "В21-SD-03",
                year: "bs-2",
            },
            {
                id: 7,
                name: "В21-CS-01",
                year: "bs-2",
            },
            {
                id: 8,
                name: "В21-RO-01",
                year: "bs-2",
            },
            {
                id: 10,
                name: "B20-SD-02 (28)",
                year: "bs-3",
            },
            {
                id: 11,
                name: "B20-DS (18)",
                year: "bs-3",
            },
            {
                id: 12,
                name: "B19-DS-01 (30)",
                year: "bs-4",
            },
            {
                id: 13,
                name: "B19-RO-01 (14)",
                year: "bs-4",
            },
            {
                id: 14,
                name: "M22-SE-01(16)",
                year: "ms-1",
            },
            {
                id: 15,
                name: "M22-TE-01 (30)",
                year: "ms-1",
            },
        ];
        return Promise.resolve(courses);
    }
}


export const fakeCoreCourseApi = new CoreCourseInfoApi();