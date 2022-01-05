import React from 'react';
import { Product } from '../components/Product/Product';

import products from '../products';



export const HomeView = () => {

    return (
        <div className="home">
            <h1>Products</h1>
            <div className="products__items">
                {
                    products.map( product => (
                        <Product 
                            key={ product.id }
                            product={ product }
                        />
                    ))
                }
            </div>     
        </div>
    )
}