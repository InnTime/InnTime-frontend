import {makeAutoObservable} from "mobx";
import {IEvent} from "../models/IEvent";


export default class EventStore {
    events: IEvent[] = [];
    selectedEvents: IEvent[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addEvent(newEvents: IEvent) {
        this.events = [...this.events, newEvents]
    }

    removeFromSelectedEvents(toRemoveEvents: IEvent[]) {
        this.events = this.events.filter(x => !toRemoveEvents.includes(x));
    }
}