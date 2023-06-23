import {EventProps} from "../Components/App/App";

export interface ElectiveInfo {
    id: number;
    name: string;
    shortName: string;
    type: "bs-tech" | "ms-tech" | "hum" | string;
    events?: EventProps[];
}

class ElectiveInfoApi {
    getCourses(): Promise<ElectiveInfo[]> {
        const courses: ElectiveInfo[] = [
            {
                id: 1,
                name: "Challenges of Object-Oriented Programming",
                shortName: "COOP",
                type: "bs-tech",
                events: [
                    {title: 'COOP 303 lab', start: '2023-06-20T17:50:00', end: '2023-06-20T19:20:00'},
                    {title: 'COOP 313 lab', start: '2023-06-21T17:50:00', end: '2023-06-21T19:20:00'},
                    {title: 'COOP 303 lab', start: '2023-06-23T17:50:00', end: '2023-06-23T19:20:00'},
                    {title: 'COOP ONLINE lec', start: '2023-06-24T17:50:00', end: '2023-06-24T19:20:00'},
                ]
            },
            {
                id: 2,
                name: "Introduction to DevOps",
                shortName: "IDV",
                type: "bs-tech"
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
                type: "ms-tech"
            },
            {
                id: 8,
                name: "Personal Efficiency Skills of IT-specialist",
                shortName: "PES",
                type: "hum"
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
                type: "hum"
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
