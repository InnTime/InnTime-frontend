import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";

export default class AuthStore {
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
        } catch (e) {
            // @ts-ignore
            alert("Error: " + (e as Error).response?.data?.message)
        }
    }

    async registration(email: string, password: string, group_id: number) {
        try {
            const response = await AuthService.registration(email, password, group_id);
            await this.login(email, password)
        } catch (e) {
            // @ts-ignore
            alert("Error: " + e.response?.data?.message)
        }
    }

    async logout() {
        try {
            localStorage.removeItem('token');
            this.setAuth(false);
        } catch (e) {
            // @ts-ignore
            alert("Error: " + e.response?.data?.message)
        }
    }
}