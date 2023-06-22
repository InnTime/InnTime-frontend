export interface ElectiveInfo {
    id: number;
    name: string;
    shortName: string;
    type: "BS Tech" | "MS Tech" | "BS/MS Hum" | string;
}

class ElectiveInfoApi {
    getCourses(): Promise<ElectiveInfo[]> {
        const courses: ElectiveInfo[] = [
            {
                id: 1,
                name: "Challenges of Object-Oriented Programming",
                shortName: "COOP",
                type: "BS Tech"
            },
            {
                id: 2,
                name: "Introduction to DevOps",
                shortName: "IDV",
                type: "BS Tech"
            },
            {
                id: 3,
                name: "Computer Graphics in Game Development",
                shortName: "CGGD",
                type: "BS Tech"
            },
            {
                id: 4,
                name: "Advanced Statistical and Econometric Methods",
                shortName: "ASEM",
                type: "BS Tech"
            },
            {
                id: 5,
                name: "DevOps Engineering (Advanced)",
                shortName: "DVE",
                type: "MS Tech"
            },
            {
                id: 6,
                name: "Application of Artificial Intelligence in Software Engineering",
                shortName: "ASEM",
                type: "MS Tech"
            },
            {
                id: 7,
                name: "UX/UI Design",
                shortName: "UXD",
                type: "MS Tech"
            },
            {
                id: 8,
                name: "Personal Efficiency Skills of IT-specialist",
                shortName: "PES",
                type: "BS/MS Hum"
            },
            {
                id: 9,
                name: "Psychology of IT-specialist",
                shortName: "PSY",
                type: "BS/MS Hum"
            },
            {
                id: 10,
                name: "Applied Economics: Introduction to IT Entrepreneurship",
                shortName: "AEIE",
                type: "BS/MS Hum"
            },
            {
                id: 11,
                name: "Design-thinking",
                shortName: "DT",
                type: "BS/MS Hum"
            },

        ]
        return Promise.resolve(courses);
    }
}

export const fakeElectiveApi = new ElectiveInfoApi();
