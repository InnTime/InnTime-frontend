import React, {Dispatch, useState} from 'react';
import './MyDropdownMenu.css';
import MyIcon from "../MyIcon/MyIcon";

export interface MyDropdownOptionProps {
    value: string;
    name: string;
    onClick?: () => void;
}

interface DropDownProps {
    options: Array<MyDropdownOptionProps>,
    value: MyDropdownOptionProps | undefined,
    setValue: Dispatch<MyDropdownOptionProps>;
}


const MyDropdownMenu = ({options, value, setValue}: DropDownProps) => {
    const [isActive, setIsActive] = useState(false);
    if (value === undefined) setValue(options[0]);

    return (
        <div className="App">
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
                            }}
                        >
                            {i.name}
                        </div>
                    })}
                </div>
            </div>
        </div>

    );
};

export default MyDropdownMenu;