import React, {ReactNode} from 'react';
import cl from './MyButton.module.css';

interface Props {
    text: string,
    backgroundColor: "black" | "white" | "yellow",
    color: "black" | "white",
    fontSize?: "small" | "medium" | "huge",
    icon?: ReactNode,
    icon2?: ReactNode,
    onClick?: () => void;
}

const MyButton = ({text, fontSize, backgroundColor, color, icon, icon2, onClick}: Props) => {

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
        <div onClick={onClick}>
            <button className={buttonStyles.join(' ')}>
                <p className={buttonTextStyles.join(' ')}>{text}</p>
                <div className={cl.icons}>
                    {!!icon && <span>{icon}</span>}
                    {!!icon2 && <span>{icon2}</span>}
                </div>
            </button>
        </div>
    );
};

export default MyButton;