
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap'


import { Link, useNavigate } from 'react-router-dom';

import AddCart from './AddCart';
import instance from '../../axios';
import { useSelector } from 'react-redux';






const DisplayProducts = () => {
    const navigate = useNavigate()
    const isDarkMode = useSelector((state) => state.theme.isDarkMode);


    const [getProducts, setGetProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await instance.get('/api/v1/product/getproducts');
                setGetProducts(response.data.getProducts);
                console.log(response.data)

            } catch (error) {
                console.log("Error fetching products:", error)

            }
        };

        fetchProducts();
    }, [setGetProducts]);


    const handlePayNow = (product) => {


        navigate('/order-form', { state: { product } });
    };
    const cardClass = isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark';
    const cardBorderClass = isDarkMode ? 'border-white' : 'border-primary';
    const cardTitleClass = isDarkMode ? 'text-white' : 'text-dark';
    const buttonVariant = isDarkMode ? 'warning' : 'primary';
    const containerClass = isDarkMode ? 'bg-black text-white' : 'bg-white text-dark';





    return (


        <Container className={`py-4 ${containerClass}`}>
            <Row className="justify-content-center">
                {getProducts && getProducts.map((item, index) => (
                    <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={index}>
                        <Card className={`h-100 border-orange-500 ${cardClass} ${cardBorderClass} rounded-lg shadow-md`}>
                            <Link to={`/product/${item._id}`}>
                                <Card.Img
                                    variant="top"
                                    src={item.image}
                                    className="object-contain h-64 w-full rounded-t-lg"
                                    alt={item.title}
                                />
                            </Link>
                            <Card.Body className="p-4 flex flex-col">
                                <Card.Title className={`text-lg font-semibold mb-2 ${cardTitleClass}`}>{item.title}</Card.Title>
                                <Card.Text className="text-sm text-gray-600 mb-2">
                                    {item.description}
                                </Card.Text>
                                <Card.Text className="text-lg font-bold mb-2">
                                    ₹{item.price}
                                </Card.Text>
                                <Card.Text className="text-sm font-semibold mb-3">
                                    Stock: {item.stock > 0 ? item.stock : "Out of Stock"}
                                </Card.Text>

                                <Row className="mt-auto justify-content-between">
                                    <Col xs={6}>
                                        <AddCart product={item} disabled={item.stock <= 0} />
                                    </Col>
                                    <Col xs={6}>
                                        <Button
                                           variant={buttonVariant}
                                            onClick={() => handlePayNow(item)}
                                            disabled={item.stock <= 0}
                                            className="w-full py-2 text-white"
                                        >
                                            Pay Now
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default DisplayProducts