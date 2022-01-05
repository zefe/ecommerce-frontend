import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../../stateManagement/actions/userActions';

import { ReactComponent as IconUser }  from '../../assets/icons/user_icon.svg';
import { ReactComponent as IconLogout }  from '../../assets/icons/icon-logout.svg';
import { ReactComponent as IconCart }  from '../../assets/icons/cart_icon.svg';
import { ReactComponent as Logo }  from '../../assets/icons/logo.svg';

export const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const handleLogout = () => {
        dispatch(logout())
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
                    {userInfo ? 
                        <>
                            <span>Welcome {userInfo.name}</span>
                            
                            <Link to='/dashboard'>
                                <p>Dashboard</p>
                            </Link> 
                        </>
                        : 
                        <>
                            <span>Welcome guest!</span>
                            <div className='links'>
                                <Link to='/login'>
                                    <p>Login  |</p> 
                                </Link>        
                                <Link to='/register'>
                                    <p>Register</p>
                                </Link> 
                            </div>                   
                        </>
                      }
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
