import { useCartContext } from "../../context/CartContext";
import { CartList } from "./CartList";
import { FormHandlers } from "./FormHandlers";
import { Link } from "react-router-dom";
import { BuyForm } from "./BuyForm";
import "./CartContainer.css";

const CartContainer = () => {
  const { handleAddOrder, handleOnChange, dataForm, id } = FormHandlers();
  const { cartList } = useCartContext();
  return (
    <>
      {id !== "" && (
        <h2>
          Su compra se ha realizado correctamente. Su identificador de pedido
          es: {id}
        </h2>
      )}
      {cartList.length > 0 ? (
        <div className="cart">
          <CartList />
          {BuyForm(handleAddOrder, handleOnChange, dataForm)}
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
