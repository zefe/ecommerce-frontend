import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Col } from 'react-bootstrap'

import { Loading } from '../components/common/Loading';
import Message from '../components/common/Message';
import { login } from '../stateManagement/actions/userActions';
import { useForm } from '../Hooks/useForm';

import logo from '../assets/images/logo.png';



export const LoginView = ({ location, history }) => {

    const dispatch = useDispatch();
    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin
    

    const initialForm = {
        email: '',
        password: '',
    }

    const [ formValues, handleInputChange ] = useForm( initialForm );

    const { email, password } = formValues;

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <>
            
            {loading ? <Loading />
                :
                <div className="conatiner-view">
            <div className="logo">
                <img src={ logo } alt="Logo" />
            </div>
            
            <form onSubmit={ handleLogin } className="form">
                <div className="form-group"> 
                    <small style={{color:'red'}}>{error}</small>
                </div>

                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder=""
                        value={ email }
                        onChange={ handleInputChange }
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder=""
                        value={ password }
                        onChange={ handleInputChange }
                        required
                    />
                </div>
                <div className="form-button">
                    <button className="btn btn-primary btn-lg btn-block">Log in</button>
                </div>
                <Row className='py-3'>
                <Col>
                    New Customer? <Link
                        to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        Register
                        </Link>
                </Col>
            </Row>
            </form>
        </div>
                
            }
        </>
        
    )
}