import React, {useState} from 'react';
import './MySelect.css';
import MyIcon from "../MyIcon/MyIcon";
import {IGroup} from "../../../models/IGroup";

export interface MySelectOptionProps {
    value: string;
    name: string;
    onClick?: () => void;
}

interface MySelectProps {
    options: Array<MySelectOptionProps>,
    handleOnClick: (value: MySelectOptionProps) => void,
}


const MySelect = ({options, handleOnClick}: MySelectProps) => {
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState<MySelectOptionProps>(options[0]);

    return (
        <div className="dropdown">
            <div
                className="dropdown-btn"
                onClick={() => setIsActive(!isActive)}
            >
                {value?.name}
                {isActive ? <MyIcon type="caret-up" size='small'/> : <MyIcon type="caret-down" size='small'/>}
            </div>

            <div
                className="dropdown-content"
                style={{display: isActive ? "block" : "none"}}
            >
                {options.map(i => {
                    return <div
                        key={i.value}
                        className="item"
                        onClick={() => {
                            setValue(i);
                            setIsActive(!isActive)
                            handleOnClick(i)
                        }}
                    >
                        {i.name}
                    </div>
                })}
            </div>
        </div>
    );
};

export default MySelect;