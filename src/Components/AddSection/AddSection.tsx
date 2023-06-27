import React, {Dispatch, useEffect, useMemo, useState} from 'react';
import cl from './AddSection.module.css';
import {CoreCourseInfo, fakeCoreCourseApi} from "../../API/fakeCoreCourseApi";
import {useFetching} from "../../hooks/useFetching";
import {ElectiveInfo, fakeElectiveApi} from "../../API/fakeElectiveApi";
import {EventProps} from "../../App";
import ScheduleCardList from '../ScheduleCardList/ScheduleCardList';
import ScheduleCardFilter from '../ScheduleCardFilter/ScheduleCardFilter';
import {MyDropdownOptionProps} from "../UI/MyDropdownMenu/MyDropdownMenu";


interface AddProps {
    events: EventProps[]
    setEvents: Dispatch<EventProps[]>
}

export interface FilterProps {
    scheduleCardsType: MyDropdownOptionProps,
    courseYear: MyDropdownOptionProps,
    electiveType: MyDropdownOptionProps,
    searchQuery: string
}

const AddSection = ({events, setEvents}: AddProps) => {
    const [courses, setCourses] = useState<CoreCourseInfo[]>([]);
    const [electives, setElectives] = useState<ElectiveInfo[]>([]);

    const [filter, setFilter] = useState<FilterProps>({
        scheduleCardsType: {value: '', name: ''},
        courseYear: {value: 'all', name: ''},
        electiveType: {value: '', name: ''},
        searchQuery: ''
    })

    const sortedCourses = useMemo(() => {
            if (filter.courseYear && filter.courseYear.value !== 'all')
                return courses.filter(i => i.year === filter.courseYear.value);
            return courses;
        },
        [courses, filter.courseYear]
    )

    const [fetchCourses, isCoursesLoading, courseError] = useFetching(async () => {
        const response = await fakeCoreCourseApi.getCourses();
        setCourses(response);
    })

    const [fetchElectives, isElectivesLoading, electiveError] = useFetching(async () => {
        const response = await fakeElectiveApi.getElectives();
        setElectives(response);
    })

    useEffect(() => {
        // @ts-ignore
        fetchCourses();
        // @ts-ignore
        fetchElectives();
    }, [])

    useEffect(() => {

    }, [filter.scheduleCardsType])


    return (
        <div className={cl.addSection}>
            <div className="container">
                <section className={cl.addSection__header}>
                    <h1 className={cl.addSection__title}>
                        InnTime
                    </h1>
                    <p className={cl.addSection__description}>
                        Create your schedule
                    </p>
                </section>
                <ScheduleCardFilter filter={filter} setFilter={setFilter}/>
                <section className={cl.addSection__scheduleCards}>
                    {
                        filter.scheduleCardsType?.value === 'elective' ?
                            //@ts-ignore
                            <ScheduleCardList cards={electives} isLoading={isElectivesLoading} error={electiveError}
                                              events={events} setEvents={setEvents}/>
                            :
                            //@ts-ignore
                            <ScheduleCardList cards={sortedCourses} isLoading={isCoursesLoading} error={courseError}
                                              events={events} setEvents={setEvents}/>
                    }
                </section>
            </div>
        </div>
    );
};

export default AddSection;