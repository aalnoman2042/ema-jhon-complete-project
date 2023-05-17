import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../../../utilities/fakedb";
import Cart from "../cart/Cart";
import Product from "../product/Product";
import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";
import LogIn from "../Login/LogIn";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [cart, setCart] = useState([]);
  const { totalProducts } = useLoaderData();

  // const itemsPerPage = 10 ; //TODO : make it dynamic
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  // const pageNumber = []
  // for(let i =1; i<= totalPages; i++){
  //   pageNumber.push(i)
  // }

  const pageNumbers = [...Array(totalPages).keys()];

  /* 
    1. determine the total data  number of items
    2. decide the number of per page
    3.calculate tota; number of page
    4.determine the current page
    5.load appropiate data
    */

  // useEffect(() => {
  //   fetch("http://localhost:5000/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`
      );

      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart);

    fetch(`http://localhost:5000/productsByIds`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((cartProducts) => {
        let savedCart = [];
        // step 1
        for (const id in storedCart) {
          // get the product by using id
          const addedProduct = cartProducts.find((product) => product._id === id);

          // step  3 get the quantity of the product
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            // step 4 : add the addesdcart to the saved cart
            savedCart.push(addedProduct);
          }
        }
        // step 5: save data
        setCart(savedCart);
      });
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    // if product dosent exist in the cart , then set quantity = 1
    // if exist update the quantity by one
    setCart(newCart);
    addToDb(product._id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  const options = [5, 10, 20];
  function handleSelectChange(event) {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  }

  return (
    <>
      <div className="shop-container">
        <div className="products-container">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart} handleClearCart={handleClearCart}>
            <Link className="proceed-link" to="/orders">
              <button className="btn-proceed">review order</button>
            </Link>
          </Cart>
        </div>
      </div>
      {/* pagination */}
      <div className="pagination">
        <p>currentPage:{currentPage}</p>
        {pageNumbers.map((num) => (
          <button
            className={currentPage === num ? "selected" : ""}
            onClick={() => setCurrentPage(num)}
            key={num}
          >
            {num}
          </button>
        ))}
        <select value={itemsPerPage} onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Shop;
