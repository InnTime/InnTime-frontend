import {makeAutoObservable} from "mobx";
import {IGroup} from "../models/IGroup";
import {IElective} from "../models/IElective";
import {FilterProps} from "../models/FilterProps";
import {SortProps} from "../models/SortProps";

export default class CardStore {
    cards: (IGroup | IElective)[] = [];
    filteredCards: (IGroup | IElective)[] = [];
    selectedCards: (IGroup | IElective)[] = [];

    filter: FilterProps = {} as FilterProps;

    constructor(filter: FilterProps) {
        this.filter = filter;
        makeAutoObservable(this);
    }

    setCards(newCards: (IGroup | IElective)[]) {
        this.cards = newCards;
    }

    setFilteredCards(newCards: (IGroup | IElective)[]) {
        this.filteredCards = newCards;
    }

    setSelectedCards(newCards: (IGroup | IElective)[]) {
        this.selectedCards = newCards;
        this.filteredCards = this.filteredScheduleCards()
    }

    setFilter(newFilter: FilterProps) {
        this.filter = newFilter;
        this.setFilteredCards(this.filteredScheduleCards());
    }

    setSort(idx: number, newSort: SortProps) {
        this.filter.sorts[idx] = newSort;
        this.setFilteredCards(this.filteredScheduleCards());
    }

    addToSelectedCards(newCard: IGroup | IElective) {
        this.selectedCards = [...this.selectedCards, newCard]
        this.filteredCards = this.filteredScheduleCards()
    }

    removeFromSelectedCards(toRemoveCard: IGroup | IElective) {
        this.selectedCards = this.selectedCards.filter(x => x.name !== toRemoveCard.name);
        this.filteredCards = this.filteredScheduleCards()
    }

    sortCardsByOneAttribute(sort: SortProps, cards: (IGroup | IElective)[]) {
        const sortOptionVal = sort.option.value;

        if (sortOptionVal === "all") {
            return cards.filter((card) => !this.selectedCards.includes(card));
        }

        return cards.filter((card) =>
            !this.selectedCards.includes(card) &&
            //@ts-ignore
            card[sort.cardAttribute].toString() === sortOptionVal.toString());
    }

    sortedScheduleCards(): (IGroup | IElective)[] {
        let cards = this.cards.filter((card) => !this.selectedCards.includes(card));
        for (const sort of this.filter.sorts) {
            cards = this.sortCardsByOneAttribute(sort, cards);
        }
        return cards;
    }

    filteredScheduleCards(): (IGroup | IElective)[] {
        const {searchQuery} = this.filter;

        if (searchQuery.length === 0) {
            return this.sortedScheduleCards();
        }

        return this.sortedScheduleCards().filter((card) => {
            return !this.selectedCards.includes(card) && card.name.toLowerCase().includes(searchQuery.toLowerCase());
        });
    }
}