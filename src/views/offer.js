import React, { useEffect, useState, useContext } from 'react';
import { Input } from '../components/input/input';
import { Product } from '../components/product/product';
import { useData } from '../hooks/useData';
import { Floating } from '../components/floating/floating';
import { UserContext } from '../context/userContext';

function Offer() {
    const {car} = useContext(UserContext)
    const data = useData().data
    const [dataFilter, setDataFilter] = useState([])
    const [originalData, setOriginalData] = useState([])

    useEffect(() => {
        let aux = []
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            if (element.offer !== 0)
                aux.push(element)
        }
        setDataFilter(aux)
        setOriginalData(aux)
    },[data])

    const search = (text) => {
        const resp = originalData.filter((ele) => ele.text.toLowerCase().includes(text.toLowerCase()))
        setDataFilter(resp)
    }

    const products = dataFilter.map((pro) =>
        <Product producto={pro}/>
    );

    return (
        <div className="home">
            <h2>Tenemos las mejores ofertas para los pequeños de la casa</h2>
            <Input name="Puedes buscar en nuestros producros de oferta:" placeholder="Buscar" type="text" setValue={(event) => search(event.target.value)}/>
            <div className='home__list row gx-4'>
                {products}
            </div>
            {
                car.length !== 0 &&
                <Floating />
            }
        </div>
    );
}

export default Offer;