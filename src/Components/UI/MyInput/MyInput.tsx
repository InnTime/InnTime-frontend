import React from 'react';
import cl from './MyInput.module.css';

const MyInput = () => {
    return (
        <div className={cl.myInput}>
            <input className={cl.myInput__content} type="text" placeholder="Search..."/>
        </div>
    );
};

export default MyInput;