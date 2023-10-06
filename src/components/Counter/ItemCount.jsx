import { useCounter } from "../hooks/useCounter";
import Swal from "sweetalert2";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const { count, handleAdd, handleSubstract } = useCounter(initial, stock);
  const handleOnAdd = () => {
    onAdd(count);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  return (
    <div className="onAdd">
      <div className="itemcount">
        <button className="color--state-bad mini" onClick={handleSubstract}>
          -
        </button>
        <label>{count} Unidades</label>
        <button className="color--state-ok mini" onClick={handleAdd}>
          +
        </button>
      </div>
      <button className="color--state-green mini" onClick={handleOnAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
