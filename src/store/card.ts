import {makeAutoObservable} from "mobx";
import {IGroup} from "../models/IGroup";
import {IElective} from "../models/IElective";
import {FilterProps} from "../models/FilterProps";

export default class CardStore {
    cards: (IGroup | IElective)[] = [];
    cardAttribute: string = 'year';
    filteredCards: (IGroup | IElective)[] = [];
    selectedCards: (IGroup | IElective)[] = [];

    filter: FilterProps = {
        sortOption: {name: 'All', value: 'all'},
        searchQuery: ''
    }

    constructor(cardAttribute: string) {
        this.cardAttribute = cardAttribute;
        makeAutoObservable(this);
    }

    setCards(newCards: (IGroup | IElective)[]) {
        this.cards = newCards;
        this.filteredCards = newCards;
    }

    setFilteredCards(newCards: (IGroup | IElective)[]) {
        this.filteredCards = newCards;
    }

    setFilter(newFilter: FilterProps) {
        this.filter = newFilter;
        this.setFilteredCards(this.filteredScheduleCards());
    }

    addToSelectedCards(newCard: IGroup | IElective) {
        this.selectedCards = [...this.selectedCards, newCard]
        this.cards = this.cards.filter(x => x.id !== newCard.id);
        this.filteredCards = this.filteredCards.filter(x => x.id !== newCard.id);
    }

    removeFromSelectedCards(toRemoveCard: IGroup | IElective) {
        this.selectedCards = this.selectedCards.filter(x => x.id !== toRemoveCard.id);
        this.cards = [...this.cards, toRemoveCard]
        this.filteredCards = [...this.filteredCards, toRemoveCard]
    }

    sortedScheduleCards(): (IGroup | IElective)[] {
        const sortOptionVal = this.filter.sortOption.value;

        if (sortOptionVal === "all") {
            return this.cards;
        }

        return this.cards.filter((card) => {
            // @ts-ignore
            return (this.cards.filter((card) => card[this.cardAttribute].toString() === sortOptionVal));
        });
    }

    filteredScheduleCards(): (IGroup | IElective)[] {
        const {searchQuery} = this.filter;

        if (searchQuery.length === 0) {
            return this.cards;
        }

        return this.sortedScheduleCards().filter((card) => {
            // const title = "shortName" in card ? card.shortName : card.name;
            const title = card.name;
            return title.toLowerCase().includes(searchQuery.toLowerCase());
        });
    }
}