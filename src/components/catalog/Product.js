import React from "react";
import { useLocation } from "react-router-dom";

const Product = (props) => {
  const { pathname } = useLocation();
  const mejaId = parseInt(pathname.replace("/food/", ""));
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID').format(price); // 'id-ID' for Indonesian format
  };
  return (
    <div className="product">
      <img src={props.image_url} alt={props.name} />
      <h3>
      {props.name} - {formatPrice(props.price)} IDR
      </h3>
      <div className="product-buttons">
        <div>
          {props.quantity > 0 && (
            <button
              className="remove"
              onClick={() => props.removeCart(props.id)}
            >
              Remove to Cart
            </button>
          )}
          {props.quantity < 1 && (
            <button
              className="add"
              onClick={() =>
                props.addCart(
                  props.id,
                  props.name,
                  props.image_url,
                  props.price,
                  mejaId
                )
              }
            >
              {props.quantity > 0
                ? "Add More"
                : "Add to Cart"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
