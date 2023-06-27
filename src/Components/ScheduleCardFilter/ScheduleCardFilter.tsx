import React, {Dispatch} from 'react';
import {FilterProps} from '../AddSection/AddSection';
import MyDropdownMenu, {MyDropdownOptionProps} from "../UI/MyDropdownMenu/MyDropdownMenu";
import MyInput from "../UI/MyInput/MyInput";
import cl from './ScheduleCardFilter.module.css'


interface ScheduleCardFilterProps {
    filter: FilterProps,
    setFilter: Dispatch<FilterProps>
}

const ScheduleCardFilter = ({filter, setFilter}: ScheduleCardFilterProps) => {

    const scheduleCardsTypes: MyDropdownOptionProps[] = [
        {
            name: "Core Courses",
            value: "core"
        },
        {
            name: "Electives",
            value: "elective"
        },
    ];

    const coreCoursesByYears: MyDropdownOptionProps[] = [
        {
            name: "All",
            value: "all"
        },
        {
            name: "BS - 1 year",
            value: "bs-1"
        },
        {
            name: "BS - 2 year",
            value: "bs-2"
        },
        {
            name: "BS - 3 year",
            value: "bs-3"
        },
        {
            name: "BS - 4 year",
            value: "bs-4"
        },
        {
            name: "MS - 1 year",
            value: "ms-1"
        }
    ]


    const electiveType: MyDropdownOptionProps[] = [
        {
            name: "All",
            value: "all"
        },
        {
            name: "BS Tech",
            value: "bs-tech"
        },
        {
            name: "MS Tech",
            value: "ms-tech"
        },
        {
            name: "BS/MS hum",
            value: "hum"
        }
    ]

    return (
        <div className={cl.addSection__filtering}>
            <MyDropdownMenu
                options={scheduleCardsTypes}
                // @ts-ignore
                handleOnChange={selectedScheduleCardsType => setFilter({
                    ...filter,
                    scheduleCardsType: selectedScheduleCardsType
                })}
            />
            {filter.scheduleCardsType?.value === 'elective' ?
                <MyDropdownMenu
                    options={electiveType}
                    // @ts-ignore
                    handleOnChange={selectedElectiveType => setFilter({
                        ...filter,
                        electiveType: selectedElectiveType
                    })}
                />
                :
                <MyDropdownMenu
                    options={coreCoursesByYears}
                    // @ts-ignore
                    handleOnChange={selectedCourseYear => setFilter({
                        ...filter,
                        courseYear: selectedCourseYear
                    })}
                />
            }
            <MyInput/>

        </div>
    );
};

export default ScheduleCardFilter;