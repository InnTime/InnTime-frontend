import React, {ReactNode} from 'react';
import cl from './MyButton.module.css';
import MyIcon, {IconProps} from "../MyIcon/MyIcon";

interface Props {
    text: string,
    backgroundColor: "black" | "white" | "yellow",
    color: "black" | "white",
    fontSize?: "small" | "medium" | "huge",
    icon?: ReactNode
}

const MyButton = ({text, fontSize, backgroundColor, color, icon}: Props) => {

    const buttonStyles = [cl.myButton];
    const buttonTextStyles = [cl.myButton__text];

    switch (backgroundColor) {
        case 'black':
            buttonStyles.push(cl.myButtonBlack)
            break;
        case 'white':
            buttonStyles.push(cl.myButtonWhite)
            break;
        case 'yellow':
            buttonStyles.push(cl.myButtonYellow)
            break;
    }

    switch (color) {
        case 'black':
            buttonTextStyles.push(cl.myButton__textBlack);
            break;
        case 'white':
            buttonTextStyles.push(cl.myButton__textWhite);
            break;
    }

    return (
        <div>
            <button className={buttonStyles.join(' ')}>
                <p className={buttonTextStyles.join(' ')}>{text}</p>
                {!!icon && <span>{icon}</span>}
            </button>
        </div>
    );
};

export default MyButton;