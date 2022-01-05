import React,  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card, Form, Container } from 'react-bootstrap'

import { listProductDetails } from '../stateManagement/actions/productActions';

import Rating from '../components/common/Rating';
import { Loading } from '../components/common/Loading';
import  Message  from '../components/common/Message';

export const ProductDetailView = ({ match }) => {    
    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails);
    const { error, loading, product } = productDetails;

    const [qty, setQty] = useState(1)
    const { id } = useParams();
    //const product = products.find((p) => p._id == id)
    
    useEffect(() => {
        dispatch(listProductDetails(id))
    }, [dispatch])

    const addToCartHandler = () => {
        alert("add product to cart")
    }


    return (
        <Container>
            <Link to='/' className='btn btn-light my-3'>Back</Link>
            {
                loading ?
                    <Loading/>
                    : error
                    ? <Message variant='danger'>{error}</Message>
                    :(                        
                        <Row>                
                            <Col md={6}>
                                <Image src={`http://127.0.0.1:8000${product.image}`} alt={product.name} fluid />
                            </Col>
                            <Col md={3}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <h3>{product.name}</h3>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        Price: ${product.price}
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        Description: {product.description}
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col md={3}>
                                <Card>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Price:</Col>
                                                <Col>
                                                    <strong>${product.price}</strong>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Status:</Col>
                                                <Col>
                                                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>

                                        {product.countInStock > 0 && (
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Qty</Col>
                                                    <Col xs='auto' className='my-1'>
                                                        <Form.Control
                                                            as="select"
                                                            value={qty}
                                                            onChange={(e) => setQty(e.target.value)}
                                                        >
                                                            {

                                                                [...Array(product.countInStock).keys()].map((x) => (
                                                                    <option key={x + 1} value={x + 1}>
                                                                        {x + 1}
                                                                    </option>
                                                                ))
                                                            }

                                                        </Form.Control>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        )}


                                        <ListGroup.Item>
                                            <Button
                                                onClick={addToCartHandler}
                                                className='btn-block'
                                                disabled={product.countInStock == 0}
                                                type='button'>
                                                Add to Cart
                                            </Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>
                    )
            }
        </Container>
    )
}
