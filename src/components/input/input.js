import React from 'react';

export const Input = ({name, placeholder, type, setValue}) => {
    return (
        <div className="input">
            <label>{name}</label>
            <input type={type} placeholder={placeholder} onChange={ setValue}/>
        </div>
    );
}
