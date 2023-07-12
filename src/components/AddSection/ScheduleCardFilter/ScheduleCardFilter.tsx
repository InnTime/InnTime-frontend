import React, {Dispatch, useContext, useEffect, useState} from 'react';
import MySelect, {MySelectOptionProps} from "../../UI/MySelect/MySelect";
import cl from './ScheduleCardFilter.module.css'
import {Context} from "../../../index";
import {observer} from 'mobx-react-lite';
import ScheduleCardFilterSelect from "./ScheduleCardFilterSelect/ScheduleCardFilterSelect";
import {electiveType, groupsByYears, scheduleCardsTypes} from "../../../utils/consts";


interface ScheduleCardFilterProps {
    filter: { scheduleCardsType: MySelectOptionProps, }
    setFilter: Dispatch<{ scheduleCardsType: MySelectOptionProps }>
}


const ScheduleCardFilter = ({filter, setFilter}: ScheduleCardFilterProps) => {
    const {elective, group} = useContext(Context);

    const [secondFilterOptions, setSecondFilterOptions] = useState(groupsByYears);

    useEffect(() => {
        if (filter.scheduleCardsType && filter.scheduleCardsType.value === 'elective') {
            setSecondFilterOptions(electiveType)
        } else setSecondFilterOptions(groupsByYears)
    }, [filter.scheduleCardsType])

    return (
        <div className={cl.addSection__filtering}>
            <MySelect
                options={scheduleCardsTypes}
                handleOnClick={selectedScheduleCardsType => setFilter({
                    scheduleCardsType: selectedScheduleCardsType
                })}
            />
            {
                filter.scheduleCardsType?.value === 'elective' ?
                    <ScheduleCardFilterSelect cards={elective} secondFilterOptions={electiveType}/>
                    :
                    <ScheduleCardFilterSelect cards={group} secondFilterOptions={groupsByYears}/>
            }
        </div>
    );
};

export default observer(ScheduleCardFilter);