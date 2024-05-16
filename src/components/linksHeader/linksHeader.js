import React from 'react';
import { Link } from "react-router-dom";

export const LinksHeader = ({title, link}) => {
    return (
        <div className="options row">
            <Link to={link}>
                <p>{title}</p>
            </Link>
        </div>
    );
}
