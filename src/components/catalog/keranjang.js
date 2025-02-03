import React from "react";

const Keranjang = ( props ) => {
    return(
    <div className="cart-item">
    <img src={props.image_url} alt={props.name} width="100" />

    <div className="content">
        <h3>{props.name}</h3>
        <div className="cart-buttons">

            <p>Price : {props.price}</p>
        </div>
        <div className="cart-buttons">

            <button>Qty : {props.jumlah}</button>
        </div>
    </div>   

</div>
    )
    
}
export default Keranjang;