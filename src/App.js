import { useState } from 'react';
import React from 'react';
import StoreRouter from './routes/storeRoutes';
import { UserContext } from './context/userContext';

function App() {
    const [user, setUser] = useState('');
    const [car, setCar] = useState([])

    const updateUser = (name) => {
        setUser(name);
    };

    const addCar = (product) => {
        let aux = car
        aux.push(product)
        setCar(aux)
    }

    const emptyCar = () => {
        setCar([])
    }


    return (
        <UserContext.Provider value={{user, updateUser, car, addCar, emptyCar}}>
            <StoreRouter></StoreRouter>
        </UserContext.Provider>
    );
}

export default App;
