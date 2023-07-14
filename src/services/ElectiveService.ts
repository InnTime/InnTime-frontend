import {AxiosResponse} from "axios";
import $api from "../http";
import {IElective} from "../models/IElective";

export default class ElectiveService {
    static fetchElectives(): Promise<AxiosResponse<IElective[]>> {
        return $api.get<IElective[]>('/get_electives')
    }

    static setElective(elective_name: string): Promise<AxiosResponse> {
        return $api.post('/set_elective', {elective_name})
    }

    static fetchUserElectives(): Promise<AxiosResponse<IElective[]>> {
        return $api.get<IElective[]>('/get_user_electives')
    }
}