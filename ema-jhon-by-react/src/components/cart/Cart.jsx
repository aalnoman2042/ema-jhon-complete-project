import './Cart.css'

import React from 'react';
import Product from '../product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


const Cart = (props) => {
    const cart  = props.cart
    const handleClearCart = props.handleClearCart
 
  console.log(cart);

   let Total = 0;
   let totalShipping = 0;
   let quantity = 0;
    for  (const product of cart){
        product.quantity = product.quantity || 1

        Total = Total + product.price * product.quantity
        totalShipping = totalShipping + product.shipping *product.quantity
        quantity = quantity + product.quantity
    }
    const tax = Total*7/100
    const grandTotal =  tax + Total + totalShipping
  
    return (
        <div className='cart'>
            <h2 className='order-summury'>order summury</h2>
            <p>slected items : {quantity}</p>
            <p>Total Price:${Total} </p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax:${tax.toFixed(2)} </p>
            <p className='grand-total'>Gand Total:${grandTotal.toFixed(2)} </p>
            <button onClick={handleClearCart} className='clear-cart'> <span>Clear cart</span>
            <FontAwesomeIcon icon={faTrashCan} />
            </button>
            {props.children}
        </div>
    );
};

export default Cart;