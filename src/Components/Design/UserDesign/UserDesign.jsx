import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from "../../../assets/image1.jpg";
import image2 from "../../../assets/image2.jpg";
import image3 from "../../../assets/image3.jpg";
import image4 from "../../../assets/image4.jpg";
import image13 from "../../../assets/image13.avif";
import image14 from "../../../assets/image14.avif";
import image15 from "../../../assets/image15.avif";

const UserDesign = () => {
    const products = [
        { id: 1, name: 'Product 1', description: 'This is Product 1', price: 100, imageUrl: image1 },
        { id: 2, name: 'Product 2', description: 'This is Product 2', price: 200, imageUrl: image2 },
        { id: 3, name: 'Product 3', description: 'This is Product 3', price: 300, imageUrl: image3 },
        { id: 4, name: 'Product 4', description: 'This is Product 4', price: 300, imageUrl: image4 },
        { id: 5, name: 'Product 4', description: 'This is Product 4', price: 300, imageUrl: image14 },
        { id: 5, name: 'Product 4', description: 'This is Product 4', price: 300, imageUrl: image15 },
        { id: 5, name: 'Product 4', description: 'This is Product 4', price: 300, imageUrl: image13 },
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

export default UserDesign;
