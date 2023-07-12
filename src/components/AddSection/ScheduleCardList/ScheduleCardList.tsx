import React from 'react';
import MyLoader from "../../UI/MyLoader/MyLoader";
import cl from './ScheduleCardList.module.css';
import {IGroup} from "../../../models/IGroup";
import {IElective} from "../../../models/IElective";
import ScheduleCardItem from "../ScheduleCardItem/ScheduleCardItem";
import {observer} from "mobx-react-lite";
import {MySelectOptionProps} from "../../UI/MySelect/MySelect";

interface ScheduleCardListProps {
    cards: (IGroup | IElective)[];
    isLoading: boolean | undefined;
    error: string;
    filter: {}
}

const ScheduleCardList = ({cards, isLoading, error, filter}: ScheduleCardListProps) => {
    return (
        <div className={cl.addSection__scheduleCards}>
            {isLoading ?
                <MyLoader/>
                : cards.map(i =>
                    <ScheduleCardItem key={i.id} card={i}/>
                )
            }
        </div>
    );
};

export default observer(ScheduleCardList);