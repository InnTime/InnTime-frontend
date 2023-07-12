import {MySelectOptionProps} from "../components/UI/MySelect/MySelect";

export const HOME_ROUTE = '/'
export const LOGIN_ROUTE = '/login'
export const REGISTER_ROUTE = '/register'

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

export const groupsByYears: MySelectOptionProps[] = [
    {
        name: "All",
        value: "all"
    },
    {
        name: "BS - 1 year",
        value: "bs-1"
    },
    {
        name: "BS - 2 year",
        value: "bs-2"
    },
    {
        name: "BS - 3 year",
        value: "bs-3"
    },
    {
        name: "BS - 4 year",
        value: "bs-4"
    },
    {
        name: "MS - 1 year",
        value: "ms-1"
    }
]


export const electiveType: MySelectOptionProps[] = [
    {
        name: "All",
        value: "all"
    },
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
