import React from 'react';

export const Buttons = ({name, action}) => {
    return (
        <button type="button" className='button' onClick={action}>{name}</button>
    );
}
