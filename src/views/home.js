import React, { useEffect, useState, useContext } from 'react';
import { Banner } from '../components/banner/banner';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/input/input';
import { Product } from '../components/product/product';
import { useData } from '../hooks/useData';
import { Floating } from '../components/floating/floating';
import { UserContext } from '../context/userContext';

function Home() {
    const navigate = useNavigate();
    const {car} = useContext(UserContext)
    const data = useData().data
    const [dataFilter, setDataFilter] = useState([])

    useEffect(() => {
        setDataFilter(data)
    },[data])

    const search = (text) => {
        const resp = data.filter((ele) => ele.text.toLowerCase().includes(text.toLowerCase()))
        setDataFilter(resp)
    }

    const products = dataFilter.map((pro) =>
        <Product producto={pro}/>
    );

    return (
        <div className="home">
            <Banner title="Ofertas para tus mascotas" image='banner.png' goDetail={() => navigate(`/offer`) }/>
            <h2>Todo para tu mascota!!!</h2>
            <Input name="Busca lo que necesites para tu mascota:" placeholder="Buscar" type="text" setValue={(event) => search(event.target.value)}/>
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

export default Home;