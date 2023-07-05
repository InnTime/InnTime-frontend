import {EventProps} from "../pages/homepage/HomePage";

export interface ElectiveInfo {
    id: number;
    name: string;
    shortName: string;
    type: "bs-tech" | "ms-tech" | "hum" | string;
    events?: EventProps[];
}

class ElectiveInfoApi {
    getElectives(): Promise<ElectiveInfo[]> {
        const courses: ElectiveInfo[] = [
            {
                id: 1,
                name: "Challenges of Object-Oriented Programming",
                shortName: "COOP",
                type: "bs-tech",
                events: [
                    {title: 'COOP 303 lec', start: '2023-06-08T14:30:00', end: '2023-06-08T16:00:00'},
                    {title: 'COOP online lec', start: '2023-06-15T17:50:00', end: '2023-06-15T19:20:00'},
                    {title: 'COOP 313 lab', start: '2023-06-20T17:50:00', end: '2023-06-20T19:20:00'},
                    {title: 'COOP 313 lab', start: '2023-06-21T17:50:00', end: '2023-06-21T19:20:00'},
                    {title: 'COOP 313 lab', start: '2023-06-23T17:50:00', end: '2023-06-23T19:20:00'},
                    {title: 'COOP 321 lec', start: '2023-06-24T17:50:00', end: '2023-06-24T19:20:00'},
                    {title: 'COOP 321 lab', start: '2023-06-27T17:50:00', end: '2023-06-27T19:20:00'},
                    {title: 'COOP 321 lec', start: '2023-07-01T17:50:00', end: '2023-07-01T19:20:00'},
                    {title: 'COOP 321 lab', start: '2023-07-04T17:50:00', end: '2023-07-04T19:20:00'},
                    {title: 'COOP 321 lec', start: '2023-07-08T17:50:00', end: '2023-07-08T19:20:00'},
                    {title: 'COOP 321 lab', start: '2023-07-11T17:50:00', end: '2023-07-11T19:20:00'},
                    {title: 'COOP 321 lec', start: '2023-07-15T17:50:00', end: '2023-07-15T19:20:00'},
                    {title: 'COOP 321 lab', start: '2023-07-18T17:50:00', end: '2023-07-18T19:20:00'},
                    {title: 'COOP 321 lec', start: '2023-07-22T17:50:00', end: '2023-07-22T19:20:00'}
                ]
            },
            {
                id: 2,
                name: "Introduction to DevOps",
                shortName: "IDV",
                type: "bs-tech",
                events:[
                    {title: 'IDV(lec)318', start: '2023-06-16T17:50:00', end: '2023-06-16T19:20:00'},
                    {title: 'IDV(lab)318', start: '2023-06-16T19:30:00', end: '2023-06-16T21:00:00'},
                    {title: 'IDV(lec)318', start: '2023-06-23T17:50:00', end: '2023-06-23T19:20:00'},
                    {title: 'IDV(lab)318', start: '2023-06-23T19:30:00', end: '2023-06-23T21:00:00'},
                    {title: 'IDV(lec)318', start: '2023-06-30T17:50:00', end: '2023-06-30T19:20:00'},
                    {title: 'IDV(lab)318', start: '2023-06-30T19:30:00', end: '2023-06-30T21:00:00'},
                    {title: 'IDV(lec)318', start: '2023-07-07T17:50:00', end: '2023-07-07T19:20:00'},
                    {title: 'IDV(lab)318', start: '2023-07-07T19:30:00', end: '2023-07-07T21:00:00'},
                    {title: 'IDV(lec)318', start: '2023-07-14T17:50:00', end: '2023-07-14T19:20:00'},
                    {title: 'IDV(lab)318', start: '2023-07-14T19:30:00', end: '2023-07-14T21:00:00'},
                    {title: 'IDV(lec)314', start: '2023-06-19T16:10:00', end: '2023-06-19T17:40:00'},
                    {title: 'IDV(lab)314', start: '2023-06-19T17:50:00', end: '2023-06-19T19:20:00'},
                    {title: 'IDV(lec)314', start: '2023-06-26T16:10:00', end: '2023-06-26T17:40:00'},
                    {title: 'IDV(lab)314', start: '2023-06-26T17:50:00', end: '2023-06-26T19:20:00'},
                    {title: 'IDV(lec)314', start: '2023-07-03T16:10:00', end: '2023-07-03T17:40:00'},
                    {title: 'IDV(lab)314', start: '2023-07-03T17:50:00', end: '2023-07-03T19:20:00'},
                    {title: 'IDV(lec)314', start: '2023-07-10T16:10:00', end: '2023-07-10T17:40:00'},
                    {title: 'IDV(lab)314', start: '2023-07-10T17:50:00', end: '2023-07-10T19:20:00'},
                    {title: 'IDV(lec)314', start: '2023-07-17T16:10:00', end: '2023-07-17T17:40:00'},
                    {title: 'IDV(lab)314', start: '2023-07-17T17:50:00', end: '2023-07-17T19:20:00'},
                ]
            },
            {
                id: 3,
                name: "Computer Graphics in Game Development",
                shortName: "CGGD",
                type: "bs-tech"
            },
            {
                id: 4,
                name: "Advanced Statistical and Econometric Methods",
                shortName: "ASEM",
                type: "bs-tech"
            },
            {
                id: 5,
                name: "DevOps Engineering (Advanced)",
                shortName: "DVE",
                type: "ms-tech"
            },
            {
                id: 6,
                name: "Application of Artificial Intelligence in Software Engineering",
                shortName: "ASEM",
                type: "ms-tech"
            },
            {
                id: 7,
                name: "UX/UI Design",
                shortName: "UXD",
                type: "ms-tech",
                events: [
                    {title: 'UXD 318 lec', start: '2023-06-06T16:10:00', end: '2023-06-06T17:40:00'},
                    {title: 'UXD 318 lab', start: '2023-06-07T16:10:00', end: '2023-06-07T17:40:00'},
                    {title: 'UXD 318 lec', start: '2023-06-13T16:10:00', end: '2023-06-13T17:40:00'},
                    {title: 'UXD 318 lab', start: '2023-06-14T16:10:00', end: '2023-06-14T17:40:00'},
                    {title: 'UXD 318 lec', start: '2023-06-20T16:10:00', end: '2023-06-20T17:40:00'},
                    {title: 'UXD 318 lab', start: '2023-06-21T16:10:00', end: '2023-06-21T17:40:00'},
                    {title: 'UXD 318 lec', start: '2023-06-27T16:10:00', end: '2023-06-27T17:40:00'},
                    {title: 'UXD 318 lab', start: '2023-06-28T16:10:00', end: '2023-06-29T17:40:00'},
                    {title: 'UXD 318 lec', start: '2023-07-04T16:10:00', end: '2023-07-04T17:40:00'},
                    {title: 'UXD 318 lab', start: '2023-07-05T16:10:00', end: '2023-07-05T17:40:00'},
                    {title: 'UXD 318 lec', start: '2023-07-11T16:10:00', end: '2023-07-11T17:40:00'},
                    {title: 'UXD 318 lab', start: '2023-07-12T16:10:00', end: '2023-07-12T17:40:00'},
                    {title: 'UXD 318 lec', start: '2023-07-18T16:10:00', end: '2023-07-18T17:40:00'},
                    {title: 'UXD 318 lab', start: '2023-07-19T16:10:00', end: '2023-07-19T17:40:00'}
                ]
            },
            {
                id: 8,
                name: "Personal Efficiency Skills of IT-specialist",
                shortName: "PES",
                type: "hum",
                events:[
                    {title: 'PES 314', start: '2023-06-07T14:30:00', end: '2023-06-07T16:00:00'},
                    {title: 'PES 314', start: '2023-06-07T16:10:00', end: '2023-06-07T17:40:00'},
                    {title: 'PES 314', start: '2023-06-09T14:30:00', end: '2023-06-09T16:00:00'},
                    {title: 'PES 314', start: '2023-06-09T16:10:00', end: '2023-06-09T17:40:00'},
                    {title: 'PES 314', start: '2023-06-16T14:30:00', end: '2023-06-16T16:00:00'},
                    {title: 'PES 314', start: '2023-06-16T16:10:00', end: '2023-06-16T17:40:00'},
                    {title: 'PES 314', start: '2023-07-11T14:30:00', end: '2023-07-11T16:00:00'},
                    {title: 'PES 314', start: '2023-07-11T16:10:00', end: '2023-07-11T17:40:00'},
                    {title: 'PES 314', start: '2023-07-12T14:30:00', end: '2023-07-12T16:00:00'},
                    {title: 'PES 314', start: '2023-07-12T16:10:00', end: '2023-07-12T17:40:00'},
                    {title: 'PES 314', start: '2023-07-14T14:30:00', end: '2023-07-14T16:00:00'},
                    {title: 'PES 314', start: '2023-07-14T16:10:00', end: '2023-07-14T17:40:00'},
                    {title: 'PES 314', start: '2023-07-19T14:30:00', end: '2023-07-19T16:00:00'},
                    {title: 'PES 314', start: '2023-07-19T16:10:00', end: '2023-07-19T17:40:00'},
                    {title: 'PES 314', start: '2023-07-21T14:30:00', end: '2023-07-21T16:00:00'},
                ]
            },
            {
                id: 9,
                name: "Psychology of IT-specialist",
                shortName: "PSY",
                type: "hum"
            },
            {
                id: 10,
                name: "Applied Economics: Introduction to IT Entrepreneurship",
                shortName: "AEIE",
                type: "hum",
                events:[
                    {title: 'AEIE 314', start: '2023-06-06T14:30:00', end: '2023-06-06T16:00:00'},
                    {title: 'AEIE 314', start: '2023-06-06T16:10:00', end: '2023-06-06T17:40:00'},
                    {title: 'AEIE 314', start: '2023-06-08T14:30:00', end: '2023-06-08T16:00:00'},
                    {title: 'AEIE 314', start: '2023-06-08T16:10:00', end: '2023-06-08T17:40:00'},
                    {title: 'AEIE 314', start: '2023-06-13T14:30:00', end: '2023-06-13T16:00:00'},
                    {title: 'AEIE 314', start: '2023-06-13T16:10:00', end: '2023-06-13T17:40:00'},
                    {title: 'AEIE 314', start: '2023-06-15T14:30:00', end: '2023-06-15T16:00:00'},
                    {title: 'AEIE 314', start: '2023-06-15T16:10:00', end: '2023-06-15T17:40:00'},
                    {title: 'AEIE 314', start: '2023-06-20T14:30:00', end: '2023-06-20T16:00:00'},
                    {title: 'AEIE 314', start: '2023-06-20T16:10:00', end: '2023-06-20T17:40:00'},
                    {title: 'AEIE 314', start: '2023-06-22T14:30:00', end: '2023-06-22T16:00:00'},
                    {title: 'AEIE 314', start: '2023-06-22T16:10:00', end: '2023-06-22T17:40:00'},
                    {title: 'AEIE 314', start: '2023-06-27T14:30:00', end: '2023-06-27T16:00:00'},
                    {title: 'AEIE 314', start: '2023-06-27T16:10:00', end: '2023-06-27T17:40:00'},
                    {title: 'AEIE 303', start: '2023-06-29T14:30:00', end: '2023-06-29T16:00:00'}
                ]
            },
            {
                id: 11,
                name: "Design-thinking",
                shortName: "DT",
                type: "hum"
            },

        ]
        return Promise.resolve(courses);
    }
}

export const fakeElectiveApi = new ElectiveInfoApi();
