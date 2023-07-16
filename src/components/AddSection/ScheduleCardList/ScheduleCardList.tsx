import React from 'react';
import MyLoader from "../../UI/MyLoader/MyLoader";
import cl from './ScheduleCardList.module.css';
import ScheduleCardItem from "../ScheduleCardItem/ScheduleCardItem";
import {observer} from "mobx-react-lite";
import CardStore from "../../../store/card";

interface ScheduleCardListProps {
    cards: CardStore;
    isLoading: boolean | undefined;
    error: string;
}

const ScheduleCardList = ({cards, isLoading, error}: ScheduleCardListProps) => {
    if (isLoading) return <MyLoader/>

    // if (error) return console.log(error);


    return (
        <div className={cl.addSection__scheduleCards}>
            {cards.selectedCards.map(i => <ScheduleCardItem key={i.name}
                                                            card={i}
                                                            cards={cards}
                                                            isSelected={true}/>)
                .concat(cards.filteredCards.map(i => <ScheduleCardItem key={i.name}
                                                                       card={i}
                                                                       cards={cards}
                                                                       isSelected={false}/>))
            }
        </div>
    );
};

export default observer(ScheduleCardList);