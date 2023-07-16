import React from 'react';
import MySelect from "../../../UI/MySelect/MySelect";
import MyInput from "../../../UI/MyInput/MyInput";
import CardStore from "../../../../store/card";
import {observer} from "mobx-react-lite";
import {SortProps} from "../../../../models/SortProps";


interface ScheduleCardFilterSelectProps {
    cards: CardStore,
}

const ScheduleCardFilterSelect = ({cards}: ScheduleCardFilterSelectProps) => {

    return (
        <div>
            {cards.filter.sorts.map((sort, index) => {
                return <MySelect
                    key={sort.cardAttribute}
                    options={sort.options}
                    handleOnClick={selected => cards.setSort(index, {
                        ...sort,
                        option: selected
                    })}
                />
            })}
            <MyInput value={cards.filter.searchQuery} onChange={e => cards.setFilter({
                ...cards.filter,
                searchQuery: e.target.value
            })}/>
        </div>
    );
};

export default observer(ScheduleCardFilterSelect);