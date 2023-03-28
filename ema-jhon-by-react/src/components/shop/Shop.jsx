import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {

    const[products, setProducts]=  useState([]);

    const [cart , setCart] = useState([])

 useEffect(()=>{
    fetch('../../../../fakeData/products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
 },[])

 const handleAddToCart = (product)=>{
            const newCart = [...cart, product ]
            setCart(newCart)
}
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>order</h2>
                <p>selected item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;