
// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// import { Container, Row, Col, Button, Form, ListGroup } from 'react-bootstrap';
// import AddCart from './AddCart';
// import instance from '../../axios';




// const ProductDetail = () => {
//     const { id } = useParams();
//     const [currentItem, setCurrentItem] = useState(null);
//     const [reviews, setReviews] = useState([]);
//     const [newReview, setNewReview] = useState({ rating: '', comment: '' });
//     const [loading, setLoading] = useState(false);
//     const [isSubmittingReview, setIsSubmittingReview] = useState(false);
//     const [isLoggedIn, setIsLoggedIn] = useState(false); // Check if the user is logged in
//     const navigate = useNavigate();
//     console.log("Log",isLoggedIn)

//     useEffect(() => {
//         const fetchProductAndReviews = async () => {
//             setLoading(true);
//             try {
//                 // Fetch product details
//                 const productResponse = await instance.get(`/api/v1/product/products/${id}`);
//                 setCurrentItem(productResponse.data);

//                 // Fetch reviews
//                 const reviewsResponse = await instance.get(`/api/v1/review/product/${id}`);
//                 setReviews(reviewsResponse.data.reviews);
//             } catch (error) {
//                 console.error("Error fetching product or reviews:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchProductAndReviews();

//         // Check if the user is logged in (assuming you store a token in cookies)
//         // const userToken = Cookies.get('token');
//         const userToken = localStorage.getItem('userToken');
//         console.log(".....rev",userToken)
//         if (userToken) {
//             setIsLoggedIn(true);
//         }
//     }, [id]);

//     const handlePayNow = (currentItem) => {
//         navigate('/order-form', { state: { product: currentItem } });
//     };

//     const handleReviewChange = (e) => {
//         const { name, value } = e.target;
//         setNewReview((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmitReview = async (e) => {
//         e.preventDefault();
//         setIsSubmittingReview(true);
//         try {
//             const response = await instance.post(`/api/v1/review/product/${id}`, {
//                 rating: newReview.rating,
//                 comment: newReview.comment,
//             }, { withCredentials: true });

//             // Add the new review to the state
//             setReviews((prev) => [response.data.review, ...prev]);
//             setNewReview({ rating: '', comment: '' });
//         } catch (error) {
//             console.error("Error submitting review:", error);
//         } finally {
//             setIsSubmittingReview(false);
//         }
//     };

//     if (loading) {
//         return <Container>Loading...</Container>;
//     }

//     return (
//         <Container className="product-details my-5">
//             {currentItem && (
//                 <>
//                     <Row>
//                         <Col md={6} className="d-flex justify-content-center align-items-center">
//                             <img src={currentItem.image} alt={currentItem.title} className="img-fluid"
//                                 style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
//                         </Col>

//                         <Col md={6}>
//                             <h1 className='text-5xl mb-4'>{currentItem.title}</h1>
//                             <p>{currentItem.description}</p>
//                             <h3 className="text-success text-4xl mb-4 mt-3">₹{currentItem.price}</h3>

//                             <div className="d-flex align-items-center mb-3">
//                                 <AddCart product={currentItem} disabled={currentItem.stock <= 0} />
//                                 <Button variant="success" className="ms-3" onClick={() => handlePayNow(currentItem)}>
//                                     Pay Now
//                                 </Button>
//                             </div>
//                         </Col>
//                     </Row>

//                     <Row className="mt-5">
//                         <Col>
//                             <div className="reviews-section">
//                                 <h3 className='text-4xl mb-3 text-success'>Reviews</h3>
//                                 <ListGroup className="mt-4">
//                                     {reviews.length > 0 ? (
//                                         reviews.map((review) => (
//                                             <ListGroup.Item key={review._id} className="mb-3 p-4 border rounded shadow-sm">
//                                                 <h5 className="fw-bold text-success">{review.user.name}</h5>
//                                                 <p className='text-success'>Rating: {review.rating}</p>
//                                                 <p className='text-success'>{review.comment}</p>
//                                                 <p className=" text-success">Posted on: {new Date(review.createdAt).toLocaleDateString()}</p>
//                                             </ListGroup.Item>
//                                         ))
//                                     ) : (
//                                         <ListGroup.Item>No reviews yet.</ListGroup.Item>
//                                     )}
//                                 </ListGroup>

//                                 {isLoggedIn && (
//                                     <div className="mt-4">
//                                         <h3>Add a Review</h3>
//                                         <Form onSubmit={handleSubmitReview} className="p-4 border rounded bg-light">
//                                             <Form.Group controlId="rating" className="mb-3">
//                                                 <Form.Label>Rating (1-5)</Form.Label>
//                                                 <Form.Control
//                                                     type="number"
//                                                     name="rating"
//                                                     value={newReview.rating}
//                                                     onChange={handleReviewChange}
//                                                     min="1"
//                                                     max="5"
//                                                     placeholder="Enter a rating from 1 to 5"
//                                                     required
//                                                 />
//                                             </Form.Group>
//                                             <Form.Group controlId="comment" className="mb-3">
//                                                 <Form.Label>Comment</Form.Label>
//                                                 <Form.Control
//                                                     as="textarea"
//                                                     name="comment"
//                                                     value={newReview.comment}
//                                                     onChange={handleReviewChange}
//                                                     rows={3}
//                                                     placeholder="Write your review here"
//                                                     required
//                                                 />
//                                             </Form.Group>
//                                             <Button
//                                                 variant="primary"
//                                                 type="submit"
//                                                 disabled={isSubmittingReview}
//                                                 className="mt-3"
//                                             >
//                                                 {isSubmittingReview ? 'Submitting...' : 'Submit Review'}
//                                             </Button>
//                                         </Form>
//                                     </div>
//                                 )}
//                             </div>
//                         </Col>
//                     </Row>
//                 </>
//             )}
//         </Container>
//     );
// };

