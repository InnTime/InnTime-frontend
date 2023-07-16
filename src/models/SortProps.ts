import {MySelectOptionProps} from "../components/UI/MySelect/MySelect";

export interface SortProps {
    options: MySelectOptionProps[],
    option: MySelectOptionProps,
    cardAttribute: string
}