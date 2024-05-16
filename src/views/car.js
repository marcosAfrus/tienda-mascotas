import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useData } from '../hooks/useData';
import { UserContext } from '../context/userContext';
import { HeadTable } from '../components/headTable/headTable';
import { ElementTable } from '../components/elementTable/elementTable';
import { Buttons } from '../components/buttons/buttons';
import { Input } from '../components/input/input';
import { ModalGlobal } from '../components/modal/modal';

function Car() {
    const navigate = useNavigate();
    const {user, car, emptyCar} = useContext(UserContext)
    const [header, setHeader] = useState(['ID', 'Nombre del producto', 'Compañía', 'Cantidad', 'Precio', 'Descuento', 'Total'])
    const [data, setData] = useState([])
    const [total, setTotal] = useState([])
    const [payment, setPayment] = useState(false)
    const [name, setName] = useState('')
    const [card, setCard] = useState('')
    const [address, setAddress] = useState('')
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        if (car.length === 0)
            navigate('/')
        let aux = []
        let cant = car.length
        let price = 0
        let offer = 0
        let total = 0
        for (let index = 0; index < car.length; index++) {
            const element = car[index];
            let aux2 = []
            aux2.push(element.id)
            aux2.push(element.name)
            aux2.push(element.company)
            aux2.push(1)
            aux2.push(element.price)
            aux2.push(element.offer)
            aux2.push(element.price - element.offer)
            price += element.price
            offer += element.offer
            total += element.price - element.offer
            aux.push({
                items: aux2
            })
        }
        setData(aux)
        setTotal(['', 'Total a pagar', '', cant, price, offer, total])
    },[])

    const products = data.map((ele) =>
        <ElementTable elements={ele.items}/>
    );

    const pay = () =>{
        setOpenModal(true)
    }

    const done = () =>{
        emptyCar()
        navigate('/')
    }

    return (
        <div className="car">
            <ModalGlobal modalIsOpen={openModal} title="Gracias" text={"Tu pago ha sido recibido con éxito, recibirás tu produccto en la dirección "+address} backText="Ok" closeModal={() => done()}/>
            <h1>Carrito de compra</h1>
            <p>Hola {user}. Aquí encontrarás el detalle de todos los productos que has agregado al carrito y poddrás culminar con tu pago.</p>
            <table className='car__table'>
                <HeadTable elements={header} color={'white'}/>
                {products}
                <HeadTable elements={total} color={'#7D3C98'}/>
            </table>
            {
                !payment &&
                <Buttons name="Pagar" action={() => setPayment(true)}/>
            }
            {
                payment &&
                <div className='car__form'>
                    <Input name="Nombre del dueño de la tarjeta" placeholder="nombre" type="text" setValue={(event) => setName(event.target.value)}/>
                    <Input name="Dirección de entrega" placeholder="dirección" type="text" setValue={(event) => setAddress(event.target.value)}/>
                    <Input name="Card number" placeholder="card" type="number" setValue={(event) => setCard(event.target.value)}/>
                    <div className='car__form__button'>
                        <Buttons name="Pagar" action={() => pay()}/>
                    </div>
                </div>
            }
        </div>
    );
}

export default Car;