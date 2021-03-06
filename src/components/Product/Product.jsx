import React from 'react';
import { Link } from 'react-router-dom'

import Rating from '../common/Rating';

import products from '../../products';
import { urlApi } from '../../config';

export const Product = ({ product }) => {
    return (
        <div className="products__item">
            <Link to={`/product/${product._id}`}>
                <img src={`${urlApi}${product.image}`} alt={ product.name }  />
            </Link>
            <Link to={`/product/${product._id}`}>
                <p>{ product.name }</p>
            </Link>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
            <h2>$ { product.price} </h2>
        </div>
    )
}