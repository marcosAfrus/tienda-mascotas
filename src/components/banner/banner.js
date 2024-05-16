import React from 'react';

export const Banner = ({title, image, goDetail}) => {
    return (
        <div className='banner' style={{backgroundImage: `url(${image})`}} onClick={goDetail}>
            <h1>{title}</h1>
        </div>
    );
}
