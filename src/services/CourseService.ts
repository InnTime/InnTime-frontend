import {AxiosResponse} from "axios";
import $api from "../http";
import {ICourse} from "../models/ICourse";

export default class CourseService {
    static fetchCourses(): Promise<AxiosResponse<ICourse[]>> {
        return $api.get<ICourse[]>('/get_courses')
    }

    static fetchUserCourses(): Promise<AxiosResponse<ICourse[]>> {
        return $api.get<ICourse[]>('/get_user_courses')
    }
}