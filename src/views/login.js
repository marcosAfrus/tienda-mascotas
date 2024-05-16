import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../components/input/input';
import { Buttons } from '../components/buttons/buttons';
import { ModalGlobal } from '../components/modal/modal';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [error, setError] = useState("");
    const {updateUser} = useContext(UserContext)
    const navigate = useNavigate();

    const login = () => {
        if (!email || !pass)
        {
            setError("Los campos de correo y contraseña con obligatorios")
            setOpenModal(true)
        }
        else if (email !== "test@unir.com" && pass !== "unir123")
        {
            setError("Email o contraseña inválidos")
            setOpenModal(true)
        }
        else
        {
            updateUser("Unir user")
            navigate(`/`);
        }
    }

    return (
        <div className="login">
            <ModalGlobal modalIsOpen={openModal} title="Error al acceder" text={error} backText="Ok" closeModal={() => setOpenModal(false)}/>
            <Link to={`/`}>
                <img src="logo.png" alt="logo" height={60}/>
            </Link>
            <h1>Ingresar</h1>
            <p>Ingresa tu email y password para acceder a tu cuenta</p>
            <Input name="Email" placeholder="test@test.com" type="text" setValue={(event) => setEmail(event.target.value)}/>
            <Input name="Password" placeholder="password" type="password" setValue={(event) => setPass(event.target.value)}/>
            <Buttons name="Entrar" action={login}/>
        </div>
    );
}

export default Login;