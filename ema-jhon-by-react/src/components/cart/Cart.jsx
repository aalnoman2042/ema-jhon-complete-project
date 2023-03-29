import './Cart.css'

import React from 'react';
import Product from '../product/Product';

const Cart = (props) => {
    const cart  = props.cart
  console.log(cart);

   let Total = 0;
   let totalShipping = 0;
    for  (const product of cart){
        Total = Total + product.price
        totalShipping = totalShipping + product.shipping
    }
    const tax = Total*7/100
    const grandTotal =  tax + Total + totalShipping
  
    return (
        <div className='cart'>
            <h2 className='order-summury'>order summury</h2>
            <p>slected items : {cart.length}</p>
            <p>Total Price:${Total} </p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax:${tax.toFixed(2)} </p>
            <p className='grand-total'>Gand Total:${grandTotal.toFixed(2)} </p>
        </div>
    );
};

export default Cart;