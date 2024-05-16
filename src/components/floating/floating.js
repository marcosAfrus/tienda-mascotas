import React, {useContext} from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { UserContext } from '../../context/userContext';
import { Link } from 'react-router-dom';

export const Floating = () => {
    const {car} = useContext(UserContext)

    return (
        <Link to={`/car`}>
            <div className='floating'>
                <p>Ver carrito</p>
                <CiShoppingCart size={30}/>
                <div className='floating__number'>
                    <p>{car.length}</p>
                </div>
            </div>
        </Link>
    );
}
