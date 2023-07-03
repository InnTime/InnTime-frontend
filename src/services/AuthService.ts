import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/response/AuthResponse";
import $api from "../http";
import {IGroup} from "../models/IGroup";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {email, password})
    }

    static async registration(email: string, password: string, group: number): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/register', {email, password, group});
    }

    static async logout(): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/logout', );
    }
}