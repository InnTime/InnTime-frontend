import React, {useContext} from 'react';
import MyIcon from "../../UI/MyIcon/MyIcon";
import MyButton from "../../UI/MyButton/MyButton";
import {IGroup} from "../../../models/IGroup";
import {IElective} from "../../../models/IElective";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import CardStore from "../../../store/card";
import GroupService from "../../../services/GroupService";
import ElectiveService from "../../../services/ElectiveService";

interface IScheduleCardItem {
    cards: CardStore;
    card: IGroup | IElective;
    isSelected: boolean;
}

const ScheduleCardItem = ({cards, card, isSelected}: IScheduleCardItem) => {
    const {event} = useContext(Context);

    async function handleAdd(i: IGroup | IElective) {
        // make selected

        // add events to calendar

        if ("number" in i) {
            cards.setSelectedCards([card])
            // if group
            await GroupService.setUserGroup(i.id);
            await event.updateCourses()
        } else {
            cards.addToSelectedCards(card)
            // if elective
            await ElectiveService.setElective(i.name);
            await event.updateElectives()
        }
    }

    async function handleRemove(i: IGroup | IElective) {
        // make unselected

        cards.removeFromSelectedCards(card)

        // remove event from calendar

        if ("number" in i) {
            // if group
            await GroupService.unsetUserGroup(i.id);
            await event.updateCourses()

        } else {
            // if elective
            await ElectiveService.deleteUserElective(i.name);
            await event.updateElectives()
        }
    }

    if (isSelected) {
        return <MyButton
            backgroundColor="yellow"
            color="black"
            text={card.name}
            icon={<MyIcon type="remove" color="black" onClick={() => handleRemove(card)}/>}
        />
    }
    return (
        <MyButton
            backgroundColor="white"
            color="black"
            text={card.name}
            icon={<MyIcon type="add" color="black" onClick={() => handleAdd(card)}/>}
        />
    );
};

export default observer(ScheduleCardItem);