// export default ProductDetail;





import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Form, ListGroup } from 'react-bootstrap';
import AddCart from './AddCart';
import instance from '../../axios';

const ProductDetail = () => {
    const { id } = useParams();
    const [currentItem, setCurrentItem] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ rating: '', comment: '' });
    const [loading, setLoading] = useState(false);
    const [isSubmittingReview, setIsSubmittingReview] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Check if the user is logged in
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProductAndReviews = async () => {
            setLoading(true);
            try {
                // Fetch product details
                const productResponse = await instance.get(`/api/v1/product/products/${id}`);
                setCurrentItem(productResponse.data);

                // Fetch reviews
                const reviewsResponse = await instance.get(`/api/v1/review/product/${id}`);
                setReviews(reviewsResponse.data.reviews);
            } catch (error) {
                console.error("Error fetching product or reviews:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductAndReviews();

        // Check if the user is logged in (assuming you store a token in cookies)
        const userToken = localStorage.getItem('userToken');
        if (userToken) {
            setIsLoggedIn(true);
        }
    }, [id]);

    const handlePayNow = (currentItem) => {
        navigate('/order-form', { state: { product: currentItem } });
    };

    const handleReviewChange = (e) => {
        const { name, value } = e.target;
        setNewReview((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        setIsSubmittingReview(true);
        try {
            const response = await instance.post(`/api/v1/review/product/${id}`, {
                rating: newReview.rating,
                comment: newReview.comment,
            }, { withCredentials: true });

            // Add the new review to the state
            setReviews((prev) => [response.data.review, ...prev]);
            setNewReview({ rating: '', comment: '' });
        } catch (error) {
            console.error("Error submitting review:", error);
        } finally {
            setIsSubmittingReview(false);
        }
    };

    if (loading) {
        return <Container>Loading...</Container>;
    }

    return (
        <Container className="product-details my-5">
            {currentItem && (
                <>
                    <Row>
                        <Col md={6} className="d-flex justify-content-center align-items-center">
                            <img src={currentItem.image} alt={currentItem.title} className="img-fluid"
                                style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
                        </Col>

                        <Col md={6}>
                            <h1 className='text-5xl mb-4'>{currentItem.title}</h1>
                            <p>{currentItem.description}</p>
                            <h3 className="text-success text-4xl mb-4 mt-3">₹{currentItem.price}</h3>

                            <div className="d-flex align-items-center mb-3">
                                <AddCart product={currentItem} disabled={currentItem.stock <= 0} />
                                <Button variant="success" className="ms-3" onClick={() => handlePayNow(currentItem)}>
                                    Pay Now
                                </Button>
                            </div>
                        </Col>
                    </Row>

                    {/* Reviews Section */}
                    <Row className="mt-5">
                        <Col>
                            <div className="reviews-section">
                                <h3 className='text-4xl mb-3 text-success'>Reviews</h3>
                                <ListGroup className="mt-4">
                                    {reviews.length > 0 ? (
                                        <Row xs={1} md={2} lg={3} className="g-4">
                                            {reviews.map((review) => (
                                                <Col key={review._id}>
                                                    <ListGroup.Item className="p-3 border rounded shadow-sm h-100">
                                                        <h5 className="fw-bold text-success">{review.user.name}</h5>
                                                        <p className='text-success'>Rating: {review.rating}</p>
                                                        <p className='text-success'>{review.comment}</p>
                                                        <p className="text-muted small">Posted on: {new Date(review.createdAt).toLocaleDateString()}</p>
                                                    </ListGroup.Item>
                                                </Col>
                                            ))}
                                        </Row>
                                    ) : (
                                        <ListGroup.Item>No reviews yet.</ListGroup.Item>
                                    )}
                                </ListGroup>

                                {isLoggedIn && (
                                    <div className="mt-4">
                                        <h3>Add a Review</h3>
                                        <Form onSubmit={handleSubmitReview} className="p-4 border rounded bg-light">
                                            <Form.Group controlId="rating" className="mb-3">
                                                <Form.Label>Rating (1-5)</Form.Label>
                                                <Form.Control
                                                    type="number"
                                                    name="rating"
                                                    value={newReview.rating}
                                                    onChange={handleReviewChange}
                                                    min="1"
                                                    max="5"
                                                    placeholder="Enter a rating from 1 to 5"
                                                    required
                                                />
                                            </Form.Group>
                                            <Form.Group controlId="comment" className="mb-3">
                                                <Form.Label>Comment</Form.Label>
                                                <Form.Control
                                                    as="textarea"
                                                    name="comment"
                                                    value={newReview.comment}
                                                    onChange={handleReviewChange}
                                                    rows={3}
                                                    placeholder="Write your review here"
                                                    required
                                                />
                                            </Form.Group>
                                            <Button
                                                variant="primary"
                                                type="submit"
                                                disabled={isSubmittingReview}
                                                className="mt-3"
                                            >
                                                {isSubmittingReview ? 'Submitting...' : 'Submit Review'}
                                            </Button>
                                        </Form>
                                    </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                </>
            )}
        </Container>
    );
};

export default ProductDetail;

