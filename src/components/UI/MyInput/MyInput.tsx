import React from 'react';
import cl from './MyInput.module.css';


interface MyInputProps {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


const MyInput = ({value, onChange}: MyInputProps) => {
    return (
        <div className={cl.myInput}>
            <input className={cl.myInput__content}
                   value={value}
                   onChange={onChange}
                   type="text"
                   placeholder="Search..."/>
        </div>
    );
};

export default MyInput;