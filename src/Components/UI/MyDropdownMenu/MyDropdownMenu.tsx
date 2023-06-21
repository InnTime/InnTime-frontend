import React, {useState} from 'react';
import './MyDropdownMenu.css';
import MyDropdownItem from "./MyDropdownItem/MyDropdownItem";
import MyIcon from "../MyIcon/MyIcon";


interface Props {
    contentArray: Array<string>
}


const MyDropdownMenu = ({contentArray}: Props) => {
    const [isActive, setIsActive] = useState(false);
    const [selected, setIsSelected] = useState("Choose one");


    return (
        <div className="App">
            <div className="dropdown">
                <div
                    className="dropdown-btn"
                    onClick={(e) => setIsActive(!isActive)}
                >
                    {selected}
                    {isActive ? <MyIcon type="caret-up" size='small'/> : <MyIcon type="caret-down" size='small'/>}
                </div>

                <div
                    className="dropdown-content"
                    style={{display: isActive ? "block" : "none"}}
                >
                    {contentArray.map(i => {
                        return <MyDropdownItem text={i} isActive={isActive} setIsSelected={setIsSelected}
                                               setIsActive={setIsActive} key={i}/>
                    })}
                </div>
            </div>
        </div>

    );
};

export default MyDropdownMenu;