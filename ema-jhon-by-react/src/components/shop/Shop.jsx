import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../../../utilities/fakedb';
import Cart from '../cart/Cart';
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

 useEffect(()=>{
    const storedCart = getShoppingCart()
    let savedCart = []
    // step 1
    for (const id in storedCart){
        // get the product by using id
        const addedProduct = products.find(product => product.id === id)
      
        // step  3 get the quantity of the product
      if(addedProduct){
        const quantity = storedCart[id]
        addedProduct.quantity = quantity
        // step 4 : add the addesdcart to the saved cart
        savedCart.push(addedProduct)
      }
        
    }
    // step 5: save data
    setCart(savedCart)

 },[products])

 const handleAddToCart = (product)=>{
            const newCart = [...cart, product ]
            setCart(newCart)
            addToDb(product.id)
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
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;