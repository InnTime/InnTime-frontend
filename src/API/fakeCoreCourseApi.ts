import {EventProps} from "../App";

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
                    {title: 'Software Project  (lec)', startTime: '9:00:00', endTime: '10:30:00', daysOfWeek: ['1']},
                    {title: 'Software Project  (tut)', startTime: '10:40:00', endTime: '12:10:00', daysOfWeek: ['1']},
                    {title: 'Software Project (lab)', startTime: '12:40:00', endTime: '14:10:00', daysOfWeek: ['1']},
                    {title: 'SSAD 108 lec', startTime: '9:00:00', endTime: '10:30:00', daysOfWeek: ['2']},
                    {title: 'SSAD ONLINE tut', startTime: '10:40:00', endTime: '12:10:00', daysOfWeek: ['2']},
                    {title: 'DSA 108 lec', startTime: '12:40:00', endTime: '14:10:00', daysOfWeek: ['2']},
                    {title: 'Theoretical sports(lec) -Mental Health', startTime: '10:40:00', endTime: '12:10:00', daysOfWeek: ['2','3','4']}
                ]
            },
            {
                id: 2,
                name: "B22-CS-02",
                year: "bs-1",
                events: [
                    {title: 'Software Project  (lec)', startTime: '9:00:00', endTime: '10:30:00', daysOfWeek: ['1']},
                    {title: 'Software Project  (tut)', startTime: '10:40:00', endTime: '12:10:00', daysOfWeek: ['1']},
                    {title: 'Software Project (lab)', startTime: '14:20:00', endTime: '15:50:00', daysOfWeek: ['1']},
                    {title: 'Theoretical sports(lec) -Mental Health', startTime: '10:40:00', endTime: '12:10:00', daysOfWeek: ['2','3','4']}
                ]
            },
            {
                id: 3,
                name: "B22-CS-03",
                year: "bs-1",
                events: [
                    {title: 'Software Project  (lec)', startTime: '9:00:00', endTime: '10:30:00', daysOfWeek: ['1']},
                    {title: 'Software Project  (tut)', startTime: '10:40:00', endTime: '12:10:00', daysOfWeek: ['1']},
                    {title: 'Software Project (lab)', startTime: '12:40:00', endTime: '14:10:00', daysOfWeek: ['1']},
                    {title: 'Theoretical sports(lec) -Mental Health', startTime: '10:40:00', endTime: '12:10:00', daysOfWeek: ['2','3','4']}
                ]
            },
            {
                id: 4,
                name: "B22-DSAI-01",
                year: "bs-1",
                events:[
                    {title: 'Software Project  (lec)', startTime: '9:00:00', endTime: '10:30:00', daysOfWeek: ['1']},
                    {title: 'Software Project  (tut)', startTime: '10:40:00', endTime: '12:10:00', daysOfWeek: ['1']},
                    {title: 'Software Project (lab)', startTime: '12:40:00', endTime: '14:10:00', daysOfWeek: ['1']},
                    {title: 'Theoretical sports(lec)-Mental Health', startTime: '10:40:00', endTime: '12:10:00', daysOfWeek: ['2','3','4']}
                ]
            },
            {
                id: 5,
                name: "В21-SD-01",
                year: "bs-2",
                events:[
                    {title: 'Capstone Project (lec)', startTime: '11:00:00', endTime: '12:30:00', daysOfWeek: ['2']}
                ]
            },
            {
                id: 6,
                name: "В21-SD-03",
                year: "bs-2",
                events:[
                    {title: 'Capstone Project (lec)', startTime: '11:00:00', endTime: '12:30:00', daysOfWeek: ['2']}
                ]
            },
            {
                id: 7,
                name: "В21-CS-01",
                year: "bs-2",
                events:[
                    {title: 'Capstone Project (lec)', startTime: '11:00:00', endTime: '12:30:00', daysOfWeek: ['2']}
                ]
            },
            {
                id: 8,
                name: "В21-RO-01",
                year: "bs-2",
                events:[
                    {title: 'Capstone Project (lec)', startTime: '11:00:00', endTime: '12:30:00', daysOfWeek: ['2']}
                ]
            },
            {
                id: 10,
                name: "B20-SD-02 (28)",
                year: "bs-3",
                events:[
                    {title: 'Information Retrieval (lec)', startTime: '9:10:00', endTime: '10:40:00', daysOfWeek: ['1']},
                    {title: 'Information Retrieval (lab)', startTime: '12:50:00', endTime: '14:20:00', daysOfWeek: ['1']},
                    {title: 'Advanced compiler construction and program analysis (lec)', startTime: '9:10:00', endTime: '10:40:00', daysOfWeek: ['2']},
                    {title: 'Advanced compiler construction and program analysis (lec)', startTime: '10:50:00', endTime: '12:20:00', daysOfWeek: ['2']},
                    {title: 'ACC and program analysis (lab)', startTime: '12:50:00', endTime: '14:20:00', daysOfWeek: ['2','4']},
                    {title: 'Compiler Construction (lec)', startTime: '10:50:00', endTime: '12:20:00', daysOfWeek: ['3']},
                    {title: 'Compiler Construction (lab)', startTime: '14:30:00', endTime: '16:00:00', daysOfWeek: ['3']},
                    {title: 'Lean Software Development (lab)', startTime: '14:30:00', endTime: '16:00:00', daysOfWeek: ['4']}
                ]
            },
            {
                id: 11,
                name: "B20-DS (18)",
                year: "bs-3",
                events:[
                    {title: 'Signals and Systems (lec)', startTime: '10:50:00', endTime: '12:20:00', daysOfWeek: ['1']},
                    {title: 'Signals and Systems (lab)', startTime: '12:50:00', endTime: '14:20:00', daysOfWeek: ['1']},
                    {title: 'Introduction to Big Data (lec)', startTime: '10:50:00', endTime: '12:20:00', daysOfWeek: ['2']},
                    {title: 'Information Retrieval (lab)', startTime: '12:50:00', endTime: '14:20:00', daysOfWeek: ['2']},
                    {title: 'Introduction to Big Data (lab)', startTime: '14:30:00', endTime: '16:00:00', daysOfWeek: ['2']},
                    {title: 'Data Mining (lab)', startTime: '10:50:00', endTime: '12:20:00', daysOfWeek: ['3']},
                    {title: 'Introduction to Big Data (lec)', startTime: '10:50:00', endTime: '12:20:00', daysOfWeek: ['4']},
                    {title: 'Introduction to Big Data (lec)', startTime: '10:50:00', endTime: '12:20:00', daysOfWeek: ['4']},
                    {title: 'Introduction to Big Data (lab)', startTime: '14:30:00', endTime: '16:00:00', daysOfWeek: ['4']},
                    {title: 'Data Mining (lec)', startTime: '14:30:00', endTime: '16:00:00', daysOfWeek: ['5']},
                    {title: 'Data Mining (lec)', startTime: '16:10:00', endTime: '17:40:00', daysOfWeek: ['5']}
                ]
            },
            {
                id: 12,
                name: "B19-DS-01 (30)",
                year: "bs-4",
                events:[
                    {title: 'Academic Research and Writing Culture', startTime: '11:10:00', endTime: '12:40:00', daysOfWeek: ['1']},
                    {title: 'History (lec)', startTime: '11:10:00', endTime: '12:40:00', daysOfWeek: ['2']},
                    {title: 'Theoretical Sports- Optimal Nutrition(lec)', startTime: '13:10:00', endTime: '14:40:00', daysOfWeek: ['2']},
                    {title: 'Statistical Techniques (lec)', startTime: '13:10:00', endTime: '14:40:00', daysOfWeek: ['4']},
                    {title: 'Statistical Techniques (lab)', startTime: '14:50:00', endTime: '16:20:00', daysOfWeek: ['4']}
                ]
            },
            {
                id: 13,
                name: "B19-RO-01 (14)",
                year: "bs-4",
                events:[
                    {title: 'Academic Research and Writing Culture', startTime: '11:10:00', endTime: '12:40:00', daysOfWeek: ['1']},
                    {title: 'History (lec)', startTime: '11:10:00', endTime: '12:40:00', daysOfWeek: ['2']},
                    {title: 'Theoretical Sports- Optimal Nutrition(lec)', startTime: '13:10:00', endTime: '14:40:00', daysOfWeek: ['2']},
                    {title: 'Statistical Techniques (lec)', startTime: '13:10:00', endTime: '14:40:00', daysOfWeek: ['4']},
                    {title: 'Statistical Techniques (lab)', startTime: '14:50:00', endTime: '16:20:00', daysOfWeek: ['4']}
                ]
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
                events:[
                    {title: 'CEO Toolkit: Operations, Finance, HR, Legal Aspect, IP Law (lec)', startTime: '10:40:00', endTime: '12:10:00', daysOfWeek: ['2']},
                    {title: 'CEO Toolkit: Operations, Finance, HR, Legal Aspect, IP Law (lec)', startTime: '12:40:00', endTime: '14:10:00', daysOfWeek: ['2']},
                    {title: 'CTO Toolkit: Quality, Process, and Team (lec)', startTime: '9:00:00', endTime: '10:30:00', daysOfWeek: ['3']},
                    {title: 'CTO Toolkit: Quality, Process, and Team (lab)', startTime: '9:00:00', endTime: '10:30:00', daysOfWeek: ['5']},
                    {title: 'Marketing and Sales for IT Business (lec)', startTime: '10:40:00', endTime: '12:10:00', daysOfWeek: ['5']}
                ]
            },
        ];
        return Promise.resolve(courses);
    }
}


export const fakeCoreCourseApi = new CoreCourseInfoApi();