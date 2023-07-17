import React, {Dispatch, useContext, useEffect, useState} from 'react';
import MySelect, {MySelectOptionProps} from "../../UI/MySelect/MySelect";
import cl from './ScheduleCardFilter.module.css'
import {Context} from "../../../index";
import {observer} from 'mobx-react-lite';
import ScheduleCardFilterSelect from "./ScheduleCardFilterSelect/ScheduleCardFilterSelect";
import {scheduleCardsTypes} from "../../../utils/filterSettings";


interface ScheduleCardFilterProps {
    filter: { scheduleCardsType: MySelectOptionProps, }
    setFilter: Dispatch<{ scheduleCardsType: MySelectOptionProps }>
}


const ScheduleCardFilter = ({filter, setFilter}: ScheduleCardFilterProps) => {
    const {elective, group} = useContext(Context);

    return (
        <div className={'flex mb-10 justify-center'}>
            <MySelect
                options={scheduleCardsTypes}
                handleOnClick={selectedScheduleCardsType => setFilter({
                    scheduleCardsType: selectedScheduleCardsType
                })}
            />
            {
                filter.scheduleCardsType?.value === 'elective' ?
                    <ScheduleCardFilterSelect cards={elective}/>
                    :
                    <ScheduleCardFilterSelect cards={group}/>
            }
        </div>
    );
};

export default observer(ScheduleCardFilter);