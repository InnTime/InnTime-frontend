import React, {Dispatch, useEffect, useState} from 'react';
import {FilterProps} from '../AddSection/AddSection';
import MySelect, {MySelectOptionProps} from "../UI/MySelect/MySelect";
import MyInput from "../UI/MyInput/MyInput";
import cl from './ScheduleCardFilter.module.css'


interface ScheduleCardFilterProps {
    filter: FilterProps,
    setFilter: Dispatch<FilterProps>
}

const ScheduleCardFilter = ({filter, setFilter}: ScheduleCardFilterProps) => {

    const scheduleCardsTypes: MySelectOptionProps[] = [
        {
            name: "Core Courses",
            value: "core"
        },
        {
            name: "Electives",
            value: "elective"
        },
    ];

    const coreCoursesByYears: MySelectOptionProps[] = [
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


    const electiveType: MySelectOptionProps[] = [
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

    const [secondFilterOptions, setSecondFilterOptions] = useState(coreCoursesByYears);

    useEffect(() => {
        if (filter.scheduleCardsType && filter.scheduleCardsType.value === 'elective') {
            setSecondFilterOptions(electiveType)
        } else setSecondFilterOptions(coreCoursesByYears)
    }, [filter.scheduleCardsType])

    return (
        <div className={cl.addSection__filtering}>
            <MySelect
                options={scheduleCardsTypes}
                // @ts-ignore
                handleOnClick={selectedScheduleCardsType => setFilter({
                    ...filter,
                    scheduleCardsType: selectedScheduleCardsType
                })}
            />
            {
                filter.scheduleCardsType?.value === 'elective' ?
                    <MySelect
                        options={electiveType}
                        // @ts-ignore
                        handleOnClick={selected => setFilter({
                            ...filter,
                            electiveType: selected
                        })}
                    />
                    :
                    <MySelect
                        options={coreCoursesByYears}
                        // @ts-ignore
                        handleOnClick={selected => setFilter({
                            ...filter,
                            courseYear: selected
                        })
                        }
                    />
            }
            <MyInput value={filter.searchQuery} onChange={e => setFilter({
                ...filter,
                searchQuery: e.target.value
            })}/>

        </div>
    );
};

export default ScheduleCardFilter;