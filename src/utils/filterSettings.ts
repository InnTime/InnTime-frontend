import {MySelectOptionProps} from "../components/UI/MySelect/MySelect";
import {FilterProps} from "../models/FilterProps";


export const optionAll: MySelectOptionProps = {
    name: "All",
    value: 'all'
}

export const scheduleCardsTypes: MySelectOptionProps[] = [
    {
        name: "Groups",
        value: "group"
    },
    {
        name: "Electives",
        value: "elective"
    },
];

export const groupsTypes: MySelectOptionProps[] = [
    optionAll,
    {
        name: "Bachelor",
        value: "B"
    },
    {
        name: "Master",
        value: "M"
    },
];

export const groupsYears: MySelectOptionProps[] = [
    optionAll,
    {
        name: "1 year",
        value: "22"
    },
    {
        name: "2 year",
        value: "21"
    }
]


export const electiveTypes: MySelectOptionProps[] = [
    optionAll,
    {
        name: "BS Tech",
        value: "bs-tech"
    },
    {
        name: "MS Tech",
        value: "ms-tech"
    },
    {
        name: "BS/MS hum",
        value: "hum"
    }
]

export const groupFilter: FilterProps = {
    sorts: [{options: groupsTypes, option: optionAll, cardAttribute: 'type'},
    {options: groupsYears, option: optionAll, cardAttribute: 'year'}],
    searchQuery: ''
}

export const electiveFilter: FilterProps = {
    sorts: [{options: electiveTypes, option: optionAll, cardAttribute: 'type'}],
    searchQuery: ''
}
