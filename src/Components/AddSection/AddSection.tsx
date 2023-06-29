import React, {Dispatch, useEffect, useMemo, useState} from 'react';
import cl from './AddSection.module.css';
import {CoreCourseInfo, fakeCoreCourseApi} from "../../API/fakeCoreCourseApi";
import {useFetching} from "../../hooks/useFetching";
import {ElectiveInfo, fakeElectiveApi} from "../../API/fakeElectiveApi";
import {EventProps} from "../../App";
import ScheduleCardList from '../ScheduleCardList/ScheduleCardList';
import ScheduleCardFilter from '../ScheduleCardFilter/ScheduleCardFilter';
import {MyDropdownOptionProps} from "../UI/MyDropdownMenu/MyDropdownMenu";
import {useScheduleCards} from "../../hooks/useScheduleCards";


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

    const [filter, setFilter] = useState({
        scheduleCardsType: {value: 'core', name: ''},
        courseYear: {value: 'all', name: ''},
        electiveType: {value: 'all', name: ''},
        searchQuery: ''
    })

    const sortedCourses = useScheduleCards(courses, "year", filter.courseYear, filter.searchQuery)
    const sortedElectives = useScheduleCards(electives, "type", filter.electiveType, filter.searchQuery)

    const [fetchCourses, isCoursesLoading, courseError] = useFetching(async () => {
        const response = await fakeCoreCourseApi.getCourses();
        setCourses(response);
    })

    const [fetchElectives, isElectivesLoading, electiveError] = useFetching(async () => {
        const response = await fakeElectiveApi.getElectives();
        setElectives(response);
    })

    useEffect(() => {
        fetchCourses();
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
                            <ScheduleCardList cards={sortedElectives}
                                              isLoading={isElectivesLoading}
                                              error={electiveError}
                                              events={events}
                                              setEvents={setEvents}/>
                            :
                            <ScheduleCardList cards={sortedCourses}
                                              isLoading={isCoursesLoading}
                                              error={courseError}
                                              events={events}
                                              setEvents={setEvents}/>
                    }
                </section>
            </div>
        </div>
    );
};

export default AddSection;