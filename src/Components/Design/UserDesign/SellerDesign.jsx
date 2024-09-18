import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image19 from "../../../assets/image19.avif";
import image16 from "../../../assets/image16.jpg";
import image17 from "../../../assets/image17.avif";


const SellerDesign = () => {
    const products = [
        { id: 1, name: 'Product 1', description: 'This is Product 1', price: 100, imageUrl: image19 },
        { id: 2, name: 'Product 2', description: 'This is Product 2', price: 200, imageUrl: image16 },
        { id: 3, name: 'Product 3', description: 'This is Product 3', price: 300, imageUrl: image17 },
       
    ];

    return (
        <div className='bg-slate-800'>
            <Carousel>
                {products.map((product) => (
                    <Carousel.Item key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <div className="position-relative">
                                <img
                                    className="d-block w-100"
                                    src={product.imageUrl}
                                    alt={product.name}
                                    style={{ height: '600px', objectFit: 'contain' }}
                                />
                                
                            </div>
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default SellerDesign;
