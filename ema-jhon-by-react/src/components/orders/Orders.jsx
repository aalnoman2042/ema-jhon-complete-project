import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Product from '../product/Product';
import ReviewItem from '../reviewItem/ReviewItem';
import "./Order.css"
import { deleteShoppingCart, removeFromDb } from '../../../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData()
    const [cart, setCart ] = useState(savedCart)

    const handelRemoveFromCart = (id) =>{
       const remaining = cart.filter(product => product._id !== id )
       console.log(remaining);
       setCart(remaining)
       removeFromDb(id)
    }
const handleClearCart = () =>{
    setCart([])
    deleteShoppingCart()
}
    console.log(savedCart);

    return (
        <div className='shop-container'>
           <div className='review-container'>
           {
            cart.map(product => <ReviewItem 
                key={product._id}
                 product={product}
                 handelRemoveFromCart={handelRemoveFromCart}
            ></ReviewItem>)
           }
           </div>
           <div className='cart-container'>
            <Cart cart={cart} handleClearCart={handleClearCart}>
                <Link className='proceed-link' to="/cheakout">
                    <button className='btn-proceed'>proceed cheackout</button>
                </Link>
            </Cart>
           </div>
        </div>
    );
};

export default Orders;