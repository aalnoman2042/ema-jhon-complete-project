import React from 'react';
import './Product.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name , seller, price, ratings} = props.product
const handleAddToCart = props.handleAddToCart
    
    return (
        <div className='product'>
         <img src={img} alt="" />
        <div className='product-info'>
        <h6>{name}</h6>
         <p>price: {price}</p>
         <p>Manufacturer: {seller} </p>
         <p>Rate: {ratings} stars</p>
        </div>
        <button className='btn-cart' onClick={()=>handleAddToCart(props.product)}>
            Add to Cart 
        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
        </button>
        </div>
    );
};

export default Product;