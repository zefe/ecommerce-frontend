import React from 'react';
import { Link } from 'react-router-dom';


import { ReactComponent as IconUser }  from '../../assets/icons/user_icon.svg';
import { ReactComponent as IconLogout }  from '../../assets/icons/icon-logout.svg';
import { ReactComponent as IconCart }  from '../../assets/icons/cart_icon.svg';
import { ReactComponent as Logo }  from '../../assets/icons/logo.svg';

export const Header = () => {

    const handleLogout = () => {
        alert("Are you sure to logout?")
    }

    return (
        <header className="header">
            <div className="header__logo">
                <Link to ="/">
                    <Logo />
                </Link >
            </div>
            <div className="header__info">
                <div className="header__cart">
                    <Link to ="/cart">
                        <IconCart />
                    </Link>
                </div>
                <div className="header__user">
                        <IconUser />
                    <div>
                        <span>Welcome!</span>
                        <p>Juanito flores</p>
                    </div>
                </div>
                <div className="header__logout">
                    <Link to="/login" onClick={ handleLogout }>
                        <IconLogout />
                    </Link>
                </div>
            </div>
        </header>
    )
}
