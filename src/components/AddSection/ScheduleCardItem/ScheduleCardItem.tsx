import React, {useContext} from 'react';
import MyIcon from "../../UI/MyIcon/MyIcon";
import MyButton from "../../UI/MyButton/MyButton";
import {IGroup} from "../../../models/IGroup";
import {IElective} from "../../../models/IElective";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";
import {IEvent} from "../../../models/IEvent";
import CardStore from "../../../store/card";
import GroupService from "../../../services/GroupService";
import CourseService from "../../../services/CourseService";
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
        cards.addToSelectedCards(card)

        // add events to calendar

        if ("number" in i) {
            // if group
            const setUserGroupResponse = await GroupService.setUserGroup(i.id);

            const fetchUserCoursesResponse = await CourseService.fetchUserCourses();
            const courses = fetchUserCoursesResponse.data;

            event.addCourses(courses)
        } else {
            // if elective
            const setElectiveResponse = await ElectiveService.setElective(i.name);
            console.log(setElectiveResponse);

            await event.addElectives()
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