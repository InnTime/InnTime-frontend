import {AxiosResponse} from "axios";
import $api from "../http";
import {IGroup} from "../models/IGroup";

export default class GroupService {
    static fetchGroups(): Promise<AxiosResponse<IGroup[]>> {
        return $api.get<IGroup[]>('/get_groups')
    }
    static setUserGroup(group_id: number): Promise<AxiosResponse<IGroup[]>> {
        return $api.put<IGroup[]>('/set_user_group', {group_id})
    }

}