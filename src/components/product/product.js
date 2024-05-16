import React from 'react';
import { Buttons } from '../buttons/buttons';
import { useNavigate } from 'react-router-dom';

export const Product = ({producto, onPress}) => {
    const navigate = useNavigate();

    const goDetail = () => {
        navigate(`/detail/`+producto.id);
    }

    return (
        <div className='container col-4'>
            <div className='container__product'>
                <h5>{producto.name}</h5>
                <div className='container__product__img'>
                    <img src={producto.image} alt={producto.name}/>
                </div>
                <p>{producto.text}</p>
                <p><strong>Precio: </strong>{producto.price}</p>
                {
                    producto.offer !== 0 &&
                    <p className='container__product__offer'><strong>Oferta del día: </strong>{producto.price-producto.offer}</p>
                }
                <div className='container__product__buttons'>
                    <Buttons name="Ver detalle" action={goDetail}/>
                </div>
            </div>
        </div>
    );
}
