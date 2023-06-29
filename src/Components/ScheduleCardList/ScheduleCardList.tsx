import React, {Dispatch} from 'react';
import MyLoader from "../UI/MyLoader/MyLoader";
import MyButton from "../UI/MyButton/MyButton";
import MyIcon from "../UI/MyIcon/MyIcon";
import {CoreCourseInfo} from "../../API/fakeCoreCourseApi";
import {ElectiveInfo} from "../../API/fakeElectiveApi";
import {EventProps} from "../../App";
import cl from './ScheduleCardList.module.css';

interface ScheduleCardListProps {
    cards:ElectiveInfo[] | CoreCourseInfo[];
    isLoading: boolean | undefined;
    error: string;
    events: EventProps[];
    setEvents: Dispatch<EventProps[]>
}

const ScheduleCardList = ({cards, isLoading, error, events, setEvents}: ScheduleCardListProps) => {
    return (
        <div className={cl.addSection__scheduleCards}>
            {isLoading ?
                <MyLoader/>
                : cards.map(i =>
                    <MyButton
                        key={i.id}
                        backgroundColor="white"
                        color="black"
                        text={"shortName" in i ? i.shortName : i.name}
                        icon={<MyIcon type="download" color="black"/>}
                        icon2={<MyIcon type="add" color="black"
                                       onClick={() => i.events ? setEvents(events.concat(i.events)) : ""}/>}
                    />
                )
            }
        </div>
    );
};

export default ScheduleCardList;