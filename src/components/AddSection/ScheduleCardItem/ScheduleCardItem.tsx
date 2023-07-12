import React, {useContext, useState} from 'react';
import MyIcon from "../../UI/MyIcon/MyIcon";
import MyButton from "../../UI/MyButton/MyButton";
import {IGroup} from "../../../models/IGroup";
import {IElective} from "../../../models/IElective";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {IEvent} from "../../../models/IEvent";
import CardStore from "../../../store/card";

interface IScheduleCardItem {
    cards: CardStore;
    card: IGroup | IElective;
    isSelected: boolean;
}

const ScheduleCardItem = ({cards, card, isSelected}: IScheduleCardItem) => {
    const {event} = useContext(Context);

    async function handleAdd(i: IGroup | IElective) {
        // make selected
        cards.addToSelectedCards(card)

        // add event to calendar

        // if group



        // if elective
        if ("start_time" in i && "end_time" in i) {
            const newEvent = {
                title: i.name,
                start: i.start_time.replace(' ', 'T'),
                end: i.end_time.replace(' ', 'T')
            } as IEvent;
            event.addEvent(newEvent)
        }
    }

    function handleRemove(i: IGroup | IElective) {
        // make unselected

        cards.removeFromSelectedCards(card)

        // remove event from calendar

        // if group



        // if elective

    }

    if (isSelected) {
        return <MyButton
            key={card.id}
            backgroundColor="yellow"
            color="black"
            text={card.name}
            // text={"shortName" in i ? i.shortName : i.name}
            icon={<MyIcon type="download" color="black"/>}
            icon2={<MyIcon type="remove" color="black" onClick={() => handleRemove(card)}/>}
        />
    }
    return (
        <MyButton
            key={card.id}
            backgroundColor="white"
            color="black"
            text={card.name}
            // text={"shortName" in i ? i.shortName : i.name}
            icon={<MyIcon type="download" color="black"/>}
            icon2={<MyIcon type="add" color="black" onClick={() => handleAdd(card)}/>}
        />
    );
};

export default observer(ScheduleCardItem);