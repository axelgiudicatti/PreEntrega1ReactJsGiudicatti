/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const isBeer = (id) => cartList.find((beer) => beer.id === id);

  const addBeer = (newBeer) => {
    const index = isBeer(newBeer.id);
    if (index) {
      setCartList(
        cartList.map((item) => {
          if (item.id === newBeer.id) {
            return { ...item, quantity: item.quantity + newBeer.quantity };
          } else {
            return item;
          }
        })
      );
    } else {
      setCartList([...cartList, newBeer]);
    }
  };

  const delBeer = (pid) =>
    setCartList(cartList.filter((beer) => beer.id !== pid));

  const cartQuantity = () =>
    cartList.reduce(
      (cartQuantity, objBeer) => (cartQuantity += objBeer.quantity),
      0
    );

  const totalAmount = () =>
    cartList.reduce(
      (totalAmount, objBeer) =>
        (totalAmount += objBeer.price * objBeer.quantity),
      0
    );

  const clearCart = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addBeer,
        delBeer,
        cartQuantity,
        totalAmount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
