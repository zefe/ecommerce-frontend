import { React, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

import { LoginView } from '../views/LoginView';
import { RegisterView } from '../views/RegisterView';
import { HomeView } from '../views/HomeView';
import { ProductDetailView } from '../views/ProductDetailView';
import { Header }from '../components/Layout/Header'

export const AppRouter = () => {


    return (
        <Router>
            
            <Header />
            <Switch>                 
                <PublicRoute
                    exact 
                    path="/" 
                    component={ HomeView } 
                    isAuthenticated={ false }
                />                 
                <PublicRoute
                    path="/product/:id" 
                    component={ ProductDetailView } 
                    isAuthenticated={ false }
                />                
                <PublicRoute
                    exact 
                    path="/login" 
                    component={ LoginView }
                    isAuthenticated={ false }
                />
                <PublicRoute
                    exact 
                    path="/register" 
                    component={ RegisterView }
                    isAuthenticated={ false }
                /> 
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
