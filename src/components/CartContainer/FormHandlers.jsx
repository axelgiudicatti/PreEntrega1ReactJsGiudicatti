import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import { addDoc, getFirestore, collection } from "firebase/firestore";

export const FormHandlers = () => {
  const [dataForm, setDataForm] = useState({ user: "", phone: "", email: "" });
  const [id, setId] = useState("");
  const { cartList, totalAmount, clearCart } = useCartContext();
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
  return {
    handleAddOrder,
    handleOnChange,
    dataForm,
    id,
  };
};
