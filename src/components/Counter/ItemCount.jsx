import { useCounter } from "../hooks/useCounter";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const { count, handleAdd, handleSubstract } = useCounter(initial, stock);
  const handleOnAdd = () => {
    onAdd(count);
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
