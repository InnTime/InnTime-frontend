import {useMemo} from "react";
import {CoreCourseInfo} from "../API/fakeCoreCourseApi";
import {ElectiveInfo} from "../API/fakeElectiveApi";
import {MySelectOptionProps} from "../Components/UI/MySelect/MySelect";

export const useSortedScheduleCards = (cards: CoreCourseInfo[] | ElectiveInfo[],
                                       cardProperty: string,
                                       filterCategory: MySelectOptionProps) => {
    return useMemo(() => {
        if (filterCategory && filterCategory.value !== 'all')
            // @ts-ignore
            return cards.filter(i => i[cardProperty] === filterCategory.value);
        return cards;
    }, [cards, filterCategory])
}


export const useScheduleCards = (cards: CoreCourseInfo[] | ElectiveInfo[],
                         cardProperty: string,
                         filterCategory: MySelectOptionProps,
                         searchQuery: string) => {
    const sortedScheduleCards = useSortedScheduleCards(cards, cardProperty, filterCategory);

    return useMemo(() => {
        return sortedScheduleCards.filter((card: CoreCourseInfo | ElectiveInfo) => {
            const title = "shortName" in card ? card.shortName : card.name;
            return title.toLowerCase().includes(searchQuery.toLowerCase())
        })
    }, [searchQuery, sortedScheduleCards]);
}