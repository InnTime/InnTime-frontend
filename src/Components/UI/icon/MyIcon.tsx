import React from 'react';
import cl from "../button/MyButton.module.css";
import calendarBlackIcon from '../../../assets/icons/calendar-black.svg';
import calendarWhiteIcon from '../../../assets/icons/calendar-white.svg';
import cloudDownloadBlackIcon from '../../../assets/icons/cloud-download-black.svg';
import cloudDownloadWhiteIcon from '../../../assets/icons/cloud-download-white.svg';
import minusBlackIcon from '../../../assets/icons/minus-black.svg';
import plusWhiteIcon from '../../../assets/icons/plus-white.svg';
import userWhiteIcon from '../../../assets/icons/user-white.svg';

export interface IconProps {
    type: "plus" | "minus" | "calendar" | "download" | "user",
    color?: 'white' | 'black'
}

const MyIcon = ({type, color}: IconProps) => {
    let src;
    switch (type) {
        case 'plus':
            src = plusWhiteIcon
            break;
        case 'minus':
            src = minusBlackIcon;
            break;
        case "user":
            src = userWhiteIcon;
            break;
        case 'calendar':
            if (color === 'white') src = calendarWhiteIcon;
            else if (color === 'black') src = calendarBlackIcon;
            break;
        case 'download':
            if (color === 'white') src = cloudDownloadWhiteIcon;
            else if (color === 'black') src = cloudDownloadBlackIcon;
            break;
        default:
            break;
    }

    return (
        <img src={src} alt="alt"/>
    );
};

export default MyIcon;