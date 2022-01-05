import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap'

import { Loading } from '../components/common/Loading';
import Message from '../components/common/Message';
import { register } from '../stateManagement/actions/userActions';
import { useForm } from '../Hooks/useForm';

import logo from '../assets/images/logo.png';



export const RegisterView = ({ location, history }) => {

    const dispatch = useDispatch();
    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister
    
    const [message, setMessage] = useState('') 

    const initialForm = {
        name:'',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const [ formValues, handleInputChange ] = useForm( initialForm );

    const { name, email, password, confirmPassword } = formValues;

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const handleRegister = (e) => {
        e.preventDefault();        
        setMessage('')
        if(password != confirmPassword) {
            setMessage('Passwords do not match')
        } else {            
            dispatch(register(name, email, password));
        }
    }

    return (
        <>
            {loading ? <Loading />
                :
                <div className="conatiner-view">
                    <div className="logo">
                        <img src={ logo } alt="Logo" />
                    </div>
                    
                    <form onSubmit={ handleRegister } className="form">
                        <div className="form-group">
                            {message && <small style={{color:'red'}}>{message}</small>}
                            <small style={{color:'red'}}>{error}</small>
                        </div>
        
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input
                                type="name"
                                name="name"
                                id="name"
                                placeholder=""
                                value={ name }
                                onChange={ handleInputChange }
                                required
                            />
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
                        <div className="form-group">
                            <label htmlFor="">Confirm password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder=""
                                value={ confirmPassword }
                                onChange={ handleInputChange }
                                required
                            />
                        </div>
                        <div className="form-button">
                            <button className="btn btn-primary btn-lg btn-block">Register</button>
                        </div>
                        <Row className='py-3'>
                        <Col>
                            Have an Account? <Link
                                to={'/login'}>
                                Log in
                                </Link>
                        </Col>
                    </Row>
                    </form>
                </div>

            }
        </>
    )
}