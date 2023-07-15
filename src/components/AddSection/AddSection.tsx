import React, {useContext, useEffect, useState} from 'react';
import cl from './AddSection.module.css';
import {useFetching} from "../../hooks/useFetching";
import ScheduleCardList from './ScheduleCardList/ScheduleCardList';
import ScheduleCardFilter from './ScheduleCardFilter/ScheduleCardFilter';
import GroupService from "../../services/GroupService";
import ElectiveService from "../../services/ElectiveService";
import {observer} from 'mobx-react-lite';
import {Context} from "../../index";
import CourseService from "../../services/CourseService";

const AddSection = () => {
    const {group, elective, event} = useContext(Context);

    const [cardsTypeFilter, setCardsTypeFilter] = useState({
        scheduleCardsType: {value: 'group', name: 'Group'},
    })

    const [fetchGroups, isGroupsLoading, groupsError] = useFetching(async () => {
        const response = await GroupService.fetchGroups();
        group.setCards(response.data);

        const userCoursesResponse = await CourseService.fetchUserCourses();
        event.addCourses(userCoursesResponse.data);
    })

    const [fetchElectives, isElectivesLoading, electiveError] = useFetching(async () => {
        const electivesResponse = await ElectiveService.fetchElectives();
        elective.setCards(electivesResponse.data);

        const userElectivesResponse = await ElectiveService.fetchUserElectives();
        await event.addElectives();

        const selectedElectives = new Set(userElectivesResponse.data.map(x => x.name));
        elective.setSelectedCards(elective.cards.filter((card) => selectedElectives.has(card.name)));
        elective.setFilteredCards(elective.cards.filter((card)=> !selectedElectives.has(card.name)))
    })

    useEffect(() => {
        fetchGroups();
        fetchElectives();
    }, [])

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
                <ScheduleCardFilter filter={cardsTypeFilter} setFilter={setCardsTypeFilter}/>
                <section className={cl.addSection__scheduleCards}>
                    {
                        cardsTypeFilter.scheduleCardsType?.value === 'elective' ?
                            <ScheduleCardList cards={elective}
                                              isLoading={isElectivesLoading}
                                              error={electiveError}
                            />
                            :
                            <ScheduleCardList cards={group}
                                              isLoading={isGroupsLoading}
                                              error={groupsError}
                            />
                    }
                </section>
            </div>
        </div>
    );
};

export default observer(AddSection);