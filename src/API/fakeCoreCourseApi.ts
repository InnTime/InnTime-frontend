export interface CoreCourseInfo {
    id: number;
    name: string;
    year: "BS - 1 Year" | "BS - 2 Year" | "BS - 3 Year" | "BS - 4 Year" | "MS - 1 Year" | string;
}

class CoreCourseInfoApi {
    getCourses(): Promise<CoreCourseInfo[]> {
        const courses: CoreCourseInfo[] = [
            {
                id: 1,
                name: "B22-CS-01",
                year: "BS - 1 Year",
            },
            {
                id: 2,
                name: "B22-CS-02",
                year: "BS - 1 Year",
            },
            {
                id: 3,
                name: "B22-CS-03",
                year: "BS - 1 Year",
            },
            {
                id: 4,
                name: "B22-DSAI-01",
                year: "BS - 1 Year",
            },
            {
                id: 5,
                name: "В21-SD-01",
                year: "BS - 2 Year",
            },
            {
                id: 6,
                name: "В21-SD-03",
                year: "BS - 2 Year",
            },
            {
                id: 7,
                name: "В21-CS-01",
                year: "BS - 2 Year",
            },
            {
                id: 8,
                name: "В21-RO-01",
                year: "BS - 2 Year",
            },
            {
                id: 10,
                name: "B20-SD-02 (28)",
                year: "BS - 3 Year",
            },
            {
                id: 11,
                name: "B20-DS (18)",
                year: "BS - 3 Year",
            },
            {
                id: 12,
                name: "B19-DS-01 (30)",
                year: "BS - 4 Year",
            },
            {
                id: 13,
                name: "B19-RO-01 (14)",
                year: "BS - 4 Year",
            },
            {
                id: 14,
                name: "M22-SE-01(16)",
                year: "MS - 1 Year",
            },
            {
                id: 15,
                name: "M22-TE-01 (30)",
                year: "MS - 1 Year",
            },
        ];
        return Promise.resolve(courses);
    }
}


export const fakeCoreCourseApi = new CoreCourseInfoApi();