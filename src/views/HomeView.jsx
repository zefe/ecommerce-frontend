import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../stateManagement/actions/productActions';

import { Loading } from '../components/common/Loading';
import  Message  from '../components/common/Message';
import { Product } from '../components/Product/Product';
import { Container } from 'react-bootstrap';


export const HomeView = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const { error, loading, products } = productList;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    console.log(products)

    return (
        <div className="home">
            <Container>                
                <h1>Products</h1>
                {loading ? <Loading />
                    : error ? <Message variant='danger'>{error}</Message>
                    : <div className="products__items">                    
                        {
                            products.map( product => (
                                <Product 
                                    key={ product.id }
                                    product={ product }
                                />
                            ))
                        }
                    </div>  
                }
            </Container>
                
        </div>
    )
}