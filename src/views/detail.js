import React, { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useData } from '../hooks/useData';
import { Buttons } from '../components/buttons/buttons';
import { UserContext } from '../context/userContext';
import { ModalGlobal } from '../components/modal/modal';
import { Floating } from '../components/floating/floating';

function Detail() {
    const {user, car, addCar} = useContext(UserContext)
    const navigate = useNavigate();
    const { id } = useParams();
    const data = useData().data
    const [product, setProduct] = useState({})
    const [openModal, setOpenModal] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        const aux = data.find((element) => element.id == id);
        setProduct(aux)
    },[data])

    const adding = () => {
        if(!user)
            navigate(`/login`)
        else
        {
            addCar(product)
            setMessage('El producto '+product.name+' ha sido agregado a tu carrito con exito.')
            setOpenModal(true)
        }
    }

    if (!product)
        return (<></>)
    return (
        <div className="detail">
            <ModalGlobal modalIsOpen={openModal} title="Producto agregado" text={message} backText="Continuar" closeModal={() => navigate(`/`)}/>
            <h1>{product.name}</h1>
            <div className='detail__block row'>
                <div className='detail__block--left col-6'>
                    <p><strong>{product.text}</strong></p>
                    <p className='detail__block__description'>{product.description}</p>
                </div>
                <div className='detail__block--right col-6'>
                    <img src={window.location.origin + '/' +product.image} alt={product.name}/>
                </div>
            </div>
            <h3><strong>Precio final:</strong> {product.price-product.offer}</h3>
            <Buttons name="Agregar al carrito" action={adding}/>
            {
                car.length !== 0 &&
                <Floating />
            }
        </div>
        
    );
}

export default Detail;