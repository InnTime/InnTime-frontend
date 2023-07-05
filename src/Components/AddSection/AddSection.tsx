import React, {Dispatch, useEffect, useState} from 'react';
import cl from './AddSection.module.css';
import {useFetching} from "../../hooks/useFetching";
import ScheduleCardList from '../ScheduleCardList/ScheduleCardList';
import ScheduleCardFilter from '../ScheduleCardFilter/ScheduleCardFilter';
import {MySelectOptionProps} from "../UI/MySelect/MySelect";
import {useScheduleCards} from "../../hooks/useScheduleCards";
import {EventProps} from "../../pages/homepage/HomePage";
import GroupService from "../../services/GroupService";
import {IGroup} from "../../models/IGroup";
import ElectiveService from "../../services/ElectiveService";
import {IElective} from "../../models/IElective";


interface AddProps {
    events: EventProps[]
    setEvents: Dispatch<EventProps[]>
}

export interface FilterProps {
    scheduleCardsType: MySelectOptionProps,
    courseYear: MySelectOptionProps,
    electiveType: MySelectOptionProps,
    searchQuery: string
}

const AddSection = ({events, setEvents}: AddProps) => {
    const [courses, setCourses] = useState<IGroup[]>([]);
    const [electives, setElectives] = useState<IElective[]>([]);

    const [filter, setFilter] = useState({
        scheduleCardsType: {value: 'core', name: ''},
        courseYear: {value: 'all', name: ''},
        electiveType: {value: 'all', name: ''},
        searchQuery: ''
    })

    const sortedCourses = useScheduleCards(courses, "year", filter.courseYear, filter.searchQuery)
    const sortedElectives = useScheduleCards(electives, "type", filter.electiveType, filter.searchQuery)

    const [fetchCourses, isCoursesLoading, courseError] = useFetching(async () => {
        const response = await GroupService.fetchGroups();
        setCourses(response.data);
    })

    const [fetchElectives, isElectivesLoading, electiveError] = useFetching(async () => {
        const response = await ElectiveService.fetchElectives();
        setElectives(response.data);
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