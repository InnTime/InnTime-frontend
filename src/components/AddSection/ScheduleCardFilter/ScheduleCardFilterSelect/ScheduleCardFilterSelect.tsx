import React from 'react';
import MySelect, {MySelectOptionProps} from "../../../UI/MySelect/MySelect";
import MyInput from "../../../UI/MyInput/MyInput";
import CardStore from "../../../../store/card";
import {observer} from "mobx-react-lite";


interface ScheduleCardFilterSelectProps {
    cards: CardStore,
    secondFilterOptions: Array<MySelectOptionProps>
}

const ScheduleCardFilterSelect = ({cards, secondFilterOptions}: ScheduleCardFilterSelectProps) => {

    return (
        <div>
            <MySelect
                options={secondFilterOptions}
                handleOnClick={selected => cards.setFilter({
                    ...cards.filter,
                    sortOption: selected
                })}
            />
            <MyInput value={cards.filter.searchQuery} onChange={e => cards.setFilter({
                ...cards.filter,
                searchQuery: e.target.value
            })}/>
        </div>
    );
};

export default observer(ScheduleCardFilterSelect);