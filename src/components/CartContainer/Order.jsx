import { addDoc, getFirestore } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
/*
const [id, setId] = useState("");
  const { cartList, addBeer, delBeer, cartQuantity, totalAmount, clearCart } =
    useCartContext();*/

export const HandleAddOrder = () => {
  const { cartList, addBeer, delBeer, cartQuantity, totalAmount, clearCart } =
    useCartContext();
  const order = {};
  order.buyer = {
    name: "Axel",
    phone: "12312312323",
    email: "axel.giudicatti@gmail.com",
  };
  order.items = cartList.map((beer) => {
    return {
      id: beer.id,
      style: beer.style,
      quantity: beer.quantity,
      price: beer.price,
    };
  });
  order.total = totalAmount();

  const queryDB = getFirestore();
  const ordersCollection = collection(queryDB, `orders`);
  addDoc(ordersCollection, order);
  clearCart();
};




import React, { useState } from "react";
import "./CartContainer.css";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const [dataForm, setDataForm] = useState({ user: "", phone: "", email: "" });
  const [id, setId] = useState("");
  const { cartList, addBeer, delBeer, cartQuantity, totalAmount, clearCart } =
    useCartContext();

  const handleAddOrder = async (evt) => {
    evt.preventDefault();
    const order = {};
    order.buyer = dataForm;
    order.items = cartList.map((beer) => {
      return {
        id: beer.id,
        style: beer.style,
        price: beer.price,
        quantity: beer.quantity,
      };
    });
    order.total = totalAmount();

    const queryDB = getFirestore();
    const ordersCollection = collection(queryDB, "orders");
    addDoc(ordersCollection, order)
      .then(({ id }) => setId(id))
      .catch((err) => console.log(err))
      .finally(() => {
        setDataForm({
          name: "",
          phone: "",
          email: "",
        });
        clearCart();
      });
  };

  const handleOnChange = (evt) => {
    setDataForm({ ...dataForm, [evt.target.name]: evt.target.value });
  };

  return (
    <>
      {id !== "" && (
        <h3>
          Su compra se ha realizado correctamente. Su identificador de pedido
          es: {id}
        </h3>
      )}
      {cartList.length > 0 ? (
        <div>
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
                <li>{beer.style} </li>
                <li>${beer.price} </li>
                <li> {beer.quantity}</li>
                <li> {beer.quantity * beer.price} </li>
                <button
                  className="button color--state-bad"
                  onClick={() => delBeer(beer.id)}
                >
                  Eliminar
                </button>
              </ul>
            </div>
          ))}
          <button onClick={clearCart}>Vaciar Carrito</button>

          <h3>Precio total: {totalAmount()}</h3>
          <form onSubmit={handleAddOrder}>
            <input
              type="text"
              name="name"
              placeholder="ingresar el nombre"
              value={dataForm.name}
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="ingresar el teléfono"
              value={dataForm.phone}
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="email"
              placeholder="ingresar el email"
              value={dataForm.email}
              onChange={handleOnChange}
            />
            <button className="btn btn-success">Terminar compra</button>
          </form>
        </div>
      ) : (
        <div className="finishorder">
          <h1>Carrito Vacío, comprá algo rata !</h1>
          <Link to="/">
            <button className="button color--state-ok">Ir a comprar!</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default CartContainer;










ORIGINAL 


  
<div>
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
<form onSubmit={handleAddOrder}>
      <input
        type="text"
        name="name"
        placeholder="ingresar el nombre"
        value={dataForm.name}
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="ingresar el teléfono"
        value={dataForm.phone}
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="email"
        placeholder="ingresar el email"
        value={dataForm.email}
        onChange={handleOnChange}
      />
      <button className="btn btn-success">Terminar compra</button>
    </form>
  </div>





<div className="finishorder">
  <button className="button color--state-bad" onClick={() => clearCart()}>
    Vaciar Carrito
  </button>
  <button
    className="button color--state-ok"
    onClick={() => delBeer(beer.id)}
  >
    Finalizar Compra
  </button>
</div>
</div>
) : (
<>
<div>
  <h1>Carrito Vacío, comprá algo rata ! </h1>
</div>
<div className="finishorder">
  <Link to={"/"}>
    <button className="button color--state-ok">Ir a comprar!</button>
  </Link>
</div>
</>
);
};

export default CartContainer;

