import React, {Dispatch, useEffect, useState} from 'react';
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

const AddSection = ({events, setEvents}: AddProps) => {
    const [courses, setCourses] = useState<CoreCourseInfo[]>([]);
    const [electives, setElectives] = useState<ElectiveInfo[]>([]);

    const [filter, setFilter] = useState({
        scheduleCardsType: undefined,
        selectedCourseYear: undefined,
        selectedElectiveType: undefined,
        searchQuery: ''
    })

    const [selectedScheduleCardsType, setSelectedScheduleCardsType] = useState<MyDropdownOptionProps>();
    const [selectedCourseYear, setSelectedCourseYear] = useState<MyDropdownOptionProps>();
    const [selectedElectiveType, setSelectedElectiveType] = useState<MyDropdownOptionProps>();


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


    // @ts-ignore
    // @ts-ignore
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
                <ScheduleCardFilter
                    selectedScheduleCardsType={selectedScheduleCardsType}
                    setSelectedScheduleCardsType={setSelectedScheduleCardsType}
                    selectedCourseYear={selectedCourseYear}
                    setSelectedCourseYear={setSelectedCourseYear}
                    selectedElectiveType={selectedElectiveType}
                    setSelectedElectiveType={setSelectedElectiveType}/>
                <section className={cl.addSection__scheduleCards}>
                    {
                        selectedScheduleCardsType?.value === 'core' ?
                            //@ts-ignore
                            <ScheduleCardList cards={courses} isLoading={isCoursesLoading} error={courseError}
                                              events={events} setEvents={setEvents}/>
                            :
                            //@ts-ignore
                            <ScheduleCardList cards={electives} isLoading={isElectivesLoading} error={electiveError}
                                              events={events} setEvents={setEvents}/>
                    }
                </section>
            </div>
        </div>
    );
};

export default AddSection;