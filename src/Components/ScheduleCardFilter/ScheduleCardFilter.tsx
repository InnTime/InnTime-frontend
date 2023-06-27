import React, {Dispatch} from 'react';
import MyDropdownMenu, {MyDropdownOptionProps} from "../UI/MyDropdownMenu/MyDropdownMenu";
import MyInput from "../UI/MyInput/MyInput";
import cl from './ScheduleCardFilter.module.css'


interface ScheduleCardFilterProps {
    selectedScheduleCardsType: MyDropdownOptionProps | undefined;
    setSelectedScheduleCardsType: Dispatch<MyDropdownOptionProps>;
    selectedCourseYear: MyDropdownOptionProps | undefined;
    setSelectedCourseYear: Dispatch<MyDropdownOptionProps>;
    selectedElectiveType: MyDropdownOptionProps | undefined;
    setSelectedElectiveType: Dispatch<MyDropdownOptionProps>;
}

const ScheduleCardFilter = (
    {
        selectedScheduleCardsType, setSelectedScheduleCardsType,
        selectedCourseYear, setSelectedCourseYear,
        selectedElectiveType, setSelectedElectiveType
    }: ScheduleCardFilterProps) => {

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
                value={selectedScheduleCardsType}
                setValue={setSelectedScheduleCardsType}
            />
            {selectedScheduleCardsType?.value === 'core' ?
                <MyDropdownMenu
                    options={coreCoursesByYears}
                    value={selectedCourseYear}
                    setValue={setSelectedCourseYear}
                />
                :
                <MyDropdownMenu
                    options={electiveType}
                    value={selectedElectiveType}
                    setValue={setSelectedElectiveType}
                />
            }
            <MyInput/>

        </div>
    );
};

export default ScheduleCardFilter;