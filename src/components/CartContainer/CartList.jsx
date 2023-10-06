import { useState } from "react";
import { useCartContext } from "../../context/CartContext";

export const CartList = () => {
  const { cartList, delBeer, totalAmount, clearCart } = useCartContext();
  return (
    <>
      <ul className="cartList">
        <li>Imagen</li>
        <li>Estilo</li>
        <li>Precio</li>
        <li>Cantidad</li>
        <li>Subtotal</li>
        <li></li>
      </ul>
      {cartList.map((beer) => (
        <div className="cartDetail" key={beer.id}>
          <ul className="cartList">
            <li>
              <img src={beer.picture} />
            </li>
            <li>{beer.style} </li> <li>${beer.price} </li>
            <li> {beer.quantity}</li>
            <li> {beer.quantity * beer.price} </li>
            <li>
              <button
                className="button color--state-bad"
                onClick={() => delBeer(beer.id)}
              >
                Eliminar
              </button>
            </li>
          </ul>
        </div>
      ))}
      <h2>Precio total: ${totalAmount()}</h2>
      <div className="clearbutton">
        <button className="button color--state-bad" onClick={() => clearCart()}>
          Vaciar Carrito
        </button>
      </div>
    </>
  );
};
