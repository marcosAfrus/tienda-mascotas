import React from 'react';

export const ElementTable = ({elements}) => {
    const products = elements.map((ele) =>
        <td>{ele}</td>
    );

    return (
        <tr>
            {products}
        </tr>
    );
}
