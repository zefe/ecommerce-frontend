import React from 'react';
import { Link } from 'react-router-dom';


import { ReactComponent as IconUser }  from '../../assets/icons/user_icon.svg';
import { ReactComponent as IconLogout }  from '../../assets/icons/icon-logout.svg';
import { ReactComponent as IconCart }  from '../../assets/icons/cart_icon.svg';
import { ReactComponent as Logo }  from '../../assets/icons/logo.svg';

export const Header = () => {

    const handleLogout = () => {
        alert("logout")
    }

    return (
        <header className="header">
            <div className="header__logo">
                <a href ="/">
                    <Logo />
                </a >
            </div>
            <div className="header__info">
                <div className="header__cart">
                    <IconCart />
                </div>
                <div className="header__user">
                        <IconUser />
                    <div>
                        <span>Welcome!</span>
                        <p>Juanito flores</p>
                    </div>
                </div>
                <div className="header__logout">
                    <a href="/login" onClick={ handleLogout }>
                        <IconLogout />
                    </a>
                </div>
            </div>
        </header>
    )
}
