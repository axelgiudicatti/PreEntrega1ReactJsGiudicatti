import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import { addDoc, getFirestore, collection } from "firebase/firestore";
import Swal from "sweetalert2";

export const FormHandlers = () => {
  const [dataForm, setDataForm] = useState({ name: "", phone: "", email: "" });
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
    if (
      dataForm.name.length < 1 ||
      dataForm.phone < 1 ||
      dataForm.email.length < 1
    ) {
      Swal.fire({
        icon: "error",
        title: "Datos inválidos",
        text: "No te hagas el boludo !",
      });
    } else {
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

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });
      Toast.fire({
        icon: "success",
        title: "Procesando tu pedido",
      });
    }
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
