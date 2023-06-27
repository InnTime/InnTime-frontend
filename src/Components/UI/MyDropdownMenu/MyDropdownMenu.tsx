import React, {useState} from 'react';
import './MyDropdownMenu.css';
import MyIcon from "../MyIcon/MyIcon";

export interface MyDropdownOptionProps {
    value: string;
    name: string;
    onClick?: () => void;
}

interface DropDownProps {
    options: Array<MyDropdownOptionProps>,
    handleOnChange: React.ChangeEvent<HTMLInputElement>
}


const MyDropdownMenu = ({options, handleOnChange}: DropDownProps) => {
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState<MyDropdownOptionProps>(options[0]);

    return (
        // @ts-ignore
        <div className="dropdown" >
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
                            // @ts-ignore
                            handleOnChange(i)
                        }}
                    >
                        {i.name}
                    </div>
                })}
            </div>
        </div>
    );
};

export default MyDropdownMenu;