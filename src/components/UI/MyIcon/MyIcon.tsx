import React from 'react';
import cl from "./MyIcon.module.css";
import calendarBlackIcon from '../../../assets/icons/calendar-black.svg';
import calendarWhiteIcon from '../../../assets/icons/calendar-white.svg';
import cloudDownloadBlackIcon from '../../../assets/icons/cloud-download-black.svg';
import cloudDownloadWhiteIcon from '../../../assets/icons/cloud-download-white.svg';
import minusBlackIcon from '../../../assets/icons/minus-black.svg';
import plusWhiteIcon from '../../../assets/icons/plus-white.svg';
import plusBlackIcon from '../../../assets/icons/plus-black.svg';
import userWhiteIcon from '../../../assets/icons/user-white.svg';
import userBlackIcon from '../../../assets/icons/user-black.svg';
import caretUpIcon from '../../../assets/icons/caret-up.svg';
import caretDownIcon from '../../../assets/icons/caret-down.svg';
import logoutIcon from '../../../assets/icons/logout.svg';


export interface IconProps {
    type: "add" | "remove" | "calendar" | "download" | "user" | "caret-up" | "caret-down"| 'logout',
    color?: 'white' | 'black',
    size?: 'small' | 'medium',
    onClick?: () => void;
}

const MyIcon = ({type, color, size, onClick}: IconProps) => {

    const handleClick = (e: React.MouseEvent<HTMLHeadingElement>) => {
        e.stopPropagation();
        if (onClick) {
            onClick()
        }
    }

    let src;
    switch (type) {
        case 'add':
            src = plusWhiteIcon
            if (color === 'white') src = plusWhiteIcon;
            else if (color === 'black') src = plusBlackIcon;
            break;
        case 'remove':
            src = minusBlackIcon;
            break;
        case "caret-up":
            src = caretUpIcon;
            break;
        case "caret-down":
            src = caretDownIcon;
            break;
        case "user":
            if (color === 'white') src = userWhiteIcon;
            else if (color === 'black') src = userBlackIcon;
            break;
        case 'calendar':
            if (color === 'white') src = calendarWhiteIcon;
            else if (color === 'black') src = calendarBlackIcon;
            break;
        case 'download':
            if (color === 'white') src = cloudDownloadWhiteIcon;
            else if (color === 'black') src = cloudDownloadBlackIcon;
            break;
        case 'logout':
            src = logoutIcon;
            break;
        default:
            break;
    }

    let iconStyle: string[];

    if (!!size && size === 'small') {
        iconStyle = [cl.myIconSmall];
    } else {
        iconStyle = [cl.myIcon]
    }

    return (
        <img onClick={handleClick} className={iconStyle.join(' ')} src={src} alt="alt"/>
    );
};

export default MyIcon;