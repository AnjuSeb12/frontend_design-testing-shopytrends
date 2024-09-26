
import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import instance from '../../axios';
import { useDispatch, useSelector } from 'react-redux';
import { setCartCount } from '../../redux/cartSlice'; // Adjust the path as necessary

const CartAdding = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartUpdated, setCartUpdated] = useState(false);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await instance.get('/api/v1/cart/viewbyidcart', { withCredentials: true });
        if (response.data && response.data.cartviewbyid && response.data.cartviewbyid.cartItems) {
          setCartItems(response.data.cartviewbyid.cartItems);
          dispatch(setCartCount(response.data.cartviewbyid.cartItems.length));
        } else {
          console.error('Unexpected response structure:', response.data);
          toast.error('Failed to load cart items.');
        }
      } catch (error) {
        console.error('Error fetching cart:', error);
        // toast.error('Failed to load cart items.');
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [cartUpdated, dispatch]);

  const handleRemoveFromCart = async (cartItemId) => {
    try {
      await instance.delete(`/api/v1/cart/cartdelete/${cartItemId}`, { withCredentials: true });
      setCartItems(prevItems => prevItems.filter(item => item._id !== cartItemId));
      dispatch(setCartCount(cartItems.length - 1));
      toast.success('Item removed from cart.');
    } catch (error) {
      console.error('Error removing product from cart:', error);
      toast.error('Failed to remove item from cart.');
    }
  };

  const handleUpdateQuantity = async (cartItemId, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      const response = await instance.put(
        `/api/v1/cart/updatecart/${cartItemId}`,
        { quantity: newQuantity },
        { withCredentials: true }
      );

      setCartItems(prevItems =>
        prevItems.map(item =>
          item._id === cartItemId
            ? { ...item, ...response.data.cartItem }
            : item
        )
      );
      setCartUpdated(prev => !prev);
    } catch (error) {
      console.error('Error updating cart item quantity:', error);
      toast.error('Failed to update item quantity.');
    }
  };

  const handleClearCart = async () => {
    try {
      await instance.delete('/api/v1/cart/clear', { withCredentials: true });
      setCartItems([]);
      dispatch(setCartCount(0));
      toast.success('Cart cleared.');
    } catch (error) {
      console.error('Error clearing cart:', error);
      toast.error('Failed to clear cart.');
    }
  };

  const handlePayNow = () => {
    navigate('/order-cart-form', { state: { cartItems } });
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  const cardClass = isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800';
  const cardBorderClass = isDarkMode ? 'border-gray-600' : 'border-gray-200';
  const buttonVariant = isDarkMode ? 'bg-yellow-600' : 'bg-blue-500';
  const buttonTextVariant = isDarkMode ? 'text-gray-100' : 'text-white';
  const containerClass = isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-800';

  return (
    <div className={`container mx-auto px-4 py-8 ${containerClass}`}>
      <h2 className="text-2xl font-bold mb-4 text-center">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item._id} className={`flex flex-col sm:flex-row p-4 rounded-lg shadow-md border ${cardBorderClass} ${cardClass}`}>
              <div className="flex items-center mb-4 sm:mb-0">
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-lg mr-4"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{item.product.title}</h3>
                    <span className="text-xl font-semibold">${item.totalPrice.toFixed(2)}</span>
                  </div>
                  <p className="mb-2 text-sm">{item.product.description}</p>
                  <div className="flex items-center space-x-4 mb-4">
                    <button
                      onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
                      className="bg-green-500 text-white py-1 px-2 rounded"
                      disabled={item.quantity >= item.product.stock}
                    >
                      <FaPlus />
                    </button>
                    <button
                      onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}
                      className="bg-green-500 text-white py-1 px-2 rounded"
                      disabled={item.quantity <= 1}
                    >
                      <FaMinus />
                    </button>
                    <button
                      onClick={() => handleRemoveFromCart(item._id)}
                      className={`py-1 px-2 rounded ${buttonVariant}`}
                    >
                      <FaTrash className={buttonTextVariant} />
                    </button>
                  </div>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price (1 item): ${item.price.toFixed(2)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-between gap-4 mt-4">
        <button
          onClick={handleClearCart}
          className={`py-2 px-4 rounded ${buttonVariant} ${buttonTextVariant}`}
        >
          Clear Cart
        </button>
        <button
          onClick={handlePayNow}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartAdding;

