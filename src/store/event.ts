import {makeAutoObservable} from "mobx";
import {IEvent} from "../models/IEvent";
import {IGroup} from "../models/IGroup";
import {IElective} from "../models/IElective";


export default class EventStore {
    events: IEvent[] = [];
    selectedEvents: IEvent[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addToSelectedEvents(newEvents: IEvent[]) {
        this.events.concat(newEvents)
    }

    removeFromSelectedEvents(toRemoveEvents: IEvent[]) {
        this.events = this.events.filter(x => !toRemoveEvents.includes(x));
    }
}