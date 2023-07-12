import React, {useContext, useState} from 'react';
import MyIcon from "../../UI/MyIcon/MyIcon";
import MyButton from "../../UI/MyButton/MyButton";
import {IGroup} from "../../../models/IGroup";
import {IElective} from "../../../models/IElective";
import {Context} from "../../../index";
import {observer} from "mobx-react-lite";

interface IScheduleCardItem {
    card: IGroup | IElective;
}

const ScheduleCardItem = ({card}: IScheduleCardItem) => {
    const {event} = useContext(Context);

    const [isSelected, setIsSelected] = useState(false);

    async function handleAdd (i: IGroup | IElective) {
        // work only for electives for now
        // const response = await ElectiveService.setElective(i.id);

        return "start_time" in i && "end_time" in i ? event.addToSelectedEvents([{
            title: i.name,
            start: i.start_time.replace(' ', 'T'),
            end: i.end_time.replace(' ', 'T')
        }])  : ""
    }

    function handleRemove (i: IGroup | IElective) {

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