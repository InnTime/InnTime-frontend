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
    }

    setFilteredCards(newCards: (IGroup | IElective)[]) {
        this.filteredCards = newCards;
    }

    setSelectedCards(newCards: (IGroup | IElective)[]) {
        this.selectedCards = newCards;
        this.filteredCards = this.sortedScheduleCards()
    }

    setFilter(newFilter: FilterProps) {
        this.filter = newFilter;
        this.setFilteredCards(this.filteredScheduleCards());
    }

    addToSelectedCards(newCard: IGroup | IElective) {
        this.selectedCards = [...this.selectedCards, newCard]
        this.filteredCards = this.sortedScheduleCards()
    }

    removeFromSelectedCards(toRemoveCard: IGroup | IElective) {
        this.selectedCards = this.selectedCards.filter(x => x.name !== toRemoveCard.name);
        this.filteredCards = this.sortedScheduleCards()
    }

    sortedScheduleCards(): (IGroup | IElective)[] {
        const sortOptionVal = this.filter.sortOption.value;

        if (sortOptionVal === "all") {
            return this.cards.filter((card) => !this.selectedCards.includes(card));
        }

        return this.cards.filter((card) =>
            !this.selectedCards.includes(card) &&
            //@ts-ignore
            card[this.cardAttribute].toString() === sortOptionVal);
    }

    filteredScheduleCards(): (IGroup | IElective)[] {
        const {searchQuery} = this.filter;

        if (searchQuery.length === 0) {
            return this.cards.filter((card) => !this.selectedCards.includes(card));
        }

        return this.sortedScheduleCards().filter((card) => {
            // const title = "shortName" in card ? card.shortName : card.name;
            const title = card.name;
            return !this.selectedCards.includes(card) && title.toLowerCase().includes(searchQuery.toLowerCase());
        });
    }
}