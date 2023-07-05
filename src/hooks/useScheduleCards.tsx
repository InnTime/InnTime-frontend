import {useMemo} from "react";
import {MySelectOptionProps} from "../Components/UI/MySelect/MySelect";
import {IGroup} from "../models/IGroup";
import {IElective} from "../models/IElective";

export const useSortedScheduleCards = (cards: IGroup[] | IElective[],
                                       cardProperty: string,
                                       filterCategory: MySelectOptionProps) => {
    return useMemo(() => {
        if (filterCategory && filterCategory.value !== 'all')
            // @ts-ignore
            return cards.filter(i => i[cardProperty] === filterCategory.value);
        return cards;
    }, [cards, filterCategory])
}


export const useScheduleCards = (cards: IGroup[] | IElective[],
                         cardProperty: string,
                         filterCategory: MySelectOptionProps,
                         searchQuery: string) => {
    const sortedScheduleCards = useSortedScheduleCards(cards, cardProperty, filterCategory);

    return useMemo(() => {
        return sortedScheduleCards.filter((card: IGroup | IElective) => {
            // const title = "shortName" in card ? card.shortName : card.name;
            const title = card.name;
            return title.toLowerCase().includes(searchQuery.toLowerCase())
        })
    }, [searchQuery, sortedScheduleCards]);
}