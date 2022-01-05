import React from 'react';
import Rating from '../common/Rating';
import {Button, Row, Col} from 'react-bootstrap';

export const Product = ({ product }) => {
    return (
        <div className="products__item">
            <img src={ product.image } alt={ product.name }  />
            <p>{ product.name }</p>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
            <h2>$ { product.price} </h2>
        </div>
    )
}