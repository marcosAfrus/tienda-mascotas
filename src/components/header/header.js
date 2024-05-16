import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { LinksHeader } from '../linksHeader/linksHeader';
import { UserContext } from '../../context/userContext';
import { FaUserAltSlash, FaUserAlt  } from "react-icons/fa";

export const Header = () => {
    const {user} = useContext(UserContext)

    return (
        <div className="header row">
            <div className='header__logo col-2'>
                <Link to={`/`}>
                    <img src={window.location.origin + "/logo.png"} alt="logo" height={30}/>
                </Link>
            </div>
            <div className='header__options col-7'>
                <LinksHeader title="Home" link="/"/>
                <LinksHeader title="Offers" link="/offer"/>
            </div>
            <div className='header__user col-3'>
                {
                    !user &&
                    <div className='header__user__block'>
                        <FaUserAltSlash />
                        <LinksHeader title="Ingresar" link="/login"/>
                    </div>
                }
                {
                    user &&
                    <div className='header__user__block'>
                        <FaUserAlt />
                        <p>{user}</p>
                    </div>
                }
            </div>
        </div>
    );
}
