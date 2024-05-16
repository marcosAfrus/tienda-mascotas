import React from 'react';

export const HeadTable = ({elements, color}) => {

    const products = elements.map((ele) =>
        <th>{ele}</th>
    );

    return (
        <tr style={{backgroundColor: color}}>
            {products}
        </tr>
    );
}
