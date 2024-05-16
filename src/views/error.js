import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Error() {
    const navigate = useNavigate();

    return (
        <div className="error" onClick={() => navigate(`/`)}>
            <img src="images.jpg" alt="logo" height={200}/>
            <h1>404</h1>
            <p>No se encotró la página que estabas buscando</p>
        </div>
    );
}

export default Error;