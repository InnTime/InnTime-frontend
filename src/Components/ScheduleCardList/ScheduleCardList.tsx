import React, {Dispatch} from 'react';
import MyLoader from "../UI/MyLoader/MyLoader";
import MyButton from "../UI/MyButton/MyButton";
import MyIcon from "../UI/MyIcon/MyIcon";
import cl from './ScheduleCardList.module.css';
import {EventProps} from "../../pages/homepage/HomePage";
import {IGroup} from "../../models/IGroup";
import {IElective} from "../../models/IElective";
import ElectiveService from "../../services/ElectiveService";

interface ScheduleCardListProps {
    cards: IGroup[] | IElective[];
    isLoading: boolean | undefined;
    error: string;
    events: EventProps[];
    setEvents: Dispatch<EventProps[]>
}

const ScheduleCardList = ({cards, isLoading, error, events, setEvents}: ScheduleCardListProps) => {

    async function handleAdd (i: IGroup | IElective) {
        // work only for electives for now
        const response = await ElectiveService.setElective(i.id);

        return "start_time" in i && "end_time" in i ? setEvents(events.concat({
            title: i.name,
            start: i.start_time.replace(' ', 'T'),
            end: i.end_time.replace(' ', 'T')
        })) : ""
    }

    return (
        <div className={cl.addSection__scheduleCards}>
            {isLoading ?
                <MyLoader/>
                : cards.map(i =>
                    <MyButton
                        key={i.id}
                        backgroundColor="white"
                        color="black"
                        text={i.name}
                        // text={"shortName" in i ? i.shortName : i.name}
                        icon={<MyIcon type="download" color="black"/>}
                        icon2={<MyIcon type="add" color="black" onClick={()=>handleAdd(i)}/>}
                    />
                )
            }
        </div>
    );
};

export default ScheduleCardList;