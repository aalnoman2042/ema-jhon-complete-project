import React from 'react';
import "./ReviewItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'



const ReviewItem = ({product , handelRemoveFromCart}) => {
    const {_id, img , name , quantity, price} = product
    console.log(img);
    return (
        <div className='review-item'>
          <img src={img} alt="" /> 
          <div className='review-info'>
            <p className='product-title'>{name}</p>
            <p>price: <span className='orange-text'>${price}</span></p>
            <p>order quantity: <span className='orange-text'>{quantity}</span></p>
          </div>
          <button onClick={()=>handelRemoveFromCart(_id)} className='btn-delete'><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
    );
};

export default ReviewItem;