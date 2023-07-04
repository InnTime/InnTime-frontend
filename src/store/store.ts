import {IUser} from "../models/IUser";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import {IGroup} from "../models/IGroup";
import axios from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

export default class Store {
    user = {} as IUser;
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            // @ts-ignore
            console.log((e as Error).response?.data?.message)
        }
    }
    async registration(email: string, password: string, group_id: number) {
        try {
            const response = await AuthService.registration(email, password, group_id);
        } catch (e) {
            // @ts-ignore
            console.log(e.response?.data?.message)
        }
    }
    async logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e) {
            // @ts-ignore
            console.log(e.response?.data?.message)
        }
    }
}