import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const isBeer = (id) => cartList.findIndex((beer) => beer.id === id);

  const addBeer = (newBeer) => {
    const index = isBeer(newBeer.id);
    if (index !== -1) {
      cartList[index].quantity += newBeer.quantity;
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
