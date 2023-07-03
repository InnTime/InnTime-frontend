import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import $api from "../http";
import {IGroup} from "../models/IGroup";
import {IUser} from "../models/IUser";

export default class AuthService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/users')
    }
}