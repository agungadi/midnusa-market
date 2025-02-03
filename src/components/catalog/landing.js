import React, { useState } from "react";
import CartIcon from "../../supermarket.svg";
import "../../App.css";
import Keranjang from "./keranjang";
import Product from "./Product";
// import starterImage from "/starter.jpg";
// import businessImage from "/business.jpg";

export default function Landing() {
  const starterImage = process.env.PUBLIC_URL + "/starter.jpg";
  const businessImage = process.env.PUBLIC_URL + "/business.jpg";
  const [isOpen, setIsOpen] = useState(false);
  const [menus] = useState([
    {
      id: 1,
      name: "Starter Plan",
      deskripsi: "null",
      image_url: starterImage, // Use imported image
      price: 1000000,
      stock: 992,
      category: 1,
    },
    {
      id: 2,
      name: "Business Plan",
      deskripsi: "null",
      image_url: businessImage, // Use imported image
      price: 1900000,
      stock: 991,
      category: 2,
    },
  ]);
  const [cart, setCart] = useState([]); // Initialize an empty cart

  const handleCart = (id, name, image_url, price, mejaId) => {
    addCart(id, name, image_url, price, mejaId);
  };

  const addCart = (id, name, image_url, price, mejaId) => {
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      // If the item already exists, increase the quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // If the item does not exist, add it to the cart
      setCart((prevCart) => [
        ...prevCart,
        { id, name, image_url, price, mejaId, quantity: 1 },
      ]);
    }
  };

  const removeCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID').format(price); // 'id-ID' for Indonesian format
  };

  return (
    <div className="app">
      <header>
        <div className="container">
        <h1 className="header-title">MidNusa</h1> {/* Title added here */}

          <div className="cart-button">
            <button onClick={() => setIsOpen((prev) => !prev)}>
              <img src={CartIcon} width="40" alt="Cart" />
            </button>

            {/* {show modal} */}
            {isOpen && (
              <div className="cart-modal">
                <h4>Your Cart</h4>
                {cart.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id}>
                      <h6>

                        {item.name} - {item.quantity} Qty

                      </h6>
                    </div>
                  ))
                )}

                <div className="total">
                  <button className="refresh">Total: </button>
                  {formatPrice(totalPrice)} IDR

                </div>
                
                <div className="product-buttons">
                  <button className="remove" onClick={clearCart}>
                  Empty the cart
                  </button>
                  <button className="add">Make a payment</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <main>
        <h3 style={{ marginBottom: "25px" }}>Please select a Plan</h3>
        <div className="products-list">
          {menus.map((product, index) => {
            const quantityInCart =
              cart.find((item) => item.id === product.id)?.quantity || 0;
            return (
              <Product
                key={index}
                product={product}
                name={product.name}
                image_url={product.image_url}
                price={product.price}
                id={product.id}
                addCart={handleCart}
                removeCart={removeCart}
                quantity={quantityInCart} // Pass the quantity to the Product component
              />
            );
          })}
        </div>
      </main>
      <footer className="footer">
      <p style={{ fontWeight: "bold"}}>Copyright © 2025 Midnusa. All rights reserved.</p>
      <p style={{ fontSize: "14px" , marginTop: "-10px", color: "black" }}>Made by CV. Sarana Transformasi Digital</p>
    </footer>

    </div>
    
  );
}
