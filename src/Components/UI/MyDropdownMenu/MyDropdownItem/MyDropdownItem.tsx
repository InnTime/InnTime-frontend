import React, {Dispatch, SetStateAction} from 'react';


interface Props {
    text: string,
    isActive: boolean,
    setIsActive: Dispatch<SetStateAction<boolean>>,
    setIsSelected: Dispatch<SetStateAction<string>>
}

const MyDropdownItem = ({text, isActive, setIsActive, setIsSelected}: Props) => {

    return (
        <div
            onClick={(e) => {
                // @ts-ignore
                setIsSelected(e.target.textContent);
                setIsActive(!isActive);
            }}
            className="item"
        >
            {text}
        </div>
    );
};

export default MyDropdownItem;